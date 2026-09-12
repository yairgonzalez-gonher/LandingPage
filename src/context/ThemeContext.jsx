import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  default: {
    name: 'GONSoftLab',
    key: 'default',
    primary: 'steel',
    secondary: 'steel',
    accent: 'steel',
    bg: 'white',
    text: 'gray',
  },
  ocean: {
    name: 'Océano',
    key: 'ocean',
    primary: 'blue',
    secondary: 'cyan',
    accent: 'teal',
    bg: 'white',
    text: 'gray',
  },
  forest: {
    name: 'Bosque',
    key: 'forest',
    primary: 'green',
    secondary: 'emerald',
    accent: 'lime',
    bg: 'white',
    text: 'gray',
  },
  sunset: {
    name: 'Atardecer',
    key: 'sunset',
    primary: 'orange',
    secondary: 'red',
    accent: 'yellow',
    bg: 'white',
    text: 'gray',
  },
  dark: {
    name: 'Oscuro',
    key: 'dark',
    primary: 'purple',
    secondary: 'indigo',
    accent: 'pink',
    bg: 'gray-900',
    text: 'white',
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('landing-theme');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.key ? themes[parsed.key] || themes.default : themes.default;
      } catch {
        return themes.default;
      }
    }
    return themes.default;
  });

  useEffect(() => {
    localStorage.setItem('landing-theme', JSON.stringify(theme));
    // Set data-theme attribute for CSS variables
    if (theme.key && theme.key !== 'default') {
      document.documentElement.setAttribute('data-theme', theme.key);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

