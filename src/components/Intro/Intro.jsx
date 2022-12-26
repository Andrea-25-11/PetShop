import React from "react";
import img from "./img/intro_img.jpg";  
import "./intro.css";

export function Intro() {
    return (
    <div className="introPpal">
    <img className="imgIntro" src={img} alt="" />
    <p>Bienvenido! Somos la veterinaria Pet Shop Gatos & Perros, estamos aqui para brindarle los mejores servicios y tu peludo y productos tambien! Contamos con mas de 5 años de experiencia brindando servicios de calidad </p>
    </div>);
};