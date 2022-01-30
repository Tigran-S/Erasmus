import { Link } from "react-router-dom";
import "./post.css";
import "./posts.css";

export default function Post({ posts }) {
  return (
    <div className="posts">
      {posts?.map((post) => {
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
