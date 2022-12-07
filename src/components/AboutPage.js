import React from 'react'
import Navbar from './Navbar'
import SocialMediaIcons from './SocialMediaIcons'
import { Link } from 'react-router-dom'
import Image from '../assets/portfolio.jpg'

const AboutPage = () => {
    return (
        <>
            <main className="landing_page_bg w-screen h-screen">
                <Navbar />
                <div className='flex justify-between items-center'>
                    <div className='w-[16%] h-[89.90vh]'><SocialMediaIcons /></div>
                    <div className='flex justify-between items-center w-[86%] h-[64vh] mr-[15.5%] border-2 border-gray-200 bg-white rounded-3xl'>
                        <div className='w-[68%] text-center about__page__Div h-full '>
                            <img src={Image} alt="code_image" className='object-cover h-full w-[full]' />
                            <div className='about__photo__div'></div>
                            <h2 className='pt-6 text-2xl text-white font-semibold tracking-widest'>Code Never Lie</h2>
                        </div>
                        <div className='w-[40%] flex-col space-y-4 bg-white pr-6'>
                            <h3 className='text-[#16B0B2] text-2xl font-medium tracking-wider font-semibold'>About Me</h3>
                            <p className='tracking-normal text-sm text-gray-600'>Full stack web developer with background knowledge of MERN stacks, along with a knack of building applications with utmost efficiency.</p>
                            <h1 className='text-sm tracking-wider font-semibold text-[#16B0B2]'>Few Highlights</h1>
                            <ul className='text-gray-600 text-sm'>
                                <li className='list-disc'>Full Stack Web Developer</li>
                                <li className='list-disc'>Interactive Front End Designer</li>
                                <li className='list-disc'>Managing Database</li>
                                <li className='list-disc'>Designing with Figma & Adobe Xd</li>
                            </ul>
                            

                            <ul className='pt-10 flex w-[260px] justify-between items-center'>
                                <li><button className='hover:shadow-md bg-[#16B0B2] text-white px-6 py-2 rounded-full'><Link to='#' target="_hireMe">Hire Me</Link></button></li>
                                <li><button className='hover:shadow-md bg-[#16B0B2] text-white px-6 py-2 rounded-full'><Link to='#' target="_hireMe">Resume</Link></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AboutPage