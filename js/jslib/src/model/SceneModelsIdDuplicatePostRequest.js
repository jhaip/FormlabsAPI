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

import ApiClient from '../ApiClient';

/**
 * The SceneModelsIdDuplicatePostRequest model module.
 * @module model/SceneModelsIdDuplicatePostRequest
 * @version 1.0
 */
class SceneModelsIdDuplicatePostRequest {
    /**
     * Constructs a new <code>SceneModelsIdDuplicatePostRequest</code>.
     * @alias module:model/SceneModelsIdDuplicatePostRequest
     */
    constructor() { 
        
        SceneModelsIdDuplicatePostRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SceneModelsIdDuplicatePostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SceneModelsIdDuplicatePostRequest} obj Optional instance to populate.
     * @return {module:model/SceneModelsIdDuplicatePostRequest} The populated <code>SceneModelsIdDuplicatePostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SceneModelsIdDuplicatePostRequest();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SceneModelsIdDuplicatePostRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SceneModelsIdDuplicatePostRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Number of duplicates to create
 * @member {Number} count
 */
SceneModelsIdDuplicatePostRequest.prototype['count'] = undefined;






export default SceneModelsIdDuplicatePostRequest;

