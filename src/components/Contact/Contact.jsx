import React from "react";
import "./contact.css";


export function Contact() {
    return (
    <>
        <div className="contact">
            <h1>DONDE ENCONTRARNOS</h1>
            <div>
                <ul className="ulContact">
                    <li className="liContact"><i class="ri-home-4-line"></i>INICIO</li>
                    <li className="liContact"><i class="ri-hand-heart-line"></i>SERVICIOS</li>
                    <li className="liContact"><i class="ri-search-eye-line"></i>MARCAS ALIADAS</li>
                    <li className="liContact"><i class="ri-chat-3-line"></i>CONTÁCTANOS</li>
                </ul>
                <ul className="ulSocialMedia">
                    <li className="liContact"><i class="ri-home-4-line"></i>INSTAGRAM</li>
                    <li className="liContact"><i class="ri-hand-heart-line"></i>FACEBOOK/li>
                </ul>
            </div>

        </div>
    </>
    )
}