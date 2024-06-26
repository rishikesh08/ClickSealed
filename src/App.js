import React from "react";
import logo from "./logo.svg";
import DigitalSignature from './DigitalSignature';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Signetic.ly</h1>
        <h4><em>Your's Digital Singnature Generator</em></h4>

        <DigitalSignature />
      </header>
    </div>
  );
}

export default App;
