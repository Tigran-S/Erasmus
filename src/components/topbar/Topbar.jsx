import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import "./topbar.css";

export default function Topbar({ currentUser }) {
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/projects">
              PROJECTS
            </Link>
          </li>{" "}
          <li className="topListItem">
            <Link className="link" to="/news">
              NEWS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/creativeParticipants">
              CREATIVE PARTICIPANTS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          {currentUser && (
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="topListItem" onClick={logout}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        <Link
          className="link"
          to="/settings"
          style={{
            pointerEvents: currentUser ? "auto" : "none",
            cursor: currentUser ? "pointer" : "default",
          }}
        >
          <img
            className="topImg"
            src="https://scontent.fevn2-1.fna.fbcdn.net/v/t1.15752-9/266981561_1093801851454558_4054028968605894789_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=TSo_nKBTCkMAX-EuR3B&tn=wAWCVAFY9ct9m1c6&_nc_ht=scontent.fevn2-1.fna&oh=03_AVJ8cgWokUmtHAIaQvxL3tDPK9WknWRuC9pGjwZ5ZFY7vg&oe=62121FF5"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
