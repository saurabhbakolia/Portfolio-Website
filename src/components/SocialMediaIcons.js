import React from 'react'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'

const SocialMediaIcons = () => {
    return (
        <>
            <div className='h-full lg:flex justify-center items-center'>
                <ul className='w-[2.5em] rounded-full flex flex-col space-y-1 text-2xl border-2 border-gray-200 items-center text-gray-600'>
                    <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><FaFacebookF/></li>
                    <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><FaInstagram/></li>
                    <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><FaGithub/></li>
                    <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><FaLinkedin/></li>
                    <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white text-xl transition-all duration-500 ease-in-out'><SiGmail/></li>
                </ul>
            </div>
        </>
    )
}

export default SocialMediaIcons