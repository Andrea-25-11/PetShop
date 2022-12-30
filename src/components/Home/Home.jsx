import 'remixicon/fonts/remixicon.css';
import "./home.css";
import Header1 from '../Header1/Header1';
import {Intro} from "../Intro/Intro";
import {Services1} from "../Services/Services1";
import {Brands} from "../Brands/Brands";
import {Contact} from "../Contact/Contact";
import {Footer} from "../Footer/Footer";
import data from "../Services/services.json";
import {Link} from "react-router-dom";

const Home = _ => {
    return (
    <>
        <Header1/>
        <Intro/>
        <h1>NUESTROS SERVICIOS</h1>
        <Link to="/services">
            <section className='cardServices'>
            {data.map(service =>
            <Services1
                img = {service.img}
                text= {service.text}
            />
            )}
        </section>
        </Link>
        <h1>MARCAS ALIADAS</h1>
        <Brands/>
        <Contact/>
        <Footer/>
    </>
)
};

export default Home;