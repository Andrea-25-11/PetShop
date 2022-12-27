import React from "react";
import "./contact.css";

export function Contact() {
    return (
    <div className="contactUs">
        <div className="divContact">
            <h1 style={{ color: "white", textAlign: "center", margin: "2rem", fontSize: "1.3rem"}}>
            DONDE ENCONTRARNOS
            </h1>
            <ul className="ulContact">
                <li className="liContact">
                    <i class="ri-map-pin-line"></i>Carrera 10 No. 134B- 85
                </li>
                <li className="liContact">
                    <i class="ri-chat-3-line"></i>3213976755
                </li>
                <li className="liContact">
                    <i class="ri-phone-line"></i>601 2174010
                </li>
                <li className="liContact">
                    <i class="ri-mail-line"></i>copias.pet134@gmail.com
                </li>
            </ul>
        </div>
        <div className="divRedes">
            <h1 style={{ color: "white", textAlign: "center", marginTop: "2rem", fontSize: "1.3rem"}}>
            CONOCE NUESTRAS REDES SOCIALES
            </h1>
            <ul className="ulSocialMedia">
                <li className="liContact">
                    <img src="https://drive.google.com/uc?export=view&id=1cwqSGLf3P0p05fF_khzLt9oVd1d1beWW" style= {{width:"40px"}} alt="" />
                    Instagram
                </li>
                <li className="liContact">
                    <img src="https://drive.google.com/uc?export=view&id=1XQ-SCzsytx5ha4wcQfKBlh7xmZGoseid" style= {{width:"40px"}} alt="" />
                    Facebook
                </li>
            </ul>
        </div>
    </div>
    );
};
