import React from 'react'
import StyledButton from '../CustomComponent/StyledButton'
import { Link } from 'react-router-dom'

const ContactButton = () => {
    return (
        <div>
            <ul className="pt-2 lg:pt-10 flex sm:w-full justify-around sm:justify-evenly items-center">
                <li>
                    <StyledButton>
                        <a href="mailto:saurabhbakolia2002@gmail.com" target="_blank" rel="noreferrer">
                            Hire Me
                        </a>
                    </StyledButton>
                </li>
                <li>
                    <StyledButton>
                        <Link to={"/saurabh-bakolia-resume"}>Resume</Link>
                    </StyledButton>
                </li>
            </ul>
        </div>
    )
}

export default ContactButton