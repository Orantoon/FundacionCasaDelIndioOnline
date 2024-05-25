import React, { useState, useEffect } from 'react';
import './style.css';

const Modal = ({ isOpen, onClose, images, title, description }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, isPaused, images.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="modal-images" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} className="modal-image" />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Modal;
