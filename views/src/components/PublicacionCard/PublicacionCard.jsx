import React, { useState } from 'react';
import './style.css';
import Modal from '../Modal/Modal';

const PublicacionCard = ({ card, isAdmin, images }) => {
  //const { images = [], title, description } = card;
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  /*const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  */

  /*const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  */

  return (
    <>
      <div className="pub-card">
        <div className="pub-image-container">
          <img src={images(card.image)} alt="Card" className="pub-image" />
        </div>
        <div className="pub-card-content">
          <h2>{card.name}</h2>
          <p>{card.text.length > 50 ? `${card.text.substring(0, 100)}...` : card.text}</p>
          <button className="pub-see-more-button" onClick={openModal}>Ver más</button>
          <div className="pub-date-time">{new Date(card.creationDateTime).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={images}
        title={card.name}
        description={card.text}
        image={card.image}
        date={card.creationDateTime}
        isAdmin={isAdmin}
        cardId={card.id}
      />
    </>
  );  
};

export default PublicacionCard;
