import React from "react";
import "./Skills.css";
import { SKILLS } from "../utils/data";
import SkillCard from "./SkillCard/SkillCard";
const Skills = () => {
  return (
    <section className="skills-container">
      <h5>Kemampuan teknis</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.title}
              iconUrl={skill.icon}
              title={skill.title}
            />
          ))}
        </div>

        <div className="skills-info"></div>
      </div>
    </section>
  );
};

export default Skills;
