import React, { useContext, useState } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import NavLogo from "./NavLogo"; // Your logo component
import { Link } from "react-scroll";

const Navbar = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 backdrop-blur-3xl ${
				theme === "dark"
					? "bg-gray-900/60 text-white"
					: "bg-white/60 text-gray-900"
			}`}
		>
			<div className="container mx-auto flex justify-between items-center px-6 py-4">
				<NavLogo />

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center space-x-8">
					{["Experience", "Portfolio","Contact"].map((section) => (
						<Link
							key={section}
							to={section.toLowerCase()}
							smooth={true}
							duration={500}
							offset={-80}
							className={`relative text-lg cursor-pointer transition-all duration-300 ${
								theme === "dark" ? "text-gray-300" : "text-gray-800"
							} after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-portfolio_color after:transition-all after:duration-300 hover:after:w-full`}
						>
							{section}
						</Link>
					))}
					<button
						type="button"
						onClick={toggleTheme}
						className={`p-2 rounded-full shadow-md transition duration-300 ${
							theme === "dark"
								? "bg-gray-800 hover:bg-gray-700"
								: "bg-gray-300 hover:bg-gray-400"
						}`}
						aria-label="Toggle theme"
					>
						{theme === "dark" ? "🌙" : "☀️"}
					</button>
				</div>

				{/* Mobile Menu Toggle */}
				<div className="md:hidden">
					<button
						type="button"
						onClick={handleMenuToggle}
						className="p-2 rounded-md focus:outline-none"
					>
						{isMenuOpen ? "✖" : "☰"}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div
					className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ${
						theme === "dark"
							? "bg-gray-900/80 text-white"
							: "bg-white/70 text-gray-900"
					} backdrop-blur-lg shadow-lg`}
				>
					<div className="flex flex-col items-center py-6 space-y-4">
						{["Experience", "Portfolio", "Contact"].map((section) => (
							<Link
								key={section}
								to={section.toLowerCase()}
								smooth={true}
								duration={500}
								className={`relative text-lg cursor-pointer transition-all duration-300 ${
									theme === "dark" ? "text-gray-300" : "text-gray-800"
								} after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-portfolio_color after:transition-all after:duration-300 hover:after:w-full`}
								onClick={() => setIsMenuOpen(false)}
							>
								{section}
							</Link>
						))}
						<button
							type="button"
							onClick={toggleTheme}
							className={`p-2 rounded-full shadow-md transition duration-300 ${
								theme === "dark"
									? "bg-gray-800 hover:bg-gray-700"
									: "bg-gray-300 hover:bg-gray-400"
							}`}
						>
							{theme === "dark" ? "🌙" : "☀️"}
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
