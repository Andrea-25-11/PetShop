import React from 'react';
import 'remixicon/fonts/remixicon.css';
import "./servicesPage.css";
import Header1 from '../Header1/Header1';
import {Form} from "../Form/Form";
import {Services1} from "../Services1/Services1";
import {Footer} from "../Footer/Footer";
import data from "../Services1/services.json";

const ServicesPage = _ => {
    return (
    <>
        <Header1/>
        <h1>NUESTROS SERVICIOS</h1>
        <p className='introServicios'>Somos una tienda de mascotas local que se especializa en proporcionar todo lo que necesita para cuidar a su mascota. Ofrecemos una amplia variedad de productos de alta calidad, como comida, juguetes, ropa y accesorios para todo tipo de mascotas, desde perros y gatos hasta pájaros y reptiles. Nuestro personal amable y bien informado está siempre dispuesto a ayudarle a encontrar lo que necesita y a ofrecer consejos y recomendaciones para el cuidado adecuado de su mascota. Además, ofrecemos servicios de groomer y tenemos un área de juegos y socialización para que los clientes puedan interactuar con los animales en nuestra tienda. Nos sentimos muy afortunados de poder trabajar con mascotas todos los días y esperamos tener la oportunidad de conocer a tu mascota pronto. ¡Bienvenido a nuestra tienda!</p>
        {data.map(service =>
        <section className='descriptionProducts'>
        <Services1
            img = {service.img}
            text= {service.text}
            description = {service.description}
            icon = {service.icon}
        />
        </section>
        )}

        <Footer/>
    </>
)
};

export default ServicesPage;