import React, { useContext } from 'react'
import SocialMediaIcons from './SocialMediaIcons'
import { MdCastForEducation } from 'react-icons/md'
import { FaBusinessTime } from 'react-icons/fa'
import ExperienceCard from './ExperienceCard'
import ExperienceProgress from './ExperienceProgress'
import experience from '../data/experience'
import education from '../data/education'
import Tilt from 'react-parallax-tilt'
import TimelineComponent from './TimelineComponent/TimelineComponent'
import ThemeContext from '../contexts/ThemeContext'

const ExperiencePage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <main className="flex justify-between items-start">
            <div className={`experience-page-box ${theme === 'dark' ? '' : 'bg-gradient-to-r from-white  to-[#16B0B2]'}`}>
                <h1 className={`experience-heading ${theme === 'dark' ? 'dark-mode-text' : 'text-[#16B0B2]'}`}>Experience</h1>
                <div className='experience-card-container'>
                    <div className='flex flex-col gap-6 justify-between items-start'>
                        <ul className={`flex justify-between items-center text-xl font-semibold ${theme === 'dark' ? 'dark-mode-white-text' : ''}`}>
                            <li className='text-2xl mr-7'>
                                <MdCastForEducation />
                            </li>
                            <li>Education</li>
                        </ul>
                        <div className={`${theme === 'dark' ? 'dark-mode-white-text' : 'light-mode-gray-text'}`}>
                            <div className=''>
                                <h3 className='text-base font-medium'>Master of Science ( Economics )</h3>
                                <p className='text-sm font-normal'>Indian Institute of Technology Kharagpur</p>
                                <span className='text-xs font-normal'>2020-2025</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10 justify-start items-start w-fit lg:w-1/2 h-full'>
                        <ul className={`flex justify-center lg:justify-between items-center text-xl font-semibold ${theme === 'dark' ? 'dark-mode-white-text' : ''}`}>
                            <li className='text-2xl mr-7'>
                                <FaBusinessTime />
                            </li>
                            <li>Working Experience</li>
                        </ul>
                        <div className='flex flex-col items-start justify-start flex-wrap gap-10 h-full w-full'>
                            {experience.map(exp => (
                                <div key={exp.id} className='flex justify-start lg:justify-between items-start lg:w-[29em] w-full md:min-w-[340px] md:max-w-[400px] lg:max-w-[480px]'>
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
                                        glareBorderRadius="10px"
                                        perspective={1000}
                                    >
                                        <ExperienceCard exp={exp}/>
                                    </Tilt>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ExperiencePage