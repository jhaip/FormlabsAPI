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
    instance = new PreFormApi.Fuse11Printer();
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

  describe('Fuse11Printer', function() {
    it('should create an instance of Fuse11Printer', function() {
      // uncomment below and update the code to test Fuse11Printer
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be.a(PreFormApi.Fuse11Printer);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property productName (base name: "product_name")', function() {
      // uncomment below and update the code to test the property productName
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property isConnected (base name: "is_connected")', function() {
      // uncomment below and update the code to test the property isConnected
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property connectionType (base name: "connection_type")', function() {
      // uncomment below and update the code to test the property connectionType
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property ipAddress (base name: "ip_address")', function() {
      // uncomment below and update the code to test the property ipAddress
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property firmwareVersion (base name: "firmware_version")', function() {
      // uncomment below and update the code to test the property firmwareVersion
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property isRemotePrintEnabled (base name: "is_remote_print_enabled")', function() {
      // uncomment below and update the code to test the property isRemotePrintEnabled
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property estimatedPrintTimeRemainingMs (base name: "estimated_print_time_remaining_ms")', function() {
      // uncomment below and update the code to test the property estimatedPrintTimeRemainingMs
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property bedTemperatureC (base name: "bed_temperature_c")', function() {
      // uncomment below and update the code to test the property bedTemperatureC
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property powderLevel (base name: "powder_level")', function() {
      // uncomment below and update the code to test the property powderLevel
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property printingLayer (base name: "printing_layer")', function() {
      // uncomment below and update the code to test the property printingLayer
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property printingGuid (base name: "printing_guid")', function() {
      // uncomment below and update the code to test the property printingGuid
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property cylinderMaterialCode (base name: "cylinder_material_code")', function() {
      // uncomment below and update the code to test the property cylinderMaterialCode
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property cylinderSerial (base name: "cylinder_serial")', function() {
      // uncomment below and update the code to test the property cylinderSerial
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property printerMaterialCode (base name: "printer_material_code")', function() {
      // uncomment below and update the code to test the property printerMaterialCode
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

    it('should have the property powderCreditG (base name: "powder_credit_g")', function() {
      // uncomment below and update the code to test the property powderCreditG
      //var instance = new PreFormApi.Fuse11Printer();
      //expect(instance).to.be();
    });

  });

}));
