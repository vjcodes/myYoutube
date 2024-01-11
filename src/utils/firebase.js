// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCo9pG4vHIfgnz4cCavaJcIXKpPgs6jIg",
  authDomain: "my-8e67c.firebaseapp.com",
  projectId: "my-8e67c",
  storageBucket: "my-8e67c.appspot.com",
  messagingSenderId: "938442781854",
  appId: "1:938442781854:web:f9bc0dac2a6b93a2ceb78f",
  measurementId: "G-6GL2D2EZ15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth();
