import { useEffect, useState } from "react";
import IntrestIcon from "../assets/IntrestImages/IntrestIcon";

const Intrest = (props) => {
  const images = [IntrestIcon.GTA, IntrestIcon.GOT, IntrestIcon.Art];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="max-w-md h-[290px] bg-[#121112] border border-[#28282B] rounded-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          src={images[currentIndex]}
          alt={`Intrest ${currentIndex}`}
        />
      </div>
    </div>
  );
};

export default Intrest;
