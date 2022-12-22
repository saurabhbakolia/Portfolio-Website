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
                    <div className='flex pt-6 flex-col justify-start items-start w-full lg:w-[85%] h-[89.9vh] lg:ml-[15.5%]'>
                        <h1 className='pl-[5%] text-3xl text-[#16B0B2] font-medium tracking-wider'>Portfolio</h1>
                        <div className='bg-gradient-to-r from-white to-[#DFF7F8] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 place-items-center lg:justify-between items-center lg:w-[69vw] h-full overflow-auto p-2 lg:p-10'>
                            <div className='h-fit w-[96%] rounded-xl cursor-pointer'>
                                {/* <img src={Image} alt="" className='bg-cover bg-center rounded-xl' /> */}
                                <iframe src="https://determined-clarke-3369b4.netlify.app/" className="w-full h-[600px]" title="Travel Website">
                                </iframe>
                            </div>
                            <div className='h-fit w-[96%] rounded-xl cursor-pointer'>
                                {/* <img src={Image} alt="" className='rounded-xl' /> */}
                                <iframe src="https://classy-cactus-80379a.netlify.app/" className="w-full h-[600px]" title="Restaurant Website">
                                </iframe>
                            </div>
                            <div className='h-fit] w-[96%] rounded-xl cursor-pointer'>
                                {/* <img src={Image} alt="" className='bg-cover bg-center rounded-xl' /> */}
                                <iframe src="https://splendorous-fudge-976d6d.netlify.app/" className="w-full h-[600px]" title="W3Schools Free Online Web Tutorials">
                                </iframe>
                            </div>
                            <div className='h-fit w-[96%] rounded-xl cursor-pointer'>
                                {/* <img src={Image} alt="" className='rounded-xl' /> */}
                                <iframe src="https://real-time-chat-app-coral.vercel.app/" className="w-full h-[600px]" title="Scroll Me Chat App">
                                </iframe>
                            </div>
                            <div className='h-fit w-[96%] rounded-xl cursor-pointer'>
                                {/* <img src={Image} alt="" className='bg-cover bg-center rounded-xl' /> */}
                                <iframe src="https://preeminent-moxie-fd9569.netlify.app/" className="w-full h-[600px]" title="W3Schools Free Online Web Tutorials">
                                </iframe>
                            </div>
                            <div className='h-fit w-[96%] rounded-xl cursor-pointer'>
                                {/* <img src={Image} alt="" className='rounded-xl' /> */}
                                <iframe src="https://cv-screener-tau.vercel.app/" className="w-full h-[600px]" title="CV Screener">
                                </iframe>
                            </div>
                            <div className='h-fit w-[96%] rounded-xl cursor-pointer'>
                                {/* <img src={Image} alt="" className='rounded-xl' /> */}
                                <iframe src="https://llibrary-repo.vercel.app/" className="w-full h-[600px]" title="Library Website">
                                </iframe>
                            </div>
                            <div className='h-fit w-[96%] rounded-xl cursor-pointer'>
                                {/* <img src={Image} alt="" className='rounded-xl' /> */}
                                <iframe src="https://magic-notes-eta.vercel.app/" className="w-full h-[600px]" title="Magic Notes">
                                </iframe>
                            </div>
                            <div className='h-fit w-[96%] rounded-xl cursor-pointer'>
                                {/* <img src={Image} alt="" className='rounded-xl' /> */}
                                <iframe src="https://gym-website.vercel.app/" className="w-full h-[600px]" title="Magic Notes">
                                </iframe>
                            </div>
                            <div className='h-fit w-[96%] rounded-xl cursor-pointer'>
                                {/* <img src={Image} alt="" className='rounded-xl' /> */}
                                <iframe className='w-full h-[600px]' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FenNUM9YsAeohhgGydDXkuU%2FGlobal_Weather-App%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D-639%252C308%252C1.47%26scaling%3Dcontain%26starting-point-node-id%3D1%253A2%26show-proto-sidebar%3D1" title='Figma'></iframe>
                            </div>
                            <div className='h-fit w-[96%] rounded-xl cursor-pointer'>
                                {/* <img src={Image} alt="" className='rounded-xl' /> */}
                                <iframe src="https://hjb.iitkgp.co.in/html/index.html" className="w-full h-[600px]" title="HJB Hall Website">
                                </iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PortfolioPage