import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "your-own-Firebase-console-apiKey",
    authDomain: "chat-app2-cae02.firebaseapp.com",
    projectId: "firebase-project-appid",
    storageBucket: "chat-app2-cae02.appspot.com",
    messagingSenderId: "137956521592",
    appId: "1:137956521592:web:6ab9b4952c3637a27b1f8d"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
