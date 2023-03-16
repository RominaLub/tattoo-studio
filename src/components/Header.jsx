import React from "react";
import "../styles/Header.css"
import logo from "../images/bottel_logo.png"

function Header() {

    return (
        <div className="header">   
            <img src={logo} alt="" className="logo"/>
            <h1>Bottel - Das Tattoo und Piercing Studio in Ahaus</h1>
            <img src={logo} alt="" className="logo"/>
        </div>
    )
}

export default Header;