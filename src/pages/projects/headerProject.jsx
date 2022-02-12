import React from "react";
import "../../components/header/header.css";

const HeaderProject = ({ name, src, color }) => {
  return (
    <div className="header">
      {name !== "Projects" && (
        <div className="headerTitles ">
          <span className="headerTitleLg" style={{ color: color }}>
            {name}
          </span>
        </div>
      )}
      <img className="headerImg" src={src} alt="" />
    </div>
  );
};

export default HeaderProject;
