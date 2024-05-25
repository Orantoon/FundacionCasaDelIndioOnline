import React, { useState } from 'react';
import './style.css';
import Modal from '../Modal/Modal';

const PublicacionCard = ({ card, isAdmin, updateCard }) => {
  const { images = [], title, description } = card;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="pub-card">
        <div className="pub-image-container">
          <button className="nav-button left" onClick={prevImage}>‹</button>
          <img src={images[currentImageIndex]} alt="Card" className="pub-image" />
          <button className="nav-button right" onClick={nextImage}>›</button>
        </div>
        <div className="pub-card-content">
          <h2>{title}</h2>
          <p>{description.length > 50 ? `${description.substring(0, 100)}...` : description}</p>
          <button className="pub-see-more-button" onClick={openModal}>Ver más</button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={images}
        title={title}
        description={description}
        isAdmin={isAdmin}
        cardId={card.id}
        updateCard={updateCard}
      />
    </>
  );
};

export default PublicacionCard;
