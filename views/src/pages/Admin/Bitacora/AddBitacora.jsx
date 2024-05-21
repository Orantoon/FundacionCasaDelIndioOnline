import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBitacora.css'; // Asegúrate de tener este archivo en tu proyecto

function AddBitacora() {
  const [formData, setFormData] = useState({
    nombre: '',
    cedula: '',
    comunidad: '',
    motivo: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de envío de datos
    console.log('Datos enviados:', formData);
    alert('Datos agregados a la bitácora');
    setFormData({
      nombre: '',
      cedula: '',
      comunidad: '',
      motivo: ''
    });
  };

  const handleBackToBitacora = () => {
    navigate('/bitacora-options');
  };

  return (
    <div className="add-bitacora-container">
      <div className="add-bitacora-form">
        <h2 className="form__title">Agregar datos a la bitácora</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Nombre" 
            className="input" 
            name="nombre" 
            required 
            value={formData.nombre}
            onChange={handleChange}
          />
          <input 
            type="text" 
            placeholder="Cédula" 
            className="input" 
            name="cedula" 
            required 
            value={formData.cedula}
            onChange={handleChange}
          />
          <input 
            type="text" 
            placeholder="Comunidad" 
            className="input" 
            name="comunidad" 
            required 
            value={formData.comunidad}
            onChange={handleChange}
          />
          <textarea 
            placeholder="Motivo" 
            className="input" 
            name="motivo" 
            required 
            value={formData.motivo}
            onChange={handleChange}
          />
          <button className="btn" type="submit">Agregar</button>
        </form>
        <button className="btn-back" onClick={handleBackToBitacora}>Regresar a Bitácora</button>
      </div>
    </div>
  );
}

export default AddBitacora;
