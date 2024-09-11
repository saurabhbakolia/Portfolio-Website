import React, { useEffect } from "react";
import { useState } from "react";

const Progress = (prop) => {
	const [filled, setFilled] = useState(0);

	useEffect(() => {
		if (filled < prop.progress) {
			setTimeout(() => {
				setFilled((prev) => prev + 2);
			}, 50);
		}
	}, [filled, prop.progress]);

	return (
		<div className="h-[12px] w-full lg:w-[300px] border-2 border-gray-100 bg-white rounded-full text-[10px] flex items-center flex-row-reverse justify-between text-[#16B0B2]">
			{prop.progress}%
			<div
				className="h-full bg-[#16B0B2] rounded-full transition-all ease-in-out duration-100"
				style={{ width: `${filled}%` }}
			>
				{/* <span className='bg-[#da8b30]'>{prop.progress}</span> */}
			</div>
		</div>
	);
};

export default Progress;
