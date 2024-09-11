# coding: utf-8

"""
    PreForm API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from formlabs.models.print_validation_result_model import PrintValidationResultModel

class TestPrintValidationResultModel(unittest.TestCase):
    """PrintValidationResultModel unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PrintValidationResultModel:
        """Test PrintValidationResultModel
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PrintValidationResultModel`
        """
        model = PrintValidationResultModel()
        if include_optional:
            return PrintValidationResultModel(
                per_model_results = {
                    'key' : formlabs.models.print_validation_result_model_per_model_results_value.PrintValidationResultModel_per_model_results_value(
                        cups = 56, 
                        unsupported_minima = 56, 
                        undersupported = True, 
                        has_seamline = True, )
                    }
            )
        else:
            return PrintValidationResultModel(
        )
        """

    def testPrintValidationResultModel(self):
        """Test PrintValidationResultModel"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
