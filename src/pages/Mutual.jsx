import React from 'react';

const Mutual = () => {
	return (
		<div className='min-h-screen flex flex-col justify-between'>
			<div className='flex items-start w-full justify-center'>
				<p className='text-4xl text-center mt-6 mb-5 md:mb-0'>Mutual Funds</p>
			</div>

			<div className='flex items-center justify-center w-full my-4'>
				<div className='bg-gray-200 w-4/5 md:w-3/5 flex flex-col items-center py-6 md:py-8 px-6 md:px-12 rounded-2xl shadow-md'>
					<p className='md:text-3xl text-xl pb-6'>Customer Login</p>

					<div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 w-full justify-center'>
						<div className='w-full md:w-auto'>
							<label htmlFor='username' className='sr-only'>
								Username
							</label>
							<input
								id='username'
								type='text'
								placeholder='PAN Number'
								className='w-full px-4 py-2 rounded border'
							/>
						</div>
						<div className='w-full md:w-auto'>
							<label htmlFor='password' className='sr-only'>
								Password
							</label>
							<input
								id='password'
								type='password'
								placeholder='Mobile Number'
								className='w-full px-4 py-2 rounded border'
							/>
						</div>
					</div>
					<button className='bg-black text-white px-6 py-3 rounded-lg mt-6 hover:bg-gray-800'>
						Login
					</button>
				</div>
			</div>

			<div className='flex flex-wrap justify-between w-full md:text-xl text-sm mb-6 md:mb-16'>
				<div className='w-full md:w-1/2 px-6 md:px-10 mb-4 md:mb-0'>
					<p className='text-center'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab minus
						sit, officia ea cumque id. Possimus, quasi vel doloremque saepe
						repellat eius laborum tenetur, soluta aperiam ab accusamus
						reiciendis architecto.
					</p>
				</div>

				<div className='w-full md:w-1/2 px-6 md:px-10'>
					<p className='text-center'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
						recusandae inventore quos asperiores deleniti rem repellendus sunt
						quisquam, optio magnam sed quidem enim reprehenderit aliquam maxime
						ducimus dolor voluptate delectus?
					</p>
				</div>
			</div>
		</div>
	);
};

export default Mutual;
