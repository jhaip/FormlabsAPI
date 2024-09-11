# SceneModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**List[ModelProperties]**](ModelProperties.md) |  | [optional] 
**scene_type** | [**SceneTypeModel**](SceneTypeModel.md) |  | [optional] 
**materials** | [**SceneMaterialsModel**](SceneMaterialsModel.md) |  | [optional] 
**layers** | **int** | The number of layers in the scene | [optional] 

## Example

```python
from formlabs.models.scene_model import SceneModel

# TODO update the JSON string below
json = "{}"
# create an instance of SceneModel from a JSON string
scene_model_instance = SceneModel.from_json(json)
# print the JSON string representation of the object
print(SceneModel.to_json())

# convert the object into a dict
scene_model_dict = scene_model_instance.to_dict()
# create an instance of SceneModel from a dict
scene_model_from_dict = SceneModel.from_dict(scene_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


