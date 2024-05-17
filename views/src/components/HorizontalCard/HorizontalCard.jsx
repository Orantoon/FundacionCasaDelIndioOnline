import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 


  
const HorizontalCard = ({ image, title, description, link }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalCard;
  