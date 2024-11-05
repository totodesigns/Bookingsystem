// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU17v3pqmoL-3pBY9Ca_reti5yX8yyYDA",
  authDomain: "bookingsystem-757c2.firebaseapp.com",
  databaseURL: "https://bookingsystem-757c2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookingsystem-757c2",
  storageBucket: "bookingsystem-757c2.firebasestorage.app",
  messagingSenderId: "1067504687830",
  appId: "1:1067504687830:web:2d651730bd53c909b80777",
  measurementId: "G-4172TH1XYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };