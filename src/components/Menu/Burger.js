import React, { useState } from 'react'
import { Rotate as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'



const Burger = () => {
  const [isOpen, setOpen] = useState(false)
  const transProp = isOpen ? 'transition-all duration-[20000] ease-out  px-6 py-2 flex flex-col justify-around items-start  min-w-[260px] max-w-[40vw] h-[60vh] fixed top-0 right-0 bg-[#16B0B2] translate-x-[0%]' : 'px-6 py-2 flex flex-col justify-start items-start  w-[60vw] h-[60vh] fixed top-0 right-0 bg-[#16B0B2] translate-x-[100%] transition-all duration-[30000] ease-out ';

  console.log(transProp);
  return (
    <div className='md:hidden transition-all duration-[20000] '>
      <div className='absolute right-0 -top-[10px] z-10 text-gray-600'><Hamburger duration={0.4} easing="ease-in" size={20} toggled={isOpen} toggle={setOpen} /></div>
      <div className={transProp}>
        <div className="mt-10 text-base text-gray-600 font-semibold tracking-wider">
          <ul className="flex flex-col justify-evenly items-start tracking-wide space-y-4">
            <li className="cursor-pointer hover:text-white"><Link to='/'>Home</Link></li>
            <li className="cursor-pointer hover:text-white"><Link to='/about'>About</Link></li>
            <li className="cursor-pointer hover:text-white"><Link to='/skills'>Skills</Link></li>
            <li className="cursor-pointer hover:text-white"><Link to='/portfolio'>Portfolio</Link></li>
            <li className="cursor-pointer hover:text-white"><Link to='/exp'>Experience</Link></li>
            <li className="cursor-pointer hover:text-white"><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className=''>
          <div className='h-full flex justify-center items-center'>
            <ul className='w-[2.5em] rounded-full flex text-base items-center text-gray-600'>
              <li className='cursor-pointer pr-6 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><FaFacebookF /></li>
              <li className='cursor-pointer pr-6 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><FaInstagram /></li>
              <li className='cursor-pointer pr-6 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><FaGithub /></li>
              <li className='cursor-pointer pr-6 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><FaLinkedin /></li>
              <li className='cursor-pointer pr-6 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white text-xl transition-all duration-500 ease-in-out'><SiGmail /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Burger