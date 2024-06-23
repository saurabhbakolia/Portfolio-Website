import React from 'react'
import StyledButton from '../CustomComponent/StyledButton'

const ContactButtons = () => {
    return (
        <div>
            <ul className='pt-10 flex min-w-[280px] justify-between items-center w-full gap-10'>
                <li>
                    <StyledButton>
                        <a href="mailto:saurabhbakolia2002@gmail" target="_blank" rel='noreferrer'>Hire Me</a>
                    </StyledButton>
                </li>
                <li>
                    <StyledButton>
                        <a href='https://drive.google.com/file/d/1Aqoiz_AvFepCHk_LXB9K_9PNCD3XV93p/view?usp=sharing' download="Saurabh_Bakolia_Resume" target="_blank" rel='noreferrer'>Download CV</a>
                    </StyledButton>
                </li>
            </ul>
        </div>
    )
}

export default ContactButtons