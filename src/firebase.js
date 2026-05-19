import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDW26ct7DFLSH_-7pSA1FYm11uNqdTzEhU",
    authDomain: "w41k3r5j01n18697.firebaseapp.com",
    projectId: "w41k3r5j01n18697",
    storageBucket: "w41k3r5j01n18697.appspot.com",
    messagingSenderId: "214058146720",
    appId: "1:214058146720:web:627c2c9c8859f9fcdfa2c5"
  }).auth();