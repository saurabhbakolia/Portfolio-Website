import { useContext } from "react"
import ThemeContext from "../../contexts/ThemeContext"

const Copyright = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`tracking-widest text-center w-full ${theme === 'dark' ? 'dark-mode-white-text' : ''} mt-40`}>
            © Scroll<span className='text-[#16B0B2]'>Me</span>.com, All rights reserved.
        </div>
    )
}

export default Copyright