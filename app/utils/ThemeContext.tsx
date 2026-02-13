import React, { createContext, useContext, useEffect, useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import { loadTheme, saveTheme } from "./themeStorage";

type ThemeType = typeof lightTheme;

type ThemeContextType = {
  theme: ThemeType;
  isDark: boolean;
  toggleTheme: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: any) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const fetchTheme = async () => {
      const savedTheme = await loadTheme();
      setIsDark(savedTheme === "dark");
    };
    fetchTheme();
  }, []);

  const toggleTheme = async (value: boolean) => {
    setIsDark(value);
    await saveTheme(value ? "dark" : "light");
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);