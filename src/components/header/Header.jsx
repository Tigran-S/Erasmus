import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">ERASMUS+ PROJECTS</span>
        <span className="headerTitleLg">CREATIVE YOUTH</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
        alt=""
      />
    </div>
  );
}
