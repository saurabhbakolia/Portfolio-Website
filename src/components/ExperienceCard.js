import React, { useContext } from 'react'
import { SlCalender } from 'react-icons/sl'
import ThemeContext from '../contexts/ThemeContext'

const ExperienceCard = ({ exp }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`experience-card ${theme === 'dark' ? 'dark-mode-white-text dark-mode-card-bg border-[#110133]' : 'border-gray-200 text-gray-600 '}`}>
            <ul>
                <li className='font-semibold text-xl tracking-wider'>{exp.title}</li>
            </ul>
            <ul>
                <li className='text-sm text-gray-600'>{exp.company}</li>
            </ul>
            <ul className='mt-4'>
                {exp.keyPoints && exp.keyPoints.map((point) => {
                    return (
                        <li key={point} className='text-xs lg:text-base mt-2 list-disc'>
                            {point}
                        </li>
                    )
                })}
            </ul>
            <ul className={`flex justify-start items-center text-xs mt-3 ${theme === 'dark' ? 'dark-mode-white-text' : 'text-gray-700'}`}>
                <li className='mr-2'>
                    <SlCalender />
                </li>
                <li className=''>
                    {exp.date}
                </li>
            </ul>
        </div>
    )
}

export default ExperienceCard