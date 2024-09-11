import formlabs
import pathlib
from formlabs.models.scene_type_model import SceneTypeModel
from formlabs.models.scene_type_model_layer_thickness import SceneTypeModelLayerThickness

def hello_server():
    pathToPreformServer = pathlib.Path().resolve() / "PreFormServer.app/Contents/MacOS/PreFormServer"
    with formlabs.PreFormApi.start_preform_server(pathToPreformServer=pathToPreformServer) as preform:
        preform.api.scene_post(SceneTypeModel(
            machine_type="FORM-4-0",
            material_code="FLRG1011",
            layer_thickness=SceneTypeModelLayerThickness("0.1"),
            print_setting="DEFAULT",
        ))
        print("Scene created, exiting")

if __name__ == "__main__":
    hello_server()
