// src/contexts/ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const getInitialTheme = () => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			return savedTheme;
		}
		const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
		if (userMedia.matches) {
			return "dark";
		}
		return "light";
	};

	const [theme, setTheme] = useState(getInitialTheme);

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
