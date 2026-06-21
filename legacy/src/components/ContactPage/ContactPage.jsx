import React, { useCallback, useContext } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import ThemeContext from "../../contexts/ThemeContext";
import NavLinks from "./NavLinks";
import ContactUsSocial from "./ContactUsSocial";
import ContactButtons from "./ContactButtons";
import Copyright from "./Copyright";
import NavLogo from "../Navbar/NavLogo";

const ContactPage = () => {
	const { theme } = useContext(ThemeContext);

	const particlesInit = useCallback(async (engine) => {
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<main
			className={`min-h-screen flex flex-col items-center justify-center ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"} transition-all duration-300 p-6`}
            id="contact"
		>
			<NavLogo />
			<div className="text-center mb-6">
				<h1 className="text-3xl md:text-4xl font-bold">Contact Me</h1>
				<p className="mt-2 text-lg md:text-xl opacity-80">
					I'd love to hear from you!
				</p>
			</div>

			<ContactUsSocial />
			<ContactButtons />
			<Copyright />

			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					fpsLimit: 120,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "repulse",
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0", "#4B5563"],
						},
						links: {
							color: {
								value: ["#2EB67D", "#4B5563"],
							},
							distance: 150,
							enable: true,
							opacity: 0.1,
							width: 1,
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
								default: "bounce",
							},
							speed: 2,
						},
						number: {
							density: {
								enable: true,
								area: 1000,
							},
							value: 30,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
					detectRetina: true,
				}}
				style={{
					position: "absolute",
					zIndex: -1,
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
				}}
			/>
		</main>
	);
};

export default ContactPage;
