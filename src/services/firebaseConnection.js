// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Wiz3FhBN6fq9hkCnT0fLkyUexbe_1SE",
  authDomain: "meuapp-d7abd.firebaseapp.com",
  projectId: "meuapp-d7abd",
  storageBucket: "meuapp-d7abd.appspot.com",
  messagingSenderId: "962442385425",
  appId: "1:962442385425:web:e6cc34d55f238dfc2eb9b0",
  measurementId: "G-P95GL4XMWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getItems(col) {
  const items = collection(db, col);
  const itemsSnapshot = await getDocs(items)
  return itemsSnapshot.docs.map(doc => doc.data())
}

async function setItem(col, obj) {
  const docRef = await addDoc(collection(db, col), obj);
  return docRef.id
}

export { getItems }