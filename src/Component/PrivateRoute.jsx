import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PrivateRoute = ({ children, role }) => {
  const { auth } = useAuth();

  if (!auth.isAuthenticated) return <Navigate to="/login" />;

  if (role && auth.role !== role) return <Navigate to="/login" />;

  return children;
};

export default PrivateRoute;
