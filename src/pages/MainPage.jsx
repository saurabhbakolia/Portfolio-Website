import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import ThemeContext from '../contexts/ThemeContext'
import SocialMediaIcons from '../components/SocialMediaIcons'
import { useLocation } from 'react-router-dom'

const MainPage = () => {
    const { theme } = useContext(ThemeContext);
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    return (
        <main className={`w-screen h-screen flex flex-col ${theme === 'dark' ? 'dark-mode-bg' : ''}`}>
            <Navbar />
            <div className='outlet-container'>
                <div className={`outlet-social-icons ${path === 'contact' ? 'hidden' : 'block'}`}>
                    <SocialMediaIcons />
                </div>
                <div className="outlet">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}

export default MainPage