import React from 'react'
import Navbar from './Navbar'
import SocialMediaIcons from './SocialMediaIcons'
import { Link } from 'react-router-dom'
import Image from '../assets/code.jpg'

const PortfolioPage = () => {
    return (
        <>
            <main className="landing_page_bg w-screen h-screen">
                <Navbar />
                <div className='flex justify-between items-center'>
                    <div className='w-[15em] h-[89.90vh]'><SocialMediaIcons /></div>
                    <div className='flex pl-10 pt-6 flex-col justify-start items-start w-[86%] h-[89.9vh] ml-[15.5%]'>
                        <h1 className='text-3xl text-[#16B0B2] font-medium tracking-wider'>Portfolio</h1>
                        <div className='bg-gradient-to-r from-white to-[#DFF7F8] grid grid-cols-2 gap-6 justify-between items-center w-[69vw] h-full overflow-auto p-10'>
                            <div className='border-2 border-blue-500 h-fit w-[96%] rounded-3xl cursor-pointer'>
                                <img src={Image} alt="" className='bg-cover bg-center rounded-3xl' />
                            </div>
                            <div className='border-2 border-blue-500 h-fit w-[96%] rounded-3xl cursor-pointer'>
                                <img src={Image} alt="" className='rounded-3xl' />
                            </div>
                            <div className='border-2 border-blue-500 h-fit] w-[96%] rounded-3xl cursor-pointer'>
                                <img src={Image} alt="" className='bg-cover bg-center rounded-3xl' />
                            </div>
                            <div className='border-2 border-blue-500 h-fit w-[96%] rounded-3xl cursor-pointer'>
                                <img src={Image} alt="" className='rounded-3xl' />
                            </div>
                            <div className='border-2 border-blue-500 h-fit w-[96%] rounded-3xl cursor-pointer'>
                                <img src={Image} alt="" className='bg-cover bg-center rounded-3xl' />
                            </div>
                            <div className='border-2 border-blue-500 h-fit w-[96%] rounded-3xl cursor-pointer'>
                                <img src={Image} alt="" className='rounded-3xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PortfolioPage