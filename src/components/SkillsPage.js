import React from 'react';
import Navbar from './Navbar';
import SocialMediaIcons from './SocialMediaIcons';
import { FaLaptopCode } from 'react-icons/fa';
import { GoTools } from 'react-icons/go';
import SkillsProgress from './SkillsProgress';
import skills from '../data/skills';
import technologies from '../data/technologies';
import SkillCard from './SkillCard';

const SkillsPage = () => {
    return (
        <>
            <main className="landing_page_bg w-screen h-full flex flex-col">
                <Navbar />
                <div className="flex justify-between items-center w-full h-full">
                    <div className="hidden lg:block lg:w-[15%] lg:h-[89.90vh]">
                        <SocialMediaIcons />
                    </div>
                    <div className="text-gray-600 flex flex-col justify-center items-center md:items-start w-full h-full lg:h-[89.90vh] lg:mr-[15.5%] bg-[#DFF7F8] gap-6 md:gap-4 py-6 md:p-4 overflow-y-auto ">
                        <h1 className="xl:pt-2 h-fit text-3xl text-[#16B0B2] font-medium tracking-wider border-b-4 border-[#16B0B2]">Skills</h1>
                        <div className="">
                            {skills.map((skill) => (
                                <SkillCard id={skill.id} skill={skill.skills} icon={skill.icon} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default SkillsPage;
