import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'

const ContactUsSocial = () => {
    return (
        <div className=''>
            <ul className='flex items-center text-gray-600 text-2xl space-x-4 md:space-x-6'>
                <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><a href="https://github.com/saurabhbakolia" target="_blank" rel='noreferrer'><FaGithub /> </a></li>
                <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white transition-all duration-500 ease-in-out'><a href="https://www.linkedin.com/in/saurabh-bakolia-bb82651a7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9BKb3y8KSuKe8XvjVq1LbA%3D%3D" target="_blank" rel='noreferrer'><FaLinkedin /></a></li>
                <li className='cursor-pointer border-2 border-gray-100 p-3 rounded-full hover:shadow-sm hover:bg-[#16B0B2] hover:text-white text-xl transition-all duration-500 ease-in-out'><a href="mailto:saurabhbakolia2002@gmail" target="_blank" rel='noreferrer'><SiGmail /></a></li>
            </ul>
        </div>
    )
}

export default ContactUsSocial