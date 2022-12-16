import React from 'react'
import { Link } from 'react-router-dom';

const Menu = ({ isOpen, setOpen }) => {
    return (
        <div className='hidden md:flex justify-between items-center'>
            <div className="md:block text-base text-gray-600 font-semibold tracking-wider">
                <ul className="flex justify-evenly items-center tracking-wide space-x-4">
                    <li className="cursor-pointer"><Link to='/'>Home</Link></li>
                    <li className="cursor-pointer"><Link to='/about'>About</Link></li>
                    <li className="cursor-pointer"><Link to='/skills'>Skills</Link></li>
                    <li className="cursor-pointer"><Link to='/portfolio'>Portfolio</Link></li>
                    <li className="cursor-pointer"><Link to='/exp'>Experience</Link></li>
                    <li className="cursor-pointer"><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu