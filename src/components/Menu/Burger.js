import React, { useContext, useState } from 'react'
import { Rotate as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'
import ThemeContext from '../../contexts/ThemeContext';



const Burger = () => {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setOpen] = useState(false)
  const transProp = isOpen ? `transition-all duration-[20000] ease-out px-6 py-2 flex flex-col justify-around items-start min-w-[260px] max-w-[40vw] h-[100vh] fixed top-0 right-0 ${theme === 'dark' ? 'dark-mode-card-bg' : 'bg-[#16B0B2]'} translate-x-[0%]` : `px-6 py-2 flex flex-col justify-start items-start  w-[60vw] h-[100vh] fixed top-0 right-0 ${theme === 'dark' ? 'dark-mode-bg' : 'bg-[#16B0B2]'} translate-x-[100%] transition-all duration-[30000] ease-out `;

  return (
    <div className='lg:hidden transition-all duration-[20000] z-100'>
      <div className='absolute right-1 top-[18px] z-10 text-gray-600'>
        <Hamburger duration={0.4} easing="ease-in" size={20} toggled={isOpen} toggle=
        {setOpen} />
        {/* <FaHamburger className="text-lg text-gray-600"/> */}
      </div>
      <div className={transProp}>
        <div className="mt-10 text-base text-gray-600 font-semibold tracking-wider">
          <ul className={`flex flex-col justify-evenly items-start tracking-wide space-y-4 ${theme === 'dark' ? 'dark-mode-white-text' : ''}`}>
            <li className="cursor-pointer hover:text-white"><Link to='/'>Home</Link></li>
            <li className="cursor-pointer hover:text-white"><Link to='/about'>About</Link></li>
            <li className="cursor-pointer hover:text-white"><Link to='/skills'>Skills</Link></li>
            <li className="cursor-pointer hover:text-white"><Link to='/portfolio'>Portfolio</Link></li>
            <li className="cursor-pointer hover:text-white"><Link to='/exp'>Experience</Link></li>
            <li className="cursor-pointer hover:text-white"><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className='w-full'>
          <div className='h-full flex justify-center items-center'>
            <ul className={`w-fit rounded-full flex text-base items-center gap-6 ${theme === 'dark' ? 'dark-mode-white-text' : 'text-gray-600'}`}>
              <li className='menu-social-icon'><FaFacebookF /></li>
              <li className='menu-social-icon'><FaInstagram /></li>
              <li className='menu-social-icon'><FaGithub /></li>
              <li className='menu-social-icon'><FaLinkedin /></li>
              <li className='menu-social-icon'><SiGmail /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Burger