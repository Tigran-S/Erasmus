import { addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { collection } from "firebase/firestore";
import { storage } from "../../firebase";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";

export const usersCollectionRef = collection(db, "posts");
export const uploadImage = (images, setPost, setProg) => {
  if (!images[0]) return;
  images.forEach((image) => {
    const storageRef = ref(storage, `/files/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProg((prev) => ({ ...prev, image: prog }));
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setPost((prev) => ({ ...prev, image: [...prev.image, url] }));
        });
      }
    );
  });
};
export const addNewPost = async (
  title,
  text,
  image,
  date,
  category,
  file,
  location,
  startingDate,
  duration
) => {
  await addDoc(usersCollectionRef, {
    title,
    text,
    image,
    date,
    category,
    file,
    location,
    startingDate,
    duration,
  });
};
export const uploadFile = (file, setPost, setProg) => {
  if (!file) return;
  const storageRef = ref(storage, `/files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProg((prev) => ({ ...prev, file: prog }));
    },
    (err) => {
      console.log(err);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
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
