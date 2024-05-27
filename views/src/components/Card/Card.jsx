import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

const Card = ({ image, title, description, link, images, creationDateTime }) => {
    return (
        <Link to={link} style={{"textDecoration":"none"}}>
        <div className="normal-card">
            <img src={images(image)} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <div className="card-date-time">{new Date(creationDateTime).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
            </div>
        </div>
        </Link>
    );
}

export default Card;
