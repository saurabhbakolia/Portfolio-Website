import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import ThemeContext from "../contexts/ThemeContext";
import SocialMediaIcons from "../components/SocialMediaIcons";
import LandingPage from "../components/LandingPage/LandingPage";
import AboutPage from "../components/AboutPage/AboutPage";
import SkillPage from "../components/SkillsPage";
import ExperiencePage from "../components/ExperiencePage";
import ContactPage from "../components/ContactPage/ContactPage";
import PortfolioPage from "../components/PortfolioPage";

const MainPage = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className={`w-screen bg-blue-100 m-auto flex flex-col ${theme === "dark" ? "dark-mode-bg" : ""}`}
		>
			<Navbar />
			<LandingPage />
			<ExperiencePage />
			<PortfolioPage />
			<ContactPage />
		</div>
	);
};

export default MainPage;
