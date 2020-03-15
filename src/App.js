import React from 'react';
import logo from './logo.svg';
import './App.css';
import Diet from "./component/Diet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="App-div-diet">
              <Diet className="App-diet"/>
          </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

