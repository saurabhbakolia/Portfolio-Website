import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <navbar className="flex justify-around items-center h-[10vh]">
                <div>
                    <h1 className="font-extrabold text-2xl text-gray-600 tracking-wider cursor-pointer">SCROLL<span className="text-[#16B0B2]">ME</span></h1>
                </div>
                <div className="w-[38%] text-base text-white font-semibold tracking-wider">
                    <ul className="flex justify-evenly tracking-wide">
                        <li className="cursor-pointer"><Link to='/'>Home</Link></li>
                        <li className="cursor-pointer"><Link to='/about'>About</Link></li>
                        <li className="cursor-pointer"><Link to='/skills'>Skills</Link></li>
                        <li className="cursor-pointer"><Link to='/portfolio'>Portfolio</Link></li>
                        <li className="cursor-pointer"><Link to='/exp'>Experience</Link></li>
                        <li className="cursor-pointer"><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </navbar>

        </>
    );
};

export default Navbar;

//? #16B0B2