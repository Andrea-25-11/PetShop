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
            <a style={{textDecoration: "none", fontSize: "1.2rem", color: "rgb(15, 58, 83)"}} href="#brandsLandpage">
              MARCAS ALIADAS
            </a>
          </li>
          <li className="Cabecera-li">
          <a style={{textDecoration: "none", fontSize: "1.2rem", color: "rgb(15, 58, 83)"}} href="#contactLandpage">
              CONTACTANOS
            </a>
          </li>
          <li className="Cabecera-li">
            <Link to="/cart" className="href">
              <img style={{width:"40px"}}src="https://drive.google.com/uc?export=view&id=1XC-TJoMcvHQv5NiJZoL6LU_ifxB7I_zS" alt="" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
    );
};

export default Header1;