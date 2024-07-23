# PreFormApi.DefaultApi

All URIs are relative to *http://localhost:44388*

Method | HTTP request | Description
------------- | ------------- | -------------
[**autoLayoutPost**](DefaultApi.md#autoLayoutPost) | **POST** /auto-layout/ | 
[**autoOrientPost**](DefaultApi.md#autoOrientPost) | **POST** /auto-orient/ | 
[**autoSupportPost**](DefaultApi.md#autoSupportPost) | **POST** /auto-support/ | 
[**exportPost**](DefaultApi.md#exportPost) | **POST** /export/ | 
[**loadFormPost**](DefaultApi.md#loadFormPost) | **POST** /load-form/ | 
[**modelsIdDelete**](DefaultApi.md#modelsIdDelete) | **DELETE** /models/{id}/ | 
[**saveFormPost**](DefaultApi.md#saveFormPost) | **POST** /save-form/ | 
[**sceneGet**](DefaultApi.md#sceneGet) | **GET** /scene | 
[**sceneImportModelPost**](DefaultApi.md#sceneImportModelPost) | **POST** /scene/import-model/ | 
[**scenePost**](DefaultApi.md#scenePost) | **POST** /scene | 
[**v1PrintPost**](DefaultApi.md#v1PrintPost) | **POST** /v1/print/ | 
[**v1SlicePost**](DefaultApi.md#v1SlicePost) | **POST** /v1/slice/ | 



## autoLayoutPost

> autoLayoutPost(autoOrientPostRequest)



Run auto layout operation

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let autoOrientPostRequest = {"models":"ALL"}; // AutoOrientPostRequest | Models to run the auto layout operation on
apiInstance.autoLayoutPost(autoOrientPostRequest, (error, data, response) => {
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
 **autoOrientPostRequest** | [**AutoOrientPostRequest**](AutoOrientPostRequest.md)| Models to run the auto layout operation on | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## autoOrientPost

> autoOrientPost(autoOrientPostRequest)



Run auto orient operation

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let autoOrientPostRequest = {"models":"ALL"}; // AutoOrientPostRequest | Models to run the auto orient operation on
apiInstance.autoOrientPost(autoOrientPostRequest, (error, data, response) => {
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
 **autoOrientPostRequest** | [**AutoOrientPostRequest**](AutoOrientPostRequest.md)| Models to run the auto orient operation on | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## autoSupportPost

> autoSupportPost(autoOrientPostRequest)



Run auto support operation

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let autoOrientPostRequest = {"models":"ALL"}; // AutoOrientPostRequest | Models to run the auto support operation on
apiInstance.autoSupportPost(autoOrientPostRequest, (error, data, response) => {
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
 **autoOrientPostRequest** | [**AutoOrientPostRequest**](AutoOrientPostRequest.md)| Models to run the auto support operation on | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## exportPost

> ExportPost200Response exportPost(outputPath)



Export current scene as a STL

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let outputPath = "outputPath_example"; // String | The path to the output file where the .STL will be saved
apiInstance.exportPost(outputPath, (error, data, response) => {
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
 **outputPath** | **String**| The path to the output file where the .STL will be saved | 

### Return type

[**ExportPost200Response**](ExportPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loadFormPost

> loadFormPost(file)



Load a file into the current scene

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let file = "file_example"; // String | 
apiInstance.loadFormPost(file, (error, data, response) => {
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
 **file** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## modelsIdDelete

> modelsIdDelete(id)



Delete a model into the current scene

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let id = "id_example"; // String | The unique identifier of the model
apiInstance.modelsIdDelete(id, (error, data, response) => {
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


## saveFormPost

> saveFormPost(file)



Save the current scene to a .FORM file

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let file = "file_example"; // String | 
apiInstance.saveFormPost(file, (error, data, response) => {
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
 **file** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## sceneGet

> {String: Object} sceneGet()



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

**{String: Object}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sceneImportModelPost

> SceneImportModelPost200Response sceneImportModelPost(sceneImportModelPostRequest)



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

[**SceneImportModelPost200Response**](SceneImportModelPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## scenePost

> scenePost(scenePostRequest)



Create a new scene

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let scenePostRequest = {"machineType":"PILK-1-0","materialCode":"FLP11B01","printSetting":"DEFAULT","sliceThickness":0.11}; // ScenePostRequest | Machine type and material type selection
apiInstance.scenePost(scenePostRequest, (error, data, response) => {
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
 **scenePostRequest** | [**ScenePostRequest**](ScenePostRequest.md)| Machine type and material type selection | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## v1PrintPost

> V1PrintPost200Response v1PrintPost(printer, jobName)



Send the current scene to the printer

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let printer = "printer_example"; // String | 
let jobName = "jobName_example"; // String | 
apiInstance.v1PrintPost(printer, jobName, (error, data, response) => {
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
 **printer** | **String**|  | 
 **jobName** | **String**|  | 

### Return type

[**V1PrintPost200Response**](V1PrintPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## v1SlicePost

> v1SlicePost(file, jobName)



Slice the current scene

### Example

```javascript
import PreFormApi from 'pre_form_api';

let apiInstance = new PreFormApi.DefaultApi();
let file = "file_example"; // String | 
let jobName = "jobName_example"; // String | 
apiInstance.v1SlicePost(file, jobName, (error, data, response) => {
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
 **file** | **String**|  | 
 **jobName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

