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
 * The Form4PrinterCartridgeDataValue model module.
 * @module model/Form4PrinterCartridgeDataValue
 * @version 1.0
 */
class Form4PrinterCartridgeDataValue {
    /**
     * Constructs a new <code>Form4PrinterCartridgeDataValue</code>.
     * @alias module:model/Form4PrinterCartridgeDataValue
     * @param cartridgeMaterialCode {String} 
     * @param cartridgeEstimatedVolumeDispensedML {Number} 
     * @param cartridgeOriginalVolumeML {Number} 
     */
    constructor(cartridgeMaterialCode, cartridgeEstimatedVolumeDispensedML, cartridgeOriginalVolumeML) { 
        
        Form4PrinterCartridgeDataValue.initialize(this, cartridgeMaterialCode, cartridgeEstimatedVolumeDispensedML, cartridgeOriginalVolumeML);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cartridgeMaterialCode, cartridgeEstimatedVolumeDispensedML, cartridgeOriginalVolumeML) { 
        obj['cartridgeMaterialCode'] = cartridgeMaterialCode;
        obj['cartridgeEstimatedVolumeDispensed_mL'] = cartridgeEstimatedVolumeDispensedML;
        obj['cartridgeOriginalVolume_mL'] = cartridgeOriginalVolumeML;
    }

    /**
     * Constructs a <code>Form4PrinterCartridgeDataValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Form4PrinterCartridgeDataValue} obj Optional instance to populate.
     * @return {module:model/Form4PrinterCartridgeDataValue} The populated <code>Form4PrinterCartridgeDataValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Form4PrinterCartridgeDataValue();

            if (data.hasOwnProperty('cartridgeMaterialCode')) {
                obj['cartridgeMaterialCode'] = ApiClient.convertToType(data['cartridgeMaterialCode'], 'String');
            }
            if (data.hasOwnProperty('cartridgeEstimatedVolumeDispensed_mL')) {
                obj['cartridgeEstimatedVolumeDispensed_mL'] = ApiClient.convertToType(data['cartridgeEstimatedVolumeDispensed_mL'], 'Number');
            }
            if (data.hasOwnProperty('cartridgeOriginalVolume_mL')) {
                obj['cartridgeOriginalVolume_mL'] = ApiClient.convertToType(data['cartridgeOriginalVolume_mL'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Form4PrinterCartridgeDataValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Form4PrinterCartridgeDataValue</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Form4PrinterCartridgeDataValue.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['cartridgeMaterialCode'] && !(typeof data['cartridgeMaterialCode'] === 'string' || data['cartridgeMaterialCode'] instanceof String)) {
            throw new Error("Expected the field `cartridgeMaterialCode` to be a primitive type in the JSON string but got " + data['cartridgeMaterialCode']);
        }

        return true;
    }


}

Form4PrinterCartridgeDataValue.RequiredProperties = ["cartridgeMaterialCode", "cartridgeEstimatedVolumeDispensed_mL", "cartridgeOriginalVolume_mL"];

/**
 * @member {String} cartridgeMaterialCode
 */
Form4PrinterCartridgeDataValue.prototype['cartridgeMaterialCode'] = undefined;

/**
 * @member {Number} cartridgeEstimatedVolumeDispensed_mL
 */
Form4PrinterCartridgeDataValue.prototype['cartridgeEstimatedVolumeDispensed_mL'] = undefined;

/**
 * @member {Number} cartridgeOriginalVolume_mL
 */
Form4PrinterCartridgeDataValue.prototype['cartridgeOriginalVolume_mL'] = undefined;






export default Form4PrinterCartridgeDataValue;

