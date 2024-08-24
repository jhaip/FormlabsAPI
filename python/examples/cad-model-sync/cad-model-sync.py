"""
Demo application that replaces a set up model with a new version.

Usage: python3 cad-model-sync.py existing.form new.stl "model name"

Author: @jhaip
"""

import argparse
import pathlib
import formlabs
import subprocess
import sys

parser = argparse.ArgumentParser()
parser.add_argument("source", type=str, help="Path to the source .form file")
parser.add_argument("model", type=str, help="Path to the new .stl file")
parser.add_argument("name", type=str, help="Name of the model in the source .form to replace")
args = parser.parse_args()

def foo(preform):
    preform.api.load_form_post(formlabs.LoadFormPostRequest(file=args.source))
    scene_response = preform.api.scene_get()
    matching_model_ids = [model["id"] for model in scene_response["models"] if model["name"] == args.name]
    if len(matching_model_ids) == 0:
        print(f"No models found with name {args.name}")
        sys.exit(1)
    print(f"Found {len(matching_model_ids)} models with name {args.name}")
    for model_id in matching_model_ids:
        try:
            preform.api.scene_models_id_replace_post(model_id, formlabs.SceneModelsIdReplacePostRequest(file=args.model))
            print("replace model success")
        except formlabs.exceptions.ServiceException as e:
            if e.status == 400:
                # e.data.error == "AUTO_LAYOUT_FAILED"
                print("Operation failed! TODO GIVE MORE INFORMATION")
                # Goal here is that the old setup model is removed and the new one is added, but with no supports 
    preform.api.scene_save_form_post(formlabs.LoadFormPostRequest(file=args.source))
    subprocess.Popen(["/Applications/PreForm 3.34.app/Contents/MacOS/PreForm", args.source], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


# foo(formlabs.PreFormApi(44388))
# pathToPreformServer = pathlib.Path().resolve() / "PreFormServer.app/Contents/MacOS/PreFormServer"
with formlabs.PreFormApi.start_preform_server(pathToPreformServer=pathToPreformServer) as preform:
    foo(preform)

