import React from "react";
import logo from "./img/logo.png";  
import "./header2.css";

export function Header2() {
    return (<header className="header2">
        <img className="logoHeader2"src={logo} alt="" />
        <ul className="navBar2">
            <li className="liNavBar2"><i class="ri-home-4-line"></i>INICIO</li>
            <li className="liNavBar2"><i class="ri-hand-heart-line"></i>SERVICIOS</li>
            <li className="liNavBar2"><i class="ri-search-eye-line"></i>MARCAS ALIADAS</li>
            <li className="liNavBar2"><i class="ri-chat-3-line"></i>CONTÁCTANOS</li>
        </ul>
    </header>);
};