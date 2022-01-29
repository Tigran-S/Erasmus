import React from "react";
import "./projects.css";

const HeaderProject = ({ name, src }) => {
  return (
    <div className="headerP">
      <div className="headerTitlesP">
        <span className="headerTitleP">{name}</span>
      </div>
      <img className="headerImgP" src={src} alt="" />
    </div>
  );
};

export default HeaderProject;
