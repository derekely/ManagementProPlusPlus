// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiBqSdVv5gqIuI-o-ROCcmu22L3tXfCs4",
  authDomain: "managementwebsite-a0ed4.firebaseapp.com",
  projectId: "managementwebsite-a0ed4",
  storageBucket: "managementwebsite-a0ed4.appspot.com",
  messagingSenderId: "18486247489",
  appId: "1:18486247489:web:c7c10539e4d341bb4d06c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {db,auth};
