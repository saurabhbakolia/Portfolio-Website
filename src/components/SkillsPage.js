import React, { useCallback, useContext, useEffect, useState } from "react";
import skills from "../data/skills";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import ThemeContext from "../contexts/ThemeContext";

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const SkillsPage = () => {
	const { theme } = useContext(ThemeContext);
	const [skillsItems, setSkillsItems] = useState(skills);
	const [draggedSkillItem, setDraggedSkillItem] = useState(null);
	const [dropIndicator, setDropIndicator] = useState(null); // To highlight the drop area

	const handleDragStart = useCallback((event, id) => {
		event.dataTransfer.setData("text/plain", id);
		setDraggedSkillItem(id);
	}, []);

	const handleDragEnd = () => {
		setDraggedSkillItem(null); // Reset after drag ends
		setDropIndicator(null); // Reset the drop indicator
	};

	const handleDragOver = useCallback((event, skillId) => {
		event.preventDefault(); // Necessary to allow dropping
		setDraggedSkillItem(null);
		setDropIndicator(skillId);
	}, []);

	const handleDrop = useCallback(
		(event, id) => {
			event.preventDefault();
			const draggedId = event.dataTransfer.getData("text/plain");

			if (draggedId === id) return; // Prevent dropping the same item on itself

			const draggedIndex = skillsItems.findIndex(
				(skill) => +skill.id === +draggedId,
			);
			const droppedIndex = skillsItems.findIndex((skill) => +skill.id === +id);

			if (draggedIndex === -1 || droppedIndex === -1) {
				return; // Handle the case where indices are not found
			}
			// Swap items in the array
			const updatedSkills = [...skillsItems];
			const [movedSkill] = updatedSkills.splice(draggedIndex, 1); // Remove dragged item
			updatedSkills.splice(droppedIndex, 0, movedSkill); // Insert it at the new position

			setSkillsItems(updatedSkills);
			setDraggedSkillItem(null);
			setDropIndicator(null); // Clear the drop indicator after the drop
		},
		[skillsItems],
	);

	return (
		<main className="skill-page-main">
			<div
				className={`skill-page-box ${theme === "dark" ? "" : "bg-[#DFF7F8]"} gap-6 md:gap-4 md:p-4`}
			>
				<h1
					className={`text-3xl font-medium tracking-wider border-b-4 ${theme === "dark" ? "dark-mode-white-text border-[#1A8B9D]" : "border-[#16B0B2]"}`}
				>
					Skills
				</h1>
				<div className="w-full overflow-y-scroll mt-4 py-8 px-4 scroll-smooth">
					<motion.ui
						className="flex flex-wrap flex-row justify-between items-center gap-4"
						variants={container}
						initial="hidden"
						animate="visible"
					>
						{skillsItems.map((skill) => (
							<Tilt
								key={skill.id}
								tiltEnable={true}
								tiltReverse={true}
								tiltMaxAngleX={15}
								tiltMaxAngleY={15}
								scale={1.05}
								transitionSpeed={2500}
								glareEnable={true}
								glareMaxOpacity={0.75}
								glarePosition="bottom"
								glareColor="#ffffff"
								glareBorderRadius="30px"
								perspective={1000}
							>
								<SkillCard
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
							</Tilt>
						))}
					</motion.ui>
				</div>
			</div>
		</main>
	);
};

export default SkillsPage;
