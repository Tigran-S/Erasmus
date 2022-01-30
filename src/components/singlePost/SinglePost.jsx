import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./singlePost.css";
import "../../pages/about/about.css";

export default function SinglePost({ currentUser, posts }) {
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

  return (
    <>
      {post.map((el) => {
        return (
          <div className="singlePost" key={el.id}>
            <div className="singlePostWrapper">
              <img className="singlePostImg" src={el.image} alt="" />
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
