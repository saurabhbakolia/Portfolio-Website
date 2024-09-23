import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { Link } from "react-scroll";

const NavLogo = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<Link to={"#"} smooth={true} duration={500} offset={-80}>
			<h1
				className={`font-bold text-2xl tracking-wider cursor-pointer ${theme === "dark" ? "dark-mode-white-text" : "text-gray-600"}`}
			>
				SCROLL
				<span
					className={`font-bold text-[#16B0B2] ${theme === "dark" ? "dark-mode-text" : ""}`}
				>
					ME
				</span>
			</h1>
		</Link>
	);
};

export default NavLogo;
