import React from 'react';
import Carousel from '../../components/Carousel/Carousel.jsx';
import { useGet } from '../../useGet';

const Comunidades = ({images}) => {
  // GET Comunidades
  const {variable: comunidades} = useGet('http://localhost:4000/api/community');

  return (
    <div className="comunidades">
      <div className="comunidades-cards">
        <Carousel cards={comunidades} images={images} />
      </div>
    </div>
  );
};

export default Comunidades;
