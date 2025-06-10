import React, { ReactNode } from "react";
import { UserRepositoryProvider } from "../data/contexts/UserRepositoryContext";
import { ServiceRequestRepositoryProvider } from "../data/contexts/ServiceRequestRepositoryContext";

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContext = ({ children }: AppContextProviderProps) => {
  return (
    <UserRepositoryProvider>
      <ServiceRequestRepositoryProvider>
        {children}
      </ServiceRequestRepositoryProvider>
    </UserRepositoryProvider>
  );
};