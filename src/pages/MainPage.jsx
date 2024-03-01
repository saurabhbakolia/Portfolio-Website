import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainPage = () => {
    return (
        <main className="landing_page_bg w-screen h-full flex flex-col">
            <Navbar />
            <Outlet />
        </main>
    )
}

export default MainPage