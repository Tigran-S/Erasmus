import React from "react";
import Sidebar from "./../../components/sidebar/Sidebar";
import HeaderProject from "./../projects/headerProject";
import "../projects/projects.css";
import Post from "./Post";

const News = () => {
  return (
    <>
      <HeaderProject
        name="NEWS"
        src="https://images.pexels.com/photos/4560150/pexels-photo-4560150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <div className="home">
        <Post />
        <Sidebar />
      </div>
    </>
  );
};

export default News;
