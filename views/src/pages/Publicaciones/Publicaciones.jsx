import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGet } from '../../useGet';
import PublicacionCard from '../../components/PublicacionCard/PublicacionCard';
import './style.css';

const Publicaciones = ({images}) => {
  // GET Post
  const {variable: posts} = useGet('http://localhost:4000/api/post');
  // GET Users
  const {variable: users} = useGet('http://localhost:4000/api/usuario');
  const userId = sessionStorage.getItem('userId');

  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState(3);


  const handleCreatePost = () => {
    navigate('/crear-publicacion');
  };

  const handleLoadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 3);
  };

  return (
    <div className="screen">
      {users && users.find(user => user.id === parseInt(userId, 10))?.isAdmin === 1 && (
        <button onClick={handleCreatePost}>Crear Publicación</button>
      )}
      <div className="card-container">
        {posts && posts
          .slice()
          .sort((a, b) => new Date(b.creationDateTime) - new Date(a.creationDateTime))
          .map((post, index) => (
            <PublicacionCard
              key={index}
              card={post}
              isAdmin={users && users.find(user => user.id === parseInt(userId, 10))?.isAdmin === 1}
              images={images}
            />
          ))}
      </div>
      {posts && visibleCards < posts.length && (
        <div className="load-more-container">
          <button className="load-more-button" onClick={handleLoadMore}>Cargar más</button>
        </div>
      )}
    </div>
  );  
};

export default Publicaciones;
