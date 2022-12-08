import React from 'react'

import Progress from './Progress'

const SkillsProgress = ({ language, langIcon }) => {
    return (
        <>
            <div>
                <ul className='flex justify-between items-center w-[11em] mb-2'>
                    <li className='text-xl font-medium'>
                        {language}
                    </li>
                    <li className='text-3xl font-medium hover:text-[#16B0B2]'>
                        {langIcon}
                    </li>
                </ul>
                <Progress progress={40}/>
            </div>
        </>
    )
}

export default SkillsProgress