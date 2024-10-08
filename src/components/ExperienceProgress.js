import React from "react";

const ExperienceProgress = () => {
	return (
		<div className="hidden lg:block h-[124px] relative p-4 ">
			<div className="w-[8px] h-full bg-gradient-to-b from-[#16B0B2] to-[#DFF7F8] rounded-full" />
			{
				<span
					className="w-[1em] h-[1em]  absolute top-[0.2em] left-3 rounded-full"
					style={{ background: "#16B0B2" }}
				/>
			}
		</div>
	);
};

export default ExperienceProgress;
