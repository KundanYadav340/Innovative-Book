// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXbdv8UxHFl9K4E207kKGlpJTMBj6Ufmw",
  authDomain: "edulake-b1cb9.firebaseapp.com",
  projectId: "edulake-b1cb9",
  storageBucket: "edulake-b1cb9.appspot.com",
  messagingSenderId: "807748600292",
  appId: "1:807748600292:web:45d22c8ecd9537c027c7f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);