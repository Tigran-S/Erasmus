import { addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { collection } from "firebase/firestore";

export const usersCollectionRef = collection(db, "posts");
export const addNewPost = async (title, text, image, date, category) => {
  await addDoc(usersCollectionRef, { title, text, image, date, category });
};
export const updatePost = async (id, updatePost) => {
  const postDoc = doc(db, "posts", id);
  const newFields = { ...updatePost };
  await updateDoc(postDoc, newFields);
};
