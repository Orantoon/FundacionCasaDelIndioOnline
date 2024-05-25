import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Modal from '../Modal/Modal.jsx';


const PublicacionCard = ({ images, title, description, link }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const truncatedDescription = description.length > 50 
    ? `${description.substring(0, 100)}...` 
    : description;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
    <div className="pub-card" onClick={openModal}>
      <div className="pub-image-container">
        <button className="pub-nav-button left"  onClick={(e) => { e.stopPropagation(); prevImage(); }}>◄</button>
        <img src={images[currentImageIndex]} alt="Card" className="pub-image"/>
        <button className="pub-nav-button right" onClick={(e) => { e.stopPropagation(); nextImage(); }}>►</button>
      </div>
      <div className="pub-card-content">
        <h2>{title}</h2>
        <p>{truncatedDescription}</p>
        <button className="pub-see-more-button" onClick={(e) => { e.stopPropagation(); openModal(); }}>Ver más</button>
      </div>
    </div>
          <Modal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          images={images} 
          title={title} 
          description={description} 
        />
      </>
  );
};
export default PublicacionCard;
