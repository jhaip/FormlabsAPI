"""
Demo application that batches all STL files in a folder into .form files.

Usage: python3 dental-batching.py ~/Documents/folder-of-stl-files

Author: @jhaip
"""

import argparse
import os
import pathlib
import csv
import formlabs
from formlabs.models.auto_orient_post_request import AutoOrientPostRequest


def list_files_in_directory(directory_path):
    return [
        f
        for f in os.listdir(directory_path)
        if os.path.isfile(os.path.join(directory_path, f)) and f.endswith(".stl")
    ]


def create_scene(preform):
    return preform.api.scene_post({
        "machine_type": "FORM-4-0",
        "material_code": "FLGPGR05",
        "slice_thickness": 0.1,
        "print_setting": "DEFAULT",
    })

parser = argparse.ArgumentParser(description="Process a folder path.")
parser.add_argument("folder", type=str, help="Path to the folder")
args = parser.parse_args()

directory_path = os.path.abspath(args.folder)
files_to_batch = list_files_in_directory(directory_path)
print("Files to batch:")
print(files_to_batch)
current_batch = 1
models_in_current_batch = []
CSV_RESULT_FILENAME = os.path.join(directory_path, "summary.csv")

pathToPreformServer = pathlib.Path().resolve() / "PreFormServer.app/Contents/MacOS/PreFormServer"
with formlabs.PreFormApi.start_preform_server(pathToPreformServer=pathToPreformServer) as preform:
    with open(CSV_RESULT_FILENAME, 'w', newline='') as csvfile:
        csvwriter = csv.writer(csvfile)
        csvwriter.writerow(["Batch Number", "Batch Print Filename", "Model Source Filename"])
        create_scene(preform)

        while len(files_to_batch) > 0:
            next_file = files_to_batch.pop()
            print(f"Importing {next_file}")
            new_model = preform.api.scene_import_model_post({"file": os.path.join(directory_path, next_file)})
            new_model_id = new_model.model_id
            models_in_current_batch.append({"model_id": new_model_id, "file_name": next_file})
            print(f"Auto layouting all")
            try:
                preform.api.auto_layout_post_with_http_info(
                    AutoOrientPostRequest.from_dict({"models": "ALL"})
                )
            except formlabs.exceptions.ServiceException as e:
                if e.status == 500 and e.data.error == "AUTO_LAYOUT_FAILED":
                    print("Not all models can fit, removing model")
                    model_data = models_in_current_batch.pop()
                    preform.api.models_id_delete(str(model_data["model_id"]))
                    files_to_batch.append(model_data["file_name"])
                    save_path = os.path.join(directory_path, f"batch_{current_batch}.form")
                    preform.api.save_form_post(save_path)
                    print(f"Saving batch {current_batch} to {save_path}")
                    for i, model in enumerate(models_in_current_batch):
                        print(f"{i+1}. {model['file_name']}")
                        csvwriter.writerow([current_batch, f"batch_{current_batch}.form", model['file_name']])
                    current_batch += 1
                    models_in_current_batch = []
                    print("Clearing scene")
                    create_scene(preform)

        if len(models_in_current_batch) > 0:
            save_path = os.path.join(directory_path, f"batch_{current_batch}.form")
            preform.api.save_form_post(save_path)
            print(f"Saving batch {current_batch} to {save_path}")
            for i, model in enumerate(models_in_current_batch):
                print(f"{i+1}. {model['file_name']}")
                csvwriter.writerow([current_batch, f"batch_{current_batch}.form", model['file_name']])

