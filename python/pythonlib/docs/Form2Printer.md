# Form2Printer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**product_name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**is_connected** | **bool** |  | [optional] 
**connection_type** | **str** |  | [optional] 
**ip_address** | **str** |  | [optional] 
**firmware_version** | **str** |  | [optional] 
**estimated_print_time_remaining_ms** | **int** |  | [optional] 
**tank_id** | **str** |  | [optional] 
**tank_material_code** | **str** |  | [optional] 
**cartridge_data** | [**Dict[str, Form4PrinterCartridgeDataValue]**](Form4PrinterCartridgeDataValue.md) |  | [optional] 

## Example

```python
from formlabs.models.form2_printer import Form2Printer

# TODO update the JSON string below
json = "{}"
# create an instance of Form2Printer from a JSON string
form2_printer_instance = Form2Printer.from_json(json)
# print the JSON string representation of the object
print(Form2Printer.to_json())

# convert the object into a dict
form2_printer_dict = form2_printer_instance.to_dict()
# create an instance of Form2Printer from a dict
form2_printer_from_dict = Form2Printer.from_dict(form2_printer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


