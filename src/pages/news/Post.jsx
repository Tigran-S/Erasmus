import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../components/post/post.css";
import "../../components/post/posts.css";

export default function Post({ posts }) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    setNews(posts.filter((el) => el.category === "News"));
  }, [posts]);
  return (
    <div className="posts">
      {news.map((post) => {
        return (
          <div className="post" key={post.id}>
            <Link to={`/post/${post.id}`} className="link">
              <img className="postImg" src={post.image} alt="" />
              <div className="postInfo">
                <span className="postTitle">{post.title}</span>
                <hr />
                <span className="postDate">{post.date}</span>
              </div>
            </Link>
            <p className="postDesc">{post.text}</p>
          </div>
        );
      })}
    </div>
  );
}
