import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children, roles, permissions }) => {
  const { user } = useAuth();

  const hasPermission = () => {
    if (roles && !roles.includes(user.role)) {
      return false;
    }
    if (permissions) {
      for (const permission of permissions) {
        if (!user.permissions[permission]) {
          return false;
        }
      }
    }
    return true;
  };

  return hasPermission() ? children : <Navigate to="/" />;
};

export default PrivateRoute;
