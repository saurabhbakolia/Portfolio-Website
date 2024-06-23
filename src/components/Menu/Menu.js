import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Menu = ({ isOpen, setOpen }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className='hidden md:flex justify-between items-center'>
            <div className="md:block text-base text-gray-600 font-semibold tracking-wider">
                <ul className={`flex justify-evenly items-center tracking-wide space-x-4 ${theme === 'dark' ? 'dark-mode-white-text' : ''}`}>
                    <li className="cursor-pointer hover:text-[#16B0B2] transition-all duration-300 ease-in-out"><Link to='/'>Home</Link></li>
                    <li className="cursor-pointer hover:text-[#16B0B2] transition-all duration-300 ease-in-out"><Link to='/about'>About</Link></li>
                    <li className="cursor-pointer hover:text-[#16B0B2] transition-all duration-300 ease-in-out"><Link to='/skills'>Skills</Link></li>
                    <li className="cursor-pointer hover:text-[#16B0B2] transition-all duration-300 ease-in-out"><Link to='/portfolio'>Portfolio</Link></li>
                    <li className="cursor-pointer hover:text-[#16B0B2] transition-all duration-300 ease-in-out"><Link to='/exp'>Experience</Link></li>
                    <li className="cursor-pointer hover:text-[#16B0B2] transition-all duration-300 ease-in-out"><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div
                onClick={toggleTheme}
                className="ml-4 p-2 rounded cursor-pointer flex items-center"
            >
                {theme === 'dark' ? (
                    <MdOutlineLightMode className="dark-mode-white-text" size={32} />
                ) : (
                    <MdOutlineDarkMode className="text-gray-800" size={32} />
                )}
            </div>
        </div>
    )
}

export default Menu