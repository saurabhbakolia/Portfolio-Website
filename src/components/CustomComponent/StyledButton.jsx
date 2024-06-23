import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../../contexts/ThemeContext';


const StyledButton = ({ children }) => {
    const {theme} = useContext(ThemeContext);
    return (
        <motion.button className={`hover:shadow-md text-white px-6 py-2 md:px-8 md:py-4 md:text-xl rounded-full ${theme === 'dark' ? 'bg-[#1A8B9D]' : 'bg-[#16B0B2]'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            {children}
        </motion.button>

    )
}

export default StyledButton
