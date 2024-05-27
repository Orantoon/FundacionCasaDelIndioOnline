import './style.css';
import React, { useState } from 'react';

const Carousel = ({ cards, CardComponent }) => {
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
        <div className="carousel-container">
            <div className="carousel">
                {cards.slice(currentCard, currentCard + 3).map((card, index) => (
                    <CardComponent
                        key={index}
                        {...card}
                        onClick={() => handleCardClick(currentCard + index)}
                    />
                ))}
            </div>
            <div className="buttons-container">
                {currentCard > 0 && <button onClick={handlePrev}>Anterior</button>}
                {currentCard + 3 < cards.length && <button onClick={handleNext}>Siguiente</button>}
            </div>
        </div>
    );
};

export default Carousel;
