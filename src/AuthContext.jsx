import React, { createContext, useContext, useState, useEffect } from "react";
import authService from "./services/authService.js";


const AuthContext = createContext();


export function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token){
      authService.getMe()
	.then(userData => {
          setUser(userData);
	  setLoading(false);
	})
	.catch(() => {
          localStorage.removeItem('token');
	  localStorage.removeItem('userId');
	  setLoading(false);
	})
    } else {
      setLoading(false);	
    }
  }, []);

  const login = (userData) => {
    setUser(userData.user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout
  }

  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}



export function useAuth() {
  const context = useContext(AuthContext);
  if(!context){
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
