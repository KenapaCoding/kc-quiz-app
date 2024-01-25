/** @format */

import React from 'react';

const Score = ({ setDisplay, score, setIndex }) => {
	const handleClick = () => {
		setDisplay('review');
		setIndex(0);
	};
	return (
		<div className='h-full p-[15px] flex flex-col gap-1 items-center justify-center'>
			<div className='text-copper text-center shadow-[0px 4px 4px] font-alfa text-[100px]'>
				YOUR SCORE
			</div>
			<div className='rounded-[280px] w-[280px] h-[280px] border-[6px] border-english-lavender font-alfa text-[120px] flex justify-center items-center text-pastelPink'>
				{Math.floor(score.score)}
			</div>
			<div className='flex gap-[100px] font-alfa text-english-lavender text-[28px]'>
				<div>True : {score.true}</div>
				<div>False: {score.false}</div>
			</div>
			<div
				onClick={handleClick}
				className=' flex flex-end mt-4 font-alfa text-[32px] bg-copper text-pastelPink p-2 border-pastelPink border-[6px] rounded-[15px] hover:scale-110 hover:text-white hover:border-white'>
				Review Answer
			</div>
		</div>
	);
};

export default Score;
