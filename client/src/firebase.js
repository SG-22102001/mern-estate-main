// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-fecb6.firebaseapp.com",
  projectId: "estate-fecb6",
  storageBucket: "estate-fecb6.appspot.com",
  messagingSenderId: "500762062193",
  appId: "1:500762062193:web:f60b1f821d1300ba005ad0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);