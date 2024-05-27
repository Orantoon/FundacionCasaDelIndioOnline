import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGet } from '../../../useGet';
import { postData } from '../../../postData';
import './CreatePublicacion.css'; // Asegúrate de importar el archivo CSS para los estilos

const CreatePublicacion = () => {
  // GET Users
  const {variable: users} = useGet('http://localhost:4000/api/usuario');
  const userId = sessionStorage.getItem('userId');

  const [alertaPost, setAlertaPost] = useState(false);
  const [newImageFlag, setNewImageFlag] = useState(true);

  const navigate = useNavigate();

  const [post, setPost] = useState({
    image: '',
    name: '',
    text: '',
    user: userId
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };
  
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const randomName = Math.random().toString(36).substring(2, 15);
    const fileExtension = files[0].name.split('.').pop();
    const filename = `./${randomName}.${fileExtension}`;

    setPost((prevCard) => ({
      ...prevCard,
      image: filename,
    }));

    const formData = new FormData();
    files.forEach(file => {
      formData.append('image', file, filename);
    });
  
    fetch('http://localhost:4000/api/newimage', {
      method: 'POST',
      body: formData
    })
    .catch(error => console.error('Error uploading image:', error));
  
    setNewImageFlag(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Crear Publicación', post);
    
    postData('http://localhost:4000/api/post', post)
      .then(data => {
        console.log('Success:', data);
        navigate('/publicaciones'); // Regresa a la página de publicaciones
      })
      .catch(error => {
        console.error('Error:', error);
        setAlertaPost(true);
          setTimeout(() => {
            setAlertaPost(false);
          }, 3000);
      });
  };

  const handleCancel = () => {
    navigate('/publicaciones'); // Regresa a la página de publicaciones
  };

  if (users && users.find(user => user.id === parseInt(userId, 10))?.isAdmin !== 1) {
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
            name="name"
            value={post.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Descripción:
          <textarea
            name="text"
            value={post.text}
            onChange={handleChange}
            required
          />
        </label>
        {newImageFlag ? (<label>
          Imagen:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
        ) : (<p>Nueva imagen subida.</p>)}
        <div className="form-buttons">
          <button type="submit">Crear Publicación</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
      {alertaPost && 
        <div className="alert">
          Ocurrió un error al crear la publicación, por favor inténtelo de nuevo.
        </div>
      }
    </div>
  );
};

export default CreatePublicacion;
