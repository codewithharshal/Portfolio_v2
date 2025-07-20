import React from "react";
import SKillCard from "../Components/SkillCard";
import skillsicon from "../assets/SkillsIcon/skillsicon";

const Skills = (props) => {
  return (
    <div>
      <SKillCard
        className="w-15 h-15 bg-[#141314] border rounded-xl border-[#26252C] text-white flex items-center justify-center p-4"
        Section="Skill"
        Icon={{
          cpp: skillsicon.cpp,
          React: skillsicon.react,
          Express: skillsicon.Express,
          js: skillsicon.js,
          mongodb: skillsicon.mongodb,
          nodejs: skillsicon.nodejs,
          // tailwind: skillsicon.tailwind,
          // git: skillsicon.git,
        }}
      />
    </div>
  );
};

export default Skills;
