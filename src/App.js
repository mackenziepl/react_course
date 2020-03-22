import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import './App.css';
import Diet from "./component/Diet";
import Exchange from "./component/Exchange";
import Logo from "./component/Logo";
import Contact from "./component/Contact";

function App() {
  return (
      <Router>
          <div>
              <ul className="header">
                  <li><NavLink exact to="/">Strona główna</NavLink></li>
                  <li><NavLink to="/diet">Diet</NavLink></li>
                  <li><NavLink to="/exchange">Exchange</NavLink></li>
                  <li><NavLink to="/contact">Kontakt</NavLink></li>
              </ul>
              <div className="content">
                  <Route exact path="/" component={Logo}/>
                  <Route path="/diet" component={Diet}/>
                  <Route path="/exchange" component={Exchange}/>
                  <Route path="/contact" component={Contact}/>
              </div>
          </div>
      </Router>
  );
}

export default App;

