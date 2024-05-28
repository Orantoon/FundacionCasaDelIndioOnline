import React from 'react';
import './style.css'; 
import { Link ,useNavigate} from 'react-router-dom';
import { useGet } from '../../useGet';
import Card from '../../components/Card/Card';
import casa2 from  "../../imgs/Casa2.png"
import imgCasa from "../../imgs/casa1.png"

function HomePage({images}) {
  // GET Post
  const { variable: posts } = useGet('http://localhost:4000/api/post');
  // GET Users
  const {variable: users} = useGet('http://localhost:4000/api/usuario');
  const userId = sessionStorage.getItem('userId');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  };

  const handleButtonSobreNosotros = () => {
    navigate('/sobre-nosotros');
  };
  
  const handleButtonDonacion = () => {
    navigate('/donacion');
  };

  const sortedPosts = posts ? posts.slice().sort((a, b) => new Date(b.creationDateTime) - new Date(a.creationDateTime)) : [];

  const recentPosts = sortedPosts.slice(0, 3);

  return (
    <div>
      <div className="main-content">
        <div className="image-container">
          <img src={imgCasa} alt="Casa del Indio" />
        </div>
        <div className="text-container">
          <h2>Fundación Casa del Indio</h2>
          <p>
            La Casa del Indio es una Organización no gubernamental que se enfoca en brindarle hogar a indígenas de diferentes zonas del país para que estos tengan hogar en caso de que tengan que visitar Cartago o cercanías, entre otros tipos de ayuda que se les puede ofrecer a esta parte de la población.
            Es una organización ecologista e indigenista.
          </p>
          {userId === null || userId === "-1" ? (
            <div className="buttons-container">
              <button className="btn btn-ingresar" onClick={handleButtonClick}>Ingresar</button>
            </div>
          ) : (
            <div>
              {users && (
                <span className='hello-user'>
                  Hola {users && users.find(user => user.id === parseInt(userId, 10))?.name}!
                </span>
              )}
            </div>
          )}
        </div>
      </div>
  
      <div>
        <h2 className="titles">Publicaciones</h2> 
        <div className="cards-container">
          {recentPosts.map((post) => (
            <Card
              description={post.text}
              title={post.name}
              image={post.image}
              images={images}
              creationDateTime={post.creationDateTime}
            />
          ))}
        </div>
  
        <div className="titles">
          <Link to="/publicaciones" className="titles" style={{"fontSize":22}}>Ver más</Link>    
        </div>
      </div>
  
      <div className="green-section">
        <img src={casa2} alt="Background" className="green-section-image" />
        <div className="green-section-content">
          <h2>Sobre la fundación:</h2>
          <p>Establecida en el 2013, la Fundación Casa del indio se ha esforzado en crear un ambiente acogedor para recibir y apoyar a los pueblos originarios.  Establecida en Cartago Costa Rica, la fundación busca velar por los intereses de todos los pueblos originarios de Costa Rica.</p>
          <button onClick={handleButtonSobreNosotros}>Conocer más</button>
        </div>
      </div>
  
      {userId != null || userId != "-1" && <div className="white-section">
        <hr className="horizontal-line" /> 
        <div className="white-section-content">
          <h2>¿Interesado en ayudar?</h2>
          <p>La fundación busca tanto recursos como personal voluntario para las giras y proyectos para seguir apoyando a los pueblos originarios, si está interesado no dude en dirigirse a la sección de Donación.</p>
          <button onClick={handleButtonDonacion}>Apoyar</button>
        </div>
        <hr className="horizontal-line" /> 
      </div>}
    </div>
  );
  
}

export default HomePage;
