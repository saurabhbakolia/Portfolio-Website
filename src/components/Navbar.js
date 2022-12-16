import React from "react";
// import { Link } from 'react-router-dom';
import Menu from './Menu/Menu'
import Burger from './Menu/Burger'

const Navbar = () => {
    return (
        <div className="navbar flex justify-center items-center">
            <div className="sticky top-0 right-0 w-[76vw] flex justify-between pt-[30px] h-[10vh]">
                <div className="">
                    <h1 className="font-bold text-2xl text-gray-600 tracking-wider cursor-pointer">SCROLL<span className="font-bold text-[#16B0B2]">ME</span></h1>
                </div>
                <div className="border-2 border-pink-500">
                    <Menu />
                    <Burger/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

//? #16B0B2