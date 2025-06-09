import React, { createContext, useContext, ReactNode } from "react";
import { db } from "../database";
import { IUserRepository } from "../interfaces/IUserRepository";

const UserRepositoryContext = createContext<IUserRepository | null>(null);

interface UserRepositoryProviderProps {
  children: ReactNode;
}

export const UserRepositoryProvider = ({ children }: UserRepositoryProviderProps) => (
  <UserRepositoryContext.Provider value={db.userRepo}>
    {children}
  </UserRepositoryContext.Provider>
);

export const useUserRepository = (): IUserRepository => {
  const context = useContext(UserRepositoryContext);
  if (!context) {
    throw new Error("useUserRepository debe usarse dentro de un UserRepositoryProvider");
  }
  return context;
};