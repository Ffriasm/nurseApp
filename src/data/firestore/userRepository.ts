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
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
  async loginWithEmailAndPassword(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const userData = await getDoc(doc(fireStore, "users", user.uid));
    return userData.exists() ? (userData.data() as User) : null;
  },
  async logout() {
    await auth.signOut();
  },
  onAuthStateChanged(callback: (user: User | null) => void) {
  const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      
      getDoc(doc(fireStore, "users", firebaseUser.uid))
        .then((userData) => {
          if (userData.exists()) {
            callback(userData.data() as User);
          } else {
            callback(null);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          callback(null);
        });
    } else {
      callback(null);
    }
  });

  return unsubscribe;
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
