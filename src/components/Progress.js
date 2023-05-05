import React from 'react'

const Progress = (prop) => {
    const progress = prop.progress;
    return (
        <div className='h-[12px] w-full lg:w-[300px] border-2 border-gray-100 bg-white rounded-full text-[10px] flex items-center flex-row-reverse justify-between text-[#16B0B2]'>{prop.progress}%
            <div className='h-full bg-[#16B0B2] rounded-full transition-all ease-linear duration-100 delay-75' style={{width:`${prop.progress}%`}}>
                {/* <span className='bg-[#da8b30]'>{prop.progress}</span> */}
            </div>
        </div>
    )
}

export default Progress