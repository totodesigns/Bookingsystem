
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // For Realtime Database
// stuff for firebase configuration
=======

const firebaseConfig = {
  apiKey: "AIzaSyBU17v3pqmoL-3pBY9Ca_reti5yX8yyYDA",
  authDomain: "bookingsystem-757c2.firebaseapp.com",
  databaseURL: "https://bookingsystem-757c2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookingsystem-757c2",
  storageBucket: "bookingsystem-757c2.firebasestorage.app",
  messagingSenderId: "1067504687830",
  appId: "1:1067504687830:web:2d651730bd53c909b80777",
};

// Initialize firebase and login + db things
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
export { auth, db };
=======
  measurementId: "G-4172TH1XYY"
};

