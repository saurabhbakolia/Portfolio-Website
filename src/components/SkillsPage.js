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
                <div className='flex justify-between items-center'>
                    <div className='w-[15%] h-[89.90vh]'><SocialMediaIcons /></div>
                    <div className='text-gray-600 flex pl-10 flex-col justify-around items-start w-[85%] h-[86vh] ml-[15.5%] bg-[#DFF7F8]'>
                        <h1 className='pt-10  text-3xl text-[#16B0B2] font-medium tracking-wider'>Skills</h1>
                        <div className='flex justify-between items-start '>
                            <div className='w-[16em]'>
                                <ul className='flex justify-between items-center p-4 rounded-full text-xl  bg-[#16B0B2] text-white hover:shadow-md'>
                                    <li className='text-2xl'>
                                        <FaLaptopCode />
                                    </li>
                                    <li>
                                        Programming Skills
                                    </li>
                                </ul>
                            </div>
                            <div className='grid grid-cols-2 justify-items-center items-start gap-10 min-w-[46em] w-[70%] ml-4'>
                                <SkillsProgress language="React Js" langIcon={<FaReact/>}/>
                                <SkillsProgress language="Node Js" langIcon={<GrNode/>}/>
                                <SkillsProgress language="Mongo db" langIcon={<DiMongodb/>}/>
                                <SkillsProgress language="Python" langIcon={<FaPython/>}/>
                                <SkillsProgress language="Tailwind Css" langIcon={<SiTailwindcss/>}/>
                                <SkillsProgress language="Express Js" langIcon={<SiExpress/>}/>
                                <SkillsProgress language="JavaScript" langIcon={<SiJavascript/>}/>
                                <SkillsProgress language="PHP" langIcon={<SiPhp/>}/>
                            </div>
                        </div>
                        <div className='flex justify-between items-start'>
                            <div className='w-[16em] justify-between'>
                                <ul className='flex justify-between items-center p-4 rounded-full text-xl bg-[#16B0B2] text-white font-medium hover:shadow-md'>
                                    <li className='text-2xl text-white'>
                                        <GoTools />
                                    </li>
                                    <li className='font-medium'>
                                        Technologies Skills
                                    </li>
                                </ul>
                            </div>
                            <div className='grid grid-cols-2 justify-items-center w-[70%] min-w-[46em] gap-10 ml-4'>
                                <SkillsProgress language="Git" langIcon={<FaGitAlt/>}/>
                                <SkillsProgress language="Linux" langIcon={<FaLinux/>}/>
                                <SkillsProgress language="Ms Office" langIcon={<SiMicrosoftoffice/>}/>
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