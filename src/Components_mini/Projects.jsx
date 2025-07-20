import React, { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import projects from "../assets/Projects/Projects";

const Projects = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <div>
      <ProjectCard
        Section="Projects"
        img={projects[currentIndex].image}
        links={projects[currentIndex].link}
        Name={projects[currentIndex].name}
        active={projects[currentIndex].active}
        Categoery={projects[currentIndex].category}
        Summery={projects[currentIndex].summary}
        labels={projects[currentIndex].labels}
        onNextClick={handleNext}
      />
    </div>
  );
};

export default Projects;
