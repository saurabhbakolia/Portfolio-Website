import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import ThemeContext from '../contexts/ThemeContext'
import SocialMediaIcons from '../components/SocialMediaIcons'

const MainPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <main className={`w-screen h-screen flex flex-col ${theme === 'dark' ? 'dark-mode-bg' : ''}`}>
            <Navbar />
            <div className='outlet-container'>
                <div className={`outlet-social-icons`}>
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