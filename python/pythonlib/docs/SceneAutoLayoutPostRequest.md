# SceneAutoLayoutPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**ModelsSelectionModel**](ModelsSelectionModel.md) |  | 

## Example

```python
from formlabs.models.scene_auto_layout_post_request import SceneAutoLayoutPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SceneAutoLayoutPostRequest from a JSON string
scene_auto_layout_post_request_instance = SceneAutoLayoutPostRequest.from_json(json)
# print the JSON string representation of the object
print(SceneAutoLayoutPostRequest.to_json())

# convert the object into a dict
scene_auto_layout_post_request_dict = scene_auto_layout_post_request_instance.to_dict()
# create an instance of SceneAutoLayoutPostRequest from a dict
scene_auto_layout_post_request_from_dict = SceneAutoLayoutPostRequest.from_dict(scene_auto_layout_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


