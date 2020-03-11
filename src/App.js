import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cars from "./component/Cars";
import Bikes from "./component/Bikes";
import Exchange from "./component/Exchange";


function App() {
  return (
    <div className="App">
      {/*TO bedzie header*/}
      <header className="App-header">
        <Exchange/>
        <br/>
{/*        <br/>
        <Cars name='dupa'/>
        <br/>
        <Bikes/>
        <br/>*/}
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

