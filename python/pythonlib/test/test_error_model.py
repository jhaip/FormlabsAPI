# coding: utf-8

"""
    PreForm API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from formlabs.models.error_model import ErrorModel

class TestErrorModel(unittest.TestCase):
    """ErrorModel unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ErrorModel:
        """Test ErrorModel
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ErrorModel`
        """
        model = ErrorModel()
        if include_optional:
            return ErrorModel(
                error = formlabs.models.error_model_error.ErrorModel_error(
                    code = '', 
                    message = '', )
            )
        else:
            return ErrorModel(
        )
        """

    def testErrorModel(self):
        """Test ErrorModel"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
