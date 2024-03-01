import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
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
        <div>
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
