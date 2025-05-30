import {
    FaPiedPiperAlt,
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3,
    FaSass,
    FaNpm,
    FaAws,
    FaGithub,
    FaMicrosoft,
    FaBootstrap,
    FaPhp,
    FaDatabase,
    FaCode,
    FaTerminal,
    FaCodeBranch,
    FaServer,
    FaJava,
    FaDocker,
    FaFileAlt,
    FaLock
} from 'react-icons/fa';
import {
    GrNode,
} from 'react-icons/gr';
import {
    DiMongodb,
} from 'react-icons/di';
import {
    SiJsonwebtokens,
    SiJavascript,
    SiPhp,
    SiPrisma,
    SiExpress,
    SiTailwindcss,
    SiJquery,
    SiFlutter,
    SiTypescript,
    SiFirebase,
    SiSpringboot,
    SiNextdotjs,
    SiMaterialui,
    SiRedux,
    SiApache,
    SiElectron,
} from 'react-icons/si';

const experience = [
    {
        id: 1,
        title: "Front-end Engineer",
        company: "SyncMOF Institute IIT Kharagpur",
        date: "May 2024 - July 2024",
        description: "Led front-end of the Black Box project using ReactJS and Tailwind CSS, ensuring scalable UI and streamlined deployments with CI/CD and AWS Amplify. Architected a robust UI/UX and wireframe for a platform with Figma and leveraged AWS Amplify Auth and managed cloud resources with CloudWatch. Optimized complex flows using React Flow to enhance efficiency and user experience and implemented AWS CloudTrain for workflow and management. Collaborated on scalable architecture with Docker and AWS, including Elastic Beanstalk and Amplify and used AWS CloudWatch to improve system.",
        skills: [
            { name: "React.js", icon: <FaReact className='text-teal-500 text-xs' /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className='text-blue-600 text-xs' /> },
            { name: "AWS Amplify", icon: null },
            { name: "Figma", icon: null },
            { name: "Docker", icon: <FaDocker className='text-blue-600 text-xs' /> },
            { name: "React Flow", icon: null },
        ],
    },
    {
        id: 2,
        title: "Full-stack Developer",
        company: "Darzee",
        date: "October 2023 - February 2024",
        description: "Developed and optimized Java Spring Boot APIs at Darzee, ensuring high performance and scalability with PostgreSQL and microservices integration. Implemented multi-outfit, multilingual features in the Darzee Flutter app using Dart, enhancing performance and UX, leading to a 20% retention boost. Developed and maintained robust backend systems using Java Spring Boot and TRPC, utilizing AWS S3 for data storage and ensuring scalable solutions. Created Python scripts, automated execution with Linux cron jobs, and fully integrated Firebase for advanced user management and OTP verification.",
        skills: [
            { name: "Java Spring Boot", icon: <SiSpringboot className='text-blue-600 text-xs' /> },
            { name: "PostgreSQL", icon: <FaDatabase className='text-orange-600 text-xs' /> },
            { name: "Flutter", icon: <SiFlutter className='text-indigo-600 text-xs' /> },
            { name: "TRPC", icon: null },
            { name: "AWS S3", icon: <FaAws className='text-orange-600 text-xs' /> },
        ],
    },
    {
        id: 3,
        title: "Full-stack Developer Intern",
        company: "Noccarc Robotics",
        date: "May 2023 - September 2023",
        description: "Engineered a full-stack admin dashboard with ReactJS and Redux for V730i ventilator OTA updates and leveraged WebSocket for real-time updates. Deployed backend on AWS EC2, using Node/Express and Multer for file uploads, and AWS SDK S3 for secure and scalable storage of system versions. Implemented REST API and JWT authentication to ensure robust and secure communication between the admin dashboard and ventilator machines. Engineered a CMS mobile app for patient monitoring with React Native and utilized WebSocket, Redux, and Kafka, and neatly implemented REST API.",
        skills: [
            { name: "React.js", icon: <FaReact className='text-teal-500 text-xs' /> },
            { name: "Redux", icon: null },
            { name: "Node.js", icon: null },
            { name: "Express", icon: <SiExpress className='text-black text-xs' /> },
            { name: "WebSocket", icon: null },
            { name: "JWT", icon: <FaLock className='text-blue-600 text-xs' /> },
        ],
    },
    {
        id: 4,
        title: "Full-stack Web Developer",
        company: "Hippiees",
        date: "January 2023 - March 2023",
        description: "Optimized the Visa Service Portal Website using PHP and MySQL, achieving a 10% boost in performance, 5% increase in accessibility, and 7% gain in SEO. Led deployment via FileZilla and Apache, ensuring smooth integration and maintained comprehensive technical documentation for future enhancements. Improved user experience by refining responsive design, updating the UI, and reducing load times by 15%, resulting in a more efficient and accessible site.",
        skills: [
            { name: "PHP", icon: <FaPhp className='text-blue-600 text-xs' /> },
            { name: "MySQL", icon: <FaDatabase className='text-orange-600 text-xs' /> },
            { name: "FileZilla", icon: null },
            { name: "Apache", icon: <FaServer className='text-gray-600 text-xs' /> },
        ],
    },
    {
        id: 5,
        title: "Frontend Web Developer",
        company: "Leads4Needs",
        date: "June 2022 - July 2022",
        description: "Engineered responsive front-end for a business directory and job portal using Next.js and Tailwind CSS, enhancing user experience and performance. Implemented JWT for secure authentication and developed 40+ reusable components with React.js and Next.js, ensuring code modularity and scalability. Conducted testing and debugging for cross-browser compatibility and mobile responsiveness, ensuring a seamless user experience across various devices.",
        skills: [
            { name: "Next.js", icon: <SiNextdotjs className='text-black text-xs' /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className='text-blue-600 text-xs' /> },
            { name: "React.js", icon: <FaReact className='text-teal-500 text-xs' /> },
            { name: "JWT", icon: <FaLock className='text-blue-600 text-xs' /> },
        ],
    },
    {
        id: 6,
        title: "Open-Source Contributor",
        company: "Kharagpur Winter of Code",
        date: "November 2022 - February 2023",
        description: "Collaborated with contributors on the development of the Global Weather web application, leveraging the tech stack of HTML, CSS, Pug, and JavaScript. Made notable contributions to the codebase by adding over 2.k+ lines of code, utilized Git/GitHub for version control, ensured code management and reviews. Seamlessly integrated the Realtime OpenWeatherMap API to retrieve current weather data, utilizing Node.js/Express.js and asynchronous processing.",
        skills: [
            { name: "HTML", icon: <FaHtml5 className='text-orange-600 text-xs' /> },
            { name: "CSS", icon: <FaCss3 className='text-green-600 text-xs' /> },
            { name: "JavaScript", icon: <SiJavascript className='text-yellow-600 text-xs' /> },
            { name: "Node.js", icon: null },
            { name: "Git", icon: <FaGithub className='text-black text-xs' /> },
        ],
    },
    {
        id: 7,
        title: "Open Source Developer",
        company: "Hacktoberfest",
        date: "October 2023 - November 2023",
        description: "Actively participated in Hacktoberfest by contributing to diverse open-source projects, focusing on feature enhancements, bug fixes, and comprehensive documentation improvements. Collaborated with a global network of developers, gaining valuable experience in Git, continuous integration, and collaborative coding practices. Proud to support the promotion of open-source contributions and foster a community of innovation and learning.",
        skills: [],
    },
    {
        id: 8,
        title: "Software Engineer",
        company: "Freelance",
        date: "May 2024 - Nov 2024",
        description: "Developed browser-based applications for the manufacturing sector startup using React.js, TypeScript, Material UI, and Jotai, enhancing user interfaces. Implemented backend functionality with Prisma ORM and SQL, integrating PostgreSQL for robust data management and utilizing TRPC for API development. Utilized the Hoops library for 3D CAD visualization and optimization, with Docker for containerization and AWS for cloud, ensuring streamlined processes.",
        skills: [
            { name: "React.js", icon: <FaReact className='text-teal-500 text-xs' /> },
            { name: "TypeScript", icon: <SiTypescript className='text-blue-600 text-xs' /> },
            { name: "Material UI", icon: null },
            { name: "Prisma", icon: <SiPrisma className='text-purple-500 text-xs' /> },
            { name: "PostgreSQL", icon: <FaDatabase className='text-orange-600 text-xs' /> },
            { name: "Docker", icon: <FaDocker className='text-blue-600 text-xs' /> },
        ],
    },
    {
        id: 9,
        title: "Software Engineer",
        company: "Shadow Clone Research Labs",
        date: "Feb 2025 - Mar 2025",
        description: "Led backend development for a desktop application built on the Model Context Protocol (MCP), using Node.js, Express, and child processes to manage real-time streaming via Server-Sent Events (SSE). Engineered a secure project lifecycle system with encrypted file handling, bridged frontend-backend communication using stdin/stdout streams, and built key features for the Glutamate App. Optimized distributed architecture for handling multiple model contexts efficiently.",
        skills: [
            { name: "React.js", icon: <FaReact className='text-teal-500 text-xs' /> },
            { name: "TypeScript", icon: <SiTypescript className='text-blue-600 text-xs' /> },
            { name: "Electron.js", icon: <SiElectron className='text-purple-500 text-xs' /> },
            { name: "Node", icon: <FaNodeJs className='text-green-600 text-xs' /> },
            { name: "Express", icon: <SiExpress className='text-black text-xs' /> },
            { name: "SSE", icon: null },
            { name: "Model Context Protocol (MCP)", icon: null },
        ],
    },
];

export default experience;
