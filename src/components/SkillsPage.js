import React from 'react'
import Navbar from './Navbar'
import SocialMediaIcons from './SocialMediaIcons'
import { FaLaptopCode, FaReact, FaPython, FaLinux, FaGitAlt } from 'react-icons/fa'
import { GrNode } from 'react-icons/gr'
import { GoTools } from 'react-icons/go'
import SkillsProgress from './SkillsProgress'
import { DiMongodb } from 'react-icons/di'
import { SiJavascript, SiPhp, SiMicrosoftoffice, SiExpress, SiTailwindcss } from 'react-icons/si'



const SkillsPage = () => {
    return (
        <>
            <main className="landing_page_bg w-screen h-screen">
                <Navbar />
                <div className='flex justify-between items-center w-full'>
                    <div className='hidden lg:block lg:w-[15%] lg:h-[89.90vh]'><SocialMediaIcons /></div>
                    <div className='text-gray-600 flex flex-col justify-center md:justify-between items-center md:items-start w-full h-[89.90vh] lg:w-[85%] lg:h-[89.90vh] lg:mr-[15.5%] bg-[#DFF7F8] md:gap-4 md:p-4'>
                        <h1 className='xl:pt-10 text-3xl text-[#16B0B2] font-medium tracking-wider'>Skills</h1>
                        <div className='h-[42%] md:h-[60%] flex flex-col xl:flex-row justify-between items-start gap-3 md:gap-1 w-full'>
                            <div className='lg:w-[16em] flex justify-center md:justify-start w-full'>
                                <ul className='flex justify-between items-center p-2 lg:p-4 rounded-full text-xl  bg-[#16B0B2] text-white hover:shadow-md'>
                                    <li className='text-2xl'>
                                        <FaLaptopCode />
                                    </li>
                                    <li>
                                        Programming Skills
                                    </li>
                                </ul>
                            </div>
                            <div className='h-[100%] overflow-auto grid grid-cols-1 sm:grid-cols-2 justify-items-center md:items-start lg:gap-10 min-w-[360px] w-full xl:w-[70%]'>
                                <SkillsProgress language="React Js" langIcon={<FaReact />} />
                                <SkillsProgress language="Node Js" langIcon={<GrNode />} />
                                <SkillsProgress language="Mongo db" langIcon={<DiMongodb />} />
                                <SkillsProgress language="Python" langIcon={<FaPython />} />
                                <SkillsProgress language="Tailwind Css" langIcon={<SiTailwindcss />} />
                                <SkillsProgress language="Express Js" langIcon={<SiExpress />} />
                                <SkillsProgress language="JavaScript" langIcon={<SiJavascript />} />
                                <SkillsProgress language="PHP" langIcon={<SiPhp />} />
                            </div>
                        </div>
                        <div className='h-[42%] md:h-[40%] flex flex-col xl:flex-row justify-between items-start gap-3 md:gap-1 w-full'>
                            <div className='lg:justify-between md:justify-start lg:w-[16em] flex justify-center w-full'>
                                <ul className='flex justify-between items-center p-2 lg:p-4 rounded-full text-xl bg-[#16B0B2] text-white font-medium hover:shadow-md'>
                                    <li className='text-2xl text-white'>
                                        <GoTools />
                                    </li>
                                    <li className='font-medium'>
                                        Technologies Skills
                                    </li>
                                </ul>
                            </div>
                            <div className='h-[100%] lg:h-[100px] xl:h-full overflow-auto grid grid-cols-1 sm:grid-cols-2 justify-items-center w-full min-w-[360px] gap-10 lg:ml-4 xl:w-[70%]'>
                                <SkillsProgress language="Git" langIcon={<FaGitAlt />} />
                                <SkillsProgress language="Linux" langIcon={<FaLinux />} />
                                <SkillsProgress language="Ms Office" langIcon={<SiMicrosoftoffice />} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SkillsPage



// #DFF7F8;