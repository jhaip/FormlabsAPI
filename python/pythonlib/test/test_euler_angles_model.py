# coding: utf-8

"""
    PreForm API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from formlabs.models.euler_angles_model import EulerAnglesModel

class TestEulerAnglesModel(unittest.TestCase):
    """EulerAnglesModel unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> EulerAnglesModel:
        """Test EulerAnglesModel
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `EulerAnglesModel`
        """
        model = EulerAnglesModel()
        if include_optional:
            return EulerAnglesModel(
                x = 1.337,
                y = 1.337,
                z = 1.337
            )
        else:
            return EulerAnglesModel(
                x = 1.337,
                y = 1.337,
                z = 1.337,
        )
        """

    def testEulerAnglesModel(self):
        """Test EulerAnglesModel"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
