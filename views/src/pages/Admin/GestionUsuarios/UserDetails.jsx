import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [permissions, setPermissions] = useState({
    createPosts: false,
    modifyPosts: false,
    createEvents: false,
    viewDonations: false,
    modifyUsers: false
  });

  useEffect(() => {
    // Simulación de llamada a API para obtener los detalles del usuario
    const fetchedUser = {
      id: userId,
      name: 'Juan Perez',
      role: 'User',
      email: 'juan@example.com',
      lastVisit: '2024-05-01',
      permissions: {
        createPosts: true,
        modifyPosts: false,
        createEvents: true,
        viewDonations: false,
        modifyUsers: false
      }
    };
    setUser(fetchedUser);
    setName(fetchedUser.name);
    setEmail(fetchedUser.email);
    setRole(fetchedUser.role);
    setPermissions(fetchedUser.permissions);
  }, [userId]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handlePermissionChange = (e) => {
    setPermissions({ ...permissions, [e.target.name]: e.target.checked });
  };

  const handleSaveChanges = () => {
    // Simulación de llamada a API para actualizar el usuario
    const updatedUser = { name, role, permissions };

    // Comentando la parte que envía los datos a la base de datos y simulando una respuesta exitosa
    // fetch(`/api/users/${userId}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(updatedUser)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Cambios guardados:', data);
    //   navigate('/gestion-usuarios');
    // })
    // .catch(error => {
    //   console.error('Error al guardar los cambios:', error);
    // });

    // Simulación de respuesta exitosa y redirección a la página de gestión de usuarios
    console.log('Cambios guardados:', updatedUser);
    navigate('/gestion-usuarios');
  };

  const handleDeleteUser = () => {
    // Simulación de llamada a API para eliminar el usuario
    // fetch(`/api/users/${userId}`, {
    //   method: 'DELETE'
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Usuario eliminado:', data);
    //   navigate('/gestion-usuarios');
    // })
    // .catch(error => {
    //   console.error('Error al eliminar el usuario:', error);
    // });

    // Simulación de eliminación y redirección a la página de gestión de usuarios
    console.log('Usuario eliminado');
    navigate('/gestion-usuarios');
  };

  if (!user) {
    return <div>Cargando...</div>;
  }

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
          Rol:
          <select value={role} onChange={handleRoleChange}>
            <option value="Admin">Administrador</option>
            <option value="User">Visitante</option>
            <option value="Custom">Personalizado</option>
          </select>
        </label>
        {role === 'Custom' && (
          <div className="permissions">
            <h3>Permisos</h3>
            <label>
              <input 
                type="checkbox" 
                name="createPosts" 
                checked={permissions.createPosts} 
                onChange={handlePermissionChange} 
              />
              Crear Publicaciones
            </label>
            <label>
              <input 
                type="checkbox" 
                name="modifyPosts" 
                checked={permissions.modifyPosts} 
                onChange={handlePermissionChange} 
              />
              Modificar Publicaciones
            </label>
            <label>
              <input 
                type="checkbox" 
                name="createEvents" 
                checked={permissions.createEvents} 
                onChange={handlePermissionChange} 
              />
              Crear Eventos
            </label>
            <label>
              <input 
                type="checkbox" 
                name="viewDonations" 
                checked={permissions.viewDonations} 
                onChange={handlePermissionChange} 
              />
              Ver Donaciones
            </label>
            <label>
              <input 
                type="checkbox" 
                name="modifyUsers" 
                checked={permissions.modifyUsers} 
                onChange={handlePermissionChange} 
              />
              Modificar Usuarios
            </label>
          </div>
        )}
        <button onClick={handleSaveChanges}>Guardar Cambios</button>
        <button onClick={handleDeleteUser} className="delete-button">Eliminar Usuario</button>
        <button onClick={() => navigate('/gestion-usuarios')} className="back-button">Atrás</button>
      </div>
    </div>
  );
};

export default UserDetails;
