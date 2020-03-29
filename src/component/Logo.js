import React from "react";
import logo from "../logo.svg";
import "./Logo.css"

const Logo = () => {
    return (
            <div className="Logo">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
    )
};
export default Logo;