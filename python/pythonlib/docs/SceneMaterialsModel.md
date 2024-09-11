# SceneMaterialsModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**volume_ml** | **float** | The total volume of models and supports in the scene | [optional] 
**unsupported_volume_ml** | **float** | The total volume of models in the scene | [optional] 
**total_powder_ml** | **float** |  | [optional] 
**total_powder_kg** | **float** |  | [optional] 
**total_sintered_powder_ml** | **float** |  | [optional] 
**total_sintered_powder_kg** | **float** |  | [optional] 
**mass_packing_density** | **float** |  | [optional] 

## Example

```python
from formlabs.models.scene_materials_model import SceneMaterialsModel

# TODO update the JSON string below
json = "{}"
# create an instance of SceneMaterialsModel from a JSON string
scene_materials_model_instance = SceneMaterialsModel.from_json(json)
# print the JSON string representation of the object
print(SceneMaterialsModel.to_json())

# convert the object into a dict
scene_materials_model_dict = scene_materials_model_instance.to_dict()
# create an instance of SceneMaterialsModel from a dict
scene_materials_model_from_dict = SceneMaterialsModel.from_dict(scene_materials_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


