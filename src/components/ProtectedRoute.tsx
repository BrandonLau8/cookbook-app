import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";

interface ProtectedRouteProps{
  path: string;
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  path,
  element,
  
}) => {
  const isAuthenticated = document.cookie.includes("token");
  return (
    <Route
      path={path}
      element={isAuthenticated ? element : <Navigate to="/login" replace />}
      
    />
  );
};

export default ProtectedRoute;
