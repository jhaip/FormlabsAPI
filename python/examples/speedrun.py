import argparse
import json
import os
import sys
import copy
import difflib
import pathlib
import math
import formlabs


pathToPreformServer = None
if sys.platform == 'win32':
    pathToPreformServer = pathlib.Path().resolve().parents[1] / "PreFormServer.exe"
elif sys.platform == 'darwin':
    pathToPreformServer = pathlib.Path().resolve().parents[1] / "PreFormServer.app/Contents/MacOS/PreFormServer"
else:
    print("Unsupported platform")
    sys.exit(1)

def main():
    args = parse_args()

    report_data = []

    with formlabs.PreFormApi.start_preform_server(pathToPreformServer=pathToPreformServer) as preform:
        # Load initial .form file
        preform.api.load_form_post(formlabs.LoadFormPostRequest(file=args.form_file))

        # Load initial settings file
        with open(args.settings_file, 'r') as f:
            base_settings = json.load(f)        

        # Generate variations
        variations = generate_variations(base_settings, args)

        for idx, (variation_name, settings) in enumerate(variations):
            settings_file = f"settings_{variation_name}.json"

            # Save the settings file
            with open(settings_file, 'w') as f:
                json.dump(settings, f, indent=4)

            # Apply the settings to the scene
            # TODO: THIS DOESN'T EXIST TODAY
            # MAYBE TODAY: CREATE SCENE WITH FPS, THEN IMPORT .FORM as a model?
            preform.api.update_scene_settings(settings_file)

            # Estimate print time
            estimated_time = preform.api.scene_estimate_print_time_get()

            # Save the .form file if needed
            if args.save_form_files:
                form_file = f"print_job_{variation_name}.form"
                preform.api.scene_save_form_post(formlabs.LoadFormPostRequest(file=form_file))

            # Send to printers if needed
            if args.printers:
                for printer_id in args.printers:
                    job_name = f"Job_{variation_name}"
                    preform.api.scene_print_post(formlabs.models.ScenePrintPostRequest(printer=printer_id, job_name=job_name))

            # Generate diffs between settings
            diffs = get_settings_diff(base_settings, settings)

            # Record report data
            report_data.append({
                'variation_name': variation_name,
                'estimated_time': estimated_time,
                'settings_file': settings_file,
                'diffs': diffs
            })

    # Generate report
    generate_report(report_data, args.report_file)

def parse_args():
    parser = argparse.ArgumentParser(description="3D Print Job Speed Optimization Tool")
    parser.add_argument('form_file', help='Path to starting .form file')
    parser.add_argument('settings_file', help='Path to starting .fps settings file')

    parser.add_argument('--reduce_wiping', action='store_true', help='Apply reduced wiping optimization')
    parser.add_argument('--reduce_exposure', action='store_true', help='Apply reduced exposure optimization')
    parser.add_argument('--optimize_peel', action='store_true', help='Apply peel optimization')
    parser.add_argument('--optimize_squish', action='store_true', help='Apply squish optimization')
    parser.add_argument('--increase_layer_height', action='store_true', help='Apply increased layer height optimization')

    parser.add_argument('--lower_exposure', action='store_true', help='Apply lower exposure optimization')
    parser.add_argument('--increase_peel_speeds', action='store_true', help='Apply increase peel speeds optimization')
    parser.add_argument('--increase_squish_speeds', action='store_true', help='Apply increase squish speeds optimization')
    parser.add_argument('--remove_wiping', action='store_true', help='Apply remove wiping optimization')
    parser.add_argument('--increase_temperature', action='store_true', help='Apply increase temperature optimization')

    parser.add_argument('--test_count', type=int, default=1, help='Number of test files to make')
    parser.add_argument('--printers', nargs='*', help='List of printer serial names to send jobs to')
    parser.add_argument('--save_form_files', action='store_true', help='Save .form files with settings packaged')
    parser.add_argument('--report_file', default='report.txt', help='Output report file')

    args = parser.parse_args()
    return args

def generate_variations(base_settings, args):
    variations = []

    # For each test count, create a variation
    # TODO: think more about specifying the number of tests. It's not obvious if there is an order to apply them, if they should all be applied together, etc.
    # There is also only a fixed number of variations so asking for any arbitrary number of tests is not possible.
    for i in range(args.test_count):
        settings = copy.deepcopy(base_settings)
        variation_name = f"var_{i}"

        # Apply selected optimizations
        if args.reduce_wiping:
            settings = reduce_wiping(settings, i, args.test_count)
            variation_name += "_reduce_wiping"
        
        if args.reduce_exposure:
            settings = reduce_exposure(settings, i, args.test_count)
            variation_name += "_reduce_exposure"
        
        if args.optimize_peel:
            settings = optimize_peel(settings, i, args.test_count)
            variation_name += "_optimize_peel"
        
        if args.optimize_squish:
            settings = optimize_squish(settings, i, args.test_count)
            variation_name += "_optimize_squish"
        
        if args.increase_layer_height:
            settings = increase_layer_height(settings, i, args.test_count)
            variation_name += "_increase_layer_height"

        variations.append((variation_name, settings))

    return variations

def get_printer_knobs_index(settings):
    form4familyPrintIndex = -1
    for i, category in enumerate(settings['public_fields']['categories']):
        if category['key'] == 'Material_Form_4_Family_Print':
            form4familyPrintIndex = i
            break
    if form4familyPrintIndex == -1:
        raise Exception("Material_Form_4_Family_Print category not found")
    return form4familyPrintIndex

def get_printer_knobs(settings):
    form4familyPrintIndex = get_printer_knobs_index(settings)
    return settings['public_fields']['categories'][form4familyPrintIndex]['values']

def get_settings_with_new_printer_knobs(settings, knobs):
    form4familyPrintIndex = get_printer_knobs_index(settings)
    settings['public_fields']['categories'][form4familyPrintIndex]['values'] = knobs
    return settings

def reduce_wiping(settings, variation_index, total_variations):
    # TODO: support [-1] (one way wipe)
    knobs = get_printer_knobs(settings)
    knobs['wipe_behavior'] = [{"wipe": 0}]
    return get_settings_with_new_printer_knobs(settings, knobs)

def reduce_exposure(settings, variation_index, total_variations):
    percent_decrease = 0
    if variation_index/total_variations <= 1/3:
        percent_decrease = 0.1
    elif variation_index/total_variations <= 2/3:
        percent_decrease = 0.2
    else:
        percent_decrease = 0.3    
    knobs = get_printer_knobs(settings)
    knobs['model_fill_exposure_mJpcm2'] = knobs['model_fill_exposure_mJpcm2'] * (1 - percent_decrease)
    for i,v in enumerate(knobs['overhang_fill_exposures']):
        knobs['overhang_fill_exposures'][i] = v * (1 - percent_decrease)
    knobs['perimeter_fill_exposure_mJpcm2'] = knobs['model_fill_exposure_mJpcm2']
    knobs['supports_fill_exposure_mJpcm2'] = knobs['model_fill_exposure_mJpcm2']
    knobs['top_surface_exposure_mJpcm2'] = knobs['model_fill_exposure_mJpcm2']
    knobs['irradiance_mWpcm2'] = 16
    knobs['post_expose_cure_wait_s'] = 0
    return get_settings_with_new_printer_knobs(settings, knobs)

def optimize_peel(settings, variation_index, total_variations):
    # TODO
    return settings

def optimize_squish(settings, variation_index, total_variations):
    # TODO
    return settings

def foo(list, variation_index, total_variations):
    # Select a value from the list based on the variation index
    i = math.floor(((len(list) - 1) * variation_index) / total_variations)
    return list[i]

def increase_layer_height(settings, variation_index, total_variations):
    layer_thickness_mm = 0.1
    if variation_index/total_variations <= 1/7:
        layer_thickness_mm = 0.11
    elif variation_index/total_variations <= 2/7:
        layer_thickness_mm = 0.12
    elif variation_index/total_variations <= 3/7:
        layer_thickness_mm = 0.13
    elif variation_index/total_variations <= 4/7:
        layer_thickness_mm = 0.14
    elif variation_index/total_variations <= 5/7:
        layer_thickness_mm = 0.15
    elif variation_index/total_variations <= 6/7:
        layer_thickness_mm = 0.16
    else:
        layer_thickness_mm = 0.17

    coreSceneIndex = -1
    for i, category in enumerate(settings['public_fields']['categories']):
        if category['key'] == 'Core_Scene':
            coreSceneIndex = i
            break
    if coreSceneIndex == -1:
        raise Exception("Core_Scene category not found")
    
    knobs = settings['public_fields']['categories'][coreSceneIndex]['values']
    knobs['layer_thickness']['layer_thickness_mm'] = layer_thickness_mm
    settings['public_fields']['categories'][coreSceneIndex]['values'] = knobs
    return settings

def get_settings_diff(base_settings, new_settings):
    base_str = json.dumps(base_settings, sort_keys=True, indent=4)
    new_str = json.dumps(new_settings, sort_keys=True, indent=4)
    diff = difflib.unified_diff(base_str.splitlines(), new_str.splitlines(), lineterm='')
    return '\n'.join(diff)

def generate_report(report_data, report_file):
    with open(report_file, 'w') as f:
        for data in report_data:
            f.write(f"Variation: {data['variation_name']}\n")
            f.write(f"Estimated Print Time: {data['estimated_time']} seconds\n")
            f.write(f"Settings File: {data['settings_file']}\n")
            f.write("Settings Differences:\n")
            f.write(f"{data['diffs']}\n")
            f.write("\n")

if __name__ == '__main__':
    main()