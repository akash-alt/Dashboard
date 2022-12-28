import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB3iHIwkI16dxaEZa-Pv-eO9xeZ6Y2FnNk",
  authDomain: "dashboard-auth-dd283.firebaseapp.com",
  projectId: "dashboard-auth-dd283",
  storageBucket: "dashboard-auth-dd283.appspot.com",
  messagingSenderId: "24201440385",
  appId: "1:24201440385:web:612771b6bed5a21905b180",
  measurementId: "G-QXZPHHTXE7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);


