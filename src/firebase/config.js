// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw1rdMOY6YyxbvwHHghsPkMFLGT2C4F4Y",
  authDomain: "e-ducacion-e9e18.firebaseapp.com",
  projectId: "e-ducacion-e9e18",
  storageBucket: "e-ducacion-e9e18.appspot.com",
  messagingSenderId: "207011559454",
  appId: "1:207011559454:web:3773ff7275f60a98fd560f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)