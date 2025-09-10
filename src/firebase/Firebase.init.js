// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwa-jb9u66dqXtJE20Zu3S85Z4XCofcJM",
  authDomain: "coffeestore-5d135.firebaseapp.com",
  projectId: "coffeestore-5d135",
  storageBucket: "coffeestore-5d135.firebasestorage.app",
  messagingSenderId: "1074604951737",
  appId: "1:1074604951737:web:d563eb2779632ebd9db368"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;