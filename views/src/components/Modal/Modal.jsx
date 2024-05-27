import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import {putData} from '../../putData';
import {deleteData} from '../../deleteData';

const Modal = ({ isOpen, onClose, images, title, description, image, date, isAdmin, cardId }) => {
  //const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);
  const [editImages, setEditImages] = useState(image);
  const [alertaUpdate, setAlertaUpdate] = useState(false);
  const [alertaDelete, setAlertaDelete] = useState(false);
  const [newImageFlag, setNewImageFlag] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;
    setEditTitle(title);
    setEditDescription(description);
    setEditImages(image);
  }, [isOpen, title, description, image]);

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleSave = () => {
    const updatedCard = {
      user: parseInt(sessionStorage.getItem('userId'), 10),
      name: editTitle, 
      text: editDescription, 
      image: editImages
    };
    //updateCard(updatedCard);

    putData('http://localhost:4000/api/post/' + cardId, updatedCard)
      .then(data => {
        console.log('Success:', data);

        setIsEditing(false);
        navigate('/publicaciones');  // Navegar a la página de publicaciones después de guardar
        onClose();
        window.location.reload();
      })
      .catch(error => {
        console.error('Error:', error);

        setAlertaUpdate(true);
          setTimeout(() => {
            setAlertaUpdate(false);
          }, 3000);
      });

  };

  const handleDelete = () => {
    if (window.confirm('¿Está seguro de eliminar la publicación?')) {
      console.log(`Eliminar Publicación ${cardId}`);

      deleteData('http://localhost:4000/api/post/' + cardId)
      .then(data => {
        console.log('Success:', data);
        
        setIsEditing(false);
        navigate('/publicaciones');
        onClose();
        window.location.reload();
      })
      .catch(error => {
        console.error('Error:', error);

        setAlertaDelete(true);
          setTimeout(() => {
            setAlertaDelete(false);
          }, 3000);
      });
    }
  };

  const handleImageChange = (e) => {
    e.preventDefault();
  
    const files = Array.from(e.target.files);
  
    const randomName = Math.random().toString(36).substring(2, 15);
    const fileExtension = files[0].name.split('.').pop();
    const filename = `./${randomName}.${fileExtension}`;
  
    setEditImages(filename);
  
    const formData = new FormData();
    files.forEach(file => {
      formData.append('image', file, filename);
    });
  
    fetch('http://localhost:4000/upload', {
      method: 'POST',
      body: formData
    })
    .catch(error => console.error('Error uploading image:', error));

    setNewImageFlag(false)
  };

  const handleImageRemove = () => {
    setEditImages('');
  };

  /*const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % editImages.length);
  };
  */

  /*const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + editImages.length) % editImages.length);
  };
  */

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
            {!editImages || editImages.length === 0 ? (
              <label>
                Imágenes:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            ) : null}
            <div className="image-preview">
              <div key={cardId} className="image-container">
                {editImages && newImageFlag &&
                  <div key={cardId} className="image-container">
                    <img src={images(editImages)} alt={`Preview ${cardId}`} />
                    <button type="button" className="remove-button" onClick={() => handleImageRemove(cardId)}>X</button>
                  </div>
                }
              </div>
            </div>
            {!newImageFlag && <p>Nueva imagen subida.</p>}
            <div className="form-buttons">
              <button type="submit">Guardar</button>
              <button type="button" onClick={handleEditToggle}>Cancelar</button>
            </div>
          </form>
        ) : (
          <>
            <div className="modal-images">
            <img src={images(image)} alt={`Image ${cardId}`} className="modal-image" />
            </div>
            <h2>{editTitle}</h2>
            <p>{editDescription}</p>
            <div className="pub-date-time">{new Date(date).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
            {isAdmin && (
              <>
                <button className="edit-button" onClick={handleEditToggle}>Editar</button>
                <button className="delete-button" onClick={handleDelete}>Eliminar</button>
              </>
            )}
          </>
        )}
      </div>
      {alertaUpdate && 
        <div className="alert">
          Ocurrió un error a la hora de actualizar la publicación, por favor inténtelo de nuevo.
        </div>
      }
      {alertaDelete && 
        <div className="alert">
          Ocurrió un error a la hora de eliminar la publicación, por favor inténtelo de nuevo.
        </div>
      }
    </div>
  );
};

export default Modal;
