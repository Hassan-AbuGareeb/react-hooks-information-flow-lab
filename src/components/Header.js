import React from "react";

const Header = ({ title, isDarkMode, onDarkModeClick }) => {
  return (
    <header>
      <h2>{title}</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
};

export default Header;
