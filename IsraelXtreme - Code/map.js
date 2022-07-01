// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtdZJh7f9FlgjLZpDGHpAUiZD_qjD15os",
  authDomain: "israelxtrem-86ab7.firebaseapp.com",
  projectId: "israelxtrem-86ab7",
  storageBucket: "israelxtrem-86ab7.appspot.com",
  messagingSenderId: "490542924965",
  appId: "1:490542924965:web:56e679532c6fbe66a8794c",
  measurementId: "G-G5WV7X5RF9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();

import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}