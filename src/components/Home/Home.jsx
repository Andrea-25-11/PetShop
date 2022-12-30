import 'remixicon/fonts/remixicon.css';
import "./home.css";
import Header1 from '../Header1/Header1';
import {Intro} from "../Intro/Intro";
import {Services1} from "../Services1/Services1";
import {Brands} from "../Brands/Brands";
import {Contact} from "../Contact/Contact";
import {Form} from "../Form/Form";
import {Footer} from "../Footer/Footer";
import data from "../Services1/services.json";

const Home = _ => {
    return (
    <>
        <Header1/>
        <Intro/>
        <h1>NUESTROS SERVICIOS</h1>
        <section className='cardServices'>
        {data.map(service =>
        <Services1
            img = {service.img}
            text= {service.text}
        />
        )}
        </section>
        <h1>MARCAS ALIADAS</h1>
        <Brands/>
        <Contact/>
        <Footer/>
    </>
)
};

export default Home;