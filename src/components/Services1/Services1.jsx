import React from "react";
import "./services1.css";


const Services1 = (props) => {
    return (
    <>
        <div className="card">
            <img src={props.img} className="imgServices"alt="Imagen de la tarjeta"/>
            <h2>{props.text}</h2>
            <p className="descriptionOfServices">{props.description}</p>
            <img src={props.icon} className="iconCart"alt="" />
        </div>
    </>
    )

}

export {Services1}