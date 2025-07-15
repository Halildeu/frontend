import React, { createContext, useState } from 'react';

// 1. Context'i oluşturuyoruz.
export const ThemeContext = createContext();

// 2. Diğer bileşenleri sarmalayacak olan Provider bileşenini oluşturuyoruz.
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light' veya 'dark'

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