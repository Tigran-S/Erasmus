import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";

export default function Single({ currentUser }) {
  return (
    <div className="single">
      <SinglePost currentUser={currentUser} />
      <Sidebar />
    </div>
  );
}
