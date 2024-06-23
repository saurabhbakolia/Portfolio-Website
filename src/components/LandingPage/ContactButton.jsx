import React from 'react'
import StyledButton from '../CustomComponent/StyledButton'

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
                        <a href="https://drive.google.com/file/d/1Aqoiz_AvFepCHk_LXB9K_9PNCD3XV93p/view?usp=sharing" download="Saurabh_Bakolia_Resume" target="_blank" rel="noreferrer">
                            Resume
                        </a>
                    </StyledButton>
                </li>
            </ul>
        </div>
    )
}

export default ContactButton