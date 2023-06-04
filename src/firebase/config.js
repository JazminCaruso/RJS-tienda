// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjozRM63R5-dpVxdFjdGi7rapX97r9AlI",
  authDomain: "jc-tienda-d94b6.firebaseapp.com",
  projectId: "jc-tienda-d94b6",
  storageBucket: "jc-tienda-d94b6.appspot.com",
  messagingSenderId: "274918005164",
  appId: "1:274918005164:web:3bf4d4f96c78cb6bfa8209"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)