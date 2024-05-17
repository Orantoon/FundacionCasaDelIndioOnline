import React from 'react';
import Carousel from '../../components/Carousel/Carousel.jsx';

const Comunidades = () => {
  // Dummy card data
  const cards = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Card 1',
      description: 'Description for card 1',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'Card 2',
      description: 'Description for card 2',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      title: 'Card 3',
      description: 'Description for card 3',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      title: 'Card 4',
      description: 'Description for card 4',
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/150',
      title: 'Card 5',
      description: 'Description for card 5',
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/150',
      title: 'Card 6',
      description: 'Description for card 6',
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/150',
      title: 'Card 7',
      description: 'Description for card 7',
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/150',
      title: 'Card 8',
      description: 'Description for card 8',
    },
    {
      id: 9,
      image: 'https://via.placeholder.com/150',
      title: 'Card 9',
      description: 'Description for card 9',
    },
  ];

  return (
    <div className="screen">
      <div className="card-container">
        <Carousel cards={cards} />
      </div>
    </div>
  );
};

export default Comunidades;
