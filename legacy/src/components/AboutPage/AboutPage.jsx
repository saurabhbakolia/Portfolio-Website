import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const AboutPage = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<section
			className={`min-h-screen flex flex-col justify-center items-center ${
				theme === "dark"
					? "bg-gradient-to-r from-gray-900 to-gray-800 text-white"
					: "bg-gradient-to-r from-gray-200 to-white text-gray-900"
			} transition-all duration-300 p-6`}
		>
			<h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#16B0B2] to-[#ff007f] drop-shadow-lg animate-pulse">
				About Me
			</h2>
			<p className="text-md md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-6 transition-transform duration-300 hover:scale-105">
				I'm a passionate full stack developer with a strong foundation in both front-end and back-end technologies. My journey began with a fascination for coding and has evolved into a dedication to creating scalable and efficient web applications.
			</p>
			<p className="text-md md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-6 transition-transform duration-300 hover:scale-105">
				Throughout my career, I have worked on various projects that have honed my skills in software development, problem-solving, and team collaboration. I thrive in dynamic environments where I can learn and adapt while contributing to meaningful projects.
			</p>
			<p className="text-md md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed transition-transform duration-300 hover:scale-105">
				When I'm not coding, you can find me exploring new technologies, participating in hackathons, or sharing knowledge with fellow developers. I'm excited about the future of tech and look forward to continuing to make an impact in the industry.
			</p>
			<div className="mt-8">
				<a
					href="#contact"
					className="px-8 py-3 bg-[#16B0B2] text-white font-semibold rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
				>
					Let's Connect!
				</a>
			</div>
		</section>
	);
};

export default AboutPage;
