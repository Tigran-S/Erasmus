import React, { useEffect } from "react";
import Sidebar from "./../../components/sidebar/Sidebar";
import HeaderProject from "./../projects/headerProject";
import "../../components/header/header.css";
import Post from "./Post";
import news from "./news.jpeg";

const News = ({ posts }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderProject name="NEWS" color="rgb(255 255 255)" src={news} />
      <div className="home">
        <Post posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default News;
