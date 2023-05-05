import React from 'react'

import Progress from './Progress'

const SkillsProgress = (prop) => {
    return (
        <>
            <div className='w-full px-2 max-w-[420px] lg:max-w-[20em]'>
                <ul className='flex justify-between items-center lg:w-[11em] mb-2'>
                    <li className='text-xl font-medium'>
                        {prop.language}
                    </li>
                    <li className='text-3xl font-medium hover:text-[#16B0B2]'>
                        {prop.langIcon}
                    </li>
                </ul>
                <Progress progress={prop.bar}/>
            </div>
        </>
    )
}

export default SkillsProgress