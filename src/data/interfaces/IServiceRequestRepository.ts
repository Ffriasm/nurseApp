import { ServiceRequest } from "./types";

export interface IServiceRequestRepository {
  createRequest(request: ServiceRequest): Promise<void>;
  getRequestById(requestId: string): Promise<ServiceRequest | null>;
  getRequestsByClient(clientId: string): Promise<ServiceRequest[]>;
  getAvailableRequests(): Promise<ServiceRequest[]>;
  assignNurse(requestId: string, nurseId: string): Promise<void>;
  updateStatus(requestId: string, status: string): Promise<void>;
}