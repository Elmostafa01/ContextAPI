import { createContext, useState, ReactNode } from "react";

interface ThemeContextType {
    theme: string; 
    changeTheme: () => void;
  } 

const ThemeContext = createContext({} as ThemeContextType);

function ThemeContextProvider({children}: {children: ReactNode}) {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme((prevState) => prevState === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };