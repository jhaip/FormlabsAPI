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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PreFormApi);
  }
}(this, function(expect, PreFormApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PreFormApi.PrintValidationResultModelPerModelResultsValue();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PrintValidationResultModelPerModelResultsValue', function() {
    it('should create an instance of PrintValidationResultModelPerModelResultsValue', function() {
      // uncomment below and update the code to test PrintValidationResultModelPerModelResultsValue
      //var instance = new PreFormApi.PrintValidationResultModelPerModelResultsValue();
      //expect(instance).to.be.a(PreFormApi.PrintValidationResultModelPerModelResultsValue);
    });

    it('should have the property cups (base name: "cups")', function() {
      // uncomment below and update the code to test the property cups
      //var instance = new PreFormApi.PrintValidationResultModelPerModelResultsValue();
      //expect(instance).to.be();
    });

    it('should have the property unsupportedMinima (base name: "unsupported_minima")', function() {
      // uncomment below and update the code to test the property unsupportedMinima
      //var instance = new PreFormApi.PrintValidationResultModelPerModelResultsValue();
      //expect(instance).to.be();
    });

    it('should have the property undersupported (base name: "undersupported")', function() {
      // uncomment below and update the code to test the property undersupported
      //var instance = new PreFormApi.PrintValidationResultModelPerModelResultsValue();
      //expect(instance).to.be();
    });

    it('should have the property hasSeamline (base name: "has_seamline")', function() {
      // uncomment below and update the code to test the property hasSeamline
      //var instance = new PreFormApi.PrintValidationResultModelPerModelResultsValue();
      //expect(instance).to.be();
    });

  });

}));
