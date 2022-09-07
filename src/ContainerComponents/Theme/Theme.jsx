import React, { useState } from "react";
import "./Theme.css";
const Theme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setIsActive((current) => !current);
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="theme-alignment">
      <button
        style={{
          backgroundColor: isActive ? "black" : "",
          color: isActive ? "white" : "",
        }}
        onClick={toggleTheme}
      >
        Current theme: {theme}
      </button>
    </div>
  );
};

export default Theme;
