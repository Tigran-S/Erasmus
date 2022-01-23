import { useParams } from "react-router-dom";
import { postArray } from "./../../pages/write/newPost";
import "./singlePost.css";

export default function SinglePost({ currentUser }) {
  const { id } = useParams();
  const post = postArray.filter((el) => {
    return el.id === +id;
  });
  console.log(post);
  return (
    <>
      {post.map((el) => {
        console.log(el);
        return (
          <div className="singlePost" key={el.id}>
            <div className="singlePostWrapper">
              <img className="singlePostImg" src={el.image} alt="" />
              <h1 className="singlePostTitle">
                {el.title}
                {currentUser && (
                  <div className="singleelEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                  </div>
                )}
              </h1>
              <div className="singlePostInfo">
                <span>{el.date}</span>
              </div>
              <p className="singlePostDesc">{el.text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
