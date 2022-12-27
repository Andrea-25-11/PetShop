import './App.css';
import 'remixicon/fonts/remixicon.css';
import { Header1 } from './components/Header1/Header1';
import {Intro} from "./components/Intro/Intro";
import {Services1} from "./components/Services1/Services1";
import {Services2} from "./components/Services2/Services2";
import {Brands} from "./components/Brands/Brands";
import {Contact} from "./components/Contact/Contact";
import {Footer} from "./components/Footer/Footer";
import {Hamburguer} from "./components/Hamburguer/Hamburguer";
import {IntroServices} from "./components/IntroServices/IntroServices";
import {Form} from "./components/Form/Form";
import data from "./components/Services1/services.json"

const App = () =>{
  return (
    <>
      <Header1/>
      <Intro/>
      <h1 style={{color:"white", textAlign:"center" , margin:"2rem"}}>NUESTROS SERVICIOS</h1>
      {data.map(service =>
      <Services1
          img = {service.img}
          text= {service.text}
      />
      )}
      <h1 style={{color:"white",  textAlign:"center" , margin:"2rem"}}>MARCAS ALIADAS</h1>
      <Brands/>
      <Contact/>
    </>
  )
};

export default App;
