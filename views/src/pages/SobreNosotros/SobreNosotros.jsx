import './style.css';
import { useGet } from '../../useGet';

const SobreNosotros = ({images}) => {

  // GET Fundacion
  const {variable: fundacion} = useGet('http://localhost:4000/api/fundacion/0');

  return (
    <div>
      {fundacion && fundacion.image && <img src={images(fundacion.image)} alt="Casa" className="full-width-banner" />}
      <div className="sobre-nosotros">
        <h1>¿Qué es la Fundación La Casa del Indio?</h1>
        {fundacion && fundacion.history && <p>{fundacion.history}</p>}
        <div className="mission-vision-container">
          <div className="mission">
            <h2>Misión</h2>
            {fundacion && fundacion.mision && <p>{fundacion.mision}</p>}
          </div>
          <div className="vision">
            <h2>Visión</h2>
            {fundacion && fundacion.vision && <p>{fundacion.vision}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
