# coding: utf-8

"""
    PreForm API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from formlabs.models.scene_materials_model import SceneMaterialsModel

class TestSceneMaterialsModel(unittest.TestCase):
    """SceneMaterialsModel unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> SceneMaterialsModel:
        """Test SceneMaterialsModel
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `SceneMaterialsModel`
        """
        model = SceneMaterialsModel()
        if include_optional:
            return SceneMaterialsModel(
                volume_ml = 1.337,
                unsupported_volume_ml = 1.337,
                total_powder_ml = 1.337,
                total_powder_kg = 1.337,
                total_sintered_powder_ml = 1.337,
                total_sintered_powder_kg = 1.337,
                mass_packing_density = 1.337
            )
        else:
            return SceneMaterialsModel(
        )
        """

    def testSceneMaterialsModel(self):
        """Test SceneMaterialsModel"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
