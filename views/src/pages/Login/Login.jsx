// login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Asegúrate de tener este archivo en tu proyecto

function App() {
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [password, setPassword] = useState('');
  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    specialChar: false,
  });
  const navigate = useNavigate();

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setValidations({
      length: value.length >= 8 && value.length <= 16,
      uppercase: /[A-Z]/.test(value),
      specialChar: /[!@#$%^&*]/.test(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError('La contraseña debe cumplir con todas las reglas.');
    } else {
      setPasswordError('');
      // Aquí puedes manejar el envío del formulario cuando la contraseña es válida
      console.log('Formulario enviado con éxito');
    }
  };

  const handleForgotPasswordClick = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="login-page">
      <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}>
        <div className="container__form container--signup">
          <form className="form" id="form1" onSubmit={handleSubmit}>
            <h2 className="form__title">Inscribirse</h2>
            <input type="text" placeholder="Usuario" className="input" required />
            <input type="email" placeholder="Email" className="input" required />
            <input 
              type="password" 
              placeholder="Contraseña" 
              className="input" 
              name="password" 
              required 
              value={password}
              onChange={handlePasswordChange}
            />
            <p className="password-rules-header">La contraseña debe tener:</p>
            <ul className="password-rules">
              <li className={validations.length ? 'valid' : 'invalid'}>8 a 16 caracteres</li>
              <li className={validations.uppercase ? 'valid' : 'invalid'}>Letra mayúscula</li>
              <li className={validations.specialChar ? 'valid' : 'invalid'}>Carácter especial</li>
            </ul>
            {passwordError && <p className="error">{passwordError}</p>}
            <button className="btn">Inscribirse</button>
          </form>
        </div>

        <div className="container__form container--signin">
          <form className="form" id="form2" onSubmit={handleSubmit}>
            <h2 className="form__title">Iniciar sesión</h2>
            <input type="email" placeholder="Email" className="input" required />
            <input 
              type="password" 
              placeholder="Password" 
              className="input" 
              name="password" 
              required 
              value={password}
              onChange={handlePasswordChange}
            />
            <a href="#" className="link" onClick={handleForgotPasswordClick}>Olvidaste tu contraseña?</a>
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
    </div>
  );
}

export default App;
