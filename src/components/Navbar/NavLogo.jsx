import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'

const NavLogo = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Link to={"/"}>
            <h1 className={`font-bold text-2xl tracking-wider cursor-pointer ${theme === 'dark' ? 'dark-mode-white-text' : 'text-gray-600'}`}>
                SCROLL
                <span className={`font-bold text-[#16B0B2] ${theme === 'dark' ? 'dark-mode-text' : ''}`}>ME</span>
            </h1>
        </Link>
    )
}

export default NavLogo