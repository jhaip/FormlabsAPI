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
import DirectionVectorsModel from './DirectionVectorsModel';
import EulerAnglesModel from './EulerAnglesModel';
import TransformMatrixModel from './TransformMatrixModel';

/**
 * The OrientationModel model module.
 * @module model/OrientationModel
 * @version 1.0
 */
class OrientationModel {
    /**
     * Constructs a new <code>OrientationModel</code>.
     * The orientation of the model in the scene. It can be specified using one of the following: Euler angles, a transform matrix, or direction vectors. 
     * @alias module:model/OrientationModel
     * @param {(module:model/DirectionVectorsModel|module:model/EulerAnglesModel|module:model/TransformMatrixModel)} instance The actual instance to initialize OrientationModel.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "EulerAnglesModel") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                EulerAnglesModel.validateJSON(instance); // throw an exception if no match
                // create EulerAnglesModel from JS object
                this.actualInstance = EulerAnglesModel.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EulerAnglesModel
            errorMessages.push("Failed to construct EulerAnglesModel: " + err)
        }

        try {
            if (typeof instance === "TransformMatrixModel") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                TransformMatrixModel.validateJSON(instance); // throw an exception if no match
                // create TransformMatrixModel from JS object
                this.actualInstance = TransformMatrixModel.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TransformMatrixModel
            errorMessages.push("Failed to construct TransformMatrixModel: " + err)
        }

        try {
            if (typeof instance === "DirectionVectorsModel") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                DirectionVectorsModel.validateJSON(instance); // throw an exception if no match
                // create DirectionVectorsModel from JS object
                this.actualInstance = DirectionVectorsModel.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into DirectionVectorsModel
            errorMessages.push("Failed to construct DirectionVectorsModel: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `OrientationModel` with oneOf schemas DirectionVectorsModel, EulerAnglesModel, TransformMatrixModel. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `OrientationModel` with oneOf schemas DirectionVectorsModel, EulerAnglesModel, TransformMatrixModel. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>OrientationModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrientationModel} obj Optional instance to populate.
     * @return {module:model/OrientationModel} The populated <code>OrientationModel</code> instance.
     */
    static constructFromObject(data, obj) {
        return new OrientationModel(data);
    }

    /**
     * Gets the actual instance, which can be <code>DirectionVectorsModel</code>, <code>EulerAnglesModel</code>, <code>TransformMatrixModel</code>.
     * @return {(module:model/DirectionVectorsModel|module:model/EulerAnglesModel|module:model/TransformMatrixModel)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>DirectionVectorsModel</code>, <code>EulerAnglesModel</code>, <code>TransformMatrixModel</code>.
     * @param {(module:model/DirectionVectorsModel|module:model/EulerAnglesModel|module:model/TransformMatrixModel)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = OrientationModel.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of OrientationModel from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/OrientationModel} An instance of OrientationModel.
     */
    static fromJSON = function(json_string){
        return OrientationModel.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * Euler angle x rotation
 * @member {Number} x
 */
OrientationModel.prototype['x'] = undefined;

/**
 * Euler angle y rotation
 * @member {Number} y
 */
OrientationModel.prototype['y'] = undefined;

/**
 * Euler angle z rotation
 * @member {Number} z
 */
OrientationModel.prototype['z'] = undefined;

/**
 * @member {Array.<Array.<Number>>} linear
 */
OrientationModel.prototype['linear'] = undefined;

/**
 * 3D unit vector in model space saying which piece of the model will point \"up\" in scene space. If \"X direction\" is not set, X direction is chosen arbitrarily by projecting the nearest major axis to be perpendicular to Z direction. 
 * @member {Array.<Number>} z_direction
 */
OrientationModel.prototype['z_direction'] = undefined;

/**
 * Optional 3D unit vector in model space, perpendicular to Z direction, saying which piece of the model will point \"right\" in scene space. 
 * @member {Array.<Number>} x_direction
 */
OrientationModel.prototype['x_direction'] = undefined;


OrientationModel.OneOf = ["DirectionVectorsModel", "EulerAnglesModel", "TransformMatrixModel"];

export default OrientationModel;

