import React from 'react';
import 'remixicon/fonts/remixicon.css';
import "../Home/home.css";
import "../ServicesPage/servicesPage.css";
import Header1 from '../Header1/Header1';
// import { Services2 } from '../Services/Services1';
import {Footer} from "../Footer/Footer";
import service from "../Services/services.json";
import "../Services/services1.css"

//import useSelector and useDispatch from redux
import {useSelector, useDispatch}from 'react-redux';

const ServicesPage = _ => {
    //Reduce
    const cart = useSelector((state)=>state)
    console.log(cart)
    const dispatch = useDispatch()
    return (
    <>
        <Header1/>
        <h1>NUESTROS SERVICIOS</h1>
        <p className='introServicios'>Somos una tienda de mascotas local que se especializa en proporcionar todo lo que necesita para cuidar a su mascota.Nuestro personal amable y bien informado está siempre dispuesto a ayudarle a encontrar lo que necesita y a ofrecer consejos y recomendaciones para el cuidado adecuado de su mascota. Nos sentimos muy afortunados de poder trabajar con mascotas todos los días y esperamos tener la oportunidad de conocer a tu mascota pronto. ¡Bienvenido a nuestra tienda!</p>
        <section className='cardServices'>
        {service.map(service =>
        <div className="cardPage" key={service.id}>
            <img src={service.img} className="imgPage"alt="Imagen de la tarjeta"/>
            <h2>{service.text}</h2>
            <p className="pPage">{service.description}</p>
            <div className="iconPage">
                <p className='priceDescription'>{service.price}</p>
                <button onClick={()=>dispatch({type:'ADD',payload:service})}>
                    <img style = {{width:"40px", height:"40px"}}src={service.icon} alt="" />    
                </button>
            </div>
        </div>
        )}
        </section>
        <Footer/>
    </>
)
};

export default ServicesPage;