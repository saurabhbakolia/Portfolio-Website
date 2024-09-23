import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const NavLinks = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className={`w-fit hidden sm:block lg:text-base font-medium tracking-widest ${theme === "dark" ? "dark-mode-white-text" : "text-gray-600"}`}
		>
			<ul className="flex justify-evenly tracking-wide md:gap-10 sm:gap-4">
				<li className="cursor-pointer">
					<a href="#/">Home</a>
				</li>
				<li className="cursor-pointer">
					<a href="#/about">About</a>
				</li>
				<li className="cursor-pointer">
					<a href="#/skills">Skills</a>
				</li>
				<li className="cursor-pointer">
					<a href="#/portfolio">Portfolio</a>
				</li>
				<li className="cursor-pointer">
					<a href="#/exp">Experience</a>
				</li>
				<li className="cursor-pointer">
					<a href="#/contact">Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default NavLinks;
