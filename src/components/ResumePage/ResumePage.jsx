import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../contexts/ThemeContext";
import resumePDF from "../../assets/resume.pdf";

const ResumePage = () => {
	const { theme } = useContext(ThemeContext);
	const navigate = useNavigate();

	return (
		<div
			className={`flex flex-col min-h-screen ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}
		>
			<main className="flex-grow w-[90%] mx-auto my-10 p-4 rounded-lg shadow-md">
				<header className="text-center mb-6">
					<h2 className="text-3xl font-bold">Saurabh Bakolia</h2>
					<ul className="flex justify-center gap-4 mt-2">
						<li>
							<a
								href="https://github.com/saurabhbakolia"
								target="_blank"
								rel="noreferrer"
							>
								<FaGithub />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/saurabh-bakolia-bb82651a7"
								target="_blank"
								rel="noreferrer"
							>
								<FaLinkedin />
							</a>
						</li>
						<li>
							<a
								href="mailto:saurabhbakolia2002@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								<MdAlternateEmail />
							</a>
						</li>
					</ul>
				</header>

				{/* Action Buttons */}
				<div className="flex justify-between mt-4">
					<button
						type="button"
						onClick={() => navigate("/")}
						className={`py-2 px-4 border rounded transition ${
							theme === "dark"
								? "border-gray-400 text-gray-200 hover:bg-gray-800"
								: "border-gray-600 text-gray-800 hover:bg-gray-200"
						}`}
					>
						Home
					</button>
					<a
						href={resumePDF}
						download="Saurabh_Bakolia_Resume.pdf"
						className={`py-2 px-4 border rounded transition ${
							theme === "dark"
								? "border-gray-400 text-gray-200 hover:bg-gray-800"
								: "border-gray-600 text-gray-800 hover:bg-gray-200"
						}`}
					>
						Download Resume
					</a>
				</div>

				{/* Education Section */}
				<section className="mt-6">
					<h3 className="text-2xl font-semibold">Education</h3>
					<hr className="border-gray-300 my-2" />
					<p className="text-lg">IIT Kharagpur</p>
					<p className="italic">
						Integrated M.Sc., Economics (Aug. 2020 - 2025)
					</p>
				</section>

				{/* Working Experience Section */}
				<section className="mt-6">
					<h3 className="text-2xl font-semibold">Experience</h3>
					<hr className="border-gray-300 my-2" />
					{[
						{
							company: "SyncMOF",
							role: "Software Engineer",
							duration: "May'24 - July'24",
							responsibilities: [
								"Engineered a robust front-end for the Black Box project using React.js and Tailwind CSS.",
								"Architected wireframes and crafted intuitive UI/UX designs with Figma.",
								"Developed and integrated interactive optimization flows with React Flow.",
							],
						},
						{
							company: "Darzee",
							role: "Full Stack Developer",
							duration: "Oct'23 - Feb'24",
							responsibilities: [
								"Designed and implemented Java Spring backend APIs.",
								"Implemented multi-outfit features in the Flutter app.",
								"Spearheaded ideation sessions for process enhancement.",
							],
						},
						{
							company: "Hippiees",
							role: "Full Stack Developer Intern",
							duration: "Jan'23 - Apr'23",
							responsibilities: [
								"Developed and maintained web applications using MERN stack.",
								"Collaborated with cross-functional teams to define and design new features.",
							],
						},
						{
							company: "Leads4Needs",
							role: "Front End Developer Intern",
							duration: "Jun'22 - Aug'22",
							responsibilities: [
								"Created responsive web interfaces using React and Tailwind CSS.",
								"Worked closely with designers to improve user experience.",
							],
						},
					].map((job, index) => (
						<div key={job.id} className="mt-4">
							<h4 className="font-semibold">
								{job.company} | {job.role}
							</h4>
							<p className="italic">{job.duration}</p>
							<ul className="list-disc list-inside mt-2">
								{job.responsibilities.map((task, idx) => (
									<li key={task.id}>{task}</li>
								))}
							</ul>
						</div>
					))}
				</section>

				{/* Skills Section */}
				<section className="mt-6">
					<h3 className="text-2xl font-semibold">Skills</h3>
					<hr className="border-gray-300 my-2" />
					<div className="flex flex-wrap gap-4">
						{[
							"HTML",
							"CSS",
							"JavaScript",
							"React.js",
							"Tailwind CSS",
							"Node.js",
							"Express.js",
							"Java",
							"Python",
							"Git & GitHub",
							"AWS",
							"Figma",
						].map((skill) => (
							<span key={skill} className="border py-1 px-3 rounded text-sm">
								{skill}
							</span>
						))}
					</div>
				</section>
			</main>
		</div>
	);
};

export default ResumePage;
