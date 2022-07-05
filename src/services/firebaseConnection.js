// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc, docRef } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



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
  return itemsSnapshot.docs.map(doc => ({
    key: doc._key.path.segments.pop(),
    user: doc.data().user,
    email: doc.data().email
  }))
}

async function setItem(col, obj) {
  const docRef = await addDoc(collection(db, col), obj);
  return docRef.id
}
const auth = getAuth();
async function loginUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(userCredential.user.uid)
    return userCredential
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorMessage
  });
}

async function createUser(obj) {
  await createUserWithEmailAndPassword(auth, obj.email, obj.password)
  .then((userCredential) => {
    // Signed in
    console.log(userCredential.user.uid)
    const docRef = addDoc(collection(db, 'users'), obj).docRef(userCredential.user.uid);
    return docRef.id
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorMessage
  });
}

export { getItems, setItem, loginUser, createUser }