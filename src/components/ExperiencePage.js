import React from 'react'
import Navbar from './Navbar'
import SocialMediaIcons from './SocialMediaIcons'
import { MdCastForEducation } from 'react-icons/md'
import { FaBusinessTime } from 'react-icons/fa'
import ExperienceCard from './ExperienceCard'
import ExperienceProgress from './ExperienceProgress'

const ExperiencePage = () => {
    return (
        <>
            <main className="landing_page_bg w-screen h-screen">
                <Navbar />
                <div className='flex justify-between items-center'>
                    <div className='w-[15%] h-[89.90vh]'><SocialMediaIcons /></div>
                    <div className='flex flex-col pl-10 pt-6 justify-start items-start w-[85%] h-[89.9vh] ml-[15.5%] gap-10 bg-gradient-to-r from-white  to-[#16B0B2]'>
                        <h1 className='text-3xl text-[#16B0B2] font-medium tracking-wider'>Portfolio</h1>
                        <div className='text-gray-600 flex justify-between items-center w-full'>
                            <div className='w-full flex flex-col gap-10 justify-between items-start'>
                                <ul className='ml-6 flex justify-between items-center text-xl font-semibold'>
                                    <li className='text-2xl mr-7'>
                                        <MdCastForEducation />
                                    </li>
                                    <li>Education</li>
                                </ul>
                                <div className='flex flex-col gap-10'>
                                    <div className='flex justify-between items-start w-[29em]'>
                                        <ExperienceProgress />
                                        <ExperienceCard ExperienceTitle="Master of Science ( Economics )" ExperienceLocation ="Indian Institute of Technology Kharagpur" ExperienceYear="2020 - 2025"/>
                                    </div>
                                    <div className='flex justify-between items-start w-[29em]'>
                                        <ExperienceProgress />
                                        <ExperienceCard ExperienceTitle="Higher Secondary School" ExperienceLocation ="Rajat Vidhyapeeth Sr Sec.  School ( Sikar )" ExperienceYear="2017 - 2019"/>
                                    </div>
                                    <div className='flex justify-between items-start w-[29em]'>
                                        <ExperienceProgress />
                                        <ExperienceCard ExperienceTitle="Secondary School" ExperienceLocation ="Govt. Prakash Secondary School ( Ratangarh )" ExperienceYear="2016 - 2017"/>
                                    </div>

                                </div>
                            </div>
                            <div className='w-full flex flex-col gap-10 justify-start items-start h-full'>
                                <ul className='ml-6 flex justify-between items-center text-xl font-semibold'>
                                    <li className='text-2xl mr-7'>
                                        <FaBusinessTime />
                                    </li>
                                    <li>Experience</li>
                                </ul>
                                <div className=''>
                                    <div className='flex flex-col justify-start items-start gap-10'>
                                        <div className='flex justify-between items-start w-[29em]'>
                                            <ExperienceProgress />
                                            <ExperienceCard ExperienceTitle="Full-stack Developer" ExperienceLocation ="Leads4 Needs" ExperienceYear="June 22 - July 22"/>
                                        </div>
                                        <div className='flex justify-between items-start w-[29em]'>
                                            <ExperienceProgress />
                                            <ExperienceCard ExperienceTitle="Front-end Developer" ExperienceLocation ="HJB Hall of Residence ( IIT Kharagpur ) " ExperienceYear="March  05 -  Present"/>
                                        </div>
                                        {/* <div className='flex justify-between items-start w-[29em]'>
                                            <ExperienceProgress />
                                            <ExperienceCard ExperienceTitle="Secondary School" ExperienceLocation ="Govt. Prakash Secondary School ( Ratangarh )" ExperienceYear="2016 - 2017"/>
                                        </div> */}

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