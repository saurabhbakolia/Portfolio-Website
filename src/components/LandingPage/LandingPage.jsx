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
        <main className="landing_page_bg w-screen h-auto animate-fade-in animate-slide-in">
            {/* <Navbar /> */}
            <div className="flex justify-between items-center w-full">
                <div className="hidden lg:block lg:w-[15%] lg:h-[89.90vh]">
                    <SocialMediaIcons />
                </div>
                <div className="w-[100%] h-[90vh] flex flex-col-reverse justify-evenly items-center lg:flex-row lg:justify-between lg:items-center lg:w-[85%] lg:h-[89.90vh] lg:mr-[15.5%]">
                    <div className={`w-[90%] lg:w-[46%]  flex-col items-center justify-center md:space-y-7 space-y-5 text-center sm:text-center ${theme === 'dark' ? 'dark-mode-white-text' : 'text-gray-600'}`}>
                        <h3 className="text-[#16B0B2] text-base md:text-2xl font-medium tracking-wider">
                            Hello, I'm
                        </h3>
                        <h1 className={`text-3xl md:text-6xl lg:text-4xl font-medium tracking-wider`}>
                            Saurabh Bakolia
                        </h1>
                        <p className="text-gray-500 font-semibold tracking-wider md:text-2xl lg:text-xl">
                            {/* Full Stack Web Developer */}
                            <TypewriterComponent />
                        </p>
                        <p className="tracking-normal text-sm md:text-lg">
                            Designing, developing, and maintaining fully-fledged and
                            functioning platforms with databases or servers.
                        </p>
                        <ContactButton/>
                    </div>
                    <div className="w-[90%] lg:w-[42%] md:max-w-[600px] text-center">
                        <img src={Image} alt="code_image" className="w-full h-[200px] md:h-[24vh] lg:h-[30vh] rounded-full object-cover" />
                        <h2 className={`pt-6 text-2xl md:text-4xl lg:text-3xl font-semibold tracking-widest ${theme === 'dark' ? 'dark-mode-white-text' : 'text-gray-600'}`}>
                            Code Never Lies
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LandingPage;
