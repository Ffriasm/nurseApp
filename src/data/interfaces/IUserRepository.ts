import { User,Profession } from "./types";

export interface IUserRepository {
  createUser(user: User, password:string): Promise<void>;
  logout(): Promise<void>;
  onAuthStateChanged(callback: (user: User | null) => void): () => void;
  loginWithEmailAndPassword(email: string, password: string): Promise<User | null>;
  updateUser(userId: string, data: Partial<User>): Promise<void>;
  getUserById(userId: string): Promise<User | null>;
  listServicesByUserRole(role: Profession): Promise<User[]>;
  listAvailableNurses(): Promise<User[]>;
}