import React, { createContext, useState } from "react";

// Create Context
export const ThemeContext = createContext();

// Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Switch to Light
  const setLightTheme = () => setTheme("light");

  // Switch to Dark
  const setDarkTheme = () => setTheme("dark");

  return (
    <ThemeContext.Provider
      value={{ theme, setLightTheme, setDarkTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

 