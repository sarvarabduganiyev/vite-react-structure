
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBwtkz4-FBKYL-5FadnloT2_9XZUqIqy8Y",
    authDomain: "fir-frontend-90510.firebaseapp.com",
    projectId: "fir-frontend-90510",
    storageBucket: "fir-frontend-90510.appspot.com",
    messagingSenderId: "897999549916",
    appId: "1:897999549916:web:fa3f2d4c3c617d97540b19",
    measurementId: "G-LK8S9DK9WC"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export  const database = getFirestore(app);
