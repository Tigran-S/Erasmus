import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import "./singlePost.css";
import "../../pages/about/about.css";

export default function SinglePost({ currentUser, posts }) {
  const [num, setNum] = useState(0);
  const { id } = useParams();
  const post = posts.filter((el) => {
    return el.id === id;
  });
  const navigate = useNavigate();
  const navigation = useNavigate();
  const editPost = (el) => {
    navigation("/write", { state: el });
  };
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleLeftClick = (length) => {
    if (num - 1 >= 0) {
      setNum((num) => num - 1);
    } else {
      setNum(length - 1);
    }
  };
  const handleRightClick = (length) => {
    if (num + 1 < length) {
      setNum((num) => num + 1);
    } else {
      setNum(0);
    }
  };
  return (
    <>
      {post.map((el) => {
        return (
          <div className="singlePost" key={el.id}>
            <div className="singlePostWrapper">
              <img className="singlePostImg" src={el.image[num]} alt="" />
              {el.image.length > 1 && (
                <>
                  <i
                    className="fas fa-chevron-circle-left"
                    onClick={() => {
                      handleLeftClick(el.image.length);
                    }}
                  ></i>
                  <i
                    className="fas fa-chevron-circle-right"
                    onClick={() => {
                      handleRightClick(el.image.length);
                    }}
                  ></i>
                </>
              )}
              <h1 className="singlePostTitle">
                {el.title}
                {currentUser && (
                  <div className="singleelEdit">
                    <i
                      className="singlePostIcon far fa-edit"
                      onClick={() => {
                        editPost(el);
                      }}
                    ></i>
                    <i
                      className="singlePostIcon far fa-trash-alt"
                      onClick={() => {
                        deletePost(el.id);
                      }}
                    ></i>
                  </div>
                )}
              </h1>

              <div className="singlePostInfo">
                <span>{el.date}</span>
              </div>
              <p className="singlePostDesc">{el.text}</p>
              {el.category === "Projects" && (
                <div className="additionalInfoS">
                  <p className="infoS">
                    <i className="fas fa-map-marker-alt"></i>
                    {"     "}
                    Event will take place in {el.location}
                  </p>
                  <p className="infoS">
                    <i className="fas fa-calendar-alt"></i>
                    {"     "}Starting Date: {el.startingDate}
                  </p>
                  <p className="infoS">
                    <i className="fas fa-business-time"></i>
                    {"     "}Duration: {el.duration} days
                  </p>
                </div>
              )}
              {el?.file && (
                <a href={el.file} target="_blank" rel="noreferrer" download>
                  Infopack
                </a>
              )}
              <div>
                <FacebookShareButton
                  style={{ outline: "none" }}
                  className="shareButton"
                  url={window.location.href}
                >
                  <FacebookIcon className="shareIcon"></FacebookIcon>
                </FacebookShareButton>
                <LinkedinShareButton
                  style={{ outline: "none" }}
                  className="shareButton"
                  url={window.location.href}
                >
                  <LinkedinIcon className="shareIcon"></LinkedinIcon>
                </LinkedinShareButton>
                <TwitterShareButton
                  style={{ outline: "none" }}
                  url={window.location.href}
                >
                  <TwitterIcon className="shareIcon"></TwitterIcon>
                </TwitterShareButton>
              </div>
              {el.category === "Projects" && (
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Link
                    to="/contact"
                    type="button"
                    className="btn btn-outline-primary text-center btn-lg"
                    state={{ from: el }}
                  >
                    Apply
                  </Link>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
