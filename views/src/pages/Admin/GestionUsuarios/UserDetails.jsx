import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UserDetails.css';
import { useGet } from '../../../useGet';
import { putData } from '../../../putData';
import {deleteData} from '../../../deleteData';

const UserDetails = () => {
  // GET Users
  const { variable: users } = useGet('http://localhost:4000/api/usuario');

  const { userId } = useParams();
  const navigate = useNavigate();
  const [alertaUsuario, setAlertaUsuario] = useState(false);
  const [alertaDelete, setAlertaDelete] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(0);
  const [newsletter, setNewsletter] = useState(0);
 
  useEffect(() => {
    const user = users && users.filter(user => user.id === parseInt(userId))[0];
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPassword(user.password);
      setIsAdmin(user.isAdmin);
      setNewsletter(user.newsletter);
    }
  }, [userId, users]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIsAdminChange = (e) => {
    setIsAdmin(e.target.checked ? 1 : 0);
  };

  const handleNewsletterChange = (e) => {
    setNewsletter(e.target.checked ? 1 : 0);
  };

  const handleSaveChanges = () => {

    const updatedUser = { 
      name: name, 
      email: email,
      password: password,
      isAdmin: isAdmin, 
      newsletter: newsletter,
    };

    putData('http://localhost:4000/api/usuario/' + parseInt(userId), updatedUser)
      .then(data => {
          console.log('Success:', data);
          window.location.reload();
      })
      .catch(error => {
          console.error('Error:', error);

          setAlertaUsuario(true);
          setTimeout(() => {
            setAlertaUsuario(false);
          }, 3000);
      });

    console.log('Cambios guardados:', updatedUser);
    navigate('/gestion-usuarios');
  };

  const handleDeleteUser = () => {

    if (window.confirm('¿Está seguro de eliminar el usuario?')) {
      console.log(`Eliminar Usuario ${userId}`);

      deleteData('http://localhost:4000/api/usuario/' + parseInt(userId))
      .then(data => {
        console.log('Success:', data);
        navigate('/gestion-usuarios');
        window.location.reload();
      })
      .catch(error => {
        console.error('Error:', error);

        setAlertaDelete(true);
          setTimeout(() => {
            setAlertaDelete(false);
          }, 3000);
      });
    }
  };

  return (
    <div className="user-details">
      <h2>Detalles del Usuario</h2>
      <div className="user-details-form">
        <label>
          Nombre:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} disabled className="non-selectable" />
        </label>
        <label>
          Es Administrador:
          <input type="checkbox" checked={isAdmin === 1} value={isAdmin} onChange={handleIsAdminChange} />
        </label>
        <label>
          Newsletter:
          <input type="checkbox" checked={newsletter === 1} value={newsletter} onChange={handleNewsletterChange} />
        </label>
        
        <button onClick={handleSaveChanges}>Guardar Cambios</button>
        <button onClick={handleDeleteUser} className="delete-button">Eliminar Usuario</button>
        <button onClick={() => navigate('/gestion-usuarios')} className="back-button">Atrás</button>
      </div>
      {alertaUsuario && 
        <div className="alert">
        Ocurrió un error a la hora de actualizar el usuario, por favor inténtelo de nuevo.
        </div>
      }
      {alertaDelete && 
        <div className="alert">
          Ocurrió un error a la hora de eliminar el usuario, por favor inténtelo de nuevo.
        </div>
      }
    </div>
  );
};

export default UserDetails;
