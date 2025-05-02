import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/scrollToTop.css"; 
const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowButton(window.scrollY > 300);  
    });
  }, []);

  return (
    showButton && (
      <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
