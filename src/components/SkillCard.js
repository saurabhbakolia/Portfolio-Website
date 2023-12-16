import React from 'react'

const SkillCard = (props) => {
    return (
        <div className='bg-[#16afb218] h-fit md:w-60 px-8 py-4 rounded-xl shadow-md shadow-[#16afb257] flex justify-center items-center gap-4' key={props.id} >
            <div className='w-full h-fit flex justify-center items-center'>
                {props.icon}
            </div>
            <p className='text-center mt-2 text-xl text-gray-700 hidden sm:block'>{props.skill}</p>
        </div>
    )
}

export default SkillCard

