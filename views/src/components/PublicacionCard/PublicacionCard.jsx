import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const PublicacionCard = ({ image, title, description, link }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };

  // Check if images array is empty or undefined
  if (!image || image.length === 0) {
    return (
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <div className="publicacion-card">
        <div className="publicacion-image-container">
          <img
            src={image[currentImageIndex]}
            alt={title}
            className="publicacion-card-image"
          />
          <div className="publicacion-buttons-container">
          <button className="publicacion-prev-button" onClick={handlePrevImage}>
            &lt;
          </button>
          <button className="publicacion-next-button" onClick={handleNextImage}>
            &gt;
          </button>
          </div>
        </div>
        <div className="publicacion-card-content">
          <h2 className="publicacion-card-title">{title}</h2>
          <p className="publicacion-card-description">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalCard;
