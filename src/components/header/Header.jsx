import "./header.css";
import mainImg from "./mainImg.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">ERASMUS+ PROJECTS</span>
      </div>
      <div className="headerTitles">
        <span className="headerTitleLg">CREATIVE YOUTH</span>
      </div>
      <div className="containerImg">
        <img className="headerImg" src={mainImg} alt="" height={100} />
      </div>
    </div>
  );
}
