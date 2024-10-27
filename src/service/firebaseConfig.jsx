// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvBOsK8hDgpsCiajAU5G-jCHrN2OdL9EY",
  authDomain: "hack-b5019.firebaseapp.com",
  projectId: "hack-b5019",
  storageBucket: "hack-b5019.appspot.com",
  messagingSenderId: "284454627563",
  appId: "1:284454627563:web:d8593a578f8d468357f6ae",
  measurementId: "G-EWWNRSTEFW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
