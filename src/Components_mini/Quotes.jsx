import React, { useState, useEffect } from "react";
import Services from "../Components/Services";
import IssencialIcon from "../assets/IssencialIcon/IssencialIcon";
import quotes from "../assets/IssencialIcon/Qoutes";

const Quotes = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Current quote index
  const [displayText, setDisplayText] = useState(""); // Text shown in typewriter effect
  const [charIndex, setCharIndex] = useState(0); // Current character index

  useEffect(() => {
    const currentQuote = quotes[currentIndex];

    if (charIndex < currentQuote.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentQuote[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Typing speed

      return () => clearTimeout(typingTimeout);
    } else {
      const holdTimeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setCurrentIndex((prevIndex) =>
          prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000); // Time to hold full quote before next

      return () => clearTimeout(holdTimeout);
    }
  }, [charIndex, currentIndex]);

  return (
    <div>
      <Services
        Quotes={displayText}
        labels={{
          code: IssencialIcon.code,
          art: IssencialIcon.art,
          think: IssencialIcon.thinking,
        }}
      />
    </div>
  );
};

export default Quotes;
