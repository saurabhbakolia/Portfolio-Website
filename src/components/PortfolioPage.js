import React from 'react'
import Navbar from './Navbar'
import SocialMediaIcons from './SocialMediaIcons'
import Image from '../assets/code.jpg'

const PortfolioPage = () => {
    return (
        <>
            <main className="landing_page_bg w-screen h-screen">
                <Navbar />
                <div className='flex justify-between items-center'>
                    <div className='hidden lg:block lg:w-[15%] lg:h-[89.90vh]'><SocialMediaIcons /></div>
                    <div className='flex lg:pl-10 pt-6 flex-col justify-start items-start w-full lg:w-[85%] h-[89.9vh] lg:ml-[15.5%]'>
                        <h1 className='pl-[5%] text-3xl text-[#16B0B2] font-medium tracking-wider'>Portfolio</h1>
                        <div className='bg-gradient-to-r from-white to-[#DFF7F8] grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center lg:justify-between items-center lg:w-[69vw] h-full overflow-auto p-2 lg:p-10'>
                            <div className='h-fit w-[96%] rounded-xl cursor-pointer'>
                                <img src={Image} alt="" className='bg-cover bg-center rounded-xl' />
                            </div>
                            <div className='h-fit w-[96%] rounded-xl cursor-pointer'>
                                <img src={Image} alt="" className='rounded-xl' />
                            </div>
                            <div className='h-fit] w-[96%] rounded-xl cursor-pointer'>
                                <img src={Image} alt="" className='bg-cover bg-center rounded-xl' />
                            </div>
                            <div className='h-fit w-[96%] rounded-xl cursor-pointer'>
                                <img src={Image} alt="" className='rounded-xl' />
                            </div>
                            <div className='h-fit w-[96%] rounded-xl cursor-pointer'>
                                <img src={Image} alt="" className='bg-cover bg-center rounded-xl' />
                            </div>
                            <div className='h-fit w-[96%] rounded-xl cursor-pointer'>
                                <img src={Image} alt="" className='rounded-xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PortfolioPage