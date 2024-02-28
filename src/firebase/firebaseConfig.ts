// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtkyHhhGiVuo-noEQB58X2dF73hDToZY4",
  authDomain: "blog-app-fb103.firebaseapp.com",
  projectId: "blog-app-fb103",
  storageBucket: "blog-app-fb103.appspot.com",
  messagingSenderId: "225155893553",
  appId: "1:225155893553:web:e49778268f720e53180810",
  measurementId: "G-0SJ5D2T9WY"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);