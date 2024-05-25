import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Admin/GestionRoles/AuthContext';
import './CreatePublicacion.css'; // Asegúrate de importar el archivo CSS para los estilos

const CreatePublicacion = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [card, setCard] = useState({
    images: [],
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setCard((prevCard) => ({
      ...prevCard,
      images: files.map((file) => URL.createObjectURL(file)),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para crear la tarjeta
    console.log('Crear Publicación', card);
    // Aquí se podría agregar la nueva publicación al estado o hacer una llamada a la API
    navigate('/publicaciones'); // Regresa a la página de publicaciones
  };

  const handleCancel = () => {
    navigate('/publicaciones'); // Regresa a la página de publicaciones
  };

  if (!user || user.role !== 'Admin') {
    return <div>No tienes permisos para crear una publicación</div>;
  }

  return (
    <div className="create-publicacion">
      <h2>Crear Publicación</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={card.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Descripción:
          <textarea
            name="description"
            value={card.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Imágenes:
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </label>
        <div className="form-buttons">
          <button type="submit">Crear Publicación</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePublicacion;
