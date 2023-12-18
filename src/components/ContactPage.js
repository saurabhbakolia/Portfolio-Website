import React from 'react'
import Navbar from './Navbar'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'
import { Link } from 'react-router-dom'
import StyledButton from './CustomComponent/StyledButton';

const ContactPage = () => {
    return (
        <>
            <main className="landing_page_bg w-screen h-screen">
                <Navbar />
                <div className='flex flex-col justify-center items-center bg-white h-[90vh] w-full gap-10 px-4'>
                    <h1 className='text-2xl font-bold tracking-wider text-gray-600'>SCROLL<span className='text-[#16B0B2]'>ME</span></h1>
                    <div>
                        <ul className='flex items-center text-gray-600 text-2xl space-x-4 md:space-x-6'>
                            <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><a href="https://www.facebook.com/saurabh.bakolia/" target="_blank" rel='noreferrer'><FaFacebookF /></a></li>
                            <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white'><a href="https://www.instagram.com/__jsoldi_/" target="_blank" rel='noreferrer'><FaInstagram /></a></li>
                            <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><a href="https://github.com/saurabhbakolia" target="_blank" rel='noreferrer'><FaGithub /> </a></li>
                            <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><a href="https://www.linkedin.com/in/saurabh-bakolia-bb82651a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9BKb3y8KSuKe8XvjVq1LbA%3D%3D" target="_blank" rel='noreferrer'><FaLinkedin /></a></li>
                            <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white text-xl transition-all duration-500 ease-in-out'><a href="mailto:saurabhbakolia2002@gmail" target="_blank" rel='noreferrer'><SiGmail /></a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='pt-10 flex min-w-[280px] justify-between items-center w-full gap-10'>
                            <li>
                                <StyledButton>
                                    <a href="mailto:saurabhbakolia2002@gmail" target="_blank" rel='noreferrer'>Hire Me</a>
                                </StyledButton>
                            </li>
                            <li>
                                <StyledButton>
                                    <a href='https://drive.google.com/file/d/1Aqoiz_AvFepCHk_LXB9K_9PNCD3XV93p/view?usp=sharing' download="Saurabh_Bakolia_Resume" target="_blank" rel='noreferrer'>Download CV</a>
                                </StyledButton>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[44%] hidden sm:block lg:text-base text-gray-600 font-medium tracking-widest">
                        <ul className="flex justify-evenly tracking-wide md:gap-10 sm:gap-4">
                            <li className="cursor-pointer"><Link to='/'>Home</Link></li>
                            <li className="cursor-pointer"><Link to='/about'>About</Link></li>
                            <li className="cursor-pointer"><Link to='/skills'>Skills</Link></li>
                            <li className="cursor-pointer"><Link to='/portfolio'>Portfolio</Link></li>
                            <li className="cursor-pointer"><Link to='/exp'>Experience</Link></li>
                            <li className="cursor-pointer"><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='tracking-widest text-center w-full'>
                        © Scroll<span className='text-[#16B0B2]'>Me</span>.com, All rights reserved.
                    </div>
                </div>
            </main>
        </>
    )
}

export default ContactPage