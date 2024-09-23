import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { Link } from "react-scroll";

const LandingPage = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<section
			className={`min-h-screen flex flex-col justify-center items-center ${
				theme === "dark"
					? "bg-gray-900 text-gray-100"
					: "bg-gray-100 text-gray-900"
			} transition-all duration-300 p-6`}
			id="#"
		>
			{/* Name and Title with Subtle Animation */}
			<div className="text-center mb-8 animate-fadeInUp">
				<h1 className="text-5xl md:text-6xl font-bold tracking-wide transition-colors duration-300">
					<span className="bg-gradient-to-r from-teal-400 to-portfolio_color bg-clip-text text-transparent">
						Saurabh Bakolia
					</span>
				</h1>
				<p className="text-lg md:text-xl font-light mt-4 tracking-wider opacity-80">
					Full Stack Developer | Tech Enthusiast
				</p>
			</div>

			{/* Short Introduction with Spacing */}
			<div className="text-center mb-10 max-w-2xl mx-auto opacity-90 animate-fadeInUp delay-200">
				<p className="text-md md:text-lg leading-relaxed">
					Crafting scalable web applications with modern technologies to solve
					real-world problems. Passionate about delivering top-quality
					full-stack solutions.
				</p>
			</div>

			{/* Call to Action */}
			<div className="text-center animate-fadeInUp delay-400">
				<Link
					to={"portfolio"}
					smooth={true}
					duration={500}
					offset={-80}
					className="px-8 py-3 border-2 border-teal-500 text-teal-500 font-medium rounded-full shadow-md hover:bg-teal-500 hover:text-white transition-all duration-300 cursor-pointer"
				>
					View My Work
				</Link>
			</div>
		</section>
	);
};

export default LandingPage;
