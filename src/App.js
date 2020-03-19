import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Diet from "./component/Diet";
import Exchange from "./component/Exchange";

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
              <div className="App-div-diet">
                  <Switch>
                      <Route path="/diet">
                        <Diet className="App-diet"/>
                        <br/>
                          <Link to="/">
                              <button>Exit</button>
                              <Link to="/exchange">
                                  <button>Exchange</button>
                              </Link>
                          </Link>
                      </Route>
                      <Route path="/exchange">
                          <Exchange/>
                          <br/>
                          <Link to="/">
                              <button>Exit</button>
                              <Link to="/diet">
                                  <button>Diet</button>
                              </Link>
                          </Link>
                      </Route>
                  </Switch>
              </div>
              <h5>Aby zacząć, naciśnij logo :)</h5>
            <Link to="/diet">
                <img src={logo} className="App-logo" alt="logo"/>
            </Link>
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

      </Router>
  );
}

export default App;

