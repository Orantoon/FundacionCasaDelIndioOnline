import { Link } from 'react-router-dom';
import './style.css';
import HorizontalCard from '../HorizontalCard/HorizontalCard';
import React, { useState } from 'react';
import { useFetch } from '../../useFetch';

const Carousel = ({cards, images}) => {
    // GET Slides
    const {variable: slides} = useFetch('http://localhost:4000/api/slide');
    
    const [currentCard, setCurrentCard] = useState(0);
  
    // Pagina Siguiente, +3 cards
    const handleNext = () => {
      setCurrentCard(currentCard + 3);
    };

    // Pagina Anterior, -3 cards
    const handlePrev = () => {
      setCurrentCard(currentCard - 3);
    };

    // Click Card FALTA
    const handleCardClick = (index) => {
      // Handle card click to show pop-out or other action
      console.log('Clicked card:', index);
    };
    
    return (
      <div className="carousel-container">
        <div className="carousel">
          {cards && slides && cards.slice(currentCard, currentCard + 3).map((card, index) => {
            // Filtrar slides por el valor de "community" correcto
            const cardCommunity = currentCard + index + 1;
            const filteredSlides = slides ? slides.filter(slide => slide.community === cardCommunity) : [];
  
            return (
              <HorizontalCard
                key={index}
                name={card.name}
                text={card.text}
                tribe={card.tribe}
                link={card.link}
                slides={filteredSlides}
                images={images}
                onClick={() => handleCardClick(currentCard + index)}
              />
            );
          })}
        </div>
        <div className="buttons-container">
          {currentCard > 0 && <button onClick={handlePrev}>Anterior</button>}
          {cards && currentCard + 3 < cards.length && <button onClick={handleNext}>Siguiente</button>}
        </div>
      </div>
    );
  };
  
  export default Carousel;