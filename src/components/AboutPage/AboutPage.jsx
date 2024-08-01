import React, { useContext } from 'react'
import Image from '../../assets/portfolio.jpg'
import StyledButton from '../CustomComponent/StyledButton'
import ThemeContext from '../../contexts/ThemeContext'
const AboutPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <main className='about-page-content'>
            <div className='w-full lg:w-[50%] lg:h-full text-center about__page__Div flex justify-center items-center'>
                <img src={Image} alt="code_image" className='object-cover w-full max-w-[90vw] h-[32vh] lg:h-full rounded-lg' />
                {/* <div className='about__photo__div'></div> */}
            </div>
            <div className='pt-2 lg:pt-0 w-[90vw] lg:w-[50%] flex flex-col justify-center items-center space-y-4 lg:space-y-2 xl:space-y-5 text-center'>
                <h3 className={`text-2xl md:text-3xl tracking-wider font-semibold ${theme === 'dark' ? 'dark-mode-text' : 'text-[#16B0B2]'}`}>About Me</h3>
                <p className={`tracking-normal text-sm md:text-lg w-[70%] lg:w-full text-center ${theme === 'dark' ? 'dark-mode-white-text' : 'light-mode-gray-text'}`}>Versatile Full-Stack Web Developer with a flair for crafting high-impact applications using the MERN stack, dedicated to delivering optimal digital solutions.</p>
                <h1 className='text-sm md:text-lg tracking-wider font-semibold text-[#16B0B2]'>Few Highlights</h1>
                <ul className={`text-sm md:text-base grid grid-cols-2 gap-3 text-center place-items-center ${theme === 'dark' ? 'dark-mode-white-text' : 'light-mode-gray-text'}`}>
                    <li className={`highlight-box ${theme === 'dark' ? 'dark-mode-card-bg' : 'bg-gray-200'}`}>Expert in MERN Stack Development</li>
                    <li className={`highlight-box ${theme === 'dark' ? 'bg-[#0C134F]' : 'bg-gray-200 '}`}>Passionate Front-End Innovator</li>
                    <li className={`highlight-box ${theme === 'dark' ? 'bg-[#0C134F]' : 'bg-gray-200 '}`}>Database Management Maestro</li>
                    <li className={`highlight-box ${theme === 'dark' ? 'bg-[#0C134F]' : 'bg-gray-200 '}`}>Innovative Design Thinker</li>
                </ul>
                <ul className='pt-4 hidden lg:flex justify-around items-center w-full'>
                    <li>
                        <a href="mailto:saurabhbakolia2002@gmail" target="_blank" rel='noreferrer'>
                            <StyledButton>
                                Hire Me
                            </StyledButton>
                        </a>
                    </li>
                    <li>
                        <a href='https://drive.google.com/file/d/185jldriKnJJMuoI9JDQtl3i-f5HV2lVB/view?usp=sharing' download="Saurabh_Bakolia_Resume" target="_blank" rel='noreferrer'>
                            <StyledButton>
                                Resume
                            </StyledButton>
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default AboutPage