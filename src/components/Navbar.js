import React from "react";
// import { Link } from 'react-router-dom';
import Menu from './Menu/Menu'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="flex justify-around items-center h-[10vh]">
                <div>
                    <h1 className="font-extrabold text-2xl text-gray-600 tracking-wider cursor-pointer">SCROLL<span className="text-gray-600 md:text-[#16B0B2]">ME</span></h1>
                </div>
                <div>
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

//? #16B0B2