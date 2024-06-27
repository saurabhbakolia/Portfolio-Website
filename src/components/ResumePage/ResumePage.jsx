import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import ThemeContext from '../../contexts/ThemeContext';

const ResumePage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme === 'dark' ? 'dark-mode-bg text-gray-200' : 'bg-blue-50'}`}>
            <Navbar />
            <main className={`w-[90%] m-auto mt-10 p-2 lg:p-4`}>
                <header className='flex flex-col gap-2 justify-center items-center mt-6'>
                    <h2 className='text-2xl font-medium lg:text-4xl'>Saurabh Bakolia</h2>
                    <ul className='flex flex-row gap-2 text-xl lg:text-2xl'>
                        <li><a href="https://github.com/saurabhbakolia" target="_blank" rel='noreferrer'><FaGithub /> </a></li>
                        <li><a href="https://www.linkedin.com/in/saurabh-bakolia-bb82651a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9BKb3y8KSuKe8XvjVq1LbA%3D%3D" target="_blank" rel='noreferrer'><FaLinkedin /></a></li>
                        <li><a href="mailto:saurabhbakolia2002@gmail" target="_blank" rel='noreferrer'><MdAlternateEmail /></a></li>
                    </ul>
                </header>
                {/* Education Section */}
                <section className='mt-4'>
                    <h3 className='text-xl lg:text-2xl font-medium mt-6'>Education</h3>
                    <hr className='border border-gray-400' />
                    <ul className='mt-2'>
                        <li className='text-lg lg:text-xl'>IIT Kharagpur</li>
                    </ul>
                    <ul className='text-sm lg:text-base font-light flex flex-row justify-between items-center'>
                        <li className='italic'>Integrated M.Sc., Economics Indian Institute of Technology Kharagpur</li>
                        <li className='text-xs lg:text-sm italic'>Aug. 2020 - 2025</li>
                    </ul>
                </section>
                {/* Working Experience Section */}
                <section className='mt-4'>
                    <h3 className='text-xl lg:text-2xl font-medium mt-6'>Working Experience | Internships</h3>
                    <hr className='border border-gray-400' />
                    {/* Darzee Experience */}
                    <div className='mt-2'>
                        <ul className='text-sm lg:text-lg font-light flex flex-row justify-between items-center'>
                            <li className='font-medium'>Darzee | <span>Full stack Developer</span></li>
                            <li className='text-xs lg:text-sm italic'>Oct'23 - Feb'24</li>
                        </ul>
                        <ul className='text-xs lg:text-base font-light flex flex-col justify-between items-start pl-1 mt-1'>
                            <li className=''>- Designed and implemented robust <strong className='font-medium'>Java Spring</strong> backend APIs at Darzee, ensured high performance, scalability, and adherence to industry best practices.</li>
                            <li className=''>- Implemented multi-outfit, multi lingual features and optimizations in the Darzee <strong className='font-medium'>Flutter</strong> app, enhancing performance and user experience.</li>
                            <li className=''>- Spearheaded ideation sessions to drive continuous process enhancement, cultivating an environment conducive to technological innovation.</li>
                        </ul>
                    </div>
                    {/* Noccarc Robotics Experience */}
                    <div className='mt-2'>
                        <ul className='text-sm lg:text-lg font-light flex flex-row justify-between items-center'>
                            <li className='font-medium'>Noccarc Robotics | <span>Full-stack Developer Intern</span></li>
                            <li className='text-xs lg:text-sm italic'>May'23 - Oct'23</li>
                        </ul>
                        <ul className='text-xs lg:text-base font-light flex flex-col justify-between items-start pl-1 mt-1'>
                            <li className=''>- Developed a full-stack admin dashboard using the <strong className='font-medium'>React JS</strong> library for efficient management of system versions for V730i ventilators.</li>
                            <li className=''>- Utilized the <strong className='font-medium'>AWS SDK S3</strong> API to establish secure transmission of data from the dashboard to AWS S3 bucket for storing system versions.</li>
                            <li className=''>- Integrated <strong className='font-medium'>Rest API</strong> to enable seamless secure communication and data exchange between the admin dashboard and ventilator machines.</li>
                            <li>- Developed a cutting-edge full-stack CMS cross-platform mobile application for patient monitoring using <strong className='font-medium'>React Native</strong> for ios and android.</li>
                            <li>-Integrated <strong className='font-medium'>Node.js</strong> REST API to ensure robust and secure storage and management of patient information within a centralized database.</li>
                        </ul>
                    </div>
                    {/* Hippiees Experience */}
                    <div className='mt-2'>
                        <ul className='text-sm lg:text-lg font-light flex flex-row justify-between items-center'>
                            <li className='font-medium'>Hippiees | <span>Full-stack Web Developer</span></li>
                            <li className='text-xs lg:text-sm italic'>Jan'23 - March'23</li>
                        </ul>
                        <ul className='text-xs lg:text-base font-light flex flex-col justify-between items-start pl-1 mt-1'>
                            <li className=''>- Refined the visa service website by fixing bugs utilizing <strong className='font-medium'>PHP</strong> for backend development and <strong className='font-medium'>MySQL</strong> for efficient database management.</li>
                            <li className=''>- Improved Lighthouse performance by 3%, accessibility by 1% and SEO by 2%. Maintained technical documentation for future references</li>
                            <li className=''>- Deployed the website using the <strong className='font-medium'>FileZilla</strong> tool with <strong className='font-medium'>Apache</strong> server, ensuring smooth deployment and seamless website accessibility.</li>
                        </ul>
                    </div>
                    {/* Leads4Needs Experience */}
                    <div className='mt-2'>
                        <ul className='text-sm lg:text-lg font-light flex flex-row justify-between items-center'>
                            <li className='font-medium'>Leads4Needs | <span>Front-end Developer</span></li>
                            <li className='text-xs lg:text-sm italic'>June'22 - July'22</li>
                        </ul>
                        <ul className='text-xs lg:text-base font-light flex flex-col justify-between items-start pl-1 mt-1'>
                            <li className=''>- Developed the mobile responsive front-end of a local business directory website and job search portal using <strong className='font-medium'>Next.js</strong> and <strong className='font-medium'>Tailwind CSS</strong>.</li>
                            <li className=''>- Researched, optimized and designed the user interface and implemented best practices for performance and user experience.</li>
                            <li className=''>- Developed over 40+ reusable responsive components using <strong className='font-medium'>React.js</strong> and Next.js framework, ensuring code modularity and scalability.</li>
                        </ul>
                    </div>
                </section>
                {/* Open Source Contribution */}
                <section className='mt-4'>
                    <h3 className='text-xl lg:text-2xl font-medium mt-6'>Open Source Contributions</h3>
                    <hr className='border border-gray-400' />
                    {/* Open-Source Contributor | Kharagpur Winter of Code  */}
                    <div className='mt-2'>
                        <ul className='text-sm lg:text-lg font-light flex flex-row justify-between items-center'>
                            <li className='font-medium'>Open-Source Contributor | <span>Kharagpur Winter of Code</span></li>
                            <li className='text-xs lg:text-sm italic'>Nov'22 - Feb'23</li>
                        </ul>
                        <ul className='text-xs lg:text-base font-light flex flex-col justify-between items-start pl-1 mt-1'>
                            <li className=''>- Collaborated with contributors on the development of the Global Weather app, used the tech stack of <strong className='font-medium'>HTML</strong>, <strong className='font-medium'>CSS</strong>, <strong className='font-medium'>Pug</strong>, and <strong className='font-medium'>JavaScript</strong>.</li>
                            <li className=''>- Made contributions to codebase by adding over 2.k+ lines of code, utilized <strong className='font-medium'>Git</strong> for version control, ensured code management and reviews.</li>
                            <li className=''>- Integrated the Realtime OpenWeatherMap API, enabling the retrieval of up-to-date weather data and used <strong className='font-medium'>Node.js/Express.js</strong>.</li>
                        </ul>
                    </div>
                    {/* Open-Source Developer | Hacktoberfest  */}
                    <div className='mt-2'>
                        <ul className='text-sm lg:text-lg font-light flex flex-row justify-between items-center'>
                            <li className='font-medium'>Open-Source Developer | <span>Hacktoberfest</span></li>
                            <li className='text-xs lg:text-sm italic'>Oct'23 - Nov'23</li>
                        </ul>
                        <ul className='text-xs lg:text-base font-light flex flex-col justify-center items-start pl-1 mt-1'>
                            <li>- Engaged in Hacktoberfest, contributing to various open-source projects to enhance features, fix bugs, and improve documentation.</li>
                            <li>- Collaborated with a global community of developers, gaining hands-on experience in Git, continuous integration, and collaborative coding practices.</li>
                            <li>- Proud to be a part of an initiative promoting open-source contribution and learning.</li>
                        </ul>
                    </div>
                </section>
                {/* Skills Section */}
                <section className='mt-4'>
                    <h3 className='text-xl lg:text-2xl font-medium mt-6'>Skills Section</h3>
                    <hr className='border border-gray-400' />
                    {/* Front-end Skills */}
                    <div className='mt-2'>
                        <ul className='text-sm lg:text-lg font-light flex flex-row justify-between items-center'>
                            <li className='font-medium'>Front-End Skills</li>
                        </ul>
                        <ul className='text-xs lg:text-base font-light flex flex-row flex-wrap justify-start items-start gap-2 pl-1 mt-1'>
                            <li>HTML |</li>
                            <li>CSS |</li>
                            <li>SASS |</li>
                            <li>JavaScript |</li>
                            <li>React.JS |</li>
                            <li>Redux |</li>
                            <li>Next.JS |</li>
                            <li>Tailwind CSS |</li>
                            <li>Bootstrap |</li>
                            <li>Material-UI</li>
                        </ul>
                    </div>
                    {/* Backend-end Skills */}
                    <div className='mt-1'>
                        <ul className='text-sm lg:text-lg font-light flex flex-row justify-between items-center'>
                            <li className='font-medium'>Back-End Skills</li>
                        </ul>
                        <ul className='text-xs lg:text-base font-light flex flex-row flex-wrap justify-start items-start gap-2 pl-1 mt-1'>
                            <li>Node.JS |</li>
                            <li>Express.JS |</li>
                            <li>PHP |</li>
                            <li>Python |</li>
                            <li>Django |</li>
                            <li>MYSQL |</li>
                            <li>MongoDB |</li>
                            <li>Bootstrap |</li>
                            <li>Material-UI</li>
                        </ul>
                    </div>
                    {/* Tools */}
                    <div className='mt-1'>
                        <ul className='text-sm lg:text-lg font-light flex flex-row justify-between items-center'>
                            <li className='font-medium'>Tools</li>
                        </ul>
                        <ul className='text-xs lg:text-base font-light flex flex-row flex-wrap justify-start items-start gap-2 pl-1 mt-1'>
                            <li>Git & Github |</li>
                            <li>Vercel |</li>
                            <li>Docker |</li>
                            <li>Visual Studio Code |</li>
                            <li>Postman |</li>
                            <li>AWS</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ResumePage