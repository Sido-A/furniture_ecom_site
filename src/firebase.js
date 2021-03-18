import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZtBt5iJnrfZmFBh5woY35uFIHHWx8FgM",
  authDomain: "ec-furniture-clone.firebaseapp.com",
  projectId: "ec-furniture-clone",
  storageBucket: "ec-furniture-clone.appspot.com",
  messagingSenderId: "419681919040",
  appId: "1:419681919040:web:e5b57d13484f591233bfa5",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
