import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <p>
          The mission of our NGO is To develop creative and innovative thinking
          and skills among youth. Promote the development of creative society
          and the innovative economy by the active involvement of youth. To
          participate in the processes of development of knowledge-based economy
          in Armenia.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a
            href="https://www.facebook.com/creativeyouthNGO"
            target="_blank"
            rel="noreferrer"
          >
            <i className="topIcon fab fa-facebook-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
