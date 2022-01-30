import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../components/post/post.css";
import "../../components/post/posts.css";

export default function Post({ posts }) {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    setParticipants(posts.filter((el) => el.category === "Participants"));
  }, [posts]);

  return (
    <div className="posts">
      {participants.map((post) => {
        return (
          <div className="post" key={post.id}>
            <img className="postImg" src={post.image} alt="" />
            <div className="postInfo">
              <span className="postTitle">
                <Link to={`/post/${post.id}`} className="link">
                  {post.title}
                </Link>
              </span>
              <hr />
              <span className="postDate">{post.date}</span>
            </div>
            <p className="postDesc">{post.text}</p>
          </div>
        );
      })}
    </div>
  );
}
