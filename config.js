import * as  firebase from 'firebase';
// import { firebase } from '@firebase/app';
require('firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBgomfSxQRz5ejMRJh7OKWh5NEEjLSai8w",
  authDomain: "book-santa-dfd7e.firebaseapp.com",
  projectId: "book-santa-dfd7e",
  storageBucket: "book-santa-dfd7e.appspot.com",
  messagingSenderId: "471412722931",
  appId: "1:471412722931:web:ac51385b8bfbb3aea2fb86",
  measurementId: "G-GV6XGLFK6H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();