import React from 'react';
import Carousel from '../../components/Carousel/Carousel.jsx';
import PublicacionCard from '../../components/PublicacionCard/PublicacionCard.jsx';
import casa2 from  "../../imgs/Casa2.png"
import imgCasa from "../../imgs/casa1.png"
import imgCard1 from  "../../imgs/Card1.png"
import imgCard2 from  "../../imgs/Card2.png"
import imgCard3 from  "../../imgs/Card3.jpg"

const Publicaciones = () => {
  // Dummy card data
  const cards = [
    {
      id: 1,
      images:[casa2,imgCard1],
      title: 'Comunidad 1',
      description: 'Description for Comunidad 1',
    },
    {
      id: 2,
      images:[ imgCasa,imgCard1],
      title: 'Comunidad 2',
      description: 'Description for Comunidad 2',
    },
    {
      id: 3,
      images:[ imgCard1,imgCasa],
      title: 'Comunidad 3',
      description: 'Description for comunidad 3',
    },
    {
      id: 4,
      images:[ imgCard2],
      title: 'Comunidad 4',
      description: 'Description for comunidad 4',
    },
    {
      id: 5,
      images:[ imgCard3],
      title: 'Comunidad 5',
      description: 'Description for comunidad 5',
    },
    {
      id: 6,
      images:[ 'https://via.placeholder.com/150'],
      title: 'Comunidad 6',
      description: 'Description for Comunidad 6',
    },
    {
      id: 7,
      images:[ 'https://via.placeholder.com/150'],
      title: 'Comunidad 7',
      description: 'Description for Comunidad 7',
    },
    {
      id: 8,
      images:[ 'https://via.placeholder.com/150'],
      title: 'Comunidad 8',
      description: 'Description for Comunidad 8',
    },
    {
      id: 9,
      images:[ 'https://via.placeholder.com/150'],
      title: 'Comunidad 9',
      description: 'Description for Comunidad 9',
    },
  ];

  return (
    <div className="screen">
      <div className="card-container">
      <Carousel cards={cards} CardComponent={PublicacionCard} />
      </div>
    </div>
  );
};

export default Publicaciones;
