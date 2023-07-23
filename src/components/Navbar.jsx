import React from "react";
import reactLogo from "/src/assets/react.svg";
import "../css/Navbar.css"

export default function Navbar () {
    return (
        <header>
            <img src={reactLogo}></img>
            <h1>React Facts</h1>
        </header>
    )
}