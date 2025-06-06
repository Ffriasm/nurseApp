// Tipos generales
export type UserType = 'client' | 'nurse';
export type Profession = 'enfermer@' | 'tens';
export type ServiceType = 'curacion' | 'inyeccion' | 'control_signos' | 'vacunacion';
export type RequestStatus = 'pending' | 'accepted' | 'completed' | 'cancelled';

// base profile
export interface BaseUser {
  id: string; // Firestore ID
  type: UserType;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: Date;
}

// nurse or tens profile
export interface NurseProfile {
  sisNumber: string; // number of SIS registration
  profession: Profession;
  experienceYears: number;
  specialties: ServiceType[];
  available: boolean;
}

// full profile
export interface User extends BaseUser {
  nurseProfile?: NurseProfile;
}

// request for service
export interface ServiceRequest {
  id: string; // Firestore ID
  clientId: string;
  nurseId?: string;
  serviceType: ServiceType;
  status: RequestStatus;
  scheduledAt: Date;
  location: string;
  notes?: string;
}