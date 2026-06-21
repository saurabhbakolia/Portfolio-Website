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
      className={`skill-card flex flex-col items-center justify-center p-2 w-full max-w-[120px] rounded transition-all duration-300 
        ${theme === "dark" ? "bg-gray-800 text-white shadow" : "bg-white text-gray-900 shadow-md"} 
        ${dropIndicator === props.id ? "border-2 border-blue-500" : ""} 
        ${isDragging ? "opacity-50" : "opacity-100"}`}
      draggable
      onDragStart={(event) => onDragStart(event, props.id)}
      onDragOver={(event) => onDragOver(event, props.id)}
      onDrop={(event) => onDrop(event, props.id)}
      onDragEnd={onDragEnd}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
    >
      <div className="icon-container mb-1 w-8 h-8 flex items-center justify-center">
        {props.icon}
      </div>
      <p className={`text-center text-xs ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
        {props.skill}
      </p>
    </motion.div>
  );
};

export default SkillCard;
