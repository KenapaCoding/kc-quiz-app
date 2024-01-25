/** @format */

import React from 'react';
import { questions } from '../data/data';

const Review = ({ answer, index, setDisplay, handlePrev, handleNext }) => {
	return (
		<div className='h-full relative p-[54px] font-alfa flex flex-col gap-[20px] '>
			<div className=' flex text-white text-[32px]  justify-center text-center'>
				{`Question ${index + 1} : ${questions[index].question}`}
			</div>
			<div className='w-full flex justify-center'>
				<div className='h-[161px] w-[500px] rounded-[20px] flex  text-white p-5 cursor-pointer bg-copper border-solid border-4 border-white'>
					{answer[index + 1]
						? `${answer[index + 1]} . ${
								questions[index].options[answer[index + 1]]
						  }`
						: 'You didn Answer This Questions yet'}
				</div>
			</div>
			<div className='flex items-center justify-center gap-2 text-pastelPink text-[64px]'>
				{questions[index].answer == answer[index + 1] ? 'CORRECT' : 'INCORRECT'}
				<span>
					{questions[index].answer == answer[index + 1] ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='85'
							height='85'
							viewBox='0 0 85 85'
							fill='none'>
							<path
								d='M25.064 40.0299C23.9016 38.8675 22.0127 38.8675 20.8503 40.0299C19.6879 41.1923 19.6879 43.0812 20.8503 44.2436L34.5811 57.9743C35.1623 58.5555 35.8888 58.8461 36.6879 58.8461C36.7606 58.8461 36.7606 58.8461 36.8332 58.8461C37.6324 58.7735 38.4315 58.4102 39.0127 57.7564L73.3759 16.5641C74.393 15.3291 74.2477 13.4402 73.0127 12.3504C71.7777 11.3333 69.8888 11.4786 68.799 12.7137L36.47 51.4359L25.064 40.0299Z'
								fill='#17AB13'
							/>
							<path
								d='M64.731 6.75637C48.0216 -3.70516 26.59 -1.23508 12.6413 12.7136C-3.77755 29.1324 -3.77755 55.9401 12.6413 72.3589C20.8507 80.5683 31.6755 84.7093 42.4276 84.7093C53.1797 84.7093 64.0045 80.5683 72.2139 72.3589C86.2353 58.3376 88.6327 36.8333 78.0985 20.1239C77.2268 18.7435 75.4105 18.3077 74.0302 19.1794C72.6498 20.0512 72.2139 21.8675 73.0857 23.2478C82.1669 37.6324 80.0601 56.0854 68.0003 68.1452C53.9062 82.2393 30.8763 82.2393 16.7823 68.1452C2.68826 54.0512 2.68826 31.0213 16.7823 16.9273C28.8421 4.94013 47.2225 2.8333 61.6071 11.7692C62.9874 12.641 64.8037 12.2051 65.6755 10.8247C66.5473 9.4444 66.1114 7.62817 64.731 6.75637Z'
								fill='#EAB2A0'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='85'
							height='85'
							viewBox='0 0 85 85'
							fill='none'>
							<g clip-path='url(#clip0_31_495)'>
								<path
									d='M42.5004 84.7093C65.7482 84.7093 84.7098 65.8204 84.7098 42.4999C84.7098 19.1794 65.7482 0.290527 42.5004 0.290527C19.2525 0.290527 0.291016 19.2521 0.291016 42.4999C0.291016 65.7478 19.2525 84.7093 42.5004 84.7093ZM42.5004 6.24779C62.479 6.24779 78.7525 22.5213 78.7525 42.4999C78.7525 62.4785 62.479 78.752 42.5004 78.752C22.5218 78.752 6.24828 62.4785 6.24828 42.4999C6.24828 22.5213 22.5218 6.24779 42.5004 6.24779Z'
									fill='#EAB2A0'
								/>
								<path
									d='M26.6628 57.9015C27.244 58.4827 27.9705 58.7733 28.7696 58.7733C29.5688 58.7733 30.2953 58.4827 30.8765 57.9015L42.5004 46.2776L54.1244 57.9015C54.7056 58.4827 55.4321 58.7733 56.2312 58.7733C57.0303 58.7733 57.7568 58.4827 58.338 57.9015C59.5004 56.7391 59.5004 54.8502 58.338 53.6878L46.7141 42.0639L58.338 30.44C59.5004 29.2776 59.5004 27.3887 58.338 26.2263C57.1756 25.0639 55.2868 25.0639 54.1244 26.2263L42.5004 37.8502L30.8765 26.2263C29.7141 25.0639 27.8252 25.0639 26.6628 26.2263C25.5004 27.3887 25.5004 29.2776 26.6628 30.44L38.2867 42.0639L26.6628 53.6878C25.5004 54.8502 25.5004 56.7391 26.6628 57.9015Z'
									fill='#EB5757'
								/>
							</g>
							<defs>
								<clipPath id='clip0_31_495'>
									<rect
										width='85'
										height='85'
										fill='white'
									/>
								</clipPath>
							</defs>
						</svg>
					)}
				</span>
			</div>
			<div className='text-center text-pastelPink text-[20px]'>
				The Answer : {questions[index].options[questions[index].answer]}
			</div>

			<div className='absolute bottom-[60px] right-[54px] flex justify-end mx-[20px] mt-5 gap-5 '>
				{index !== 0 && (
					<svg
						onClick={handlePrev}
						xmlns='http://www.w3.org/2000/svg'
						width='72'
						height='73'
						viewBox='0 0 72 73'
						className='bg-copper rounded-full border-solid border-[6px] border-pastelPink hover:border-white hover:scale-110 hover:shadow-2xl hover:fill-white '
						fill='#EAB2A0'>
						<path d='M58.5 32.75H22.5L31.1625 24.0875C31.9013 23.3488 32.25 22.4675 32.25 21.5C32.25 19.655 30.7256 17.75 28.5 17.75C27.5044 17.75 26.6362 18.1119 25.9125 18.8375L10.9912 33.7588C10.3762 34.3738 9.75 35.1331 9.75 36.5C9.75 37.8669 10.2731 38.525 10.9612 39.2131L25.9125 54.1625C26.6362 54.8881 27.5044 55.25 28.5 55.25C30.7275 55.25 32.25 53.345 32.25 51.5C32.25 50.5325 31.9013 49.6513 31.1625 48.9125L22.5 40.25H58.5C60.57 40.25 62.25 38.57 62.25 36.5C62.25 34.43 60.57 32.75 58.5 32.75Z' />
					</svg>
				)}
				{index + 1 !== questions.length && (
					<svg
						onClick={handleNext}
						xmlns='http://www.w3.org/2000/svg'
						width='72'
						height='73'
						viewBox='0 0 72 73'
						className='bg-copper rounded-full border-solid border-[6px] border-pastelPink hover:border-white hover:scale-110 hover:shadow-2xl hover:fill-white '
						fill='#EAB2A0'>
						<path d='M13.5 40.25H49.5L40.8375 48.9125C40.0987 49.6512 39.75 50.5325 39.75 51.5C39.75 53.345 41.2744 55.25 43.5 55.25C44.4956 55.25 45.3638 54.8881 46.0875 54.1625L61.0088 39.2412C61.6238 38.6262 62.25 37.8669 62.25 36.5C62.25 35.1331 61.7269 34.475 61.0388 33.7869L46.0875 18.8375C45.3638 18.1119 44.4956 17.75 43.5 17.75C41.2725 17.75 39.75 19.655 39.75 21.5C39.75 22.4675 40.0987 23.3487 40.8375 24.0875L49.5 32.75H13.5C11.43 32.75 9.75 34.43 9.75 36.5C9.75 38.57 11.43 40.25 13.5 40.25Z' />
					</svg>
				)}
				<div
					onClick={() => setDisplay('score')}
					className='text-[36px] bg-copper flex items-center p-1 text-pastelPink border-[6px] border-pastelPink hover:scale-110 hover:text-white hover:border-white'>
					View Score
				</div>
			</div>
		</div>
	);
};

export default Review;
