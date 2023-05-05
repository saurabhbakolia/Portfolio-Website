import { FaLaptopCode, FaReact, FaPython, FaLinux, FaGitAlt } from 'react-icons/fa'
import { GrNode } from 'react-icons/gr'
import { GoTools } from 'react-icons/go'
import { DiMongodb } from 'react-icons/di'
import { SiJavascript, SiPhp, SiMicrosoftoffice, SiExpress, SiTailwindcss } from 'react-icons/si'


const skills =  [
    {
        id: 1,
        skills: "React Js",
        icon: <FaReact />,
        progress: 80,
    },     
    {
        id: 2,
        skills: "Tailwind Css",
        icon: <SiTailwindcss />,
        progress: 80,
    },
    {
        id: 3,
        skills: "Node Js",
        icon: <GrNode />,
        progress: 70,
    },
    {
        id: 4,
        skills: "Express Js",
        icon: <SiExpress />,
        progress: 70,
    },
    {
        id: 5,
        skills: "Mongo db",
        icon: <DiMongodb />,
        progress: 70,
    },
    {
        id: 6,
        skills: "Python",
        icon: <FaPython />,
        progress: 70,
    },
    {
        id: 7,
        skills: "JavaScript",

        icon: <SiJavascript />,
        progress: 80,
    },
    {
        id: 8,
        skills: "PHP",
        icon: <SiPhp />,
        progress: 70,
    },
    {
    //     id: 9,
    //     skills: "Git",
    //     icon: <FaGitAlt />,
    //     progress: 80,
    // },
    // {
    //     id: 10,
    //     skills: "Linux",
    //     icon: <FaLinux />,
    //     progress: 70,
    // },
    // {
    //     id: 11,
    //     skills: "Ms Office",
    //     icon: <SiMicrosoftoffice />,
    //     progress: 80,
    },
]

export default skills;