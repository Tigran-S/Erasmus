import React, { useEffect } from "react";
import HeaderProject from "./headerProject";
import Sidebar from "./../../components/sidebar/Sidebar";
import Post from "./Post";
import projects from "./projects.jpg";
const Projects = ({ posts }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderProject src={projects} />
      <div className="home">
        <Post posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Projects;
