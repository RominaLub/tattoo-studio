import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css"
import logo from "../images/menu-logo-bottel-floating.png"


function Footer() {
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.6878901561377!2d7.015873103605802!3d52.085411282160344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8417588b7adfd%3A0x16f96bc613d9782!2sTattoo%20und%20Piercing%20Center%20Ahaus!5e0!3m2!1sde!2sde!4v1677181487691!5m2!1sde!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    return(
        <div className="containerFooter">
            <div className="upperFooter">
                <div  className="map-container">
                    <div dangerouslySetInnerHTML={{__html: iframe?iframe:""}}></div>
                    <div className="mapAdress">
                        <h3>Adresse:</h3>
                        <p>Lüderitzstraße 1A</p>
                        <p>48683 Ahaus</p>
                    </div>
                </div>
                <div className="contact">
                    <h3>Kontakt:</h3>
                    <p>+49 152-531 56 569 (auch WhatsApp)</p>
                    <p>oder über unser Kontaktformular:</p>
                    <p><NavLink to="/contact" className="contactLink">Hier gehts zum Formular</NavLink></p>
                </div>
                <div className="opening">
                    <h3>Öffnungszeiten:</h3>
                    <p>Montag – Freitag: 10:00 – 20:00 Uhr</p>
                    <p>Samstag: 10:00 – 18:00 Uhr</p>
                </div>
                <div className="info">
                    <h3>Wir arbeiten sauber</h3>
                    <p>Es werden nur Einwegnadeln zum Piercen und Tätowieren verwendet. Alle Geräte werden mehrmals täglich vollständig gereinigt.</p>
                </div>
            </div>
            <div className="lowerFooter">
                <div className="agb">
                    <NavLink to="/agb" className="agbLink">Impressum & Datenschutz</NavLink>
                </div>
                <img src={logo} alt="" className="logoFooter" />
                <div className="nameFooter">
                    <p>Bottel | Tattoo & Piercingstudio Ahaus © 2022</p>
                </div>
            </div>
            
     
        </div>
    )
}

export default Footer;
