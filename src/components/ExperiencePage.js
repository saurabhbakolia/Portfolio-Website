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
                    <div className='hidden lg:block lg:w-[15%] lg:h-[89.90vh]'><SocialMediaIcons /></div>
                    <div className='flex flex-col lg:pl-10 pt-6 justify-start items-start w-full lg:w-[85%] h-[89.9vh] overflow-auto lg:ml-[15.5%] gap-10 bg-gradient-to-r from-white  to-[#16B0B2]'>
                        <h1 className='text-3xl text-[#16B0B2] font-medium tracking-wider px-[5%] text-center md:text-start w-full'>Experience</h1>
                        <div className='text-gray-600 flex flex-col md:flex-row m-auto justify-center lg:justify-between items-center w-full md:px-4 md:gap-4 lg:gap-10'>
                            <div className='w-full flex flex-col gap-10 justify-between items-center md:items-start'>
                                <ul className='ml-6 flex justify-between items-center text-xl font-semibold'>
                                    <li className='text-2xl mr-7'>
                                        <MdCastForEducation />
                                    </li>
                                    <li>Education</li>
                                </ul>
                                <div className='flex flex-col gap-10 h-[500px] overflow-auto lg:h-full w-full lg:pl-6'>
                                    <div className='flex justify-center lg:justify-between items-start w-full lg:w-full md:min-w-[340px] md:max-w-[400px] lg:max-w-[480px]'>
                                        <ExperienceProgress />
                                        <ExperienceCard ExperienceTitle="Master of Science ( Economics )" ExperienceLocation ="Indian Institute of Technology Kharagpur" ExperienceYear="2020 - 2025"/>
                                    </div>
                                    <div className='flex justify-center lg:justify-between items-start w-full lg:w-full md:min-w-[340px] md:max-w-[400px] lg:max-w-[480px]'>
                                        <ExperienceProgress />
                                        <ExperienceCard ExperienceTitle="Higher Secondary School" ExperienceLocation ="Rajat Vidhyapeeth Sr Sec.  School ( Sikar )" ExperienceYear="2017 - 2019"/>
                                    </div>
                                    <div className='flex justify-center lg:justify-between items-start w-full lg:w-full md:min-w-[340px] md:max-w-[400px] lg:max-w-[480px]'>
                                        <ExperienceProgress />
                                        <ExperienceCard ExperienceTitle="Secondary School" ExperienceLocation ="Govt. Prakash Secondary School ( Ratangarh )" ExperienceYear="2016 - 2017"/>
                                    </div>

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
                                        <div className='flex justify-center lg:justify-between items-start lg:w-[29em] w-full md:min-w-[340px] md:max-w-[400px] lg:max-w-[480px]'>
                                            <ExperienceProgress />
                                            <ExperienceCard ExperienceTitle="Full-stack Developer" ExperienceLocation ="Leads4 Needs" ExperienceYear="June 22 - July 22"/>
                                        </div>
                                        <div className='flex justify-center lg:justify-between items-start lg:w-[29em] w-full md:min-w-[340px] md:max-w-[400px] lg:max-w-[480px]'>
                                            <ExperienceProgress />
                                            <ExperienceCard ExperienceTitle="Front-end Developer" ExperienceLocation ="HJB Hall of Residence ( IIT Kharagpur ) " ExperienceYear="March  05 -  Present"/>
                                        </div>
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