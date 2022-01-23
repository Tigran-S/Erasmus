export const postArray = [];

export const addNewPost = (title, text, image, date) => {
  postArray.push({ title, text, image, id: Math.random(), date });
};

console.log(postArray);
