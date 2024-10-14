import React from 'react';

const Home = () => {
	return (
		<div className='min-h-screen flex md:flex-row flex-col p-10 md:p-20 justify-between items-center'>
			<div className='w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0'>
				<img
					src='https://via.placeholder.com/300'
					alt='Placeholder'
					className='rounded-lg w-4/5 h-auto'
				/>
			</div>
			<div className='w-full md:w-1/2 flex items-center'>
				<p className='text-center text-sm md:text-lg'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
					ut voluptatibus optio perferendis cum illo similique quas tempore
					magni enim repellendus voluptate, excepturi inventore libero eum modi
					deleniti consequatur. Praesentium. Lorem ipsum, dolor sit amet
					consectetur adipisicing elit. Quisquam officia accusantium sequi
					alias, fugit architecto. Repellendus labore impedit tempore doloremque
					provident? Recusandae non, eveniet corporis molestias saepe earum enim
					voluptas?
				</p>
			</div>
		</div>
	);
};

export default Home;
