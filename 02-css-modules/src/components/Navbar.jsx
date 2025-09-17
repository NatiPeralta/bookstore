import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem("theme") === "dark"
    )

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
        setDarkMode((prev) => !prev);
    }

    return (
        <header className={`${styles.navbar} ${darkMode ? styles.dark : styles.light}`}>
            <div className={styles.brand}>
                <a href="#">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        className={styles.logo}
                    >
                    <path
                        fill="currentColor"
                        d="M21 17v-1h1V2h-1V1H4v1H3v1H2v18h1v1h1v1h17v-1h1v-1h-1v-1h-1v-3zm-3 4H6v-1H5v-2h1v-1h12zm0-12h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1H9v-1H8V9H7V6h1V5h3v1h1v1h1V6h1V5h3v1h1z"
                    />
                    </svg>
                    <span className={styles.title}>Bookstore</span>
                 </a>
            </div>

            <div className={styles.actions}>
                <button
                    className={styles.themeToggle}
                    onClick={toggleTheme}
                    aria-label="Alternar tema"
                    >
                        {darkMode ? "Escuro" : "Claro"}
                </button>

                <div className={styles.cart} aria-label="Itens no carrinho: 0">
                    🛒<span className={styles.badge}>0</span>
                </div>
            </div>
        </header>
    );
}