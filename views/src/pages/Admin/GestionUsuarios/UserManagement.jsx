import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const fetchUsers = () => {
    // Simulación de llamada a API para obtener los usuarios
    const fetchedUsers = [
      { id: 1, name: 'Juan Perez', role: 'Admin', email: 'juan@example.com', lastVisit: '2024-05-01' },
      { id: 2, name: 'Maria Lopez', role: 'User', email: 'maria@example.com', lastVisit: '2024-05-03' },
      // Otros usuarios...
    ];
    setUsers(fetchedUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, [location]);

  const handleReloadUsers = () => {
    fetchUsers();
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
            <th>Última Visita</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())).map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role === 'Admin' ? 'Administrador' : user.role === 'User' ? 'Visitante' : 'Personalizado'}</td>
              <td>{user.lastVisit}</td>
              <td>
                <button onClick={() => handleUserClick(user.id)}>Ver Detalles</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
