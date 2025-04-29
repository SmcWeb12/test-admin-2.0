// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyATLls3bv7jR_hG967ih9USHOPLAME1a88",
  authDomain: "status-app-1-b0cfc.firebaseapp.com",
  databaseURL: "https://status-app-1-b0cfc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "status-app-1-b0cfc",
  storageBucket: "status-app-1-b0cfc.appspot.com",
  messagingSenderId: "649198476150",
  appId: "1:649198476150:web:2318dfb2b39d6c390fb857",
  measurementId: "G-C5MT5K2GN7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
