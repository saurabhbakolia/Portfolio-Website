import React from 'react'
import Navbar from './Navbar'
import SocialMediaIcons from './SocialMediaIcons'
import Image from '../assets/portfolio.jpg'
import StyledButton from './CustomComponent/StyledButton'
const AboutPage = () => {
    return (
        <>
            <main className="landing_page_bg w-screen h-screen flex flex-col">
                <Navbar />
                <div className='flex justify-around lg:justify-between xl:justify-center items-center w-full '>
                    <div className='hidden lg:block lg:w-[15%] lg:h-[89.90vh]'><SocialMediaIcons /></div>
                    <div className='flex flex-col lg:flex-row justify-evenly xl:justify-between items-center w-full h-fit py-6 lg:w-[85%] lg:h-[64vh] lg:mr-[15.5%] bg-white rounded-3xl lg:space-x-8 md:space-x-6 xl:space-x-10'>
                        <div className='w-full lg:w-[50%] lg:h-full text-center about__page__Div flex justify-center items-center'>
                            <img src={Image} alt="code_image" className='object-cover w-full max-w-[90vw] h-[32vh] lg:h-full rounded-lg' />
                            {/* <div className='about__photo__div'></div> */}
                        </div>
                        <div className='pt-2 lg:pt-0 w-[90vw] lg:w-[50%] flex flex-col justify-center items-center space-y-4  lg:space-y-2 xl:space-y-5 bg-white pr-6 text-center'>
                            <h3 className='text-[#16B0B2] text-2xl md:text-3xl tracking-wider font-semibold'>About Me</h3>
                            <p className='tracking-normal text-sm md:text-lg text-gray-600 w-[70%] lg:w-full text-center'>Full-stack web developer with experience working with MERN stacks and a propensity for creating applications that are as effective as possible.</p>
                            <h1 className='text-sm md:text-lg tracking-wider font-semibold text-[#16B0B2]'>Few Highlights</h1>
                            <ul className='text-gray-600 text-sm md:text-base grid grid-cols-2 gap-3 text-center place-items-center'>
                                <li className='bg-gray-200 rounded-lg w-full justify-center h-[60px] py-1 px-2 sm:py-2 sm:px-2 text-center flex items-center list-none'>Full Stack Web Developer</li>
                                <li className='bg-gray-200 rounded-lg w-full justify-center h-[60px] py-1 px-2 sm:py-2 sm:px-2 text-center flex items-center list-none'>Interactive Front End Designer</li>
                                <li className='bg-gray-200 rounded-lg w-full justify-center h-[60px] py-1 px-2 sm:py-2 sm:px-2 text-center flex items-center list-none'>Managing Database</li>
                                <li className='bg-gray-200 rounded-lg w-full justify-center h-[60px] py-1 px-2 sm:py-2 sm:px-2 text-center flex items-center list-none'>Designing with Figma & Adobe Xd</li>
                            </ul>
                            <ul className='pt-4 flex justify-around items-center w-full'>
                                <li>
                                    <StyledButton>
                                        <a href="mailto:saurabhbakolia2002@gmail" target="_blank" rel='noreferrer'>Hire Me</a>
                                    </StyledButton>
                                </li>
                                <li>
                                    <StyledButton>
                                        <a href='https://drive.google.com/file/d/1ZEIU_2nghJaAEAoIHDq1SkN7Q6GBV-dy/view?usp=share_link' download="Saurabh_Bakolia_Resume" target="_blank" rel='noreferrer'>Resume</a>
                                    </StyledButton>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AboutPage