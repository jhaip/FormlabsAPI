# PreFormApi.DeviceStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**productName** | **String** |  | 
**status** | **String** |  | 
**isConnected** | **Boolean** |  | 
**connectionType** | **String** |  | 
**ipAddress** | **String** |  | 
**firmwareVersion** | **String** |  | 
**dashboardGroupId** | **String** |  | 
**dashboardQueueId** | **String** |  | 
**isRemotePrintEnabled** | **Boolean** |  | 
**estimatedPrintTimeRemainingMs** | **Number** |  | 
**tankId** | **String** |  | 
**tankMaterialCode** | **String** |  | 
**cartridgeData** | [**{String: Form4PrinterCartridgeDataValue}**](Form4PrinterCartridgeDataValue.md) |  | 
**readyToPrintNow** | **Boolean** |  | 
**formAutoStatus** | **String** |  | 
**bedTemperatureC** | **Number** |  | 
**powderLevel** | **String** |  | 
**printingLayer** | **Number** |  | 
**printingGuid** | **String** |  | 
**cylinderMaterialCode** | **String** |  | 
**cylinderSerial** | **String** |  | 
**printerMaterialCode** | **String** |  | 
**powderCreditG** | **Number** |  | 



## Enum: ConnectionTypeEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `VIRTUAL` (value: `"VIRTUAL"`)

* `REMOTE` (value: `"REMOTE"`)

* `USB` (value: `"USB"`)

* `WIFI` (value: `"WIFI"`)

* `ETHERNET` (value: `"ETHERNET"`)

* `empty` (value: `""`)




