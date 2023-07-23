import React from "react";
import "../css/MainContent.css"
import bullet from "../assets/bullet.svg"

export default function MainContent () {
    return (
        <main>
            <h2>Fun facts about React</h2>
            <ul>
                <li>
                    <img src={bullet}></img>
                    <p>Was first released in 2013</p>
                </li>
                <li>
                    <img src={bullet}></img>
                    <p>Was originally created by Jordan Walke</p>
                </li>
                <li>
                    <img src={bullet}></img>
                    <p>Has well over 100K stars on GitHub</p>
                </li>
                <li>
                    <img src={bullet}></img>
                    <p>Is maintained by Facebook</p>
                    </li>
                <li>
                    <img src={bullet}></img>
                    <p>Powers thousands of enterprise apps, including mobile apps</p>
                </li>
            </ul>
        </main>
    )
}