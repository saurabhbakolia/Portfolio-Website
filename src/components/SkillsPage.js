import React from 'react';
import Navbar from './Navbar';
import SocialMediaIcons from './SocialMediaIcons';
import { FaLaptopCode } from 'react-icons/fa';
import { GoTools } from 'react-icons/go';
import SkillsProgress from './SkillsProgress';
import skills from '../data/skills';
import technologies from '../data/technologies';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';


const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};


const SkillsPage = () => {
    return (
        <>
            <main className="landing_page_bg w-screen h-auto flex flex-col">
                {/* <Navbar /> */}
                <div className="flex justify-between items-center w-full h-full">
                    <div className="hidden lg:block lg:w-[15%] lg:h-[89.90vh]">
                        <SocialMediaIcons />
                    </div>
                    <div className="text-gray-600 flex flex-col justify-start items-center md:items-start w-full h-auto lg:h-[89.90vh] lg:mr-[15.5%] bg-[#DFF7F8] gap-6 md:gap-4 md:p-4">
                        <h1 className="text-3xl text-[#16B0B2] font-medium tracking-wider border-b-4 border-[#16B0B2]">Skills</h1>
                        
                        <div className="w-full overflow-y-scroll mt-4 py-8 scroll-smooth">
                            <motion.ui
                                className="w-full grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 place-content-center place-items-center gap-4 lg:grid-cols-2"
                                variants={container}
                                initial="hidden"
                                animate="visible"
                            >
                                {skills.map((skill) => (
                                    <Tilt 
                                        tiltEnable={true}
                                        tiltReverse={true}
                                        tiltMaxAngleX={50}
                                        tiltMaxAngleY={75}
                                        scale={1.05}
                                        transitionSpeed={2500}
                                        glareEnable={true}
                                        glareMaxOpacity={0.75}
                                        glarePosition="bottom"
                                        glareColor="#ffffff"
                                        glareBorderRadius="30px"
                                        perspective={1000}
                                    >
                                        <SkillCard id={skill.id} skill={skill.skills} icon={skill.icon} />
                                    </Tilt>
                                    // <motion.li key={skill.id} className="item" variants={skill}>
                                    // </motion.li>
                                ))}
                            </motion.ui>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default SkillsPage;
