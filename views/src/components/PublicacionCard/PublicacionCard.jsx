import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const PublicacionCard = ({ images, title, description, link }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="pub-card">
      <div className="pub-image-container">
        <button className="pub-nav-button left" onClick={prevImage}>◄</button>
        <img src={images[currentImageIndex]} alt="Card" className="pub-image"/>
        <button className="pub-nav-button right" onClick={nextImage}>►</button>
      </div>
      <div className="pub-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="pub-see-more-button">Ver más</button>
      </div>
    </div>
  );
};
export default PublicacionCard;
