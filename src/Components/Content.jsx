import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <p>
        This is a sample content section. The theme changes using Context API.
      </p>

      <div className={theme === "light" ? "box-light" : "box-dark"}>
        Theme Based Box
      </div>
    </div>
  );
};

export default Content;