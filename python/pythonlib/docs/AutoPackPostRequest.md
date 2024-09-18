# AutoPackPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_spacing_mm** | **float** |  | [optional] 

## Example

```python
from formlabs.models.auto_pack_post_request import AutoPackPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AutoPackPostRequest from a JSON string
auto_pack_post_request_instance = AutoPackPostRequest.from_json(json)
# print the JSON string representation of the object
print(AutoPackPostRequest.to_json())

# convert the object into a dict
auto_pack_post_request_dict = auto_pack_post_request_instance.to_dict()
# create an instance of AutoPackPostRequest from a dict
auto_pack_post_request_from_dict = AutoPackPostRequest.from_dict(auto_pack_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


