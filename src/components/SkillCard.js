import { useTheme } from '@emotion/react'
import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const SkillCard = (props) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`skill-card ${theme === 'dark' ? 'dark-mode-card-bg dark-mode-white-text' : 'bg-[#16afb218]'}`} key={props.id} >
            <div className='h-fit flex justify-center items-center'>
                {props.icon}
            </div>
            <p className={`text-center mt-2 text-xl  hidden sm:block ${theme === 'dark' ? 'dark-mode-white-text' : 'text-gray-700'}`}>{props.skill}</p>
        </div>
    )
}

export default SkillCard

