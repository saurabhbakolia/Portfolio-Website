import { FaLinux, FaGitAlt } from 'react-icons/fa'
import { SiMicrosoftoffice } from 'react-icons/si'

const technologies = [
    {
        id: 1,
        title: 'Git',
        icon: <FaGitAlt />,
        progress: 95,
    },
    {
        id: 2,
        title: 'GitHub',
        icon: <FaLinux />,
        progress: 98,
    },
    {
        id: 3,
        title: 'MS Office',
        icon: <SiMicrosoftoffice />,
        progress: 65,
    },
    {
        id: 4,
        title: 'Linux',
        icon: <FaLinux />,
        progress: 45,
    },


]

export default technologies;