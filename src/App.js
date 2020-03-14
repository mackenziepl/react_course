import React from 'react';
import logo from './logo.svg';
import './App.css';
import Exchange from "./component/Exchange";
import MyTable1 from "./component/MyTable1";
import MyTable2 from "./component/MyTable2";

function App() {
  return (
    <div className="App">
      {/*To bedzie header*/}
      <header className="App-header">
        <Exchange/>
        <br/>
        <MyTable1/>
        <br/>
        <MyTable2/>
        <br/>
        {/*<Cars name='dupa'/>*/}
        {/*<br/>*/}
        {/*<Bikes/>*/}
        {/*<br/>*/}
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

