/**
 * PreForm API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DeviceStatusModel from '../model/DeviceStatusModel';
import DevicesGet200Response from '../model/DevicesGet200Response';
import DiscoverDevicesPost200Response from '../model/DiscoverDevicesPost200Response';
import DiscoverDevicesPostRequest from '../model/DiscoverDevicesPostRequest';
import ErrorModel from '../model/ErrorModel';
import EstimatedPrintTimeModel from '../model/EstimatedPrintTimeModel';
import Get200Response from '../model/Get200Response';
import LoadFormPostRequest from '../model/LoadFormPostRequest';
import LoginPostRequest from '../model/LoginPostRequest';
import ModelProperties from '../model/ModelProperties';
import PrintValidationResultModel from '../model/PrintValidationResultModel';
import SceneAutoLayoutPostRequest from '../model/SceneAutoLayoutPostRequest';
import SceneAutoOrientPostRequest from '../model/SceneAutoOrientPostRequest';
import SceneAutoPackPostRequest from '../model/SceneAutoPackPostRequest';
import SceneAutoSupportPostRequest from '../model/SceneAutoSupportPostRequest';
import SceneImportModelPostRequest from '../model/SceneImportModelPostRequest';
import SceneModel from '../model/SceneModel';
import SceneModelsIdDuplicatePostRequest from '../model/SceneModelsIdDuplicatePostRequest';
import SceneModelsIdPostRequest from '../model/SceneModelsIdPostRequest';
import SceneModelsIdReplacePost200Response from '../model/SceneModelsIdReplacePost200Response';
import SceneModelsIdReplacePostRequest from '../model/SceneModelsIdReplacePostRequest';
import ScenePrintPost200Response from '../model/ScenePrintPost200Response';
import ScenePrintPostRequest from '../model/ScenePrintPostRequest';
import SceneSaveScreenshotPostRequest from '../model/SceneSaveScreenshotPostRequest';
import SceneTypeModel from '../model/SceneTypeModel';
import WebAuthTokensModel from '../model/WebAuthTokensModel';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the devicesGet operation.
     * @callback module:api/DefaultApi~devicesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DevicesGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List available device statuses
     * @param {module:api/DefaultApi~devicesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DevicesGet200Response}
     */
    devicesGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DevicesGet200Response;
      return this.apiClient.callApi(
        '/devices/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the devicesIdGet operation.
     * @callback module:api/DefaultApi~devicesIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceStatusModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get device status
     * @param {String} id The unique identifier of the printer
     * @param {module:api/DefaultApi~devicesIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceStatusModel}
     */
    devicesIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devicesIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeviceStatusModel;
      return this.apiClient.callApi(
        '/devices/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the discoverDevicesPost operation.
     * @callback module:api/DefaultApi~discoverDevicesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DiscoverDevicesPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Discover devices on the network
     * @param {module:model/DiscoverDevicesPostRequest} discoverDevicesPostRequest 
     * @param {module:api/DefaultApi~discoverDevicesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DiscoverDevicesPost200Response}
     */
    discoverDevicesPost(discoverDevicesPostRequest, callback) {
      let postBody = discoverDevicesPostRequest;
      // verify the required parameter 'discoverDevicesPostRequest' is set
      if (discoverDevicesPostRequest === undefined || discoverDevicesPostRequest === null) {
        throw new Error("Missing the required parameter 'discoverDevicesPostRequest' when calling discoverDevicesPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DiscoverDevicesPost200Response;
      return this.apiClient.callApi(
        '/discover-devices/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loadFormPost operation.
     * @callback module:api/DefaultApi~loadFormPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load a file into the current scene
     * @param {module:model/LoadFormPostRequest} loadFormPostRequest Full path to the file to load
     * @param {module:api/DefaultApi~loadFormPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    loadFormPost(loadFormPostRequest, callback) {
      let postBody = loadFormPostRequest;
      // verify the required parameter 'loadFormPostRequest' is set
      if (loadFormPostRequest === undefined || loadFormPostRequest === null) {
        throw new Error("Missing the required parameter 'loadFormPostRequest' when calling loadFormPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/load-form/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loginPost operation.
     * @callback module:api/DefaultApi~loginPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebAuthTokensModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log in to Formlabs Web Services
     * @param {module:model/LoginPostRequest} loginPostRequest User credentials
     * @param {module:api/DefaultApi~loginPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebAuthTokensModel}
     */
    loginPost(loginPostRequest, callback) {
      let postBody = loginPostRequest;
      // verify the required parameter 'loginPostRequest' is set
      if (loginPostRequest === undefined || loginPostRequest === null) {
        throw new Error("Missing the required parameter 'loginPostRequest' when calling loginPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WebAuthTokensModel;
      return this.apiClient.callApi(
        '/login/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the rootGet operation.
     * @callback module:api/DefaultApi~rootGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Get200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~rootGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Get200Response}
     */
    rootGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Get200Response;
      return this.apiClient.callApi(
        '/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sceneAutoLayoutPost operation.
     * @callback module:api/DefaultApi~sceneAutoLayoutPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SceneModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run auto layout operation
     * @param {module:model/SceneAutoLayoutPostRequest} sceneAutoLayoutPostRequest Models to run the auto layout operation on
     * @param {module:api/DefaultApi~sceneAutoLayoutPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SceneModel}
     */
    sceneAutoLayoutPost(sceneAutoLayoutPostRequest, callback) {
      let postBody = sceneAutoLayoutPostRequest;
      // verify the required parameter 'sceneAutoLayoutPostRequest' is set
      if (sceneAutoLayoutPostRequest === undefined || sceneAutoLayoutPostRequest === null) {
        throw new Error("Missing the required parameter 'sceneAutoLayoutPostRequest' when calling sceneAutoLayoutPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SceneModel;
      return this.apiClient.callApi(
        '/scene/auto-layout/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sceneAutoOrientPost operation.
     * @callback module:api/DefaultApi~sceneAutoOrientPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run auto orient operation
     * @param {module:model/SceneAutoOrientPostRequest} sceneAutoOrientPostRequest Models to run the auto orient operation on
     * @param {module:api/DefaultApi~sceneAutoOrientPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    sceneAutoOrientPost(sceneAutoOrientPostRequest, callback) {
      let postBody = sceneAutoOrientPostRequest;
      // verify the required parameter 'sceneAutoOrientPostRequest' is set
      if (sceneAutoOrientPostRequest === undefined || sceneAutoOrientPostRequest === null) {
        throw new Error("Missing the required parameter 'sceneAutoOrientPostRequest' when calling sceneAutoOrientPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/scene/auto-orient/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sceneAutoPackPost operation.
     * @callback module:api/DefaultApi~sceneAutoPackPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SceneModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run auto pack operation
     * @param {module:model/SceneAutoPackPostRequest} sceneAutoPackPostRequest Auto pack parameters
     * @param {module:api/DefaultApi~sceneAutoPackPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SceneModel}
     */
    sceneAutoPackPost(sceneAutoPackPostRequest, callback) {
      let postBody = sceneAutoPackPostRequest;
      // verify the required parameter 'sceneAutoPackPostRequest' is set
      if (sceneAutoPackPostRequest === undefined || sceneAutoPackPostRequest === null) {
        throw new Error("Missing the required parameter 'sceneAutoPackPostRequest' when calling sceneAutoPackPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SceneModel;
      return this.apiClient.callApi(
        '/scene/auto-pack/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sceneAutoSupportPost operation.
     * @callback module:api/DefaultApi~sceneAutoSupportPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run auto support operation
     * @param {module:model/SceneAutoSupportPostRequest} sceneAutoSupportPostRequest Models to run the auto support operation on
     * @param {module:api/DefaultApi~sceneAutoSupportPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    sceneAutoSupportPost(sceneAutoSupportPostRequest, callback) {
      let postBody = sceneAutoSupportPostRequest;
      // verify the required parameter 'sceneAutoSupportPostRequest' is set
      if (sceneAutoSupportPostRequest === undefined || sceneAutoSupportPostRequest === null) {
        throw new Error("Missing the required parameter 'sceneAutoSupportPostRequest' when calling sceneAutoSupportPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/scene/auto-support/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sceneEstimatePrintTimeGet operation.
     * @callback module:api/DefaultApi~sceneEstimatePrintTimeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EstimatedPrintTimeModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calculate the estimate print time for the current scene
     * @param {module:api/DefaultApi~sceneEstimatePrintTimeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EstimatedPrintTimeModel}
     */
    sceneEstimatePrintTimeGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EstimatedPrintTimeModel;
      return this.apiClient.callApi(
        '/scene/estimate-print-time/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sceneGet operation.
     * @callback module:api/DefaultApi~sceneGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SceneModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~sceneGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SceneModel}
     */
    sceneGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SceneModel;
      return this.apiClient.callApi(
        '/scene/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sceneImportModelPost operation.
     * @callback module:api/DefaultApi~sceneImportModelPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelProperties} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load a model into the current scene
     * @param {module:model/SceneImportModelPostRequest} sceneImportModelPostRequest 
     * @param {module:api/DefaultApi~sceneImportModelPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelProperties}
     */
    sceneImportModelPost(sceneImportModelPostRequest, callback) {
      let postBody = sceneImportModelPostRequest;
      // verify the required parameter 'sceneImportModelPostRequest' is set
      if (sceneImportModelPostRequest === undefined || sceneImportModelPostRequest === null) {
        throw new Error("Missing the required parameter 'sceneImportModelPostRequest' when calling sceneImportModelPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ModelProperties;
      return this.apiClient.callApi(
        '/scene/import-model/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sceneModelsIdDelete operation.
     * @callback module:api/DefaultApi~sceneModelsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a model into the current scene
     * @param {String} id The unique identifier of the model
     * @param {module:api/DefaultApi~sceneModelsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    sceneModelsIdDelete(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sceneModelsIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/scene/models/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sceneModelsIdDuplicatePost operation.
     * @callback module:api/DefaultApi~sceneModelsIdDuplicatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SceneModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Duplicate a model
     * @param {String} id The unique identifier of the model
     * @param {module:model/SceneModelsIdDuplicatePostRequest} sceneModelsIdDuplicatePostRequest 
     * @param {module:api/DefaultApi~sceneModelsIdDuplicatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SceneModel}
     */
    sceneModelsIdDuplicatePost(id, sceneModelsIdDuplicatePostRequest, callback) {
      let postBody = sceneModelsIdDuplicatePostRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sceneModelsIdDuplicatePost");
      }
      // verify the required parameter 'sceneModelsIdDuplicatePostRequest' is set
      if (sceneModelsIdDuplicatePostRequest === undefined || sceneModelsIdDuplicatePostRequest === null) {
        throw new Error("Missing the required parameter 'sceneModelsIdDuplicatePostRequest' when calling sceneModelsIdDuplicatePost");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SceneModel;
      return this.apiClient.callApi(
        '/scene/models/{id}/duplicate/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sceneModelsIdGet operation.
     * @callback module:api/DefaultApi~sceneModelsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelProperties} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a model's properties
     * @param {String} id The unique identifier of the model
     * @param {module:api/DefaultApi~sceneModelsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelProperties}
     */
    sceneModelsIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sceneModelsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelProperties;
      return this.apiClient.callApi(
        '/scene/models/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sceneModelsIdPost operation.
     * @callback module:api/DefaultApi~sceneModelsIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a model's properties
     * @param {String} id The unique identifier of the model
     * @param {module:model/SceneModelsIdPostRequest} sceneModelsIdPostRequest Model properties to update
     * @param {module:api/DefaultApi~sceneModelsIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    sceneModelsIdPost(id, sceneModelsIdPostRequest, callback) {
      let postBody = sceneModelsIdPostRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sceneModelsIdPost");
      }
      // verify the required parameter 'sceneModelsIdPostRequest' is set
      if (sceneModelsIdPostRequest === undefined || sceneModelsIdPostRequest === null) {
        throw new Error("Missing the required parameter 'sceneModelsIdPostRequest' when calling sceneModelsIdPost");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/scene/models/{id}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sceneModelsIdReplacePost operation.
     * @callback module:api/DefaultApi~sceneModelsIdReplacePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SceneModelsIdReplacePost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace a model currently in the scene with a new model, copying the existing models setup
     * @param {String} id The unique identifier of the model
     * @param {module:model/SceneModelsIdReplacePostRequest} sceneModelsIdReplacePostRequest 
     * @param {module:api/DefaultApi~sceneModelsIdReplacePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SceneModelsIdReplacePost200Response}
     */
    sceneModelsIdReplacePost(id, sceneModelsIdReplacePostRequest, callback) {
      let postBody = sceneModelsIdReplacePostRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sceneModelsIdReplacePost");
      }
      // verify the required parameter 'sceneModelsIdReplacePostRequest' is set
      if (sceneModelsIdReplacePostRequest === undefined || sceneModelsIdReplacePostRequest === null) {
        throw new Error("Missing the required parameter 'sceneModelsIdReplacePostRequest' when calling sceneModelsIdReplacePost");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SceneModelsIdReplacePost200Response;
      return this.apiClient.callApi(
        '/scene/models/{id}/replace/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scenePost operation.
     * @callback module:api/DefaultApi~scenePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SceneModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new scene
     * @param {module:model/SceneTypeModel} sceneTypeModel Create a scene with a given printing setup
     * @param {module:api/DefaultApi~scenePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SceneModel}
     */
    scenePost(sceneTypeModel, callback) {
      let postBody = sceneTypeModel;
      // verify the required parameter 'sceneTypeModel' is set
      if (sceneTypeModel === undefined || sceneTypeModel === null) {
        throw new Error("Missing the required parameter 'sceneTypeModel' when calling scenePost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SceneModel;
      return this.apiClient.callApi(
        '/scene/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scenePrintPost operation.
     * @callback module:api/DefaultApi~scenePrintPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScenePrintPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Slice and upload
     * @param {module:model/ScenePrintPostRequest} scenePrintPostRequest 
     * @param {module:api/DefaultApi~scenePrintPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScenePrintPost200Response}
     */
    scenePrintPost(scenePrintPostRequest, callback) {
      let postBody = scenePrintPostRequest;
      // verify the required parameter 'scenePrintPostRequest' is set
      if (scenePrintPostRequest === undefined || scenePrintPostRequest === null) {
        throw new Error("Missing the required parameter 'scenePrintPostRequest' when calling scenePrintPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ScenePrintPost200Response;
      return this.apiClient.callApi(
        '/scene/print/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scenePrintValidationGet operation.
     * @callback module:api/DefaultApi~scenePrintValidationGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PrintValidationResultModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calculate the print validation for the current scene
     * @param {module:api/DefaultApi~scenePrintValidationGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PrintValidationResultModel}
     */
    scenePrintValidationGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PrintValidationResultModel;
      return this.apiClient.callApi(
        '/scene/print-validation/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sceneSaveFormPost operation.
     * @callback module:api/DefaultApi~sceneSaveFormPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the current scene to a .FORM file
     * @param {module:model/LoadFormPostRequest} loadFormPostRequest Full path where the file should be saved
     * @param {module:api/DefaultApi~sceneSaveFormPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    sceneSaveFormPost(loadFormPostRequest, callback) {
      let postBody = loadFormPostRequest;
      // verify the required parameter 'loadFormPostRequest' is set
      if (loadFormPostRequest === undefined || loadFormPostRequest === null) {
        throw new Error("Missing the required parameter 'loadFormPostRequest' when calling sceneSaveFormPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/scene/save-form/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sceneSaveScreenshotPost operation.
     * @callback module:api/DefaultApi~sceneSaveScreenshotPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save a screenshot the current scene.
     * @param {module:model/SceneSaveScreenshotPostRequest} sceneSaveScreenshotPostRequest Full path where the image should be saved
     * @param {module:api/DefaultApi~sceneSaveScreenshotPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    sceneSaveScreenshotPost(sceneSaveScreenshotPostRequest, callback) {
      let postBody = sceneSaveScreenshotPostRequest;
      // verify the required parameter 'sceneSaveScreenshotPostRequest' is set
      if (sceneSaveScreenshotPostRequest === undefined || sceneSaveScreenshotPostRequest === null) {
        throw new Error("Missing the required parameter 'sceneSaveScreenshotPostRequest' when calling sceneSaveScreenshotPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/scene/save-screenshot/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
