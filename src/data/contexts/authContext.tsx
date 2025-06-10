import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../interfaces/types";
import { useUserRepo } from "./UserRepositoryContext";


type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const userRepo = useUserRepo();
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    
   
  };

  const logout = () => {
    // Solo limpiamos el estado
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
};