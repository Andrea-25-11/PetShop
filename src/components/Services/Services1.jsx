import React from "react";
import "./services1.css";
import data from "../Services/services.json";
//import useSelector and useDispatch from redux
import {useSelector, useDispatch}from 'react-redux';


export const Services1 = (props) => {
    return (
    <>
        <div className="card">
            <img src={props.img} className="imgServices"alt="Imagen de la tarjeta"/>
            <h2>{props.text}</h2>
        </div>
    </>
    )

}


export const Services2 = (props) => {
    //Reduce
    const cart = useSelector((state)=>state)
    console.log(cart)
    const dispatch = useDispatch()
    return (
        
    <>
        
    </>
    )

}
