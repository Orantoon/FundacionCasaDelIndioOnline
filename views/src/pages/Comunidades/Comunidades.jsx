import React from 'react';
import Carousel from '../../components/Carousel/Carousel.jsx';
import { useFetch } from '../../useFetch';

const Comunidades = ({images}) => {
  // GET Comunidades
  const {variable: comunidades} = useFetch('http://localhost:4000/api/community');

  return (
    <div className="screen">
      <div className="card-container">
        <Carousel cards={comunidades} images={images} />
      </div>
    </div>
  );
};

export default Comunidades;
