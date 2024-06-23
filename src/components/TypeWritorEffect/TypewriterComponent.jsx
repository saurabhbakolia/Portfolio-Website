import React, { useState, useEffect, useContext } from 'react';
import Typewriter from 'typewriter-effect';
import ThemeContext from '../../contexts/ThemeContext';

const TypewriterComponent = () => {
    const {theme} = useContext(ThemeContext);
    const texts = [
        'Full-stack Developer',
        'Front-end Developer',
        'Back-end Developer'
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 7000); // Change text every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`${theme === 'dark' ? 'dark-mode-white-text' : 'text-gray-600'}`}>
            <Typewriter
                options={{
                    strings: [texts[currentTextIndex]],
                    autoStart: true
                }}
            />
        </div>
    );
};

export default TypewriterComponent;
