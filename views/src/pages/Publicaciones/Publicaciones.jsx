import React, { useState } from 'react';
import { useAuth } from '../Admin/GestionRoles/AuthContext';
import { useNavigate } from 'react-router-dom';
import PublicacionCard from '../../components/PublicacionCard/PublicacionCard.jsx';
import casa2 from "../../imgs/Casa2.png";
import imgCasa from "../../imgs/casa1.png";
import imgCard1 from "../../imgs/Card1.png";
import imgCard2 from "../../imgs/Card2.png";
import imgCard3 from "../../imgs/Card3.jpg";
import './style.css'; // Asegúrate de importar el archivo CSS

const Publicaciones = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState(3); // Número de tarjetas visibles inicialmente

  const handleCreatePost = () => {
    navigate('/crear-publicacion');
  };

  const handleEditPost = (id) => {
    console.log(`Editar Publicación ${id}`);
    // Lógica para editar una publicación
  };

  const handleDeletePost = (id) => {
    console.log(`Eliminar Publicación ${id}`);
    // Lógica para eliminar una publicación
  };

  const handleLoadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 3); // Cargar más tarjetas
  };

  const cards = [
    {
      id: 1,
      images: [casa2, imgCard1],
      title: 'Comunidad 1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
      id: 2,
      images: [imgCasa, imgCard1],
      title: 'Comunidad 2',
      description: 'Description for Comunidad 2',
    },
    {
      id: 3,
      images: [imgCard1, imgCasa],
      title: 'Comunidad 3',
      description: 'Description for comunidad 3',
    },
    {
      id: 4,
      images: [imgCard2],
      title: 'Comunidad 4',
      description: 'Description for comunidad 4',
    },
    {
      id: 5,
      images: [imgCard3],
      title: 'Comunidad 5',
      description: 'Description for comunidad 5',
    },
    {
      id: 6,
      images: ['https://via.placeholder.com/150'],
      title: 'Comunidad 6',
      description: 'Description for Comunidad 6',
    },
    {
      id: 7,
      images: ['https://via.placeholder.com/150'],
      title: 'Comunidad 7',
      description: 'Description for Comunidad 7',
    },
    {
      id: 8,
      images: ['https://via.placeholder.com/150'],
      title: 'Comunidad 8',
      description: 'Description for Comunidad 8',
    },
    {
      id: 9,
      images: ['https://via.placeholder.com/150'],
      title: 'Comunidad 9',
      description: 'Description for Comunidad 9',
    },
  ];

  return (
    <div className="screen">
      {user && user.role === 'Admin' && (
        <button onClick={handleCreatePost}>Crear Publicación</button>
      )}
      <div className="card-container">
        {cards.slice(0, visibleCards).map(card => (
          <div key={card.id} className="card">
            <PublicacionCard card={card} />
            {user && user.role === 'Admin' && (
              <>
                <button onClick={() => handleEditPost(card.id)}>Editar</button>
                <button onClick={() => handleDeletePost(card.id)}>Eliminar</button>
              </>
            )}
          </div>
        ))}
      </div>
      {visibleCards < cards.length && (
        <div className="load-more-container">
          <button className="load-more-button" onClick={handleLoadMore}>Cargar más</button>
        </div>
      )}
    </div>
  );
};

export default Publicaciones;
