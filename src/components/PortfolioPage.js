import React from 'react'
import Navbar from './Navbar'
import SocialMediaIcons from './SocialMediaIcons'
import Image from '../assets/code.jpg'
import { FiExternalLink } from 'react-icons/fi'
import { TbBrandGithub } from 'react-icons/tb'
import projects from '../data/projects'

const PortfolioPage = () => {
    return (
        <>
            <main className="landing_page_bg w-screen h-screen">
                <Navbar />
                <div className='flex justify-between items-center'>
                    <div className='hidden lg:block lg:w-[15%] lg:h-[89.90vh]'><SocialMediaIcons /></div>
                    <div className='flex pt-6 flex-col justify-start items-start w-full lg:w-[85%] h-[89.9vh] lg:ml-[15.5%]'>
                        <h1 className='pl-[5%] text-3xl text-[#16B0B2] font-medium tracking-wider'>Portfolio</h1>
                        <div className='bg-gradient-to-r from-white to-[#DFF7F8] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 place-items-center lg:justify-between items-center lg:w-[69vw] h-full overflow-auto p-2 lg:p-10'>
                            {projects.map(project => (
                                <a href={project.live}>
                                    <div className='drop-shadow-md hover:drop-shadow-lg min-w-[360px] h-fit bg-gradient-to-r from-white to-[#DFF7F8] rounded-md'>
                                        <img src={process.env.PUBLIC_URL + project.image} alt="Project" className='w-[100%] h-[300px] rounded-t-md object-cover' />
                                        <div className='p-2'>
                                            <h3 className='text-2xl hover:text-[#16B0B2] transition ease-linear delay-150 font-semibold text-gray-700 pb-2'>{project.title}</h3>
                                            <p className='text-gray-500'>{project.description}</p>

                                            <ul className='flex justify-end text-2xl gap-4 pt-6'>
                                                <li className='hover:text-[#16B0B2] transition ease-in-out delay-150'>
                                                    <a href={project.github}><TbBrandGithub /></a>
                                                </li>
                                                <li className='hover:text-[#16B0B2] transition ease-in-out delay-150'>
                                                    <a href={project.live}><FiExternalLink /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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