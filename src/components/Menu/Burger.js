import React, { useState } from 'react'
import { Rotate as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';


const Burger = () => {
  const [isOpen, setOpen] = useState(false)
  const transProp = isOpen ? 'transition duration-[20000] ease-out  px-6 py-2 flex flex-col justify-start items-start border-2 border-red-600 w-[60vw] h-[60vh] fixed top-0 right-0 bg-[#16B0B2] translate-x-[0%]' : 'px-6 py-2 flex flex-col justify-start items-start border-2 border-red-600 w-[60vw] h-[60vh] fixed top-0 right-0 bg-[#16B0B2] translate-x-[100%] transition duration-[30000] ease-out ';

  console.log(transProp);
  return (
    <div className='transition-all duration-[20000]'>
      <div className='fixed right-4 top-2 z-10'><Hamburger toggled={isOpen} toggle={setOpen} /></div>
      <div className={transProp}>
        <div className="mt-10 text-base text-white font-semibold tracking-wider">
          <ul className="flex flex-col justify-evenly items-start tracking-wide space-y-4">
            <li className="cursor-pointer"><Link to='/'>Home</Link></li>
            <li className="cursor-pointer"><Link to='/about'>About</Link></li>
            <li className="cursor-pointer"><Link to='/skills'>Skills</Link></li>
            <li className="cursor-pointer"><Link to='/portfolio'>Portfolio</Link></li>
            <li className="cursor-pointer"><Link to='/exp'>Experience</Link></li>
            <li className="cursor-pointer"><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Burger