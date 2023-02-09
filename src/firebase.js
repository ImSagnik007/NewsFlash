import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiAvSLcWeVnYiH3o7WtZEctC-mvwHJR4c",
  authDomain: "newsflash-dev.firebaseapp.com",
  projectId: "newsflash-dev",
  storageBucket: "newsflash-dev.appspot.com",
  messagingSenderId: "630388041865",
  appId: "1:630388041865:web:eee6d0842eba0906cefe58",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
