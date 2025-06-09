import React, { createContext, useContext, ReactNode } from "react";
import { IServiceRequestRepository } from "../interfaces/IServiceRequestRepository";
import { db } from "../database";

const ServiceRequestRepositoryContext = createContext<IServiceRequestRepository | null>(null);

export const useServiceRequestRepository = (): IServiceRequestRepository => {
  const context = useContext(ServiceRequestRepositoryContext);
  if (!context) {
    throw new Error("useServiceRequestRepository debe usarse dentro de ServiceRequestRepositoryProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const ServiceRequestRepositoryProvider = ({ children }: Props) => {
  return (
    <ServiceRequestRepositoryContext.Provider value={db.serviceRequestRepo}>
      {children}
    </ServiceRequestRepositoryContext.Provider>
  );
};