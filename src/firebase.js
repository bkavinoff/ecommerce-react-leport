// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' //esto es para obtener la DB
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnEG0hleadJl6otzDl9v7d2fDEhWuoMXk",
  authDomain: "leport-ecommerce-react.firebaseapp.com",
  projectId: "leport-ecommerce-react",
  storageBucket: "leport-ecommerce-react.appspot.com",
  messagingSenderId: "357679911540",
  appId: "1:357679911540:web:8169df7ee6d70a937bb721"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export default db
