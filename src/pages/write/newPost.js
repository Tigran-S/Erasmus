export const postArray = [];
export const newsArray = [];
export const participantsArray = [];
export const projectsArray = [];

export const addNewPost = (title, text, image, date, category) => {
  const id = Math.random();
  if (category === "News") {
    postArray.push({ title, text, image, id, date, category });
    newsArray.push({ title, text, image, id, date, category });
  }
  if (category === "Participants") {
    postArray.push({ title, text, image, id, date, category });
    participantsArray.push({
      title,
      text,
      image,
      id,
      date,
      category,
    });
  }
  if (category === "Projects") {
    postArray.push({ title, text, image, id, date, category });
    projectsArray.push({
      title,
      text,
      image,
      id,
      date,
      category,
    });
  }
};

console.log(postArray);
