import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import Post from "./../../components/post/Post";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <Sidebar />
      </div>
    </>
  );
}
