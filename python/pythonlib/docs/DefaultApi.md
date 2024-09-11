# formlabs.DefaultApi

All URIs are relative to *http://localhost:44388*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devices_get**](DefaultApi.md#devices_get) | **GET** /devices/ | 
[**devices_id_get**](DefaultApi.md#devices_id_get) | **GET** /devices/{id}/ | 
[**discover_devices_post**](DefaultApi.md#discover_devices_post) | **POST** /discover-devices/ | 
[**load_form_post**](DefaultApi.md#load_form_post) | **POST** /load-form/ | 
[**login_post**](DefaultApi.md#login_post) | **POST** /login/ | 
[**root_get**](DefaultApi.md#root_get) | **GET** / | 
[**scene_auto_orient_post**](DefaultApi.md#scene_auto_orient_post) | **POST** /scene/auto-orient/ | 
[**scene_auto_pack_post**](DefaultApi.md#scene_auto_pack_post) | **POST** /scene/auto-pack/ | 
[**scene_auto_support_post**](DefaultApi.md#scene_auto_support_post) | **POST** /scene/auto-support/ | 
[**scene_estimate_print_time_get**](DefaultApi.md#scene_estimate_print_time_get) | **GET** /scene/estimate-print-time/ | 
[**scene_get**](DefaultApi.md#scene_get) | **GET** /scene/ | 
[**scene_import_model_post**](DefaultApi.md#scene_import_model_post) | **POST** /scene/import-model/ | 
[**scene_models_id_delete**](DefaultApi.md#scene_models_id_delete) | **DELETE** /scene/models/{id}/ | 
[**scene_models_id_duplicate_post**](DefaultApi.md#scene_models_id_duplicate_post) | **POST** /scene/models/{id}/duplicate/ | 
[**scene_models_id_get**](DefaultApi.md#scene_models_id_get) | **GET** /scene/models/{id}/ | 
[**scene_models_id_post**](DefaultApi.md#scene_models_id_post) | **POST** /scene/models/{id}/ | 
[**scene_models_id_replace_post**](DefaultApi.md#scene_models_id_replace_post) | **POST** /scene/models/{id}/replace/ | 
[**scene_post**](DefaultApi.md#scene_post) | **POST** /scene/ | 
[**scene_print_post**](DefaultApi.md#scene_print_post) | **POST** /scene/print/ | 
[**scene_print_validation_get**](DefaultApi.md#scene_print_validation_get) | **GET** /scene/print-validation/ | 
[**scene_save_form_post**](DefaultApi.md#scene_save_form_post) | **POST** /scene/save-form/ | 
[**scene_save_screenshot_post**](DefaultApi.md#scene_save_screenshot_post) | **POST** /scene/save-screenshot/ | 


# **devices_get**
> DevicesGet200Response devices_get()



List available device statuses

### Example


```python
import formlabs
from formlabs.models.devices_get200_response import DevicesGet200Response
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
    except Exception as e:
        print("Exception when calling DefaultApi->devices_get: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_id_get**
> DeviceStatusModel devices_id_get(id)



Get device status

### Example


```python
import formlabs
from formlabs.models.device_status_model import DeviceStatusModel
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
    id = 'id_example' # str | The unique identifier of the printer

    try:
        api_response = api_instance.devices_id_get(id)
        print("The response of DefaultApi->devices_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->devices_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique identifier of the printer | 

### Return type

[**DeviceStatusModel**](DeviceStatusModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **discover_devices_post**
> DiscoverDevicesPost200Response discover_devices_post(discover_devices_post_request)



Discover devices on the network

### Example


```python
import formlabs
from formlabs.models.discover_devices_post200_response import DiscoverDevicesPost200Response
from formlabs.models.discover_devices_post_request import DiscoverDevicesPostRequest
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
    discover_devices_post_request = {"timeout_seconds":10} # DiscoverDevicesPostRequest | 

    try:
        api_response = api_instance.discover_devices_post(discover_devices_post_request)
        print("The response of DefaultApi->discover_devices_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->discover_devices_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **discover_devices_post_request** | [**DiscoverDevicesPostRequest**](DiscoverDevicesPostRequest.md)|  | 

### Return type

[**DiscoverDevicesPost200Response**](DiscoverDevicesPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **load_form_post**
> load_form_post(load_form_post_request)



Load a file into the current scene

### Example


```python
import formlabs
from formlabs.models.load_form_post_request import LoadFormPostRequest
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
    load_form_post_request = {"file":"C:\\Users\\user\\Desktop\\test.form"} # LoadFormPostRequest | Full path to the file to load

    try:
        api_instance.load_form_post(load_form_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->load_form_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **load_form_post_request** | [**LoadFormPostRequest**](LoadFormPostRequest.md)| Full path to the file to load | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login_post**
> WebAuthTokensModel login_post(login_post_request)



Log in to Formlabs Web Services

### Example


```python
import formlabs
from formlabs.models.login_post_request import LoginPostRequest
from formlabs.models.web_auth_tokens_model import WebAuthTokensModel
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
    login_post_request = {"username":"username","password":"password"} # LoginPostRequest | User credentials

    try:
        api_response = api_instance.login_post(login_post_request)
        print("The response of DefaultApi->login_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->login_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_post_request** | [**LoginPostRequest**](LoginPostRequest.md)| User credentials | 

### Return type

[**WebAuthTokensModel**](WebAuthTokensModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **root_get**
> Get200Response root_get()



### Example


```python
import formlabs
from formlabs.models.get200_response import Get200Response
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
        api_response = api_instance.root_get()
        print("The response of DefaultApi->root_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->root_get: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API version |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_auto_orient_post**
> scene_auto_orient_post(scene_auto_orient_post_request)



Run auto orient operation

### Example


```python
import formlabs
from formlabs.models.scene_auto_orient_post_request import SceneAutoOrientPostRequest
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
    scene_auto_orient_post_request = {"models":"ALL"} # SceneAutoOrientPostRequest | Models to run the auto orient operation on

    try:
        api_instance.scene_auto_orient_post(scene_auto_orient_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_auto_orient_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scene_auto_orient_post_request** | [**SceneAutoOrientPostRequest**](SceneAutoOrientPostRequest.md)| Models to run the auto orient operation on | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_auto_pack_post**
> SceneModel scene_auto_pack_post(scene_auto_pack_post_request)



Run auto pack operation

### Example


```python
import formlabs
from formlabs.models.scene_auto_pack_post_request import SceneAutoPackPostRequest
from formlabs.models.scene_model import SceneModel
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
    scene_auto_pack_post_request = formlabs.SceneAutoPackPostRequest() # SceneAutoPackPostRequest | Auto pack parameters

    try:
        api_response = api_instance.scene_auto_pack_post(scene_auto_pack_post_request)
        print("The response of DefaultApi->scene_auto_pack_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_auto_pack_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scene_auto_pack_post_request** | [**SceneAutoPackPostRequest**](SceneAutoPackPostRequest.md)| Auto pack parameters | 

### Return type

[**SceneModel**](SceneModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_auto_support_post**
> scene_auto_support_post(scene_auto_support_post_request)



Run auto support operation

### Example


```python
import formlabs
from formlabs.models.scene_auto_support_post_request import SceneAutoSupportPostRequest
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
    scene_auto_support_post_request = {"models":"ALL"} # SceneAutoSupportPostRequest | Models to run the auto support operation on

    try:
        api_instance.scene_auto_support_post(scene_auto_support_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_auto_support_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scene_auto_support_post_request** | [**SceneAutoSupportPostRequest**](SceneAutoSupportPostRequest.md)| Models to run the auto support operation on | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_estimate_print_time_get**
> EstimatedPrintTimeModel scene_estimate_print_time_get()



Calculate the estimate print time for the current scene

### Example


```python
import formlabs
from formlabs.models.estimated_print_time_model import EstimatedPrintTimeModel
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
        api_response = api_instance.scene_estimate_print_time_get()
        print("The response of DefaultApi->scene_estimate_print_time_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_estimate_print_time_get: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_get**
> SceneModel scene_get()



### Example


```python
import formlabs
from formlabs.models.scene_model import SceneModel
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
        api_response = api_instance.scene_get()
        print("The response of DefaultApi->scene_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_get: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Scene description |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_import_model_post**
> ModelProperties scene_import_model_post(scene_import_model_post_request)



Load a model into the current scene

### Example


```python
import formlabs
from formlabs.models.model_properties import ModelProperties
from formlabs.models.scene_import_model_post_request import SceneImportModelPostRequest
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
    scene_import_model_post_request = {"file":"C:\\Users\\user\\Desktop\\test.stl"} # SceneImportModelPostRequest | 

    try:
        api_response = api_instance.scene_import_model_post(scene_import_model_post_request)
        print("The response of DefaultApi->scene_import_model_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_import_model_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scene_import_model_post_request** | [**SceneImportModelPostRequest**](SceneImportModelPostRequest.md)|  | 

### Return type

[**ModelProperties**](ModelProperties.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_models_id_delete**
> scene_models_id_delete(id)



Delete a model into the current scene

### Example


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
    id = 'id_example' # str | The unique identifier of the model

    try:
        api_instance.scene_models_id_delete(id)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_models_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique identifier of the model | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_models_id_duplicate_post**
> SceneModel scene_models_id_duplicate_post(id, scene_models_id_duplicate_post_request)



Duplicate a model

### Example


```python
import formlabs
from formlabs.models.scene_model import SceneModel
from formlabs.models.scene_models_id_duplicate_post_request import SceneModelsIdDuplicatePostRequest
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
    id = 'id_example' # str | The unique identifier of the model
    scene_models_id_duplicate_post_request = formlabs.SceneModelsIdDuplicatePostRequest() # SceneModelsIdDuplicatePostRequest | 

    try:
        api_response = api_instance.scene_models_id_duplicate_post(id, scene_models_id_duplicate_post_request)
        print("The response of DefaultApi->scene_models_id_duplicate_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_models_id_duplicate_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique identifier of the model | 
 **scene_models_id_duplicate_post_request** | [**SceneModelsIdDuplicatePostRequest**](SceneModelsIdDuplicatePostRequest.md)|  | 

### Return type

[**SceneModel**](SceneModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_models_id_get**
> ModelProperties scene_models_id_get(id)



Get a model's properties

### Example


```python
import formlabs
from formlabs.models.model_properties import ModelProperties
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
    id = 'id_example' # str | The unique identifier of the model

    try:
        api_response = api_instance.scene_models_id_get(id)
        print("The response of DefaultApi->scene_models_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_models_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique identifier of the model | 

### Return type

[**ModelProperties**](ModelProperties.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Model description |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_models_id_post**
> scene_models_id_post(id, scene_models_id_post_request)



Update a model's properties

### Example


```python
import formlabs
from formlabs.models.scene_models_id_post_request import SceneModelsIdPostRequest
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
    id = 'id_example' # str | The unique identifier of the model
    scene_models_id_post_request = {"position":{"x":10,"y":1,"z":2}} # SceneModelsIdPostRequest | Model properties to update

    try:
        api_instance.scene_models_id_post(id, scene_models_id_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_models_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique identifier of the model | 
 **scene_models_id_post_request** | [**SceneModelsIdPostRequest**](SceneModelsIdPostRequest.md)| Model properties to update | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_models_id_replace_post**
> SceneModelsIdReplacePost200Response scene_models_id_replace_post(id, scene_models_id_replace_post_request)



Replace a model currently in the scene with a new model, copying the existing models setup

### Example


```python
import formlabs
from formlabs.models.scene_models_id_replace_post200_response import SceneModelsIdReplacePost200Response
from formlabs.models.scene_models_id_replace_post_request import SceneModelsIdReplacePostRequest
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
    id = 'id_example' # str | The unique identifier of the model
    scene_models_id_replace_post_request = formlabs.SceneModelsIdReplacePostRequest() # SceneModelsIdReplacePostRequest | 

    try:
        api_response = api_instance.scene_models_id_replace_post(id, scene_models_id_replace_post_request)
        print("The response of DefaultApi->scene_models_id_replace_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_models_id_replace_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique identifier of the model | 
 **scene_models_id_replace_post_request** | [**SceneModelsIdReplacePostRequest**](SceneModelsIdReplacePostRequest.md)|  | 

### Return type

[**SceneModelsIdReplacePost200Response**](SceneModelsIdReplacePost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_post**
> SceneModel scene_post(scene_type_model)



Create a new scene

### Example


```python
import formlabs
from formlabs.models.scene_model import SceneModel
from formlabs.models.scene_type_model import SceneTypeModel
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
    scene_type_model = {"machine_type":"FS30-1-0","material_code":"FLP11B01","print_setting":"DEFAULT","layer_thickness":"0.11"} # SceneTypeModel | Create a scene with a given printing setup

    try:
        api_response = api_instance.scene_post(scene_type_model)
        print("The response of DefaultApi->scene_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scene_type_model** | [**SceneTypeModel**](SceneTypeModel.md)| Create a scene with a given printing setup | 

### Return type

[**SceneModel**](SceneModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_print_post**
> ScenePrintPost200Response scene_print_post(scene_print_post_request)



Slice and upload

### Example


```python
import formlabs
from formlabs.models.scene_print_post200_response import ScenePrintPost200Response
from formlabs.models.scene_print_post_request import ScenePrintPostRequest
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
    scene_print_post_request = {"printer":"192.168.1.2"} # ScenePrintPostRequest | 

    try:
        api_response = api_instance.scene_print_post(scene_print_post_request)
        print("The response of DefaultApi->scene_print_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_print_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scene_print_post_request** | [**ScenePrintPostRequest**](ScenePrintPostRequest.md)|  | 

### Return type

[**ScenePrintPost200Response**](ScenePrintPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_print_validation_get**
> PrintValidationResultModel scene_print_validation_get()



Calculate the print validation for the current scene

### Example


```python
import formlabs
from formlabs.models.print_validation_result_model import PrintValidationResultModel
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
        api_response = api_instance.scene_print_validation_get()
        print("The response of DefaultApi->scene_print_validation_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_print_validation_get: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_save_form_post**
> scene_save_form_post(load_form_post_request)



Save the current scene to a .FORM file

### Example


```python
import formlabs
from formlabs.models.load_form_post_request import LoadFormPostRequest
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
    load_form_post_request = {"file":"C:\\Users\\user\\Desktop\\test.form"} # LoadFormPostRequest | Full path where the file should be saved

    try:
        api_instance.scene_save_form_post(load_form_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_save_form_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **load_form_post_request** | [**LoadFormPostRequest**](LoadFormPostRequest.md)| Full path where the file should be saved | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scene_save_screenshot_post**
> scene_save_screenshot_post(scene_save_screenshot_post_request)



Save a screenshot the current scene.

### Example


```python
import formlabs
from formlabs.models.scene_save_screenshot_post_request import SceneSaveScreenshotPostRequest
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
    scene_save_screenshot_post_request = {"file":"C:\\Users\\user\\Desktop\\screenshot.png"} # SceneSaveScreenshotPostRequest | Full path where the image should be saved

    try:
        api_instance.scene_save_screenshot_post(scene_save_screenshot_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->scene_save_screenshot_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scene_save_screenshot_post_request** | [**SceneSaveScreenshotPostRequest**](SceneSaveScreenshotPostRequest.md)| Full path where the image should be saved | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

