import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import logo from "../../imgs/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img src={logo} alt="Casa del Indio" />
          <span style={{ fontStyle:'bolder',fontSize:'20',marginLeft: '10px' }}>Casa del Indio</span>
        </NavLink>
      </div>
      <nav className="navigation">
        <NavLink to="/sobre-nosotros" activeClassName="active">Sobre nosotros</NavLink>
        <NavLink to="/camas" activeClassName="active">Camas</NavLink>
        <NavLink to="/publicaciones" activeClassName="active">Publicaciones</NavLink>
        <NavLink to="/donaciones" activeClassName="active">Donaciones</NavLink>
        <NavLink to="/comunidades" activeClassName="active">Comunidades</NavLink>
        <NavLink to="/iniciar-sesion" activeClassName="active">Ingresar</NavLink>
      </nav>
    </header>
  );
}

export default Header;
