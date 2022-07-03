import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADPlEB7ku6UbgynX8Zz1VqrD48_tl9zv8",
  authDomain: "clone-9a863.firebaseapp.com",
  projectId: "clone-9a863",
  storageBucket: "clone-9a863.appspot.com",
  messagingSenderId: "515141744849",
  appId: "1:515141744849:web:7f2d43332bda6e3402adf0",
  measurementId: "G-SGX3VK9J4S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
