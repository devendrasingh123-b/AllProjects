
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
  import {getFirestore,doc,getDoc,setDoc} from  "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDW8e-_dWJNu4dOgWWr0IO63SWrQMP-F9U",
    authDomain: "newproject-b0d1c.firebaseapp.com",
    databaseURL: "https://newproject-b0d1c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "newproject-b0d1c",
    storageBucket: "newproject-b0d1c.firebasestorage.app",
    messagingSenderId: "1016707009103",
    appId: "1:1016707009103:web:60398953d518037e6d383a",
    measurementId: "G-CX2PNECNP2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
export let auth=getAuth(app)
export let db=getFirestore(app)

export {
  
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
}

export {
  doc,getDoc,setDoc
}
