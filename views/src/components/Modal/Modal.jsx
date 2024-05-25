import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Modal = ({ isOpen, onClose, images, title, description, isAdmin, cardId, updateCard }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);
  const [editImages, setEditImages] = useState(images);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;
    setEditTitle(title);
    setEditDescription(description);
    setEditImages(images);
  }, [isOpen, title, description, images]);

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleSave = () => {
    const updatedCard = { id: cardId, title: editTitle, description: editDescription, images: editImages };
    updateCard(updatedCard);
    setIsEditing(false);
    navigate('/publicaciones');  // Navegar a la página de publicaciones después de guardar
    onClose();
  };

  const handleDelete = () => {
    if (window.confirm('¿Está seguro de eliminar la publicación?')) {
      console.log(`Eliminar Publicación ${cardId}`);
      onClose();
      navigate('/publicaciones');
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setEditImages([...editImages, ...files.map((file) => URL.createObjectURL(file))]);
  };

  const handleImageRemove = (index) => {
    setEditImages(editImages.filter((_, i) => i !== index));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % editImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + editImages.length) % editImages.length);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        {isEditing ? (
          <form className="modal-edit" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <label>
              Título:
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </label>
            <label>
              Descripción:
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </label>
            <label>
              Imágenes:
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
            </label>
            <div className="image-preview">
              {editImages.map((image, index) => (
                <div key={index} className="image-container">
                  <img src={image} alt={`Preview ${index}`} />
                  <button type="button" className="remove-button" onClick={() => handleImageRemove(index)}>X</button>
                </div>
              ))}
            </div>
            <div className="form-buttons">
              <button type="submit">Guardar</button>
              <button type="button" onClick={handleEditToggle}>Cancelar</button>
            </div>
          </form>
        ) : (
          <>
            <div className="modal-images">
              <button className="nav-button left" onClick={prevImage}>‹</button>
              <img src={editImages[currentImageIndex]} alt={`Image ${currentImageIndex}`} className="modal-image" />
              <button className="nav-button right" onClick={nextImage}>›</button>
            </div>
            <h2>{editTitle}</h2>
            <p>{editDescription}</p>
            {isAdmin && (
              <>
                <button className="edit-button" onClick={handleEditToggle}>Editar</button>
                <button className="delete-button" onClick={handleDelete}>Eliminar</button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
