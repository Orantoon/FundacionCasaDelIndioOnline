import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bitacora.css'; // Asegúrate de tener este archivo en tu proyecto

function BitacoraOptions() {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/view-bitacora');
  };

  const handleAddClick = () => {
    navigate('/add-bitacora');
  };

  return (
    <div className="bitacora-options-container">
      <div className="bitacora-options">
        <button className="btn" onClick={handleViewClick}>Ver datos de la bitácora</button>
        <button className="btn" onClick={handleAddClick}>Agregar datos a la bitácora</button>
      </div>
    </div>
  );
}

export default BitacoraOptions;
