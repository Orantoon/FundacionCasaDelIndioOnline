import React from 'react';
import { useAuth } from '../../Admin/GestionRoles/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const adminUser = {
      name: 'Admin User',
      role: 'Admin',
    };
    login(adminUser);
    navigate('/'); // Redirige a la página principal
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleLogin}>Simulate Admin Login</button>
    </div>
  );
};

export default AdminLogin;
