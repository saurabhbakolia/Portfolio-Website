import React, { useContext } from "react";
import { FiExternalLink } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import projects from "../data/projects";
import Tilt from "react-parallax-tilt";
import ThemeContext from "../contexts/ThemeContext";

const PortfolioPage = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<main className="flex justify-between items-center px-2 z-0 lg:mr-16">
			<div className="w-full flex pt-6 flex-col justify-end items-start h-[89.9vh]">
				<h1 className="pl-[5%] text-3xl text-[#16B0B2] font-medium tracking-wider">
					Portfolio
				</h1>
				<div
					className={`portfolio-page-box ${theme === "dark" ? "" : "bg-gradient-to-r from-white to-[#DFF7F8]"}`}
				>
					{projects.map((project) => (
						<a
							href={project.live}
							rel="noreferrer"
							target="_blank"
							key={project.id}
						>
							<Tilt
								tiltEnable={true}
								tiltReverse={true}
								tiltMaxAngleX={5}
								tiltMaxAngleY={5}
								scale={1.05}
								transitionSpeed={2500}
								glareEnable={true}
								glareMaxOpacity={0.5}
								glarePosition="bottom"
								glareColor="#ffffff"
								glareBorderRadius="30px"
								perspective={1000}
							>
								<div
									className={`drop-shadow-md hover:drop-shadow-lg min-w-[300px] h-fit rounded-md ${theme === "dark" ? "bg-gradient-to-r from-[#110133] to-[#0C134F]" : "bg-gradient-to-r from-white to-[#DFF7F8]"}`}
								>
									<img
										src={process.env.PUBLIC_URL + project.image}
										alt="Project"
										className="w-[100%] h-[300px] rounded-t-md object-cover"
									/>
									<div className="p-3 pt-3">
										<h3
											className={`text-2xl hover:text-[#16B0B2] transition ease-linear delay-150 font-semibold ${theme === "dark" ? "dark-mode-white-text" : "text-gray-700"} pb-3`}
										>
											{project.title}
										</h3>
										<p
											className={`${theme === "dark" ? "dark-mode-white-text" : "text-gray-500"}`}
										>
											{project.description}
										</p>

										<ul
											className={`flex justify-end text-2xl gap-4 pt-6 ${theme === "dark" ? "dark-mode-white-text" : ""}`}
										>
											<li className="hover:text-[#16B0B2] transition ease-in-out delay-150">
												<a href={project.github} target="_blank" rel="noreferrer">
													<TbBrandGithub />
												</a>
											</li>
											<li className="hover:text-[#16B0B2] transition ease-in-out delay-150">
												<a href={project.live} target="_blank" rel="noreferrer">
													<FiExternalLink />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</Tilt>
						</a>
					))}
				</div>
			</div>
		</main>
	);
};

export default PortfolioPage;
