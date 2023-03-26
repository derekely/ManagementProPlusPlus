// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXb5FqrBsmS7fRdFGon0YI4JXgvsi9IZI",
  authDomain: "firewebapp-3affa.firebaseapp.com",
  projectId: "firewebapp-3affa",
  storageBucket: "firewebapp-3affa.appspot.com",
  messagingSenderId: "841952517464",
  appId: "1:841952517464:web:b16ff0f8289c0efe3c192d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();