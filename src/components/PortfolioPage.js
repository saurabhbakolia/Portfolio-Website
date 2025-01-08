import React, { useContext } from "react";
import { FiExternalLink } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import projects from "../data/projects";
import Tilt from "react-parallax-tilt";
import ThemeContext from "../contexts/ThemeContext";

const PortfolioPage = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<main
			className={`flex flex-col items-center justify-between px-4 lg:px-16 py-6 lg:py-12 ${
				theme === "dark"
					? "bg-gray-900 text-gray-100"
					: "bg-gray-100 text-gray-900"
			}`}
			id="portfolio"
		>
			{/* Title */}
			<h1 className="text-3xl lg:text-4xl font-bold tracking-wide text-[#16B0B2] mb-8">
				Portfolio
			</h1>

			{/* Project Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
				{projects.map((project) => (
					<a
						href={project.live}
						rel="noreferrer"
						target="_blank"
						key={project.id}
						className="relative"
					>
						<Tilt
							tiltEnable={true}
							tiltMaxAngleX={3}
							tiltMaxAngleY={3}
							scale={1.02}
							transitionSpeed={1000}
						>
							{/* Minimalistic Project Card */}
							<div
								className={`rounded-lg overflow-hidden border transition-all duration-300 ${
									theme === "dark"
										? "bg-gray-800 border-gray-700"
										: "bg-white border-gray-300"
								}`}
							>
								{/* Image */}
								<img
									src={process.env.PUBLIC_URL + project.image}
									alt={project.title}
									className="w-full h-[auto] object-cover"
								/>

								{/* Project Info */}
								<div className="p-4">
									<h3
										className={`text-xl font-semibold mb-2 transition ease-in-out ${
											theme === "dark"
												? "text-gray-100 hover:text-[#16B0B2]"
												: "text-gray-900 hover:text-[#16B0B2]"
										}`}
									>
										{project.title}
									</h3>
									<p
										className={`text-sm mb-4 ${
											theme === "dark" ? "text-gray-400" : "text-gray-600"
										}`}
									>
										{project.description}
									</p>

									{/* Icons */}
									<div className="flex justify-end space-x-4 text-xl">
										<a
											href={project.github}
											target="_blank"
											rel="noreferrer"
											className={`hover:text-[#16B0B2] transition duration-300 ${
												theme === "dark"
													? "text-gray-400"
													: "text-gray-600"
											}`}
										>
											<TbBrandGithub />
										</a>
										<a
											href={project.live}
											target="_blank"
											rel="noreferrer"
											className={`hover:text-[#16B0B2] transition duration-300 ${
												theme === "dark"
													? "text-gray-400"
													: "text-gray-600"
											}`}
										>
											<FiExternalLink />
										</a>
									</div>
								</div>
							</div>
						</Tilt>
					</a>
				))}
			</div>
		</main>
	);
};

export default PortfolioPage;
