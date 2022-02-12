import { addNewPost, updatePost, uploadFile, uploadImage } from "./newPost";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./write.css";
import { useNavigate } from "react-router-dom";

export default function Write() {
  const [post, setPost] = useState({
    title: "",
    text: "",
    image: [],
    category: "Projects",
    file: "",
    location: null,
    startingDate: null,
    duration: null,
  });
  const [prog, setProg] = useState({ image: 0, file: 0 });
  const location = useLocation();
  useEffect(() => {
    if (location?.state) {
      setPost(location?.state);
    }
  }, [location]);
  const navigate = useNavigate();

  const imageHandler = (e) => {
    const images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(e.target.files[i]);
    }
    uploadImage(images, setPost, setProg);
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
        post.category,
        post.file,
        post.location,
        post.startingDate,
        post.duration
      );
    }
    setProg({ image: 0, file: 0 });
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  const fileHandler = (e) => {
    const file = e.target.files[0];
    uploadFile(file, setPost, setProg);
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
            <i className="writeIcon fas fa-plus"></i>{" "}
          </label>{" "}
          {prog.image !== 0 && prog.image}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            name="photo"
            multiple
            onChange={imageHandler}
            src={post?.image}
          />
          <label htmlFor="fileInput2" style={{ fontSize: "1.5rem" }}>
            <i
              className="fas fa-file-pdf"
              style={{
                color: "gray",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            ></i>
          </label>{" "}
          {prog.file !== 0 && prog.file}
          <input
            id="fileInput2"
            type="file"
            accept="application/pdf"
            style={{ display: "none" }}
            name="file"
            onChange={(e) => {
              fileHandler(e);
            }}
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
        </div>
        <div>
          <div className="selectOptions">
            <select
              name="options"
              className="form-control"
              aria-label="Default select example"
              onChange={(e) => {
                setPost((prev) => ({ ...prev, category: e.target.value }));
              }}
            >
              <option>Projects</option>
              <option>News</option>
              <option>Participants</option>
            </select>
          </div>
          {post.category === "Projects" && (
            <div id="projectInputs">
              <input
                name="locationOptions"
                className="form-control"
                aria-label="Default select example"
                onChange={(e) => {
                  setPost((prev) => ({ ...prev, location: e.target.value }));
                }}
                placeholder="location..."
              />
              <input
                name="startingDateOptions"
                className="form-control"
                aria-label="Default select example"
                onChange={(e) => {
                  setPost((prev) => ({
                    ...prev,
                    startingDate: e.target.value,
                  }));
                }}
                placeholder="date..."
              />
              <input
                name="durationOptions"
                className="form-control"
                aria-label="Default select example"
                onChange={(e) => {
                  setPost((prev) => ({
                    ...prev,
                    duration: e.target.value,
                  }));
                }}
                placeholder="duration..."
              />
            </div>
          )}
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
