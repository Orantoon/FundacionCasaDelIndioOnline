import React from 'react';
import './style.css';
import { useNavigate } from "react-router-dom";
import { useGet } from '../../useGet';
import { postData } from '../../postData';

function Login() {
  // GET Users
  const {variable: users} = useGet('http://localhost:4000/api/usuario');

  // Enviar a otra pantalla
  let navigate = useNavigate();

  
  const [isRightPanelActive, setRightPanelActive] = React.useState(false);
  const [alertaLogin, setAlertaLogin] = React.useState(false);
  const [alertaRegister, setAlertaRegister] = React.useState(false);

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  function handleSubmitRegister(e) {
    e.preventDefault();
  
    const form = e.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    const isAdmin = 0;
    const newsletterInput = form.querySelector('input[type="checkbox"]').checked;
    const newsletter = newsletterInput ? 1 : 0;
    const fundation = 1;

    const userData = {
      name,
      email,
      password,
      isAdmin,
      newsletter,
      fundation
    };
  
    postData('http://localhost:4000/api/usuario', userData)
    .then(data => {
      console.log('Success:', data);
      const userId = data.id
      console.log('New user ID:', userId);
      sessionStorage.setItem('userId', userId); // Se guarda el nuevo usuario en la variable de session
      navigate('/');
    })
    .catch(error => {
      console.error('Error:', error);
      setAlertaRegister(true);
        setTimeout(() => {
          setAlertaRegister(false);
        }, 3000);
    });
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    const usuarioExistente = users.filter((user) => user.email === email && user.password === password);
    
    if (usuarioExistente.length > 0){
        sessionStorage.setItem('userId', usuarioExistente[0].id); // Se guarda el nuevo usuario en la variable de session
        navigate('/');
    } else {
        setAlertaLogin(true);
        setTimeout(() => {
          setAlertaLogin(false);
        }, 3000);
    }
  };

  return (
    <div className="login">
      <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}>
        <div className="container__form container--signup">
          <form className="form" id="form1" onSubmit={handleSubmitRegister}>
            <h2 className="form__title">Inscribirse</h2>
            <input type="text" placeholder="Usuario" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Contraseña" className="input" />
            
            <div className="checkbox-container">
              <input type="checkbox" id="newsletter" className="checkbox" />
              <label htmlFor="newsletter">¿Desea recibir noticias a su correo electrónico?</label>
            </div>

            <button className="btn">Inscribirse</button>
          </form>
        </div>

        <div className="container__form container--signin">
          <form className="form" id="form2" onSubmit={handleSubmitLogin}>
            <h2 className="form__title">Iniciar sesión</h2>
            <input type="email" placeholder="Email" className="input"/>
            <input type="password" placeholder="Password" className="input"/>

            <a href="#" className="link">¿Olvidaste tu contraseña?</a>

            <button className="btn">Iniciar sesión</button>
          </form>
        </div>

        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button className="btn" id="signIn" onClick={handleSignInClick}>Iniciar sesión</button>
            </div>
            <div className="overlay__panel overlay--right">
              <button className="btn" id="signUp" onClick={handleSignUpClick}>Inscribirse</button>
            </div>
          </div>
        </div>
      </div>
      {alertaLogin && 
        <div className="alert">
          El usuario o contraseña es incorrecto, por favor inténtelo de nuevo.
        </div>
      }
      {alertaRegister && 
        <div className="alert">
          Ocurrió un error a la hora de registrarse, por favor inténtelo de nuevo.
        </div>
      }
    </div>
  );
}

export default Login;
