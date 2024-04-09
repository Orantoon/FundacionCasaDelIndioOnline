import React from 'react';
import './style.css'; 
import Card from '../../components/Card/Card';
import imgCasa from "../../imgs/casa1.png"
import imgCard1 from  "../../imgs/Card1.png"
import imgCard2 from  "../../imgs/Card2.png"
import imgCard3 from  "../../imgs/Card3.jpg"


function HomePage() {
  return (
    <div>
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
    <h2 className="titles">Publicaciones</h2> 
    <div className="cards-container">
              <Card
          image={imgCard3}
          title="Recurso de Amparo contra el Ministerio de Educación Publica"
          description="Esta semana los padres y madres de familia se mantuvieron en huelga por el derecho a la educación de sus hijos en un centro educativo con condiciones de infraestructura adecuadas y en buen estado."
          link="/publicaciones"
        />
        <Card
          image={imgCard1}
          title="Reunión con Laura Arias Guillén"
          description="Reunión con la Licenciada Laura Arias Guillén, funcionaria pública del Poder Judicial para conocer el trabajo que hacemos y las líneas de acción para trabajos conjuntos, asesoría legal para indígenas, coordinación de diálogos inter institucionales y para en conjunto."
          link="/publicaciones"
        />
        <Card
          image={imgCard2}
          title="5ta visita a los Bajos de Pacuare"
          description="La Junta Directiva de la Fundación, en su 5ta visita a los Bajos de Pacuare, territorio indígena Cabécar, apoyará a la niñez de la escuela Nimarí Ñak con la construcción de dos puentes peatonales para que puedan asistir a sus clases aunque se crezcan las quebradas durante el próximo invierno."
          link="/publicaciones"
        />
      </div>
      <div className="titles">
        <a href="/ruta/a/otra/pagina" className="titles" style={{"fontSize":22}}>Ver más</a> {/* Enlace "Ver más" */}
      </div>
    </div>
  );
}

export default HomePage;
