// Tipos generales
export enum UserType {
  Client = 'client',
  Nurse = 'nurse',
}
export enum Profession {
  Enfermera = 'enfermer@',
  Tens = 'tens',
}
export enum ServiceType {
  Curacion = 'curacion',
  Inyeccion = 'inyeccion',
  ControlSignos = 'control_signos',
  Vacunacion = 'vacunacion',
}
export enum RequestStatus {
  Pending = 'pending',
  Accepted = 'accepted',
  Completed = 'completed',
  Cancelled = 'cancelled',
}

// base profile
export interface BaseUser {
  id: string; // Firestore ID
  type: UserType;
  name: string;
  email: string;
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
export interface ServiceRequest  {
  id: string;
  title: string;
  description: string;
  type: "direct" | "open";
  priority: "urgent" | "planned";
  serviceType: "curaciones" | "inyección" | "control signos" | "otros";
  price: number; 
  createdAt: Date;
  scheduledAt?: Date;
  clientId: string;
  targetNurseId?: string;
  location: {
    lat: number;
    lng: number;
  };
  distanceFromNurse?: number; 
};