import React from "react";
import "./SkillCard.css";

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <img src={iconUrl} alt="" />
      </div>
      <h4 className="skill-title">{title}</h4>
    </div>
  );
};

export default SkillCard;
