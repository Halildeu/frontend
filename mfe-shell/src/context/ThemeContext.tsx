// frontend/mfe-shell/src/context/ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeColors = {
    light: { background: '#FFFFFF', text: '#000000' },
    dark: { background: '#333333', text: '#FFFFFF' },
  };

  const value = {
    theme,
    toggleTheme,
    colors: themeColors[theme],
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};