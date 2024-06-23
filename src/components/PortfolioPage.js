import React, { useContext } from 'react'
import SocialMediaIcons from './SocialMediaIcons'
import { FiExternalLink } from 'react-icons/fi'
import { TbBrandGithub } from 'react-icons/tb'
import projects from '../data/projects'
import Tilt from 'react-parallax-tilt'
import ThemeContext from '../contexts/ThemeContext';

const PortfolioPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <main className="landing_page_bg w-screen h-auto">
                {/* <Navbar /> */}
                <div className='flex justify-between items-center px-2 z-0'>
                    <div className='hidden lg:block lg:w-[15%] lg:h-[89.90vh]'><SocialMediaIcons /></div>
                    <div className='flex pt-6 flex-col justify-start items-start w-full lg:w-[85%] h-[89.9vh] lg:ml-[15.5%]'>
                        <h1 className='pl-[5%] text-3xl text-[#16B0B2] font-medium tracking-wider'>Portfolio</h1>
                        <div className={` grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 place-items-center lg:justify-between items-center lg:w-[69vw] h-full overflow-auto p-2 lg:p-10 ${theme === 'dark' ? '' : 'bg-gradient-to-r from-white to-[#DFF7F8]'}`}>
                            {projects.map(project => (
                                <a href={project.live} target='_blank'>
                                    <Tilt
                                        tiltEnable={true}
                                        tiltReverse={true}
                                        tiltMaxAngleX={5}
                                        tiltMaxAngleY={5}
                                        scale={1.05}
                                        transitionSpeed={2500}
                                        glareEnable={true}
                                        glareMaxOpacity={0.5}
                                        glarePosition="bottom"
                                        glareColor="#ffffff"
                                        glareBorderRadius="30px"
                                        perspective={1000}
                                    >
                                        <div className={`drop-shadow-md hover:drop-shadow-lg min-w-[300px] h-fit rounded-md ${theme === 'dark' ? 'bg-gradient-to-r from-[#110133] to-[#0C134F]' : 'bg-gradient-to-r from-white to-[#DFF7F8]'}`}>
                                            <img src={process.env.PUBLIC_URL + project.image} alt="Project" className='w-[100%] h-[300px] rounded-t-md object-cover' />
                                            <div className='p-3 pt-3'>
                                                <h3 className={`text-2xl hover:text-[#16B0B2] transition ease-linear delay-150 font-semibold ${theme === 'dark' ? 'dark-mode-white-text' : 'text-gray-700'} pb-3`}>{project.title}</h3>
                                                <p className={`${theme === 'dark' ? 'dark-mode-white-text' : 'text-gray-500'}`}>{project.description}</p>

                                                <ul className={`flex justify-end text-2xl gap-4 pt-6 ${theme === 'dark' ? 'dark-mode-white-text' : ''}`}>
                                                    <li className='hover:text-[#16B0B2] transition ease-in-out delay-150'>
                                                        <a href={project.github} target='_blank'><TbBrandGithub /></a>
                                                    </li>
                                                    <li className='hover:text-[#16B0B2] transition ease-in-out delay-150'>
                                                        <a href={project.live} target='_blank'><FiExternalLink /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Tilt>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PortfolioPage