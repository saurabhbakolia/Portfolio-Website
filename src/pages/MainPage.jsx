import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import ThemeContext from "../contexts/ThemeContext";
import LandingPage from "../components/LandingPage/LandingPage";
import ExperiencePage from "../components/ExperiencePage";
import ContactPage from "../components/ContactPage/ContactPage";
import PortfolioPage from "../components/PortfolioPage";
import ResumePage from "../components/ResumePage/ResumePage";
import Footer from "../components/FooterPage/FooterPage";

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
			<Footer />
		</div>
	);
};

export default MainPage;
