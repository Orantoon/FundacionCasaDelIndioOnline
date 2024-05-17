import { Link } from 'react-router-dom';
//import './style.css';
import HorizontalCard from '../HorizontalCard/HorizontalCard';
import React, { useState } from 'react';

const Carousel = ({ cards }) => {
    const [currentCard, setCurrentCard] = useState(0);
  
    const handleNext = () => {
      setCurrentCard(currentCard + 3);
    };
  
    const handlePrev = () => {
      setCurrentCard(currentCard - 3);
    };
  
    const handleCardClick = (index) => {
      // Handle card click to show pop-out or other action
      console.log('Clicked card:', index);
    };
  
    return (
      <div className="carousel">
        {cards.slice(currentCard, currentCard + 3).map((card, index) => (
          <HorizontalCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            onClick={() => handleCardClick(currentCard + index)}
          />
        ))}
        {currentCard > 0 && <button onClick={handlePrev}>Previous</button>}
        {currentCard + 3 < cards.length && <button onClick={handleNext}>Next</button>}
      </div>
    );
  };
  
  export default Carousel;