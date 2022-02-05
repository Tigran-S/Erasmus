import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../components/post/post.css";
import "../../components/post/posts.css";

export default function Post({ posts }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(posts.filter((el) => el.category === "Projects"));
  }, [posts]);
  return (
    <div className="posts">
      {projects.map((post) => {
        return (
          <div className="post" key={post.id}>
            <Link to={`/post/${post.id}`} className="link">
              <img className="postImg" src={post.image} alt="" />
              <div className="additionalInfo">
                <p className="info">
                  <i className="fas fa-map-marker-alt"></i>
                  {post.location}
                </p>
                <p className="info">
                  <i className="fas fa-calendar-alt"></i>
                  {post.startingDate}
                </p>
              </div>
              <div className="postInfo">
                <span className="postTitle">{post.title}</span>
                <hr />
              </div>
            </Link>
            <span className="postDate postInfo">{post.date}</span>
            <p className="postDesc">{post.text}</p>
          </div>
        );
      })}
    </div>
  );
}
