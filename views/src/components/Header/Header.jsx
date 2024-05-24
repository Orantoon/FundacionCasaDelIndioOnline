import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from "../../imgs/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img src={logo} alt="Casa del Indio" />
          <span style={{ marginLeft: '10px' }}>Casa del Indio</span>
        </Link>
      </div>
      <nav className="navigation">
        <Link to="/sobre-nosotros">Sobre nosotros</Link>
        <Link to="/publicaciones">Publicaciones</Link>
        <Link to="/donaciones">Donaciones</Link>
        <Link to="/comunidades">Comunidades</Link>
        <Link to="/iniciar-sesion">Iniciar Sesión</Link>    
      </nav>
    </header>
  );
}

export default Header;
