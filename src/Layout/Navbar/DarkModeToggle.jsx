import { useState, useEffect } from "react";
import iconSun from "../../assets/images/sunss.svg";
import iconMoon from "../../assets/images/tabler_moon-filled.svg";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) return storedTheme;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
    
    >
      {theme === "dark" ? (
        <img src={iconMoon} alt="Light Mode" className="w-6 h-6" />
      ) : (
        <img src={iconSun} alt="Dark Mode" className="w-6 h-6" />
      )}
    </button>
  );
}