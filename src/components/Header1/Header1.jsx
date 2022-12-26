import React from "react";
import logo from "./img/logo.png";  
import patita from "./img/patita.png";  
import "./header1.css";

export function Header1() {
    return (
    <>
    <header className="header1">
        <img src={logo} alt="" className="logoHeader1"/>
        <img src={patita} alt="" className="pawHeader1"/>
    </header>
    <header className="header2" id="header2">
        <img className="logoHeader1"src={logo} alt="" />
        <ul className="navBar2">
            <li className="liNavBar2"><i class="ri-home-4-line"></i>INICIO</li>
            <li className="liNavBar2"><i class="ri-hand-heart-line"></i>SERVICIOS</li>
            <li className="liNavBar2"><i class="ri-search-eye-line"></i>MARCAS ALIADAS</li>
            <li className="liNavBar2"><i class="ri-chat-3-line"></i>CONTÁCTANOS</li>
        </ul>
    </header>
</>
    );
};