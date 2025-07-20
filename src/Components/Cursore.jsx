import React, { useEffect, useState } from "react";

const Cursore = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`body { cursor: none; }`}</style>

      {/* Custom cursor */}
      <div
        className="fixed pointer-events-none bg-gray-500 rounded-full"
        style={{
          width: "24px",
          height: "24px",
          top: position.y - 6 + "px", // center the circle on cursor
          left: position.x - 6 + "px",
          position: "fixed",
          zIndex: 9999,
          transition: "transform 0.1s ease",
        }}
      />
    </>
  );
};

export default Cursore;
