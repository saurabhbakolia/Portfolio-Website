import React from 'react'
import Navbar from './Navbar'
import SocialMediaIcons from './SocialMediaIcons'
import { MdCastForEducation } from 'react-icons/md'
import { FaBusinessTime } from 'react-icons/fa'
import ExperienceCard from './ExperienceCard'
import ExperienceProgress from './ExperienceProgress'
import experience from '../data/experience'
import education from '../data/education'
import Tilt from 'react-parallax-tilt'

const ExperiencePage = () => {
    return (
        <>
            <main className="landing_page_bg w-screen h-auto">
                {/* <Navbar /> */}
                <div className='flex justify-between items-center'>
                    <div className='hidden lg:block lg:w-[15%] lg:h-[89.90vh]'><SocialMediaIcons /></div>
                    <div className='flex flex-col lg:pl-10 pt-6 justify-start items-start w-full lg:w-[85%] h-[89.9vh] overflow-auto lg:ml-[15.5%] gap-10 bg-gradient-to-r from-white  to-[#16B0B2] px-4 py-6'>
                        <h1 className='text-3xl text-[#16B0B2] font-medium tracking-wider px-[5%] text-center md:text-start w-full'>Experience</h1>
                        <div className='text-gray-600 flex flex-col md:flex-row m-auto justify-center lg:justify-between items-start w-full md:px-4 md:gap-4 lg:gap-10'>
                            <div className='w-full flex flex-col gap-10 justify-between items-center md:items-start'>
                                <ul className='ml-6 flex justify-between items-center text-xl font-semibold'>
                                    <li className='text-2xl mr-7'>
                                        <MdCastForEducation />
                                    </li>
                                    <li>Education</li>
                                </ul>
                                <div className='flex flex-col gap-10 h-[500px] overflow-auto lg:h-full w-full lg:pl-6'>
                                    {education.map(edu => (
                                        <div key={edu.id} className='flex justify-center lg:justify-between items-start w-full lg:w-full md:min-w-[340px] md:max-w-[400px] lg:max-w-[480px]'>
                                            <ExperienceProgress />
                                            <Tilt
                                                tiltEnable={true}
                                                tiltReverse={true}
                                                tiltMaxAngleX={25}
                                                tiltMaxAngleY={25}
                                                scale={1.05}
                                                transitionSpeed={2500}
                                                glareEnable={true}
                                                glareMaxOpacity={0.75}
                                                glarePosition="bottom"
                                                glareColor="#ffffff"
                                                glareBorderRadius="30px"
                                                perspective={1000}
                                            >
                                                <ExperienceCard ExperienceTitle={edu.title} ExperienceLocation={edu.company} ExperienceYear={edu.date} />
                                            </Tilt>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='w-full flex flex-col gap-10 justify-start items-center md:items-start h-full'>
                                <ul className='ml-6 flex justify-center lg:justify-between items-center text-xl font-semibold '>
                                    <li className='text-2xl mr-7'>
                                        <FaBusinessTime />
                                    </li>
                                    <li>Experience</li>
                                </ul>
                                <div className='w-full'>
                                    <div className='flex flex-col justify-center w-full lg:justify-start items-start gap-10'>
                                        {experience.map(exp => (
                                            <div key={exp.id} className='flex justify-center lg:justify-between items-start lg:w-[29em] w-full md:min-w-[340px] md:max-w-[400px] lg:max-w-[480px]'>
                                                <ExperienceProgress />
                                                <Tilt
                                                    tiltEnable={true}
                                                    tiltReverse={true}
                                                    tiltMaxAngleX={25}
                                                    tiltMaxAngleY={25}
                                                    scale={1.05}
                                                    transitionSpeed={2500}
                                                    glareEnable={true}
                                                    glareMaxOpacity={0.75}
                                                    glarePosition="bottom"
                                                    glareColor="#ffffff"
                                                    glareBorderRadius="30px"
                                                    perspective={1000}
                                                >
                                                    <ExperienceCard ExperienceTitle={exp.title} ExperienceLocation={exp.company} ExperienceYear={exp.date} />
                                                </Tilt>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ExperiencePage