import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HorizontalCard = ({ image, title, description, link }) => {
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
      <div className="horizontal-card">
        <div className="horizontal-image-container">
          <img
            src={image[currentImageIndex]}
            alt={title}
            className="horizontal-card-image"
          />
          <div className="buttons-container">
          <button className="prev-button" onClick={handlePrevImage}>
            &lt;
          </button>
          <button className="next-button" onClick={handleNextImage}>
            &gt;
          </button>
          </div>
        </div>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalCard;
