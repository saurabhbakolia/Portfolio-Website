import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { motion } from "framer-motion";

const SkillCard = (props) => {
	const { theme } = useContext(ThemeContext);
	const {
		onDragStart,
		onDragOver,
		onDrop,
		dropIndicator,
		onDragEnd,
		isDragging,
	} = props;
	return (
		<motion.div
			className={`skill-card ${theme === "dark" ? "dark-mode-card-bg dark-mode-white-text" : "bg-[#16afb218]"} ${dropIndicator === props.id ? "bg-blue-200" : ""} ${isDragging ? "dragging" : ""}`}
			key={props.id}
			draggable
			onDragStart={(event) => onDragStart(event, props.id)}
			onDragOver={(event) => onDragOver(event, props.id)}
			onDrop={(event) => onDrop(event, props.id)}
			onDragEnd={onDragEnd}
			initial={{ opacity: 0, scale: 0.9 }} // Initial state of the card
			animate={{ opacity: 1, scale: 1 }} // Animated state of the card
			transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth transition settings
			whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0,0,0,0.2)" }} // Scale effect and shadow on hover
		>
			<div className="h-fit flex justify-center items-center">{props.icon}</div>
			<p
				className={`text-center mt-2 text-xl  hidden sm:block ${theme === "dark" ? "dark-mode-white-text" : "text-gray-700"}`}
			>
				{props.skill}
			</p>
		</motion.div>
	);
};

export default SkillCard;
