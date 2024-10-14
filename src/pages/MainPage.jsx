import React from 'react';
import Navbar from '../components/Navbar';

const MainPage = () => {
	return (
		<>
			<Navbar />
			<div className='flex flex-col min-h-[90vh] justify-between p-5'>
				<div className='flex-grow flex items-center justify-center'>
					<div className='md:text-4xl text-2xl text-center mb-4'>
						MAKE INTELLIGENT INVESTMENTS WITH US
					</div>
				</div>

				<div className='flex flex-col items-center md:text-xl mb-5'>
					<p className='mb-6 text-center'>
						Join us today and let your money work hard as you do
					</p>
					<button className='rounded-lg border-[gray] border-2 md:px-4 px-2 py-1 md:text-xl w-30 md:w-38'>
						Button
					</button>
				</div>
			</div>
		</>
	);
};

export default MainPage;
