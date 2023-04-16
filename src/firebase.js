
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDruOxAzNWkPkWDh9A1-rX1m109t4UyHPY",
  authDomain: "yds-form-7d744.firebaseapp.com",
  databaseURL: "https://yds-form-7d744-default-rtdb.firebaseio.com",
  projectId: "yds-form-7d744",
  storageBucket: "yds-form-7d744.appspot.com",
  messagingSenderId: "460045751435",
  appId: "1:460045751435:web:ae58e1ac108ca6fbcf308e",
  measurementId: "G-R4T16QV3PH"
}
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
