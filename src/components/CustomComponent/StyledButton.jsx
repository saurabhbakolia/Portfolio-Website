import React from 'react';
import { motion } from 'framer-motion';


const StyledButton = ({ children }) => {
    return (
        <motion.button className='hover:shadow-md bg-[#16B0B2] text-white px-6 py-2 md:px-8 md:py-4 md:text-xl rounded-full'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            {children}
        </motion.button>

    )
}

export default StyledButton
