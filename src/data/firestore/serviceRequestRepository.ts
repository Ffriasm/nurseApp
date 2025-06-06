import { IServiceRequestRepository } from "../interfaces/IServiceRequestRepository";
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
import { ServiceRequest } from "../interfaces/types";


export const firestoreServiceRequestRepository: IServiceRequestRepository = {
    async createRequest(request) {
        await setDoc(doc(db, "serviceRequests", request.id), request);
    },
    
    async getRequestById(requestId) {
        const docRef = doc(db, "serviceRequests", requestId);
        const snap = await getDoc(docRef);
        return snap.exists() ? (snap.data() as ServiceRequest) : null;
    },
    
    async getRequestsByClient(clientId) {
        const q = query(
        collection(db, "serviceRequests"),
        where("clientId", "==", clientId)
        );
        const snaps = await getDocs(q);
        return snaps.docs.map((doc) => doc.data() as ServiceRequest);
    },
    
    async getAvailableRequests() {
        const q = query(
        collection(db, "serviceRequests"),
        where("status", "==", "pending")
        );
        const snaps = await getDocs(q);
        return snaps.docs.map((doc) => doc.data() as ServiceRequest);
    },
    
    async assignNurse(requestId, nurseId) {
        await updateDoc(doc(db, "serviceRequests", requestId), { nurseId });
    },
    
    async updateStatus(requestId, status) {
        await updateDoc(doc(db, "serviceRequests", requestId), { status });
    },
}
