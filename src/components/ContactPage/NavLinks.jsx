import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';

const NavLinks = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`w-[44%] hidden sm:block lg:text-base font-medium tracking-widest ${theme === 'dark' ? 'dark-mode-white-text' : 'text-gray-600'}`}>
            <ul className="flex justify-evenly tracking-wide md:gap-10 sm:gap-4">
                <li className="cursor-pointer"><Link to='/'>Home</Link></li>
                <li className="cursor-pointer"><Link to='/about'>About</Link></li>
                <li className="cursor-pointer"><Link to='/skills'>Skills</Link></li>
                <li className="cursor-pointer"><Link to='/portfolio'>Portfolio</Link></li>
                <li className="cursor-pointer"><Link to='/exp'>Experience</Link></li>
                <li className="cursor-pointer"><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavLinks