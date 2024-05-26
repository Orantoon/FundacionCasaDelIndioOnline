import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HorizontalCard = ({ link, name, text, tribe, slides, images}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Check if images array is empty or undefined
  if (!slides || slides.length === 0) {
    return (
      <div className="horizontal-card">
        <div className="card-content">
          <h2 className="card-name">{name}</h2>
          <p className="card-text">{text}</p>
          <h4>Tribu:</h4>
          <p className="card-tribe">{tribe}</p>
        </div>
      </div>
    );
  }

  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      {slides && slides[currentImageIndex] && (
        <div className="horizontal-card">
          <div className="horizontal-image-container">
            {slides && slides[currentImageIndex] && (
              <img
                src={images(slides[currentImageIndex].image)}
                alt={name}
                className="horizontal-card-image"
              />
            )}
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
            <h2 className="card-name">{name}</h2>
            <p className="card-text">{text}</p>
            <h4>Tribu:</h4>
            <p className="card-tribe">{tribe}</p>
          </div>
        </div>
      )}
    </Link>
  );

};

export default HorizontalCard;
