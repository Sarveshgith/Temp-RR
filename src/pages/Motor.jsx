import React from 'react';

const Motor = ({ title, isleft }) => {
	return (
		<div className='min-h-screen flex flex-col'>
			<div className='font-normal text-4xl text-center md:m-8 m-3 mt-8'>
				{title}
			</div>
			<div className='flex flex-col md:flex-row items-center justify-center p-5 md:px-10 flex-grow'>
				{isleft && (
					<div className='w-full md:w-1/3 h-auto md:mb-0 mb-5'>
						<img
							src='https://via.placeholder.com/300'
							alt='Investment'
							className='w-full'
						/>
					</div>
				)}
				<div className='w-full md:w-2/3 mb-7 md:mb-0 md:px-20 px-7'>
					<p className='md:text-lg text-sm text-center'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Repudiandae, nemo quibusdam maxime ut nesciunt, asperiores mollitia
						impedit numquam fugiat optio tenetur, voluptatibus pariatur illum
						placeat consequuntur dolorem dignissimos necessitatibus doloremque!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
						suscipit inventore animi asperiores, illum assumenda, est eligendi
						voluptatum autem esse commodi accusantium recusandae. Saepe
						reiciendis ducimus sequi nesciunt? Itaque, voluptatem!
					</p>

					<div className='flex justify-center mt-5'>
						<button className='bg-gray-200 hover:bg-gray-500 text-gray-900 hover:text-white px-7 py-2 rounded-xl border-2 border-gray-500 transition duration-300 ease-in-out'>
							Next &rarr;
						</button>
					</div>
				</div>
				{!isleft && (
					<div className='w-full md:w-1/3 h-auto'>
						<img
							src='https://via.placeholder.com/300'
							alt='Investment'
							className='w-full'
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Motor;
