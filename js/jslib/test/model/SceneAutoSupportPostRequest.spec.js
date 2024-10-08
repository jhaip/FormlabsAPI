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
    instance = new PreFormApi.SceneAutoSupportPostRequest();
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

  describe('SceneAutoSupportPostRequest', function() {
    it('should create an instance of SceneAutoSupportPostRequest', function() {
      // uncomment below and update the code to test SceneAutoSupportPostRequest
      //var instance = new PreFormApi.SceneAutoSupportPostRequest();
      //expect(instance).to.be.a(PreFormApi.SceneAutoSupportPostRequest);
    });

    it('should have the property models (base name: "models")', function() {
      // uncomment below and update the code to test the property models
      //var instance = new PreFormApi.SceneAutoSupportPostRequest();
      //expect(instance).to.be();
    });

    it('should have the property raftType (base name: "raft_type")', function() {
      // uncomment below and update the code to test the property raftType
      //var instance = new PreFormApi.SceneAutoSupportPostRequest();
      //expect(instance).to.be();
    });

    it('should have the property raftLabelEnabled (base name: "raft_label_enabled")', function() {
      // uncomment below and update the code to test the property raftLabelEnabled
      //var instance = new PreFormApi.SceneAutoSupportPostRequest();
      //expect(instance).to.be();
    });

    it('should have the property breakawayStructureEnabled (base name: "breakaway_structure_enabled")', function() {
      // uncomment below and update the code to test the property breakawayStructureEnabled
      //var instance = new PreFormApi.SceneAutoSupportPostRequest();
      //expect(instance).to.be();
    });

    it('should have the property density (base name: "density")', function() {
      // uncomment below and update the code to test the property density
      //var instance = new PreFormApi.SceneAutoSupportPostRequest();
      //expect(instance).to.be();
    });

    it('should have the property touchpointSizeMm (base name: "touchpoint_size_mm")', function() {
      // uncomment below and update the code to test the property touchpointSizeMm
      //var instance = new PreFormApi.SceneAutoSupportPostRequest();
      //expect(instance).to.be();
    });

    it('should have the property internalSupportsEnabled (base name: "internal_supports_enabled")', function() {
      // uncomment below and update the code to test the property internalSupportsEnabled
      //var instance = new PreFormApi.SceneAutoSupportPostRequest();
      //expect(instance).to.be();
    });

    it('should have the property raftThicknessMm (base name: "raft_thickness_mm")', function() {
      // uncomment below and update the code to test the property raftThicknessMm
      //var instance = new PreFormApi.SceneAutoSupportPostRequest();
      //expect(instance).to.be();
    });

    it('should have the property slopeMultiplier (base name: "slope_multiplier")', function() {
      // uncomment below and update the code to test the property slopeMultiplier
      //var instance = new PreFormApi.SceneAutoSupportPostRequest();
      //expect(instance).to.be();
    });

    it('should have the property heightAboveRaftMm (base name: "height_above_raft_mm")', function() {
      // uncomment below and update the code to test the property heightAboveRaftMm
      //var instance = new PreFormApi.SceneAutoSupportPostRequest();
      //expect(instance).to.be();
    });

    it('should have the property zCompressionCorrectionMm (base name: "z_compression_correction_mm")', function() {
      // uncomment below and update the code to test the property zCompressionCorrectionMm
      //var instance = new PreFormApi.SceneAutoSupportPostRequest();
      //expect(instance).to.be();
    });

    it('should have the property earlyLayerMergeMm (base name: "early_layer_merge_mm")', function() {
      // uncomment below and update the code to test the property earlyLayerMergeMm
      //var instance = new PreFormApi.SceneAutoSupportPostRequest();
      //expect(instance).to.be();
    });

  });

}));
