import React from 'react';
import './style.css'; 
import imgCasa from "../../imgs/casa1.png"


function HomePage() {
  return (
    <div className="main-content">
      <div className="image-container">
        <img src={imgCasa} alt="Casa del Indio" />
      </div>
      <div className="text-container">
        <h2>Fundación Casa del Indio</h2>
        <p>
          La Casa del Indio es una Organización no gubernamental que se enfoca en brindarle hogar a indígenas de diferentes zonas del país para que estos tengan hogar en caso de que tengan que visitar Cartago o cercanías, entre otros tipos de ayuda que se les puedes ofrecer a esta parte de la población.
        </p>
        <div className="buttons-container">
          <button className="btn btn-ingresar">Ingresar</button>
          <button className="btn btn-registrarse">Registrarse</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
