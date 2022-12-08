import React from 'react'

const Progress = ({ progress}) => {
    return (
        <div className='h-[12px] w-[260px] border-2 border-gray-100 bg-white rounded-full'>
            <div className='w-[70%] h-full bg-[#16B0B2] rounded-full'>
                <span className='bg-[#16B0B2]'></span>
            </div>
        </div>
    )
}

export default Progress