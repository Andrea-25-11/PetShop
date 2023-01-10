import React from 'react';
import 'remixicon/fonts/remixicon.css';
import "./Cart1.css";
import Header1 from '../Header1/Header1';
// import { Services2 } from '../Services/Services1';
import {Footer} from "../Footer/Footer";
import {useSelector, useDispatch}from 'react-redux';
import ReactWhatsapp from 'react-whatsapp';


const CartShop = _ => {
    //Reduce
    const cart = useSelector((state)=>state)
    console.log(cart)
    const dispatch = useDispatch()
    const addition = (acc, currentvalue) => {
        return acc + currentvalue.price * currentvalue.quantity;
      };
     const total = cart.reduce(addition, 0);
    return (
    <>
        <Header1/>
        <h1>NUESTROS SERVICIOS</h1>
        <p className='introServicios'>!Bienvenido a tu carrito de compras! Aquí podrás ser redirigido a uno de nuestros agentes para atender tus cotizaciones y dudas. Recuerda que algunos de nuestros servicios varían en su valor dependiendo de las características de tu peludo! Por eso te invitamos a visitarnos en la Carrera 10 #134b-85. **Esto no es una pasarela de pago**</p>
        <section className='cardServices'>
        {cart.map(service =>
        <div className="cardPage" key={service.id}>
            <div className='finalList'>
                <div>
                    <img src={service.img} className="imgPag"alt="Imagen de la tarjeta"/>
                </div>
                <p className="pPag">{service.description}</p>
                <div className="">
                    <h2 className='h2Cart'>{service.text}</h2>

                    <button className='cantidad'>
                    <i onClick={()=>dispatch({type: 'INCREASE',payload: service })} className="ri-add-box-line"></i>
                    </button>
                    <button className='cantidad'>
                    <i onClick={()=> {
                                        if (service.quantity > 1){
                                            dispatch({type: 'DECREASE', payload: service })
                                        } else{
                                            dispatch({type: 'REMOVE', payload: service })
                                        }
                                        }} 
                                        className="ri-subtract-line"></i>
                    </button>

                    <button className='cantidad'>
                        <i className="ri-delete-bin-line" onClick={() => dispatch({ type: 'REMOVE', payload: service })}></i>
                    </button>
                    <p className='priceDescriptio'>{service.price * service.quantity}</p>
                    <p className='quantity' >{service.quantity}</p>
                    <button className="buttonDisplay"onClick={()=>dispatch({type:'ADD',payload:service})}>
                        <img style = {{width:"40px", height:"40px"}}src={service.icon} alt="" />    
                    </button>
                </div>
            </div>
        </div>
        )}
        </section>
        {total > 0 && 
        <h2 className="totalServ">TOTAL: {total}
        </h2>}
        <ReactWhatsapp className='buttonWazza' number="57-321-397-6755" message={`Hola!Quisiera cotizar el servicio de  ${cart.map((item) => item.quantity + " " + item.text 
        )} que por el momento arroja el valor de $${total}`} > Cotizar el servicio </ReactWhatsapp>
        <Footer/>
    </>
)
};

export default CartShop;