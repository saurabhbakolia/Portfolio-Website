import React from "react";
import StyledButton from "../CustomComponent/StyledButton";
import { Link } from "react-router-dom";

const ContactButtons = () => {
	return (
		<div>
			<ul className="pt-10 flex min-w-[280px] justify-between items-center w-full gap-10">
				<li>
					<StyledButton>
						<a
							href="mailto:saurabhbakolia2002@gmail"
							target="_blank"
							rel="noreferrer"
						>
							Hire Me
						</a>
					</StyledButton>
				</li>
				<li>
					<StyledButton>
						<Link
							to={"/resume"}
						>
							Download CV
						</Link>
					</StyledButton>
				</li>
			</ul>
		</div>
	);
};

export default ContactButtons;
