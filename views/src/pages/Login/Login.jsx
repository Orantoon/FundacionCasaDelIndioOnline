import React, { useState } from 'react';
import './style.css'; // Asegúrate de tener este archivo en tu proyecto

function App() {
  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}>
      <div className="container__form container--signup">
        <form className="form" id="form1" onSubmit={handleSubmit}>
          <h2 className="form__title">Inscribirse</h2>
          <input type="text" placeholder="Usuario" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Contraseña" className="input" />
          <button className="btn">Inscribirse</button>
        </form>
      </div>

      <div className="container__form container--signin">
        <form className="form" id="form2" onSubmit={handleSubmit}>
          <h2 className="form__title">Iniciar sesión</h2>
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <a href="#" className="link">Olvidaste tu contraseña?</a>
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
  );
}

export default App;