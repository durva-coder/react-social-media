// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9YYvpZhgPXbejAn8iRnXq4wZytTLJew0",
  authDomain: "react-social-media-d2105.firebaseapp.com",
  projectId: "react-social-media-d2105",
  storageBucket: "react-social-media-d2105.appspot.com",
  messagingSenderId: "1079197586749",
  appId: "1:1079197586749:web:a7d494ceb6ff3150432154",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
