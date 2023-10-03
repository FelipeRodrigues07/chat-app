// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBflCexHzWre0J2NcSTLFr_koKrVpVVUMg",
  authDomain: "chatapp-54e98.firebaseapp.com",
  projectId: "chatapp-54e98",
  storageBucket: "chatapp-54e98.appspot.com",
  messagingSenderId: "874099989808",
  appId: "1:874099989808:web:273be0c446af6896007cf5",
  measurementId: "G-PF714XSSMC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
