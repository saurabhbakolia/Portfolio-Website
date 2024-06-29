import React, { useContext } from 'react';
import SocialMediaIcons from '../SocialMediaIcons';
import Image from '../../assets/code.jpg';
import StyledButton from '../CustomComponent/StyledButton';
import Typewriter from "typewriter-effect";
import TypewriterComponent from '../TypeWritorEffect/TypewriterComponent';
import ThemeContext from '../../contexts/ThemeContext';
import ContactButton from './ContactButton';

const TypewriterEffect = ({ text }) => {
    const { currentText } = Typewriter({
        text,
        loop: true, // Set to true if you want the typewriter effect to loop
        delay: 100, // Delay between each character in milliseconds
    });

    return <span>{currentText}</span>;
};

const LandingPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <main className="landing-page-container animate-fade-in animate-slide-in">
            <div className="landing-page-content-box">
                <div className={`introduction-section ${theme === 'dark' ? 'dark-mode-white-text' : 'text-gray-600'}`}>
                    <h3 className="text-[#16B0B2] text-base font-medium tracking-wider">
                        Hello, I'm
                    </h3>
                    <h1 className={`text-3xl lg:text-4xl font-medium tracking-wider`}>
                        Saurabh Bakolia
                    </h1>
                    <p className="text-gray-500 font-semibold tracking-wider md:text-2xl lg:text-xl">
                        <TypewriterComponent />
                    </p>
                    <p className="tracking-normal text-sm md:text-base px-2 md:w-[76%] lg:w-full m-auto overflow-hidden">
                        Designing, developing, and maintaining fully-fledged and
                        functioning platforms with databases or servers.
                    </p>
                    <ContactButton />
                </div>
                <div className="w-[90%] lg:w-[42%] md:max-w-[600px] text-center">
                    <img src={Image} alt="code_image" className="w-full h-[200px] md:h-[24vh] lg:h-[30vh] rounded-full object-cover" />
                    <h2 className={`pt-6 text-2xl lg:text-3xl font-semibold tracking-widest ${theme === 'dark' ? 'dark-mode-white-text' : 'text-gray-600'}`}>
                        Code Never Lies
                    </h2>
                </div>
            </div>
        </main>
    );
};

export default LandingPage;
