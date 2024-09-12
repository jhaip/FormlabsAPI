# PreFormApi.DefaultApi

All URIs are relative to *http://localhost:44388*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devicesGet**](DefaultApi.md#devicesGet) | **GET** /devices/ | 
[**devicesIdGet**](DefaultApi.md#devicesIdGet) | **GET** /devices/{id}/ | 
[**discoverDevicesPost**](DefaultApi.md#discoverDevicesPost) | **POST** /discover-devices/ | 
[**loadFormPost**](DefaultApi.md#loadFormPost) | **POST** /load-form/ | 
[**loginPost**](DefaultApi.md#loginPost) | **POST** /login/ | 
[**rootGet**](DefaultApi.md#rootGet) | **GET** / | 
[**sceneAutoLayoutPost**](DefaultApi.md#sceneAutoLayoutPost) | **POST** /scene/auto-layout/ | 
[**sceneAutoOrientPost**](DefaultApi.md#sceneAutoOrientPost) | **POST** /scene/auto-orient/ | 
[**sceneAutoPackPost**](DefaultApi.md#sceneAutoPackPost) | **POST** /scene/auto-pack/ | 
[**sceneAutoSupportPost**](DefaultApi.md#sceneAutoSupportPost) | **POST** /scene/auto-support/ | 
[**sceneEstimatePrintTimeGet**](DefaultApi.md#sceneEstimatePrintTimeGet) | **GET** /scene/estimate-print-time/ | 
[**sceneGet**](DefaultApi.md#sceneGet) | **GET** /scene/ | 
[**sceneImportModelPost**](DefaultApi.md#sceneImportModelPost) | **POST** /scene/import-model/ | 
[**sceneModelsIdDelete**](DefaultApi.md#sceneModelsIdDelete) | **DELETE** /scene/models/{id}/ | 
[**sceneModelsIdDuplicatePost**](DefaultApi.md#sceneModelsIdDuplicatePost) | **POST** /scene/models/{id}/duplicate/ | 
[**sceneModelsIdGet**](DefaultApi.md#sceneModelsIdGet) | **GET** /scene/models/{id}/ | 
[**sceneModelsIdPost**](DefaultApi.md#sceneModelsIdPost) | **POST** /scene/models/{id}/ | 
[**sceneModelsIdReplacePost**](DefaultApi.md#sceneModelsIdReplacePost) | **POST** /scene/models/{id}/replace/ | 
[**scenePost**](DefaultApi.md#scenePost) | **POST** /scene/ | 
[**scenePrintPost**](DefaultApi.md#scenePrintPost) | **POST** /scene/print/ | 
[**scenePrintValidationGet**](DefaultApi.md#scenePrintValidationGet) | **GET** /scene/print-validation/ | 
[**sceneSaveFormPost**](DefaultApi.md#sceneSaveFormPost) | **POST** /scene/save-form/ | 
[**sceneSaveScreenshotPost**](DefaultApi.md#sceneSaveScreenshotPost) | **POST** /scene/save-screenshot/ | 



## devicesGet

> DevicesGet200Response devicesGet()



List available device statuses

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
apiInstance.devicesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**DevicesGet200Response**](DevicesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## devicesIdGet

> DeviceStatusModel devicesIdGet(id)



Get device status

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let id = "id_example"; // String | The unique identifier of the printer
apiInstance.devicesIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifier of the printer | 

### Return type

[**DeviceStatusModel**](DeviceStatusModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## discoverDevicesPost

> DiscoverDevicesPost200Response discoverDevicesPost(discoverDevicesPostRequest)



Discover devices on the network

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let discoverDevicesPostRequest = {"timeout_seconds":10}; // DiscoverDevicesPostRequest | 
apiInstance.discoverDevicesPost(discoverDevicesPostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discoverDevicesPostRequest** | [**DiscoverDevicesPostRequest**](DiscoverDevicesPostRequest.md)|  | 

### Return type

[**DiscoverDevicesPost200Response**](DiscoverDevicesPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## loadFormPost

> loadFormPost(loadFormPostRequest)



Load a file into the current scene

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let loadFormPostRequest = {"file":"C:\\Users\\user\\Desktop\\test.form"}; // LoadFormPostRequest | Full path to the file to load
apiInstance.loadFormPost(loadFormPostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loadFormPostRequest** | [**LoadFormPostRequest**](LoadFormPostRequest.md)| Full path to the file to load | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## loginPost

> WebAuthTokensModel loginPost(loginPostRequest)



Log in to Formlabs Web Services

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let loginPostRequest = {"username":"username","password":"password"}; // LoginPostRequest | User credentials
apiInstance.loginPost(loginPostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginPostRequest** | [**LoginPostRequest**](LoginPostRequest.md)| User credentials | 

### Return type

[**WebAuthTokensModel**](WebAuthTokensModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rootGet

> Get200Response rootGet()



### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
apiInstance.rootGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Get200Response**](Get200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sceneAutoLayoutPost

> SceneModel sceneAutoLayoutPost(sceneAutoLayoutPostRequest)



Run auto layout operation

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let sceneAutoLayoutPostRequest = {"models":"ALL"}; // SceneAutoLayoutPostRequest | Models to run the auto layout operation on
apiInstance.sceneAutoLayoutPost(sceneAutoLayoutPostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sceneAutoLayoutPostRequest** | [**SceneAutoLayoutPostRequest**](SceneAutoLayoutPostRequest.md)| Models to run the auto layout operation on | 

### Return type

[**SceneModel**](SceneModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sceneAutoOrientPost

> sceneAutoOrientPost(sceneAutoOrientPostRequest)



Run auto orient operation

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let sceneAutoOrientPostRequest = {"models":"ALL"}; // SceneAutoOrientPostRequest | Models to run the auto orient operation on
apiInstance.sceneAutoOrientPost(sceneAutoOrientPostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sceneAutoOrientPostRequest** | [**SceneAutoOrientPostRequest**](SceneAutoOrientPostRequest.md)| Models to run the auto orient operation on | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sceneAutoPackPost

> SceneModel sceneAutoPackPost(sceneAutoPackPostRequest)



Run auto pack operation

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let sceneAutoPackPostRequest = new PreFormApi.SceneAutoPackPostRequest(); // SceneAutoPackPostRequest | Auto pack parameters
apiInstance.sceneAutoPackPost(sceneAutoPackPostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sceneAutoPackPostRequest** | [**SceneAutoPackPostRequest**](SceneAutoPackPostRequest.md)| Auto pack parameters | 

### Return type

[**SceneModel**](SceneModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sceneAutoSupportPost

> sceneAutoSupportPost(sceneAutoSupportPostRequest)



Run auto support operation

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let sceneAutoSupportPostRequest = {"models":"ALL"}; // SceneAutoSupportPostRequest | Models to run the auto support operation on
apiInstance.sceneAutoSupportPost(sceneAutoSupportPostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sceneAutoSupportPostRequest** | [**SceneAutoSupportPostRequest**](SceneAutoSupportPostRequest.md)| Models to run the auto support operation on | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sceneEstimatePrintTimeGet

> EstimatedPrintTimeModel sceneEstimatePrintTimeGet()



Calculate the estimate print time for the current scene

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
apiInstance.sceneEstimatePrintTimeGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EstimatedPrintTimeModel**](EstimatedPrintTimeModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sceneGet

> SceneModel sceneGet()



### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
apiInstance.sceneGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SceneModel**](SceneModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sceneImportModelPost

> ModelProperties sceneImportModelPost(sceneImportModelPostRequest)



Load a model into the current scene

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let sceneImportModelPostRequest = {"file":"C:\\Users\\user\\Desktop\\test.stl"}; // SceneImportModelPostRequest | 
apiInstance.sceneImportModelPost(sceneImportModelPostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sceneImportModelPostRequest** | [**SceneImportModelPostRequest**](SceneImportModelPostRequest.md)|  | 

### Return type

[**ModelProperties**](ModelProperties.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sceneModelsIdDelete

> sceneModelsIdDelete(id)



Delete a model into the current scene

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let id = "id_example"; // String | The unique identifier of the model
apiInstance.sceneModelsIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifier of the model | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## sceneModelsIdDuplicatePost

> SceneModel sceneModelsIdDuplicatePost(id, sceneModelsIdDuplicatePostRequest)



Duplicate a model

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let id = "id_example"; // String | The unique identifier of the model
let sceneModelsIdDuplicatePostRequest = new PreFormApi.SceneModelsIdDuplicatePostRequest(); // SceneModelsIdDuplicatePostRequest | 
apiInstance.sceneModelsIdDuplicatePost(id, sceneModelsIdDuplicatePostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifier of the model | 
 **sceneModelsIdDuplicatePostRequest** | [**SceneModelsIdDuplicatePostRequest**](SceneModelsIdDuplicatePostRequest.md)|  | 

### Return type

[**SceneModel**](SceneModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sceneModelsIdGet

> ModelProperties sceneModelsIdGet(id)



Get a model&#39;s properties

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let id = "id_example"; // String | The unique identifier of the model
apiInstance.sceneModelsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifier of the model | 

### Return type

[**ModelProperties**](ModelProperties.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sceneModelsIdPost

> sceneModelsIdPost(id, sceneModelsIdPostRequest)



Update a model&#39;s properties

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let id = "id_example"; // String | The unique identifier of the model
let sceneModelsIdPostRequest = {"position":{"x":10,"y":1,"z":2}}; // SceneModelsIdPostRequest | Model properties to update
apiInstance.sceneModelsIdPost(id, sceneModelsIdPostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifier of the model | 
 **sceneModelsIdPostRequest** | [**SceneModelsIdPostRequest**](SceneModelsIdPostRequest.md)| Model properties to update | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sceneModelsIdReplacePost

> SceneModelsIdReplacePost200Response sceneModelsIdReplacePost(id, sceneModelsIdReplacePostRequest)



Replace a model currently in the scene with a new model, copying the existing models setup

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let id = "id_example"; // String | The unique identifier of the model
let sceneModelsIdReplacePostRequest = new PreFormApi.SceneModelsIdReplacePostRequest(); // SceneModelsIdReplacePostRequest | 
apiInstance.sceneModelsIdReplacePost(id, sceneModelsIdReplacePostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifier of the model | 
 **sceneModelsIdReplacePostRequest** | [**SceneModelsIdReplacePostRequest**](SceneModelsIdReplacePostRequest.md)|  | 

### Return type

[**SceneModelsIdReplacePost200Response**](SceneModelsIdReplacePost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## scenePost

> SceneModel scenePost(sceneTypeModel)



Create a new scene

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let sceneTypeModel = {"machine_type":"FS30-1-0","material_code":"FLP11B01","print_setting":"DEFAULT","layer_thickness":"0.11"}; // SceneTypeModel | Create a scene with a given printing setup
apiInstance.scenePost(sceneTypeModel, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sceneTypeModel** | [**SceneTypeModel**](SceneTypeModel.md)| Create a scene with a given printing setup | 

### Return type

[**SceneModel**](SceneModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## scenePrintPost

> ScenePrintPost200Response scenePrintPost(scenePrintPostRequest)



Slice and upload

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let scenePrintPostRequest = {"printer":"192.168.1.2"}; // ScenePrintPostRequest | 
apiInstance.scenePrintPost(scenePrintPostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scenePrintPostRequest** | [**ScenePrintPostRequest**](ScenePrintPostRequest.md)|  | 

### Return type

[**ScenePrintPost200Response**](ScenePrintPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## scenePrintValidationGet

> PrintValidationResultModel scenePrintValidationGet()



Calculate the print validation for the current scene

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
apiInstance.scenePrintValidationGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PrintValidationResultModel**](PrintValidationResultModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sceneSaveFormPost

> sceneSaveFormPost(loadFormPostRequest)



Save the current scene to a .FORM file

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let loadFormPostRequest = {"file":"C:\\Users\\user\\Desktop\\test.form"}; // LoadFormPostRequest | Full path where the file should be saved
apiInstance.sceneSaveFormPost(loadFormPostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loadFormPostRequest** | [**LoadFormPostRequest**](LoadFormPostRequest.md)| Full path where the file should be saved | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sceneSaveScreenshotPost

> sceneSaveScreenshotPost(sceneSaveScreenshotPostRequest)



Save a screenshot the current scene.

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let sceneSaveScreenshotPostRequest = {"file":"C:\\Users\\user\\Desktop\\screenshot.png"}; // SceneSaveScreenshotPostRequest | Full path where the image should be saved
apiInstance.sceneSaveScreenshotPost(sceneSaveScreenshotPostRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sceneSaveScreenshotPostRequest** | [**SceneSaveScreenshotPostRequest**](SceneSaveScreenshotPostRequest.md)| Full path where the image should be saved | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

