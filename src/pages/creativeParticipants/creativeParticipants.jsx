import React from "react";
import Sidebar from "./../../components/sidebar/Sidebar";
import HeaderProject from "./../projects/headerProject";
import "../projects/projects.css";
import Post from "./Post";

const CreativeParticipants = ({ posts }) => {
  return (
    <>
      <HeaderProject
        name="CREATIVE PARTICIPANTS"
        src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <div className="home">
        <Post posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default CreativeParticipants;
