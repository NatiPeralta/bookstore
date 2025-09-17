import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // Aplica o tema no body
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow z-50 transition-colors duration-200">
      <div className="flex items-center gap-2">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 17v-1h1V2h-1V1H4v1H3v1H2v18h1v1h1v1h17v-1h1v-1h-1v-1h-1v-3zm-3 4H6v-1H5v-2h1v-1h12zm0-12h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1H9v-1H8V9H7V6h1V5h3v1h1v1h1V6h1V5h3v1h1z" />
        </svg>
        <span className="text-xl font-bold">Bookstore</span>
      </div>

      <div className="flex items-center gap-4">
        <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 transition-colors duration-200"
        >
            {darkMode ? "Escuro" : "Claro"}
        </button>

        <div className="relative text-2xl cursor-pointer">
          🛒<span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">0</span>
        </div>
      </div>
    </header>
  );
}
