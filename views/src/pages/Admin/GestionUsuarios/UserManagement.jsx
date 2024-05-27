import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserManagement.css';
import { useGet } from '../../../useGet';

const UserManagement = () => {
  // GET Users
  const { variable: users } = useGet('http://localhost:4000/api/usuario');
  const userId = sessionStorage.getItem('userId');

  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleReloadUsers = () => {
    window.location.reload();
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleUserClick = (userId) => {
    navigate(`/gestion-usuarios/${userId}`);
  };

  return (
    <div className="user-management">
      <h2>Gestión de Usuarios</h2>
      <div className="user-management-actions">
        <button onClick={handleReloadUsers}>Recargar Usuarios</button>
        <input 
          type="text" 
          placeholder="Buscar usuario..." 
          value={search} 
          onChange={handleSearchChange} 
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users && users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())).map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin === 1 ? 'Administrador' : user.isAdmin === 0 ? 'Visitante' : 'Personalizado'}</td>
              <td>
                {userId != user.id && <button onClick={() => handleUserClick(user.id)}>Ver Detalles</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
