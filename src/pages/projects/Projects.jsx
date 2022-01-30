import React from "react";
import HeaderProject from "./headerProject";
import "./projects.css";
import Sidebar from "./../../components/sidebar/Sidebar";
import Post from "./Post";

const Projects = ({ posts }) => {
  return (
    <>
      <HeaderProject
        name="PROJECTS"
        src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <div className="home">
        <Post posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Projects;
