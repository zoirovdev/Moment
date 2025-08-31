import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "./AuthContext.jsx";



function ProtectedRoute({ children }){
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if(loading){
    return <div>Loading...</div>
  }

  if(!isAuthenticated){
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return children;
}


export default ProtectedRoute;
