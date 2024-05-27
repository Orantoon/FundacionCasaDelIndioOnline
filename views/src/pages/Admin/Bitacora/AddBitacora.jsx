import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBitacora.css'; // Asegúrate de tener este archivo en tu proyecto
import { useGet } from '../../../useGet';
import { postData } from '../../../postData';

function AddBitacora() {

  // GET Campaigns
  const { variable: communities } = useGet('http://localhost:4000/api/community');
  const userId = sessionStorage.getItem('userId');

  const [community, setCommunity] = useState(null);
  const [alertaCommunity, setAlertaCommunity] = useState(false);
  const [alertaBitacora, setAlertaBitacora] = useState(false);
  const [formData, setFormData] = useState({
    user: userId,
    name: '',
    details: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCommunityChange = (e) => {
    setCommunity(e.target.value);
};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!community){
      setAlertaCommunity(true);
      setTimeout(() => {
          setAlertaCommunity(false);
      }, 3000);
    } else {
      const newData = {
        user: formData.user,
        name: formData.name,
        details: formData.details,
        community: community
      }

      postData('http://localhost:4000/api/visitlog', newData)
        .then(data => {
            console.log('Success:', data);
            navigate('/bitacora-options'); // Regresa a la página Home
        })
        .catch(error => {
            console.error('Error:', error);
            setAlertaBitacora(true);
            setTimeout(() => {
              setAlertaBitacora(false);
            }, 3000);
        });
    }

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
            name="name" 
            required 
            value={formData.name}
            onChange={handleChange}
          />
          <textarea 
            type="text" 
            placeholder="Detalles" 
            className="input" 
            name="details" 
            required 
            value={formData.details}
            onChange={handleChange}
          />
          <select onChange={handleCommunityChange}>
              <option>Select Campaign</option>
              {communities && communities.map(community => (
                  <option key={community.id} value={community.id}>{community.name}</option>
              ))}
          </select>
          <button className="btn" type="submit">Agregar</button>
        </form>
        <button className="btn-back" onClick={handleBackToBitacora}>Regresar a Bitácora</button>
      </div>
      {alertaCommunity && 
          <div className="alert">
          Debe escoger una Comunidad antes de continuar.
          </div>
      }
      {alertaBitacora && 
          <div className="alert">
          Ocurrió un error al crear la bitácora, por favor inténtelo de nuevo.
          </div>
      }
    </div>
  );
}

export default AddBitacora;
