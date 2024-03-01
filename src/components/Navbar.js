import React from "react";
// import { Link } from 'react-router-dom';
import Menu from './Menu/Menu'
import Burger from './Menu/Burger'
import Portal from "./PortalComponent/PortalComponent";

const Navbar = () => {
    return (
        <div className="navbar flex justify-center items-center">
            <div className="sticky top-0 right-0 w-[90vw] lg:w-[80vw] flex justify-between items-start md:items-center py-[2.5vh] h-[10vh]">
                <div className="">
                    <h1 className="font-bold text-2xl text-gray-600 tracking-wider cursor-pointer">SCROLL<span className="font-bold text-[#16B0B2]">ME</span></h1>
                </div>
                <div className="flex items-center relative justify-center">
                    <Menu />
                    <Portal>
                        <Burger />
                    </Portal>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

//? #16B0B2