import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css'; // Asegúrate de tener este archivo en tu proyecto

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logica del envío de correo electrónico
    setIsSubmitted(true);
  };

  const handleBackToLogin = () => {
    navigate('/');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        {isSubmitted ? (
          <div>
            <p>Su contraseña temporal ha sido enviada a su correo electrónico.</p>
            <button className="btn" onClick={handleBackToLogin}>Regresar al menú de inicio de sesión</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="form__title">Recuperar Contraseña</h2>
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              className="input" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn" type="submit">Enviar nueva temporal</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
