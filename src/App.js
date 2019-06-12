import React from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './components/description.js';
import Visualizer from './components/visualizer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>For Loop Visualizer</h1>
        <Description />
      </header>
      <main>
        <Visualizer />
      </main>
    </div>
  );
}

export default App;
