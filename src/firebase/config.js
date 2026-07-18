// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIOvDcVhQCyLu6TnxCDfZz8awQN9Sdphc",
    authDomain: "marketsite-1730e.firebaseapp.com",
    projectId: "marketsite-1730e",
    storageBucket: "marketsite-1730e.firebasestorage.app",
    messagingSenderId: "496154161991",
    appId: "1:496154161991:web:725c2691ec3f3b449a9262"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Para login
const auth = getAuth(app);

export { db, auth };

