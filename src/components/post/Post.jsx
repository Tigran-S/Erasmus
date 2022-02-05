import { Link } from "react-router-dom";
import "./post.css";
import "./posts.css";

export default function Post({ posts }) {
  return (
    <div className="posts">
      {posts?.map((post) => {
        console.log(post.image);
        return (
          <div className="post" key={post.id}>
            <Link to={`/post/${post.id}`} className="link">
              <img className="postImg" src={post.image[0]} alt="" />
              {post.category === "Projects" && (
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
              )}
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
