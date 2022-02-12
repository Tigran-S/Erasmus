import React from "react";
import Sidebar from "./../../components/sidebar/Sidebar";
import HeaderProject from "./../projects/headerProject";
import "../../components/header/header.css";
import Post from "./Post";
import participants from "./participants.jpg";

const CreativeParticipants = ({ posts }) => {
  return (
    <>
      <HeaderProject
        name="CREATIVE PARTICIPANTS"
        src={participants}
        color="rgb(228 37 65)"
      />
      <div className="home">
        <Post posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default CreativeParticipants;
