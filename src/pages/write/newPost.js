import { addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { collection } from "firebase/firestore";
import { storage } from "../../firebase";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";

export const usersCollectionRef = collection(db, "posts");
export const addNewPost = async (title, text, image, date, category, file) => {
  await addDoc(usersCollectionRef, {
    title,
    text,
    image,
    date,
    category,
    file,
  });
};
export const uploadFile = (file, setPost) => {
  if (!file) return;
  const storageRef = ref(storage, `/files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      console.log(prog);
    },
    (err) => {
      console.log(err);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log(url);
        setPost((prev) => ({ ...prev, file: url }));
      });
    }
  );
};
export const updatePost = async (id, updatePost) => {
  const postDoc = doc(db, "posts", id);
  const newFields = { ...updatePost };
  await updateDoc(postDoc, newFields);
};
