import { useState } from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import "./topbar.css";

export default function Topbar({ currentUser }) {
  const [topNav, setTopNav] = useState();

  const logout = async () => {
    await signOut(auth);
  };
  const myFunc = () => {
    if (topNav === undefined) {
      setTopNav("responsive");
    } else {
      setTopNav();
    }
  };

  return (
    <div className={`topnav ${topNav}`} onClick={myFunc}>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/projects">PROJECTS</NavLink>
      <NavLink to="/news">NEWS</NavLink>
      <NavLink to="/creativeParticipants">CREATIVE PARTICIPANTS</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
      {currentUser && <NavLink to="/write">WRITE</NavLink>}
      {currentUser && (
        <a href="/#" onClick={logout}>
          LOGOUT
        </a>
      )}

      <a href="/#" className="icon">
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}
