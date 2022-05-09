// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTYgXxXjXHrLewPdXjqqcFzzTseXvTh8k",
    authDomain: "essentials-b0da4.firebaseapp.com",
    projectId: "essentials-b0da4",
    storageBucket: "essentials-b0da4.appspot.com",
    messagingSenderId: "39925780297",
    appId: "1:39925780297:web:9e7959a149d4488eea9498"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;