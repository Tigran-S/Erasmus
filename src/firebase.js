import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxN5ZShGaKY406akdgAYx6j-51MqOXBIs",
  authDomain: "creative-youth-4442d.firebaseapp.com",
  projectId: "creative-youth-4442d",
  storageBucket: "creative-youth-4442d.appspot.com",
  messagingSenderId: "1037549044358",
  appId: "1:1037549044358:web:cf2b016d84fa91d8fb0707",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
