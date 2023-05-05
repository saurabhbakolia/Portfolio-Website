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
        progress: 95,
    },
    {
        id: 3,
        skills: "Node Js",
        icon: <GrNode />,
        progress: 75,
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
        progress: 60,
    },
    {
        id: 6,
        skills: "Python",
        icon: <FaPython />,
        progress: 75,
    },
    {
        id: 7,
        skills: "JavaScript",

        icon: <SiJavascript />,
        progress: 90,
    },
    {
        id: 8,
        skills: "PHP",
        icon: <SiPhp />,
        progress: 85,
    }
]

export default skills;