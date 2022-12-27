import { React, useState } from "react";
import logo from "./img/logo.png";  
import patita from "./img/patita.png";  
import "./header1.css";
import { Link } from "react-router-dom";

const Header1 = () => {
    const [menu, setMenu] = useState(false);
  
    const toggleMenu = () => {
      setMenu(!menu);           
    };
  
    return (
    <>
    <header className="Cabecera">
      <div className="headerContainer">
        <img className="logo" src={logo} alt="logo de la microempesa" />
        <div className="iconNav">
          <button onClick={toggleMenu} className="Cabecera-button">
            <img className="logoPaw" src={patita} alt="logo de la microempesa"/>
          </button>
        </div>
      </div>

      <nav className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
        <ul className="Cabecera-ul">
          <li className="Cabecera-li">
            <Link to="/home" className="href">
              INICIO
            </Link>
          </li>
          <li className="Cabecera-li">
            <Link to="/services" className="href">
              SERVICIOS
            </Link>
          </li>
          <li className="Cabecera-li">
            <Link to="/Brands" className="href">
              MARCAS ALIADAS
            </Link>
          </li>
          <li className="Cabecera-li">
            <Link to="/Contact" className="href">
              CONTACTANOS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
    );
};

export default Header1;