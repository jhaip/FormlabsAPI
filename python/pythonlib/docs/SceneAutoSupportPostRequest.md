# SceneAutoSupportPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**ModelsSelectionModel**](ModelsSelectionModel.md) |  | 
**raft_type** | **str** | The type of raft to apply to the models | [optional] 
**raft_label_enabled** | **bool** | Whether to enable raft labeling | [optional] 
**breakaway_structure_enabled** | **bool** | Whether to enable breakaway structure | [optional] 
**density** | **float** | The density of the supports | [optional] 
**touchpoint_size_mm** | **float** | The size of the touchpoints | [optional] 
**internal_supports_enabled** | **bool** | Whether to enable internal supports | [optional] 
**raft_thickness_mm** | **float** | The thickness of the raft | [optional] 
**slope_multiplier** | **float** | The slope multiplier | [optional] 
**height_above_raft_mm** | **float** |  | [optional] 
**z_compression_correction_mm** | **float** |  | [optional] 
**early_layer_merge_mm** | **float** |  | [optional] 

## Example

```python
from formlabs.models.scene_auto_support_post_request import SceneAutoSupportPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SceneAutoSupportPostRequest from a JSON string
scene_auto_support_post_request_instance = SceneAutoSupportPostRequest.from_json(json)
# print the JSON string representation of the object
print(SceneAutoSupportPostRequest.to_json())

# convert the object into a dict
scene_auto_support_post_request_dict = scene_auto_support_post_request_instance.to_dict()
# create an instance of SceneAutoSupportPostRequest from a dict
scene_auto_support_post_request_from_dict = SceneAutoSupportPostRequest.from_dict(scene_auto_support_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


