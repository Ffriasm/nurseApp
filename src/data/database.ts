import { firestoreUserRepository } from "./firestore/userRepository";
import { firestoreServiceRequestRepository } from "./firestore/serviceRequestRepository";

export const db = {
  userRepo: firestoreUserRepository,
  serviceRequestRepo: firestoreServiceRequestRepository,
};