import React, { useState, createContext, useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const signup = (user) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
