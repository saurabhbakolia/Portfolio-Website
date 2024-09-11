import React, { useContext } from "react";
import Menu from '../Menu/Menu'
import Burger from '../Menu/Burger'
import Portal from "../PortalComponent/PortalComponent";
import ThemeContext from "../../contexts/ThemeContext";
import NavLogo from "./NavLogo";


const Navbar = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <nav className={`navbar-container ${theme === 'dark' ? 'dark-mode-bg' : ''}`}>
            <div className="navbar-content-box">
                <NavLogo />
                <div className="flex items-center relative justify-center">
                    <Menu />
                    <Portal>
                        <Burger />
                    </Portal>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

//? #16B0B2

// Dark Mode Text Color
// #1A8B9D

// Dark Mode Background Color
// #110133