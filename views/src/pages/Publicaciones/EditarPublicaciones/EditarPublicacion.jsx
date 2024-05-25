import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../Admin/GestionRoles/AuthContext';
import './EditarPublicacion.css';

const EditarPublicacion = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [card, setCard] = useState({
    id: id,
    images: ['https://via.placeholder.com/150'],
    title: 'Comunidad ' + id,
    description: 'Description for comunidad ' + id,
  });

  useEffect(() => {
    // Simulate fetching the publication details based on id
    // Replace with actual fetch call
    const fetchData = async () => {
      // Simulate API call to fetch publication details
      const fetchedCard = {
        id: id,
        images: ['https://via.placeholder.com/150'],
        title: 'Comunidad ' + id,
        description: 'Description for comunidad ' + id,
      };
      setCard(fetchedCard);
    };
    fetchData();
  }, [id]);

  const handleDelete = () => {
    if (window.confirm('¿Está seguro de eliminar la publicación?')) {
      console.log(`Eliminar Publicación ${id}`);
      navigate('/publicaciones');
    }
  };

  const handleInputChange = (e) => {
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

  const handleSave = () => {
    console.log('Guardar cambios', card);
    navigate(`/publicaciones/${id}`);
  };

  return (
    <div className="publicacion-detail">
      <div className="admin-buttons">
        <button onClick={handleSave}>Guardar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={card.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Descripción:
          <textarea
            name="description"
            value={card.description}
            onChange={handleInputChange}
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
            <img key={index} src={image} alt={`Preview ${index}`} />
          ))}
        </div>
        <div className="form-buttons">
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => navigate('/publicaciones')}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default EditarPublicacion;
