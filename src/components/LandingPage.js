import React, { useState } from 'react'
import Navbar from './Navbar'
import SocialMediaIcons from './SocialMediaIcons'
import { Link } from 'react-router-dom'
import Image from '../assets/code.jpg'

const LandingPage = () => {
    return (
        <>
            <main className="landing_page_bg w-screen h-screen">
                <Navbar />
                <div className='flex justify-between items-center w-full'>
                    <div className='hidden lg:block lg:w-[15%] lg:h-[89.90vh]'><SocialMediaIcons /></div>
                    <div className='w-[100%] h-[90vh] flex flex-col-reverse justify-evenly items-center lg:flex-row lg:justify-between lg:items-center lg:w-[85%] lg:h-[89.90vh] lg:mr-[15.5%]'>
                        <div className='w-[90%] lg:w-[46%]  flex-col items-center justify-center md:space-y-7 space-y-5 text-center sm:text-center '>
                            <h3 className='text-[#16B0B2] text-base md:text-2xl font-medium tracking-wider'>Hello I'm</h3>
                            <h1 className='text-3xl md:text-6xl lg:text-4xl font-medium tracking-wider text-gray-600'>Saurabh Bakolia</h1>
                            <p className='text-gray-500 font-semibold tracking-wider md:text-2xl lg:text-xl'>Full stack Web Developer</p>
                            <p className='tracking-normal text-sm md:text-lg text-gray-600'>A Full-Stack developer.Design, develop, and maintain fully-fledged and functioning platforms with databases or servers. </p>
                            <ul className='pt-2 lg:pt-10 flex sm:w-full justify-around sm:justify-evenly items-center'>
                                <li><button className='hover:shadow-md bg-[#16B0B2] text-white px-6 py-2 md:px-8 md:py-4 md:text-xl rounded-full'><a href="mailto:saurabhbakolia2002@gmail" target="_blank" rel='noreferrer'>Hire Me</a></button></li>
                                <li><button className='hover:shadow-md bg-[#16B0B2] text-white px-6 py-2 md:px-8 md:py-4 md:text-xl rounded-full'><a href='https://drive.google.com/file/d/1ZEIU_2nghJaAEAoIHDq1SkN7Q6GBV-dy/view?usp=share_link' download="Saurabh_Bakolia_Resume" target="_blank" rel='noreferrer'>Resume</a></button></li>
                            </ul>
                        </div>
                        <div className='w-[90%] lg:w-[42%] md:max-w-[600px] text-center'>
                            <img src={Image} alt="code_image" className='w-full h-[200px] md:h-[24vh] lg:h-[30vh] rounded-full contains cover-full' />
                            <h2 className='pt-6 text-2xl md:text-4xl lg:text-3xl text-gray-600 font-semibold tracking-widest'>Code Never Lie</h2>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default LandingPage


// #16B0B2