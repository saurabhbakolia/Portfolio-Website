import { FaLinux, FaGitAlt } from 'react-icons/fa'
import { SiMicrosoftoffice } from 'react-icons/si'

const technologies = [
    {
        id: 1,
        title: 'Git',
        icon: <FaGitAlt />,
        progress: 80,
    },
    // {
    //     id: 2,
    //     title: 'GitHub',
    //     icon: <FaGithub />,
    //     progress: 80,
    // },
    {
        id: 3,
        title: 'MS Office',
        icon: <SiMicrosoftoffice />,
        progress: 80,
    },
    {
        id: 4,
        title: 'Linux',
        icon: <FaLinux />,
        progress: 80,
    },


]

export default technologies;