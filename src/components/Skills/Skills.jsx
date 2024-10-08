import { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data); // Use setSelectedSkill to update the selected skill
  };

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
              isActive={selectedSkill.title === skill.title}
              onClick={() => {
                handleSelectSkill(skill);
              }}
            />
          ))}
        </div>

        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
