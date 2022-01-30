import { addNewPost } from "./newPost";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./write.css";
import { useNavigate } from "react-router-dom";

//TODO: complete edit function
export default function Write() {
  const [photo, setPhoto] = useState(null);
  const [updatePost, setUpdatePost] = useState({});
  const location = useLocation();
  useEffect(() => {
    if (location?.state) {
      setUpdatePost(location?.state);
    }
  }, [location]);
  console.log(updatePost);
  const navigate = useNavigate();
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPhoto(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const doSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toDateString();
    addNewPost(
      e.target.title.value,
      e.target.text.value,
      photo,
      date,
      e.target.options.value
    );
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
            src={updatePost?.image}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            name="title"
            value={updatePost?.title}
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
            value={updatePost?.text}
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
