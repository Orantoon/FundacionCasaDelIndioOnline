import './style.css';
import { useGet } from '../../useGet';
import React, { useState, useEffect } from 'react';

const Idiomas = ({ images }) => {
    const [idioma, setIdioma] = useState(parseInt(sessionStorage.getItem('idioma')) || 0);
    const [url, setUrl] = useState(`http://localhost:4000/api/fundacion/${idioma}`);
    const [activeButton, setActiveButton] = useState(idioma);

    // GET Fundacion
    const { variable: fundacion } = useGet(url);

    const cambiarIdioma = (nuevoIdioma) => {
        sessionStorage.setItem('idioma', nuevoIdioma);
        setIdioma(nuevoIdioma);
        setActiveButton(nuevoIdioma);
    };

    useEffect(() => {
        setUrl(`http://localhost:4000/api/fundacion/${idioma}`);
    }, [idioma]);

    return (
        <div>
            {fundacion && fundacion.image && <img src={images(fundacion.image)} alt="Casa" className="full-width-banner" />}
            <div className="idiomas">
                <h1>Idiomas de Costa Rica</h1>
                {fundacion && fundacion.infoIdiomas && <p>{fundacion.infoIdiomas}</p>}
                <hr className="horizontal-line" /> 
                <div className="buttons-container">
                    <button className={`btn btn-español ${activeButton === 0 ? 'active' : ''}`} onClick={() => cambiarIdioma(0)}>Español</button>
                    <button className={`btn btn-ingles ${activeButton === 1 ? 'active' : ''}`} onClick={() => cambiarIdioma(1)}>Inglés</button>
                    <button className={`btn btn-bribri ${activeButton === 2 ? 'active' : ''}`} onClick={() => cambiarIdioma(2)}>Bribri</button>
                    <button className={`btn btn-cabecar ${activeButton === 3 ? 'active' : ''}`} onClick={() => cambiarIdioma(3)}>Cabécar</button>
                </div>
            </div>
        </div>
    );
}

export default Idiomas;
