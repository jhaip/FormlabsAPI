# coding: utf-8

"""
    PreForm API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional, Union
from typing_extensions import Annotated
from formlabs.models.models_selection_model import ModelsSelectionModel
from typing import Optional, Set
from typing_extensions import Self

class SceneAutoSupportPostRequest(BaseModel):
    """
    SceneAutoSupportPostRequest
    """ # noqa: E501
    models: ModelsSelectionModel
    raft_type: Optional[StrictStr] = Field(default=None, description="The type of raft to apply to the models")
    raft_label_enabled: Optional[StrictBool] = Field(default=None, description="Whether to enable raft labeling")
    breakaway_structure_enabled: Optional[StrictBool] = Field(default=None, description="Whether to enable breakaway structure")
    density: Optional[Union[Annotated[float, Field(strict=True, ge=0)], Annotated[int, Field(strict=True, ge=0)]]] = Field(default=None, description="The density of the supports")
    touchpoint_size_mm: Optional[Union[Annotated[float, Field(strict=True, ge=0)], Annotated[int, Field(strict=True, ge=0)]]] = Field(default=None, description="The size of the touchpoints")
    internal_supports_enabled: Optional[StrictBool] = Field(default=None, description="Whether to enable internal supports")
    raft_thickness_mm: Optional[Union[Annotated[float, Field(strict=True, ge=0)], Annotated[int, Field(strict=True, ge=0)]]] = Field(default=None, description="The thickness of the raft")
    slope_multiplier: Optional[Union[Annotated[float, Field(strict=True, ge=0)], Annotated[int, Field(strict=True, ge=0)]]] = Field(default=None, description="The slope multiplier")
    height_above_raft_mm: Optional[Union[Annotated[float, Field(strict=True, ge=0)], Annotated[int, Field(strict=True, ge=0)]]] = None
    z_compression_correction_mm: Optional[Union[Annotated[float, Field(strict=True, ge=0)], Annotated[int, Field(strict=True, ge=0)]]] = None
    early_layer_merge_mm: Optional[Union[Annotated[float, Field(strict=True, ge=0)], Annotated[int, Field(strict=True, ge=0)]]] = None
    __properties: ClassVar[List[str]] = ["models", "raft_type", "raft_label_enabled", "breakaway_structure_enabled", "density", "touchpoint_size_mm", "internal_supports_enabled", "raft_thickness_mm", "slope_multiplier", "height_above_raft_mm", "z_compression_correction_mm", "early_layer_merge_mm"]

    @field_validator('raft_type')
    def raft_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['FULL_RAFT', 'MINI_RAFTS', 'NONE']):
            raise ValueError("must be one of enum values ('FULL_RAFT', 'MINI_RAFTS', 'NONE')")
        return value

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of SceneAutoSupportPostRequest from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of models
        if self.models:
            _dict['models'] = self.models.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of SceneAutoSupportPostRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "models": ModelsSelectionModel.from_dict(obj["models"]) if obj.get("models") is not None else None,
            "raft_type": obj.get("raft_type"),
            "raft_label_enabled": obj.get("raft_label_enabled"),
            "breakaway_structure_enabled": obj.get("breakaway_structure_enabled"),
            "density": obj.get("density"),
            "touchpoint_size_mm": obj.get("touchpoint_size_mm"),
            "internal_supports_enabled": obj.get("internal_supports_enabled"),
            "raft_thickness_mm": obj.get("raft_thickness_mm"),
            "slope_multiplier": obj.get("slope_multiplier"),
            "height_above_raft_mm": obj.get("height_above_raft_mm"),
            "z_compression_correction_mm": obj.get("z_compression_correction_mm"),
            "early_layer_merge_mm": obj.get("early_layer_merge_mm")
        })
        return _obj


