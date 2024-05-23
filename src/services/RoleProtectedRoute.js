import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext';

const RoleProtectedRoute = ({ allowedRoles }) => {
  const { user } = useContext(UserContext);

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default RoleProtectedRoute;
