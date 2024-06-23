// Import the functions you need from the SDKs you need
// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCCEjaRMdtW4qK86mqNXfH9EGnvCoJP8GE",
  authDomain: "blogs-3b3d0.firebaseapp.com",
  databaseURL: "https://blogs-3b3d0-default-rtdb.firebaseio.com",
  projectId: "blogs-3b3d0",
  storageBucket: "blogs-3b3d0.appspot.com",
  messagingSenderId: "1087033113740",
  appId: "1:1087033113740:web:55c4baf0afbfe00eb54fa9",
  measurementId: "G-4SS522Q6C9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app);
const auth = getAuth(app);
export { db, database,auth };
