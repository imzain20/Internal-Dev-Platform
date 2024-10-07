import React from 'react';
import Dashboard from './components/Dashboard';
import PipelineStatus from './components/PipelineStatus';
import ProjectManagement from './components/ProjectManagement';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
        <PipelineStatus />
        <ProjectManagement />
      </header>
    </div>
  );
}

export default App;
