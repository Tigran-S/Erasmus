import { addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { collection } from "firebase/firestore";

export const usersCollectionRef = collection(db, "posts");
export const addNewPost = async (title, text, image, date, category) => {
  await addDoc(usersCollectionRef, { title, text, image, date, category });
};
