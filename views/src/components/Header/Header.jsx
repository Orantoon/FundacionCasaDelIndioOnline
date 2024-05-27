import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useNavigate } from "react-router-dom";
import { useGet } from '../../useGet';
import logo from "../../imgs/logo.png";

function Header() {
  // GET Users
  const {variable: users} = useGet('http://localhost:4000/api/usuario');
  const userId = sessionStorage.getItem('userId');
  const isAdmin = users && users.find(user => user.id === parseInt(userId, 10))?.isAdmin === 1;

  let navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.setItem('userId', -1);
    navigate('/');
  };

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
        <Link to="/donacion">Donación</Link>
        <Link to="/comunidades">Comunidades</Link>
        <Link to="/idiomas">Idiomas</Link>
        {isAdmin && <Link to="/bitacora-options">Bitácoras</Link>}
        {isAdmin && <Link to="/gestion-usuarios">Gestión</Link>}

        {userId === null || userId === "-1" ? (
          <Link to="/login">Iniciar Sesión</Link>
        ) : (
          <div className="user-menu">
            {users && (
              <span className="user-name">
                {users && users.find(user => user.id === parseInt(userId, 10))?.name}
              </span>
            )}
            <div className="dropdown-menu">
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
