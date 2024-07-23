import './css/Global.css';
import './css/App.css';
import './css/EditPanels.css';

import React, { useState } from 'react';
import FullScreenDragAndDrop from './components/FullScreenDragAndDrop';
import Scene3DView from './components/Scene3DView';
import MainEditPanel from './components/MainEditPanel';
import BatchEditPanel from './components/BatchEditPanel';
import NavBar from './components/NavBar';

function App() {
  const [confirmedScenePath, setConfirmedScenePath] = useState(null);

  return (
    <div className="App">
      <title>Batchy</title>
      <FullScreenDragAndDrop />
      <NavBar />
      <div id="root-editor">
        <div className="viewer-container">
          <Scene3DView stlPath={confirmedScenePath} />
        </div>
        <BatchEditPanel />
        <MainEditPanel setConfirmedScenePath={setConfirmedScenePath} />
      </div>
    </div>
  );
}

export default App;
