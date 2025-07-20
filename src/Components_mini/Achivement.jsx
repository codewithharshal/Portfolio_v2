import React from "react";
import { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import Achivements from "../assets/Achivement/Achivement";

const Achivement = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Achivements.length);
  };
  return (
    <div>
      <ProjectCard
        Section="Achievement & Certification"
        img={Achivements[currentIndex].image}
        links={Achivements[currentIndex].link}
        Name={Achivements[currentIndex].title}
        active={Achivements[currentIndex].active}
        Categoery={Achivements[currentIndex].platform}
        date={Achivements[currentIndex].date}
        Summery={Achivements[currentIndex].description}
        labels={Achivements[currentIndex].labels}
        onNextClick={handleNext}
      />
    </div>
  );
};

export default Achivement;
