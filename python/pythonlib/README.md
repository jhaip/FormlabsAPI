# formlabs-sdk
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0
- Package version: 1.0.0
- Generator version: 7.8.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python 3.7+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import formlabs
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import formlabs
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import formlabs
from formlabs.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:44388
# See configuration.py for a list of all supported configuration parameters.
configuration = formlabs.Configuration(
    host = "http://localhost:44388"
)



# Enter a context with an instance of the API client
with formlabs.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = formlabs.DefaultApi(api_client)

    try:
        api_response = api_instance.devices_get()
        print("The response of DefaultApi->devices_get:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling DefaultApi->devices_get: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:44388*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**devices_get**](docs/DefaultApi.md#devices_get) | **GET** /devices/ | 
*DefaultApi* | [**devices_id_get**](docs/DefaultApi.md#devices_id_get) | **GET** /devices/{id}/ | 
*DefaultApi* | [**discover_devices_post**](docs/DefaultApi.md#discover_devices_post) | **POST** /discover-devices/ | 
*DefaultApi* | [**load_form_post**](docs/DefaultApi.md#load_form_post) | **POST** /load-form/ | 
*DefaultApi* | [**login_post**](docs/DefaultApi.md#login_post) | **POST** /login/ | 
*DefaultApi* | [**root_get**](docs/DefaultApi.md#root_get) | **GET** / | 
*DefaultApi* | [**scene_auto_layout_post**](docs/DefaultApi.md#scene_auto_layout_post) | **POST** /scene/auto-layout/ | 
*DefaultApi* | [**scene_auto_orient_post**](docs/DefaultApi.md#scene_auto_orient_post) | **POST** /scene/auto-orient/ | 
*DefaultApi* | [**scene_auto_pack_post**](docs/DefaultApi.md#scene_auto_pack_post) | **POST** /scene/auto-pack/ | 
*DefaultApi* | [**scene_auto_support_post**](docs/DefaultApi.md#scene_auto_support_post) | **POST** /scene/auto-support/ | 
*DefaultApi* | [**scene_estimate_print_time_get**](docs/DefaultApi.md#scene_estimate_print_time_get) | **GET** /scene/estimate-print-time/ | 
*DefaultApi* | [**scene_get**](docs/DefaultApi.md#scene_get) | **GET** /scene/ | 
*DefaultApi* | [**scene_import_model_post**](docs/DefaultApi.md#scene_import_model_post) | **POST** /scene/import-model/ | 
*DefaultApi* | [**scene_models_id_delete**](docs/DefaultApi.md#scene_models_id_delete) | **DELETE** /scene/models/{id}/ | 
*DefaultApi* | [**scene_models_id_duplicate_post**](docs/DefaultApi.md#scene_models_id_duplicate_post) | **POST** /scene/models/{id}/duplicate/ | 
*DefaultApi* | [**scene_models_id_get**](docs/DefaultApi.md#scene_models_id_get) | **GET** /scene/models/{id}/ | 
*DefaultApi* | [**scene_models_id_post**](docs/DefaultApi.md#scene_models_id_post) | **POST** /scene/models/{id}/ | 
*DefaultApi* | [**scene_models_id_replace_post**](docs/DefaultApi.md#scene_models_id_replace_post) | **POST** /scene/models/{id}/replace/ | 
*DefaultApi* | [**scene_post**](docs/DefaultApi.md#scene_post) | **POST** /scene/ | 
*DefaultApi* | [**scene_print_post**](docs/DefaultApi.md#scene_print_post) | **POST** /scene/print/ | 
*DefaultApi* | [**scene_print_validation_get**](docs/DefaultApi.md#scene_print_validation_get) | **GET** /scene/print-validation/ | 
*DefaultApi* | [**scene_save_form_post**](docs/DefaultApi.md#scene_save_form_post) | **POST** /scene/save-form/ | 
*DefaultApi* | [**scene_save_screenshot_post**](docs/DefaultApi.md#scene_save_screenshot_post) | **POST** /scene/save-screenshot/ | 


## Documentation For Models

 - [AccessToken](docs/AccessToken.md)
 - [Default](docs/Default.md)
 - [DentalMode](docs/DentalMode.md)
 - [DeviceStatusModel](docs/DeviceStatusModel.md)
 - [DevicesGet200Response](docs/DevicesGet200Response.md)
 - [DirectionVectorsModel](docs/DirectionVectorsModel.md)
 - [DiscoverDevicesPost200Response](docs/DiscoverDevicesPost200Response.md)
 - [DiscoverDevicesPostRequest](docs/DiscoverDevicesPostRequest.md)
 - [ErrorModel](docs/ErrorModel.md)
 - [ErrorModelError](docs/ErrorModelError.md)
 - [EstimatedPrintTimeModel](docs/EstimatedPrintTimeModel.md)
 - [EulerAnglesModel](docs/EulerAnglesModel.md)
 - [FleetControlPrinterGroup](docs/FleetControlPrinterGroup.md)
 - [Form2Printer](docs/Form2Printer.md)
 - [Form3Printer](docs/Form3Printer.md)
 - [Form4Printer](docs/Form4Printer.md)
 - [Form4PrinterCartridgeDataValue](docs/Form4PrinterCartridgeDataValue.md)
 - [Fuse11Printer](docs/Fuse11Printer.md)
 - [GenericDevice](docs/GenericDevice.md)
 - [Get200Response](docs/Get200Response.md)
 - [ImportUnitsModel](docs/ImportUnitsModel.md)
 - [LoadFormPostRequest](docs/LoadFormPostRequest.md)
 - [LoginPostRequest](docs/LoginPostRequest.md)
 - [ModelProperties](docs/ModelProperties.md)
 - [ModelPropertiesBbox](docs/ModelPropertiesBbox.md)
 - [ModelsSelectionModel](docs/ModelsSelectionModel.md)
 - [OrientationModel](docs/OrientationModel.md)
 - [PrintValidationResultModel](docs/PrintValidationResultModel.md)
 - [PrintValidationResultModelPerModelResultsValue](docs/PrintValidationResultModelPerModelResultsValue.md)
 - [RepairBehaviorModel](docs/RepairBehaviorModel.md)
 - [SLA](docs/SLA.md)
 - [SLS](docs/SLS.md)
 - [SceneAutoLayoutPostRequest](docs/SceneAutoLayoutPostRequest.md)
 - [SceneAutoOrientPostRequest](docs/SceneAutoOrientPostRequest.md)
 - [SceneAutoPackPostRequest](docs/SceneAutoPackPostRequest.md)
 - [SceneAutoSupportPostRequest](docs/SceneAutoSupportPostRequest.md)
 - [SceneImportModelPostRequest](docs/SceneImportModelPostRequest.md)
 - [SceneMaterialsModel](docs/SceneMaterialsModel.md)
 - [SceneModel](docs/SceneModel.md)
 - [SceneModelsIdDuplicatePostRequest](docs/SceneModelsIdDuplicatePostRequest.md)
 - [SceneModelsIdPostRequest](docs/SceneModelsIdPostRequest.md)
 - [SceneModelsIdReplacePost200Response](docs/SceneModelsIdReplacePost200Response.md)
 - [SceneModelsIdReplacePostRequest](docs/SceneModelsIdReplacePostRequest.md)
 - [ScenePositionModel](docs/ScenePositionModel.md)
 - [ScenePrintPost200Response](docs/ScenePrintPost200Response.md)
 - [ScenePrintPostRequest](docs/ScenePrintPostRequest.md)
 - [SceneSaveScreenshotPostRequest](docs/SceneSaveScreenshotPostRequest.md)
 - [SceneTypeModel](docs/SceneTypeModel.md)
 - [SceneTypeModelLayerThickness](docs/SceneTypeModelLayerThickness.md)
 - [TransformMatrixModel](docs/TransformMatrixModel.md)
 - [UnitsModel](docs/UnitsModel.md)
 - [UsernameAndPassword](docs/UsernameAndPassword.md)
 - [WebAuthTokensModel](docs/WebAuthTokensModel.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization

Endpoints do not require authorization.


## Author




