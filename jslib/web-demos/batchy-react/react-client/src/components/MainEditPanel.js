import React from 'react';
import Select from 'react-select'

var pre_form_api = require('pre_form_api');
var defaultClient = pre_form_api.ApiClient.instance;
defaultClient.defaultHeaders = {};
var api = new pre_form_api.DefaultApi()


class MainEditPanel extends React.Component {
  constructor(props) {
    super(props);

    this.currentScene = null; // Could have pending edits not yet acknowledged by the server
    // this.confirmedScene = null; // Last state given to us by the server

    this.state = {
      availablePrinters: [ // Hardcode for now
        {
          label: 'Curly Eel',
          value: 'curly_eel',
          machineType: 'FORM-4-0',
          ip_address: '192.168.1.34',
        },
        {
          label: 'Neighborly lynx',
          value: 'neighborly_lynx',
          machineType: 'PILK-1-0',
          ip_address: '192.TODO',
        },
      ],
      availableMaterials: [ // Hardcode for now
        {
          label: 'Rigid 10k',
          value: 'FLRG1011',
          thickness: 0.1, // TODO: How to choose?
          print_settings: "DEFAULT", // TODO: How to choose?
        },
        {
          label: 'Nylon 11',
          value: 'FLP11B01',
          thickness: 0.11,
          print_settings: "DEFAULT",
        }
      ],
      jobModels: [

      ],
      jobBatches: [

      ],
    };

    this.state.selectedPrinter = this.getPrinterById('curly_eel');
    this.state.selectedMaterial = this.getMaterialByCode('FLRG1011');
  }

  componentDidMount() {
    this.initializeSceneIfNeeded();
  }

  initializeSceneIfNeeded() {
    if (this.currentScene) {
      return;
    }
    if (!this.state.selectedPrinter || !this.state.selectedMaterial) {
      // Can't create a scene without a printer or a material for now
      return;
    }

    api.scenePost(
      this.state.selectedPrinter.machineType,
      this.state.selectedMaterial.value,
      this.state.selectedMaterial.print_settings,
      this.state.selectedMaterial.thickness,
      () => {
        console.log('New scene successfully created');
        this.loadModels([
          'Spray Nozzle feels-like/Spray Nozzle feels-like - Grip.stl',
          'Spray Nozzle feels-like/Spray Nozzle feels-like - Handle.stl',
          'Spray Nozzle feels-like/Spray Nozzle feels-like - Head.stl',
          // 'Spray Nozzle feels-like/Spray Nozzle feels-like - Rear Knob.stl',
          // 'Spray Nozzle feels-like/Spray Nozzle feels-like - Twist Ring.stl',
        ])
      } // TODO set confirmed scene
    );
    this.currentScene = {}; // TODO: Store pending edits
  }

  // TODO: async/await
  loadModel(modelFilePath, callback) {
    return api.importModelPost('/Users/kevin.otoole/repos/PreForm/app/PreFormServer/libraries/demo-stls/'
        + modelFilePath, (err, data, response) => {
      if (err) {
        console.error('Failed to load model ' + modelFilePath);
        console.error(err);
        return;
      }
      console.log('Added model ' + modelFilePath);
      callback(); // blocking on load, could make this sync if/when we block on writes server-side
      this.exportStlToCanvas('singleton-scene'); // non-blocking on read-only export
    });
  }

  loadModels(modelFilePaths) {
    if (modelFilePaths.length > 0) {
      this.loadModel(modelFilePaths[0], () => {
        var restOfList = modelFilePaths.slice(1);
        console.log(restOfList);
        this.loadModels(restOfList);
      });
    }
  }

  exportStlToCanvas(outputBaseName) {
    // TODO: cleanup current this.confirmedScene here, or after loaded by Scene3DView
    const uniqueKey = Date.now();
    const outputPath = `files/output-scene-stls/${outputBaseName}-${uniqueKey}.stl`
    // TODO: Some way of resolving the full path
    const fullOutputPath = `/Users/kevin.otoole/repos/PreForm/app/PreFormServer/libraries/jslib/web-demos/batchy-react/file-server/${outputPath}`;
    api.exportPost(fullOutputPath, () => {
      console.log(`scene exported to ${outputPath}`);
      this.props.setConfirmedScenePath(outputPath);
    });
  }

  getPrinterById(id) {
    return this.state.availablePrinters.find(printer => printer.value === id);
  }

  getMaterialByCode(materialCode) {
    return this.state.availableMaterials.find(material => material.value === materialCode);
  }

  onPrinterChanged() {
    // TODO
  }

  onMaterialChanged() {
    // TODO
  }

  onAutoOrientClick = () => {
    api.autoOrientPost({ 'models' : 'ALL' }, (err, data, response) => {
      this.exportStlToCanvas('singleton-scene');
    });
  }

  onAutoLayoutClick = () => {
    api.autoLayoutPost({ 'models' : 'ALL' }, (err, data, response) => {
      this.exportStlToCanvas('singleton-scene');
    });
  }

  onAutoSupportClick = () => {
    api.autoSupportPost({ 'models' : 'ALL' }, (err, data, response) => {
      this.exportStlToCanvas('singleton-scene');
    });
  }

  render() {
    return (
      <div className='editor-panel main-editor-panel'>
        <label>Printer</label>
        <Select options={this.state.availablePrinters} defaultValue={this.state.selectedPrinter}
                isLoading={true} />
        <label>Material</label>
        <Select options={this.state.availableMaterials} defaultValue={this.state.selectedMaterial}/>
        <button className='btn' onClick={this.onAutoOrientClick}>Auto orient</button>
        <button className='btn' onClick={this.onAutoLayoutClick}>Auto layout</button>
        <button className='btn' onClick={this.onAutoSupportClick}>Auto support</button>
      </div>
    );
  }
}

export default MainEditPanel;
