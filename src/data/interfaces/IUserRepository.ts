import { User,Profession } from "./types";

export interface IUserRepository {
  createUser(auth:any, user: User): Promise<void>;
  updateUser(userId: string, data: Partial<User>): Promise<void>;
  getUserById(userId: string): Promise<User | null>;
  listServicesByUserRole(role: Profession): Promise<User[]>;
  listAvailableNurses(): Promise<User[]>;
  createUserWithEmailAndPassword(auth: any, email: string, password: string): Promise<void>;
}