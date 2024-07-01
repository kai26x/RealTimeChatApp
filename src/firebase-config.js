// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAWNEDUIFxS2ORErLzu3DgMAaNJuMkF2rE",
  authDomain: "chatapp-e93eb.firebaseapp.com",
  projectId: "chatapp-e93eb",
  storageBucket: "chatapp-e93eb.appspot.com",
  messagingSenderId: "859101353932",
  appId: "1:859101353932:web:e6defa7dd9934f31dcaf69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();