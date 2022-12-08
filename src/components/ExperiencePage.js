import React from 'react'
import Navbar from './Navbar'
import SocialMediaIcons from './SocialMediaIcons'
import { Link } from 'react-router-dom'
import Image from '../assets/code.jpg'

const ExperiencePage = () => {
    return (
        <>
            <main className="landing_page_bg w-screen h-screen">
                <Navbar />
                <div className='flex justify-between items-center'>
                    <div className='w-[13em] h-[89.90vh]'><SocialMediaIcons /></div>
                    <div className='flex justify-between items-center w-[86%] h-[89.90vh] mr-[15.5%]'>
                        <div className='w-[46%] flex-col space-y-4'>
                            <h3 className='text-[#16B0B2] text-2xl font-medium tracking-wider'>Hello I'm</h3>
                            <h1 className='text-5xl font-medium tracking-wider text-gray-600'>Saurabh Bakolia</h1>
                            <p className='text-gray-500 font-semibold tracking-wider'>Full stack Web Developer</p>

                            <p className='tracking-normal text-sm text-gray-600'>A Full-Stack developer.Design, develop, and maintain fully-fledged and functioning platforms with databases or servers. </p>

                            <ul className='pt-10 flex w-[260px] justify-between items-center'>
                                <li><button className='hover:shadow-md bg-[#16B0B2] text-white px-6 py-2 rounded-full'><Link to='#' target="_hireMe">Hire Me</Link></button></li>
                                <li><button className='hover:shadow-md bg-[#16B0B2] text-white px-6 py-2 rounded-full'><Link to='#' target="_hireMe">Resume</Link></button></li>
                            </ul>
                        </div>
                        <div className='w-[42%] text-center'>
                            <img src={Image} alt="code_image" className='w-full h-[200px] rounded-full contains cover-full' />
                            <h2 className='pt-6 text-2xl text-white font-semibold tracking-widest'>Code Never Lie</h2>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ExperiencePage