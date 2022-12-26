import React from "react";
import "./services1.css";



const Services1 = (props) => {
    return (
    <>
        <img src={props.img} alt="Imagen de la tarjeta" className="aaaa"/>
        <h2>{props.text}</h2>
    </>
    )

}

export {Services1}