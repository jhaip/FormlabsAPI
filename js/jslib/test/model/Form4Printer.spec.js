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
    instance = new PreFormApi.Form4Printer();
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

  describe('Form4Printer', function() {
    it('should create an instance of Form4Printer', function() {
      // uncomment below and update the code to test Form4Printer
      //var instance = new PreFormApi.Form4Printer();
      //expect(instance).to.be.a(PreFormApi.Form4Printer);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PreFormApi.Form4Printer();
      //expect(instance).to.be();
    });

    it('should have the property productName (base name: "product_name")', function() {
      // uncomment below and update the code to test the property productName
      //var instance = new PreFormApi.Form4Printer();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new PreFormApi.Form4Printer();
      //expect(instance).to.be();
    });

    it('should have the property isConnected (base name: "is_connected")', function() {
      // uncomment below and update the code to test the property isConnected
      //var instance = new PreFormApi.Form4Printer();
      //expect(instance).to.be();
    });

    it('should have the property connectionType (base name: "connection_type")', function() {
      // uncomment below and update the code to test the property connectionType
      //var instance = new PreFormApi.Form4Printer();
      //expect(instance).to.be();
    });

    it('should have the property ipAddress (base name: "ip_address")', function() {
      // uncomment below and update the code to test the property ipAddress
      //var instance = new PreFormApi.Form4Printer();
      //expect(instance).to.be();
    });

    it('should have the property firmwareVersion (base name: "firmware_version")', function() {
      // uncomment below and update the code to test the property firmwareVersion
      //var instance = new PreFormApi.Form4Printer();
      //expect(instance).to.be();
    });

    it('should have the property isRemotePrintEnabled (base name: "is_remote_print_enabled")', function() {
      // uncomment below and update the code to test the property isRemotePrintEnabled
      //var instance = new PreFormApi.Form4Printer();
      //expect(instance).to.be();
    });

    it('should have the property estimatedPrintTimeRemainingMs (base name: "estimated_print_time_remaining_ms")', function() {
      // uncomment below and update the code to test the property estimatedPrintTimeRemainingMs
      //var instance = new PreFormApi.Form4Printer();
      //expect(instance).to.be();
    });

    it('should have the property tankId (base name: "tank_id")', function() {
      // uncomment below and update the code to test the property tankId
      //var instance = new PreFormApi.Form4Printer();
      //expect(instance).to.be();
    });

    it('should have the property tankMaterialCode (base name: "tank_material_code")', function() {
      // uncomment below and update the code to test the property tankMaterialCode
      //var instance = new PreFormApi.Form4Printer();
      //expect(instance).to.be();
    });

    it('should have the property cartridgeData (base name: "cartridge_data")', function() {
      // uncomment below and update the code to test the property cartridgeData
      //var instance = new PreFormApi.Form4Printer();
      //expect(instance).to.be();
    });

    it('should have the property readyToPrintNow (base name: "ready_to_print_now")', function() {
      // uncomment below and update the code to test the property readyToPrintNow
      //var instance = new PreFormApi.Form4Printer();
      //expect(instance).to.be();
    });

  });

}));
