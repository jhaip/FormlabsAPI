# coding: utf-8

"""
    PreForm API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from formlabs.models.scene_model import SceneModel

class TestSceneModel(unittest.TestCase):
    """SceneModel unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> SceneModel:
        """Test SceneModel
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `SceneModel`
        """
        model = SceneModel()
        if include_optional:
            return SceneModel(
                models = [
                    formlabs.models.model_properties.ModelProperties(
                        id = '', 
                        name = '', 
                        position = formlabs.models.scene_position_model.ScenePositionModel(
                            x = 1.337, 
                            y = 1.337, 
                            z = 1.337, ), 
                        orientation = formlabs.models.euler_angles_model.EulerAnglesModel(
                            x = 1.337, 
                            y = 1.337, 
                            z = 1.337, ), 
                        scale = 1.337, 
                        units = 'MILLIMETERS', 
                        bbox = formlabs.models.model_properties_bbox.ModelProperties_bbox(
                            min_corner = formlabs.models.scene_position_model.ScenePositionModel(
                                x = 1.337, 
                                y = 1.337, 
                                z = 1.337, ), 
                            max_corner = , ), 
                        original_file = '', 
                        visible = True, 
                        has_supports = True, 
                        in_bounds = True, 
                        raw_mesh_hash = '', 
                        canonical_model_hash = '', )
                    ],
                scene_type = formlabs.models.scene_type_model.SceneTypeModel(
                    machine_type = '', 
                    material_code = '', 
                    print_setting = '', 
                    layer_thickness = 1.337, ),
                materials = None,
                layers = 56
            )
        else:
            return SceneModel(
        )
        """

    def testSceneModel(self):
        """Test SceneModel"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
