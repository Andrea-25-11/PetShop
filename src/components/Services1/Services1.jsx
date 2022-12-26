import React from "react";
import "./services1.css";


const Services1 = (props) => {
    return (
    <>
        <div className="card">
            <img src={props.img} alt="Imagen de la tarjeta"/>
            <h2>{props.text}</h2>
        </div>
    </>
    )

}

export {Services1}