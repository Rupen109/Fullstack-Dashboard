import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnPrjD_heuEcttvc3Fg-fepQu7Fjg5_CA",
  authDomain: "dataanalitics-a4095.firebaseapp.com",
  projectId: "dataanalitics-a4095",
  storageBucket: "dataanalitics-a4095.appspot.com",
  messagingSenderId: "193952601693",
  appId: "1:193952601693:web:436a63acf71ad36ebf9fb4"
};
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);
export const auth = getAuth()