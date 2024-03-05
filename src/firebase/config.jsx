// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtaxYdPjXRVAWxidPq8iwwI_5uhp0sWsI",
  authDomain: "divachic-b173f.firebaseapp.com",
  projectId: "divachic-b173f",
  storageBucket: "divachic-b173f.appspot.com",
  messagingSenderId: "167395622110",
  appId: "1:167395622110:web:9e59346e0b1a89fd67564f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);