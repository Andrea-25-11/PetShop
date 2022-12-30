import 'remixicon/fonts/remixicon.css';
import "./home.css";
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
        <p>Lorem ipsum lorem ipsum</p>
        {data.map(service =>
        <Services1
            img = {service.img}
            text= {service.text}
            description = {service.description}
        />
        )}
        
        <Footer/>
    </>
)
};

export default Home;