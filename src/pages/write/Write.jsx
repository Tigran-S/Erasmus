import { addNewPost, updatePost } from "./newPost";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./write.css";
import { useNavigate } from "react-router-dom";

//TODO: add downloadable file function
//TODO:  add multiple image download function
export default function Write() {
  const [post, setPost] = useState({
    title: "",
    text: "",
    image: null,
  });
  const location = useLocation();
  useEffect(() => {
    if (location?.state) {
      setPost(location?.state);
    }
  }, [location]);
  console.log(post);
  const navigate = useNavigate();
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPost((prev) => ({ ...prev, image: reader.result }));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const doSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toDateString();
    if (location?.state) {
      updatePost(location?.state?.id, post);
    } else {
      addNewPost(
        post.title,
        post.text,
        post.image,
        date,
        e.target.options.value
      );
    }
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={doSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            name="photo"
            onChange={imageHandler}
            src={post?.image}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            name="title"
            value={post?.title}
            onChange={(e) => {
              setPost((prev) => ({ ...prev, title: e.target.value }));
            }}
            autoFocus={true}
          />
          <div>
            <select
              name="options"
              className="form-control"
              aria-label="Default select example"
            >
              <option>Projects</option>
              <option>News</option>
              <option>Participants</option>
            </select>
          </div>
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            name="text"
            value={post?.text}
            autoFocus={true}
            onChange={(e) => {
              setPost((prev) => ({ ...prev, text: e.target.value }));
            }}
          />
        </div>
        <button className="writeSubmit" type="submit">
          {location.state ? "Update" : "Publish"}
        </button>
      </form>
    </div>
  );
}
