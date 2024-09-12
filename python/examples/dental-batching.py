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
from formlabs.models.scene_auto_orient_post_request import SceneAutoOrientPostRequest
from formlabs.models.scene_auto_layout_post_request import SceneAutoLayoutPostRequest
from formlabs.models.scene_type_model import SceneTypeModel
from formlabs.models.scene_type_model_layer_thickness import SceneTypeModelLayerThickness
from formlabs.models.models_selection_model import ModelsSelectionModel
from formlabs.models.load_form_post_request import LoadFormPostRequest


def list_files_in_directory(directory_path):
    return [
        f
        for f in os.listdir(directory_path)
        if os.path.isfile(os.path.join(directory_path, f)) and f.endswith(".stl")
    ]


def create_scene(preform):
    return preform.api.scene_post(SceneTypeModel(
        machine_type="FORM-4-0",
        material_code="FLGPGR05",
        layer_thickness=SceneTypeModelLayerThickness("0.1"),
        print_setting="DEFAULT",
    ))

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
            new_model_id = new_model.id
            models_in_current_batch.append({"model_id": new_model_id, "file_name": next_file})
            print(f"Auto layouting all")
            try:
                preform.api.scene_auto_layout_post_with_http_info(
                    SceneAutoLayoutPostRequest(models=ModelsSelectionModel("ALL"))
                )
            except formlabs.exceptions.ApiException as e:
                print("Not all models can fit, removing model")
                model_data = models_in_current_batch.pop()
                preform.api.scene_models_id_delete(str(model_data["model_id"]))
                files_to_batch.append(model_data["file_name"])
                save_path = os.path.join(directory_path, f"batch_{current_batch}.form")
                preform.api.scene_save_form_post(LoadFormPostRequest(file=save_path))
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
            preform.api.scene_save_form_post(LoadFormPostRequest(file=save_path))
            print(f"Saving batch {current_batch} to {save_path}")
            for i, model in enumerate(models_in_current_batch):
                print(f"{i+1}. {model['file_name']}")
                csvwriter.writerow([current_batch, f"batch_{current_batch}.form", model['file_name']])

