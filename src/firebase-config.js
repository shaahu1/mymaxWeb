
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyADgiYGS_ZZmTxrkjb2kef0xj6Cz87zMpQ",
  authDomain: "mymaxwebsite.firebaseapp.com",
  projectId: "mymaxwebsite",
  storageBucket: "mymaxwebsite.appspot.com",
  messagingSenderId: "706656157310",
  appId: "1:706656157310:web:66a2870c00fc5812e5222f",
  measurementId: "G-JHR032LXGH"
};

const App = initializeApp(firebaseConfig);

export const db = getFirestore(App);