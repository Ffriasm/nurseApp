import { IUserRepository } from "../interfaces/IUserRepository";
import { fireStore } from "../../../firebaseConfig";
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";


export const firestoreUserRepository: IUserRepository = {
  async createUser(user: User, password: string) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      user.email,
      password
    );
    user.id = userCredential.user.uid;
    user.createdAt = new Date();
    await setDoc(doc(fireStore, "users", user.id), user);
  },

  async getUserById(userId: string) {
    const docRef = doc(fireStore, "users", userId);
    const snap = await getDoc(docRef);
    return snap.exists() ? (snap.data() as User) : null;
  },

  async updateUser(userId, data) {
    await updateDoc(doc(fireStore, "users", userId), data);
  },

  async listServicesByUserRole(role: string) {
    const q = query(collection(fireStore, "users"), where("type", "==", role));
    const snaps = await getDocs(q);
    return snaps.docs.map((doc) => doc.data() as User);
  },

  async listAvailableNurses() {
    const q = query(
      collection(fireStore, "users"),
      where("type", "==", "nurse"),
      where("nurseProfile.available", "==", true)
    );
    const snaps = await getDocs(q);
    return snaps.docs.map((doc) => doc.data() as User);
  },
};
