import React from 'react'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'
import { Link } from 'react-router-dom'
import StyledButton from './CustomComponent/StyledButton';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ContactPage = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <>
            <main className="landing_page_bg w-screen h-auto">

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
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        // background: {
                        //     color: {
                        //         value: "#0d47a1",
                        //     },
                        // },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0", "#4B5563"]
                            },
                            links: {
                                color: {
                                    value: ["#2EB67D", "#4B5563"]
                                },
                                distance: 150,
                                enable: true,
                                opacity: 0.1,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 1000,
                                },
                                value: 30,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                    style={{
                        position: 'absolute',
                        zIndex: -1,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                />
            </main>
        </>
    )
}

export default ContactPage