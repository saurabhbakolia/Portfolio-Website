import React, { useContext } from 'react'
import { SlCalender } from 'react-icons/sl'
import ThemeContext from '../contexts/ThemeContext'

const ExperienceCard = ({ ExperienceTitle, ExperienceLocation, ExperienceYear }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`border-2 shadow-sm lg:w-[25em] max-w-[460px] w-full p-4 rounded-2xl flex flex-col ${theme === 'dark' ? 'dark-mode-white-text dark-mode-card-bg border-[#110133]' : 'bg-white  border-gray-200 text-gray-600 '}`}>
            <ul>
                <li className='font-semibold text-xl tracking-wider'>{ExperienceTitle}</li>
            </ul>
            <ul>
                <li className='text-sm text-gray-400'>{ExperienceLocation}</li>
            </ul>
            <ul className={`flex justify-start items-center text-xs mt-3 ${theme === 'dark' ? 'dark-mode-white-text' : 'text-gray-700'}`}>
                <li className='mr-2'>
                    <SlCalender />
                </li>
                <li className=''>
                    {ExperienceYear}
                </li>
            </ul>
        </div>
    )
}

export default ExperienceCard