import React from 'react'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGimp, SiGmail } from 'react-icons/si'
import { Link } from 'react-router-dom';


const SocialMediaIcons = () => {
    return (
        <>
            <div className='h-full lg:flex justify-center items-center'>
                <ul className='w-[2.5em] rounded-full flex flex-col space-y-1 text-2xl border-2 border-gray-200 items-center text-gray-600'>
                    <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><a href="https://www.facebook.com/saurabh.bakolia/" target="_blank" rel='noreferrer'><FaFacebookF/></a></li>
                    <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><a href="https://www.instagram.com/__jsoldi_/" target="_blank" rel='noreferrer'><FaInstagram/></a></li>
                    <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><a href="https://github.com/saurabhbakolia" target="_blank" rel='noreferrer'><FaGithub/> </a></li>
                    <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'> <a href="https://www.linkedin.com/in/saurabh-bakolia-bb82651a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9BKb3y8KSuKe8XvjVq1LbA%3D%3D" target="_blank" rel='noreferrer'><FaLinkedin/></a></li>
                    <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white text-xl transition-all duration-500 ease-in-out'><a href="mailto:saurabhbakolia2002@gmail" target="_blank" rel='noreferrer'><SiGmail/></a></li>
                </ul>
            </div>
        </>
    )
}

export default SocialMediaIcons
