import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children }) => {
  if (!isAdmin) {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default ProtectedRoute;
