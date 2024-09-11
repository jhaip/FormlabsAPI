# PreFormApi.SceneAutoSupportPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**ModelsSelectionModel**](ModelsSelectionModel.md) |  | 
**raftType** | **String** | The type of raft to apply to the models | [optional] 
**raftLabelEnabled** | **Boolean** | Whether to enable raft labeling | [optional] 
**breakawayStructureEnabled** | **Boolean** | Whether to enable breakaway structure | [optional] 
**density** | **Number** | The density of the supports | [optional] 
**touchpointSizeMm** | **Number** | The size of the touchpoints | [optional] 
**internalSupportsEnabled** | **Boolean** | Whether to enable internal supports | [optional] 
**raftThicknessMm** | **Number** | The thickness of the raft | [optional] 
**slopeMultiplier** | **Number** | The slope multiplier | [optional] 
**heightAboveRaftMm** | **Number** |  | [optional] 
**zCompressionCorrectionMm** | **Number** |  | [optional] 
**earlyLayerMergeMm** | **Number** |  | [optional] 



## Enum: RaftTypeEnum


* `FULL_RAFT` (value: `"FULL_RAFT"`)

* `MINI_RAFTS` (value: `"MINI_RAFTS"`)

* `NONE` (value: `"NONE"`)




