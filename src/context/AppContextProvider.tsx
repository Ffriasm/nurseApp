import React, { ReactNode } from "react";
import { UserRepositoryProvider } from "../data/contexts/UserRepositoryContext";
import { ServiceRequestRepositoryProvider } from "../data/contexts/ServiceRequestRepositoryContext";
import { AuthContextProvider } from "../data/contexts/AuthContext";

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContext = ({ children }: AppContextProviderProps) => {
  return (
    <UserRepositoryProvider>
      <ServiceRequestRepositoryProvider>
        <AuthContextProvider>
        {children}
        </AuthContextProvider>
      </ServiceRequestRepositoryProvider>
    </UserRepositoryProvider>
  );
};