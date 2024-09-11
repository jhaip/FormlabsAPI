# PreFormApi.ModelProperties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier of the model | [optional] 
**name** | **String** | The name of the model used within job preparation. | [optional] 
**position** | [**ScenePositionModel**](ScenePositionModel.md) |  | [optional] 
**orientation** | [**EulerAnglesModel**](EulerAnglesModel.md) |  | [optional] 
**scale** | **Number** | The scale factor to apply to the model | [optional] 
**units** | [**UnitsModel**](UnitsModel.md) |  | [optional] 
**bbox** | [**ModelPropertiesBbox**](ModelPropertiesBbox.md) |  | [optional] 
**originalFile** | **String** | The original file path of the model | [optional] 
**visible** | **Boolean** | Whether the model is visible in the scene | [optional] 
**hasSupports** | **Boolean** | Whether the model has supports | [optional] 
**inBounds** | **Boolean** | Whether the model is within the build volume | [optional] 
**rawMeshHash** | **String** | The hash of the raw mesh data | [optional] 
**canonicalModelHash** | **String** | The hash of the canonical model data | [optional] 


