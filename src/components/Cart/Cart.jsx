import React from 'react';
import 'remixicon/fonts/remixicon.css';
import "./cart.css"
import Header1 from '../Header1/Header1';
// import { Services2 } from '../Services/Services1';
import {Footer} from "../Footer/Footer";
import {useSelector, useDispatch}from 'react-redux';


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
        <p className='introServicios'>Somos una tienda de mascotas local que se especializa en proporcionar todo lo que necesita para cuidar a su mascota.Nuestro personal amable y bien informado está siempre dispuesto a ayudarle a encontrar lo que necesita y a ofrecer consejos y recomendaciones para el cuidado adecuado de su mascota. Nos sentimos muy afortunados de poder trabajar con mascotas todos los días y esperamos tener la oportunidad de conocer a tu mascota pronto. ¡Bienvenido a nuestra tienda!</p>
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

                    <button>
                        <i className="ri-delete-bin-line" onClick={() => dispatch({ type: 'REMOVE', payload: service })}></i>
                    </button>
                    <p className='priceDescriptio'>{service.price * service.quantity}</p>
                    <p className='quantity' >{service.quantity}</p>
                    <button className="buttonDisplay"onClick={()=>dispatch({type:'ADD',payload:service})}>
                        <img style = {{width:"40px", height:"40px"}}src={service.icon} alt="" />    
                    </button>
                    <button className='buttonWazza'>Contactar por Whats'App</button>
                </div>
            </div>
        </div>
        )}
        </section>
        {total > 0 && 
        <h2>total:{total}
        </h2>}
        <Footer/>
    </>
)
};

export default CartShop;