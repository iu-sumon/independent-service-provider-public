// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXLm2qfZpkBJA0vn5HE6Cnsm6qEgUrb1k",
    authDomain: "my-doctor-8532c.firebaseapp.com",
    projectId: "my-doctor-8532c",
    storageBucket: "my-doctor-8532c.appspot.com",
    messagingSenderId: "39876435996",
    appId: "1:39876435996:web:ff4b0513a0b2cda24effd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;