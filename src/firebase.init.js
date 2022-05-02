// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQWk3wcV14chaHbmlsiD4Nyp7AuIK8HJY",
    authDomain: "space-y-one.firebaseapp.com",
    projectId: "space-y-one",
    storageBucket: "space-y-one.appspot.com",
    messagingSenderId: "945076931716",
    appId: "1:945076931716:web:69491ea7cdb891f28f46d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;