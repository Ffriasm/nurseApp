import { IUserRepository } from "../interfaces/IUserRepository";
import { db } from "../../../firebaseConfig";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { User } from "../interfaces/types";

export const firestoreUserRepository: IUserRepository = {
  async createUser(user: User) {
    await setDoc(doc(db, "users", user.id), user);
  },

  async getUserById(userId: string) {
    const docRef = doc(db, "users", userId);
    const snap = await getDoc(docRef);
    return snap.exists() ? (snap.data() as User) : null;
  },

  async updateUser(userId, data) {
    await updateDoc(doc(db, "users", userId), data);
  },

  async listServicesByUserRole(role: string) {
    const q = query(collection(db, "users"), where("type", "==", role));
    const snaps = await getDocs(q);
    return snaps.docs.map((doc) => doc.data() as User);
  },

  async listAvailableNurses() {
    const q = query(
      collection(db, "users"),
      where("type", "==", "nurse"),
      where("nurseProfile.available", "==", true)
    );
    const snaps = await getDocs(q);
    return snaps.docs.map((doc) => doc.data() as User);
  },
};
