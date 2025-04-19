import { createContext, useContext, useState, useEffect } from 'react';

// Define theme colors for light and dark modes
const lightThemeColors = {
  primary: '#0ea5e9',     // Sky-500
  secondary: '#22c55e',   // Green-500
  background: '#f9fafb',  // Light gray
  text: '#1f2937',        // Gray-800
  accent: '#3b82f6',      // Blue-500
};

const darkThemeColors = {
  primary: '#0d9488',     // Teal-600
  secondary: '#22c55e',   // Green-500
  background: '#001d35',  // Custom dark background
  text: '#ffffff',        // White
  accent: '#4ade80',      // Green-400
};

// Create Theme Context with default values
const ThemeContext = createContext({
  isDarkMode: true,
  toggleDarkMode: () => {},
  themeColors: darkThemeColors,
});

/**
 * ThemeProvider component that manages light/dark mode and custom theme colors
 */
export function ThemeProvider({ children }) {
  // Default theme is dark
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme === 'dark';
    return true; // Default to dark
  });

  // Compute theme colors based on mode
  const themeColors = isDarkMode ? darkThemeColors : lightThemeColors;

  // Apply dark class and persist preference
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, themeColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to access theme context
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
