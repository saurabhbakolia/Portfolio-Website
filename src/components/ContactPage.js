import React from 'react'
import Navbar from './Navbar'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'
import { Link } from 'react-router-dom'

const ContactPage = () => {
    return (
        <>
            <main className="landing_page_bg w-screen h-screen">
                <Navbar />
                <div className='flex flex-col justify-center items-center bg-white h-[90vh] w-full gap-10'>
                    <h1 className='text-2xl font-bold tracking-wider text-gray-600'>SCROLL<span className='text-[#16B0B2]'>ME</span></h1>
                    <div>
                        <ul className='flex items-center text-gray-600 text-2xl space-x-6'>
                            <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white'><FaFacebookF /></li>
                            <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white'><FaInstagram /></li>
                            <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white'><FaGithub /></li>
                            <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white'><FaLinkedin /></li>
                            <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white text-xl'><SiGmail /></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='pt-10 flex w-[280px] justify-between items-center'>
                            <li><button className='hover:shadow-md bg-[#16B0B2] text-white px-6 py-2 rounded-full'><Link to='#' target="_hireMe">Hire Me</Link></button></li>
                            <li><button className='hover:shadow-md bg-[#16B0B2] text-white px-6 py-2 rounded-full'><Link to='#' target="_hireMe">Download CV</Link></button></li>
                        </ul>
                    </div>
                    <div className="w-[44%] text-base text-gray-600 font-medium tracking-widest">
                        <ul className="flex justify-evenly tracking-wide">
                            <li className="cursor-pointer"><Link to='/'>Home</Link></li>
                            <li className="cursor-pointer"><Link to='/about'>About</Link></li>
                            <li className="cursor-pointer"><Link to='/skills'>Skills</Link></li>
                            <li className="cursor-pointer"><Link to='/portfolio'>Portfolio</Link></li>
                            <li className="cursor-pointer"><Link to='/exp'>Experience</Link></li>
                            <li className="cursor-pointer"><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='tracking-widest'>
                        © Scroll<span className='text-[#16B0B2]'>Me</span>.com, All rights reserved.
                    </div>
                </div>
            </main>
        </>
    )
}

export default ContactPage