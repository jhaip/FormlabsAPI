# coding: utf-8

"""
    PreForm API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.v1_print_post200_response import V1PrintPost200Response

class TestV1PrintPost200Response(unittest.TestCase):
    """V1PrintPost200Response unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> V1PrintPost200Response:
        """Test V1PrintPost200Response
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `V1PrintPost200Response`
        """
        model = V1PrintPost200Response()
        if include_optional:
            return V1PrintPost200Response(
                job_id = ''
            )
        else:
            return V1PrintPost200Response(
        )
        """

    def testV1PrintPost200Response(self):
        """Test V1PrintPost200Response"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
