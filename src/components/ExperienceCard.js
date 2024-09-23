import React, { useContext } from 'react';
import { SlCalender } from 'react-icons/sl';
import ThemeContext from '../contexts/ThemeContext';

const ExperienceCard = ({ exp }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`py-4 border-b ${theme === 'dark' ? 'border-gray-700 text-gray-200' : 'border-gray-300 text-gray-800'} transition-all duration-300`} key={exp.id}>
            <div className='mb-3'>
                <h3 className='text-xl font-semibold'>{exp.title}</h3>
                <p className='text-sm text-gray-500'>{exp.company}</p>
            </div>
            <div className='mb-3'>
                <h4 className='font-medium text-md mb-2'>Key Responsibilities:</h4>
                <p className='text-sm'>{exp.description}</p>
            </div>
            <div className='flex items-center text-xs text-gray-500 mb-2'>
                <SlCalender className='mr-1' />
                <span>{exp.date}</span>
            </div>

            {/* Skills Section */}
            <div className=''>
                <h4 className='font-medium text-md mb-2'>Skills Used:</h4>
                <div className='flex flex-wrap gap-2'>
                    {exp.skills?.map((skill, index) => (
                        <div key={skill.name} className='flex items-center space-x-1'>
                            <span className='text-xs'>{skill.name}</span>
                            {/* Display skill icons */}
                            {skill.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
