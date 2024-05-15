import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

const HorizontalCard = ({ image, title, description, onClick }) => {
    return (
      <div className="card" onClick={onClick}>
        <img src={image} alt={title} />
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  };

export default HorizontalCard;