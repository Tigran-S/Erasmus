import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrWrsaaZVBjzUZlAh2ZXOtlKWUYO8Zo8Y",
  authDomain: "creative-youth-2f5e6.firebaseapp.com",
  projectId: "creative-youth-2f5e6",
  storageBucket: "creative-youth-2f5e6.appspot.com",
  messagingSenderId: "699798609960",
  appId: "1:699798609960:web:c70d42874a73d60b6c951d",
  measurementId: "G-Z4PHH153XN",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
