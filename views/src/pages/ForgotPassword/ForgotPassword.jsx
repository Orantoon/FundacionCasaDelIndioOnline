import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGet } from '../../useGet';
import {putData} from '../../putData';
import './ForgotPassword.css';

function ForgotPassword() {
  // GET Users
  const {variable: users} = useGet('http://localhost:4000/api/usuario');

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [alertaSendEmail, setAlertaSendEmail] = useState(false);
  const [alertaNoExiste, setAlertaNoExiste] = useState(false);
  const navigate = useNavigate();

  const generateRandomPassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (users.some(user => user.email === email)){

      const newPassword = generateRandomPassword();

      try {
        const response = await fetch('http://localhost:4000/api/sendemail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, newPassword })
        });
    
        if (response.ok) {
          setIsSubmitted(true);
          console.log('Email enviado exitosamente');
        } else {
          console.error('Error al enviar el correo');
          setAlertaSendEmail(true);
            setTimeout(() => {
              setAlertaSendEmail(false);
            }, 3000);
        }
      } catch (error) {
        console.error('Error de red:', error);
        setAlertaSendEmail(true);
            setTimeout(() => {
              setAlertaSendEmail(false);
            }, 3000);
      }

      const updatePassword = {
        password: newPassword
      }

      const userToUpdate = users.find(user => user.email === email);

      putData('http://localhost:4000/api/usuario/' + userToUpdate.id, updatePassword)
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);

        setAlertaSendEmail(true);
            setTimeout(() => {
              setAlertaSendEmail(false);
            }, 3000);
      });

      setIsSubmitted(true);

    } else {

      setAlertaNoExiste(true);
          setTimeout(() => {
            setAlertaNoExiste(false);
          }, 3000);
          
    }
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
      {alertaSendEmail && 
        <div className="alert">
          Ocurrió un error al enviar el correo, por favor inténtelo de nuevo.
        </div>
      }
      {alertaNoExiste && 
        <div className="alert">
          Ese correo no esta asociada a ninguna cuenta. Regístrese o utilice un correo distinto.
        </div>
      }
    </div>
  );
}

export default ForgotPassword;
