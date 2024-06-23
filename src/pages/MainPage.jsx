import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import ThemeContext from '../contexts/ThemeContext'

const MainPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <main className={`w-screen h-full flex flex-col ${theme === 'dark' ? 'dark-mode-bg' : ''}`}>
            <Navbar />
            <Outlet />
        </main>
    )
}

export default MainPage