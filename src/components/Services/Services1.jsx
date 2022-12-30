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
        <div className="card" key={props.id}>
            <img src={props.img} className="imgServices"alt="Imagen de la tarjeta"/>
            <h2>{props.text}</h2>
            <p className="pPage">{props.description}</p>
            <p className="priceDescription">{props.price}</p>
            <div>
                <button onClick={()=>dispatch({type:'ADD',payload:data})}>
                    <img style = {{width:"40px", height:"40px"}}src={props.icon} className="d"alt="" />    
                </button>
            </div>
        </div>
    </>
    )

}
