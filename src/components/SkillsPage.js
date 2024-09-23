import React, { useContext, useState, useCallback } from "react";
import skills from "../data/skills";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import ThemeContext from "../contexts/ThemeContext";

const container = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.1,
		},
	},
};

const SkillsPage = () => {
	const { theme } = useContext(ThemeContext);
	const [skillsItems, setSkillsItems] = useState(skills);
	const [draggedSkillItem, setDraggedSkillItem] = useState(null);
	const [dropIndicator, setDropIndicator] = useState(null);

	const handleDragStart = useCallback((event, id) => {
		event.dataTransfer.setData("text/plain", id);
		setDraggedSkillItem(id);
	}, []);

	const handleDragEnd = () => {
		setDraggedSkillItem(null);
		setDropIndicator(null);
	};

	const handleDragOver = useCallback((event, skillId) => {
		event.preventDefault();
		setDropIndicator(skillId);
	}, []);

	const handleDrop = useCallback(
		(event, id) => {
			event.preventDefault();
			const draggedId = event.dataTransfer.getData("text/plain");

			if (draggedId === id) return;

			const draggedIndex = skillsItems.findIndex(
				(skill) => skill.id === draggedId,
			);
			const droppedIndex = skillsItems.findIndex((skill) => skill.id === id);

			if (draggedIndex === -1 || droppedIndex === -1) return;

			const updatedSkills = [...skillsItems];
			const [movedSkill] = updatedSkills.splice(draggedIndex, 1);
			updatedSkills.splice(droppedIndex, 0, movedSkill);

			setSkillsItems(updatedSkills);
			setDraggedSkillItem(null);
			setDropIndicator(null);
		},
		[skillsItems],
	);

	return (
		<main
			className={`skills-page-main ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"} min-h-screen flex items-center justify-center`}
		>
			<div
				className={`skills-page-box ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"} rounded-lg shadow-lg p-4 w-full max-w-4xl`}
			>
				<h1 className="text-2xl font-bold text-center mb-4">Skills</h1>
				<motion.ul
					className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
					variants={container}
					initial="hidden"
					animate="visible"
				>
					{skillsItems.map((skill) => (
						<SkillCard
							key={skill.id}
							id={skill.id}
							skill={skill.skills}
							icon={skill.icon}
							onDragStart={handleDragStart}
							onDragOver={handleDragOver}
							onDrop={handleDrop}
							dropIndicator={dropIndicator}
							onDragEnd={handleDragEnd}
							isDragging={draggedSkillItem === skill.id}
						/>
					))}
				</motion.ul>
			</div>
		</main>
	);
};

export default SkillsPage;
