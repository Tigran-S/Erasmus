import { Link } from "react-router-dom";
import "../../components/post/post.css";
import "../../components/post/posts.css";
import { projectsArray } from "../../pages/write/newPost";

export default function Post() {
  return (
    <div className="posts">
      {projectsArray.map((post) => {
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
