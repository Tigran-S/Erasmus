import React from "react";

import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Post from "./../../components/post/Post";

import "./homepage.css";

export default function Homepage({ posts }) {
  return (
    <>
      <Header />
      <div className="home">
        <Post posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
