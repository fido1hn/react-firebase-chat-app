import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-firebase-chat-f66f5.firebaseapp.com",
  projectId: "react-firebase-chat-f66f5",
  storageBucket: "react-firebase-chat-f66f5.appspot.com",
  messagingSenderId: "737288543063",
  appId: "1:737288543063:web:a8238959ed57e3ec2cbc12",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
