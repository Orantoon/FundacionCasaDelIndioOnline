import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Admin/GestionRoles/AuthContext';
import './CreatePublicacion.css';

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
      images: files.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      })),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Crear Publicación', card);
    navigate('/publicaciones');
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
        <div className="image-preview">
          {card.images.map((image, index) => (
            <img key={index} src={image.url} alt={`Preview ${index}`} />
          ))}
        </div>
        <button type="submit">Crear Publicación</button>
      </form>
    </div>
  );
};

export default CreatePublicacion;
