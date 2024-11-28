import React, { createContext, useContext, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const themeState = useTheme();

  useEffect(() => {
    // Apply theme on mount
    const theme = themeState.theme;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeState.theme]);

  return (
    <ThemeContext.Provider value={themeState}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};