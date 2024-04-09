import React from 'react';
import logo from "../../imgs/logo.png";
import facebookLogo from "../../imgs/Facebook Icon.png";
import instaLogo from "../../imgs/Instagram Logo.png";
import './style.css'; // Importa un archivo CSS para estilizar el footer si es necesario

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                    <img src={logo} alt="Logo" />
                    <span className="logo-text">Casa del Indio</span>
            </div>

            <div className="footer-center">
                <div>
                    <h3>Redes Sociales</h3>
                <ul className="social-list">
                    <li><a href="https://www.facebook.com/people/Fundaci%C3%B3n-La-Casa-del-Indio/61556382717900/" target="_blank"><img src={facebookLogo} alt="Facebook logo" /><span className="social-name">Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/casa_delindiocr?igsh=dG50OG9yMnBkYTZt" target="_blank"><img src={instaLogo} alt="Instagram logo" /><span className="social-name">Instagram</span></a></li>
                    
                </ul>
                </div>
            </div>
            <div className="footer-right">
                <div>
                    <h3>Información de contacto</h3>
                    <ul className="contact-list">                     
                        <li>Correo: <a href="mailto:lacasadelindio23@gmail.com" style={{ color: 'white' }} >lacasadelindio23@gmail.com</a></li>
                        <li>WhatsApp: <a href="https://wa.me/87763699" target="_blank" style={{ color: 'white' }} >87763699</a></li>
                        <li>Teléfono: (+506) 8864 6521</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;