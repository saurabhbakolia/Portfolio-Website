import React from 'react'
import { SlCalender } from 'react-icons/sl'

const ExperienceCard = ({ExperienceTitle, ExperienceLocation, ExperienceYear}) => {
    return (
        <div className='text-gray-600 border-2 border-gray-200  shadow-sm lg:w-[25em] max-w-[460px] w-full p-4 bg-white rounded-2xl flex flex-col'>
            <ul>
                <li className='font-semibold text-xl tracking-wider'>{ExperienceTitle}</li>
            </ul>
            <ul>
                <li className='text-sm text-gray-400'>{ExperienceLocation}</li>
            </ul>
            <ul className='flex justify-start items-center text-xs mt-3 text-gray-700'>
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