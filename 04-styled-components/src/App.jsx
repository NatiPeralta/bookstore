// src/App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode(prev => !prev);
  }

  return (
    <>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Home darkMode={darkMode} />
    </>
  );
}
