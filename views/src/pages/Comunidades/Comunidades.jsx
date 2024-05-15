import React from 'react';
import './style.css';
import imgCasa from "../../imgs/banner.jpg"

function Comunidades() {
  return (
    <div> <img src={imgCasa} alt="Banner" className="full-width-banner" />
    <div className="sobre-nosotros">
      <h1>¿Qué es la Fundación La Casa del Indio?</h1>
      <p>
      La Fundación Casa del Indio es una Organización No Gubernamental (ONG) que se enfoca en brindarle hogar a indígenas de diferentes zonas para que estos tengan hogar en caso de que tengan que visitar Cartago o cercanías, entre otros tipos de ayuda que se les puede ofrecer a esta parte de la población. Actualmente, la Fundación Casa del Indio carece de un sistema en línea que proporcione información sobre su ubicación, sus actividades , información que se brinda y, lo más importante, cómo colaborar con esta organización no gubernamental que se enfoca en apoyar a comunidades indígenas en Costa Rica. Este proyecto tiene como objetivo desarrollar un sistema de software que le ofrezca a esta ONG la publicación de información de interés y un acceso a la misma desde cualquier lugar. 
     </p>
      <div className="mission-vision-container">
        <div className="mission">
          <h2>Misión</h2>
          <p>
          Establecida en el 2013, la Fundación Casa del indio se ha esforzado en crear un ambiente acogedor para recibir y apoyar a los pueblos originarios.  Establecida en Cartago Costa Rica, la fundación busca velar por los intereses de todos los pueblos originarios de Costa Rica.
            </p>
        </div>
        <div className="vision">
          <h2>Visión</h2>
          <p> La Casa del Indio es una Organizaciòn no gubernamental que se enfoca en brindarle hogar a indìgenas de diferentes zonas del paìs para que estos tengan hogar en caso de que tengan que visitar Cartago o cercanìas, entre otros tipos de ayuda que se les puedes ofrecer a esta parte de la poblaciòn.
           </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Comunidades;
