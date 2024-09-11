import React, { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ThemeContext from "../contexts/ThemeContext";

const SocialMediaIcons = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className="h-full lg:flex justify-center items-center">
			<ul
				className={`w-[2.5em] rounded-full flex flex-col space-y-1 text-2xl border-2 border-gray-200 items-center ${theme === "dark" ? "dark-mode-white-text" : "text-gray-600"}`}
			>
				<li className="social-media-icon">
					<a
						href="https://github.com/saurabhbakolia"
						target="_blank"
						rel="noreferrer"
					>
						<FaGithub />{" "}
					</a>
				</li>
				<li className="social-media-icon">
					{" "}
					<a
						href="https://www.linkedin.com/in/saurabh-bakolia-bb82651a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9BKb3y8KSuKe8XvjVq1LbA%3D%3D"
						target="_blank"
						rel="noreferrer"
					>
						<FaLinkedin />
					</a>
				</li>
				<li className="social-media-icon">
					<a
						href="mailto:saurabhbakolia2002@gmail"
						target="_blank"
						rel="noreferrer"
					>
						<SiGmail />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SocialMediaIcons;
