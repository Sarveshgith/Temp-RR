import React, { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='w-full flex flex-row items-center p-5 md:px-12'>
			<div className='hidden md:flex flex-row text-lg'>
				<ul className='flex flex-row space-x-16'>
					<li>HOME</li>
					<li>ABOUT</li>
					<li>TOOLS</li>
				</ul>
			</div>

			<div className='md:hidden flex items-center'>
				<button onClick={() => setIsOpen(!isOpen)} className='text-xl'>
					☰
				</button>
			</div>

			<div className='flex-grow text-2xl md:text-3xl text-center'>
				RR Finvests
			</div>

			<div className='hidden md:flex flex-row'>
				<ul className='flex flex-row space-x-16 text-lg'>
					<li>NEWS & INSIGHTS</li>
					<li>WHAT WE DO</li>
				</ul>
			</div>

			{isOpen && (
				<div className='absolute top-16 left-0 w-full bg-white shadow-md md:hidden'>
					<ul className='flex flex-col items-center space-y-4 p-5 text-base'>
						<li onClick={() => setIsOpen(false)}>Home</li>
						<li onClick={() => setIsOpen(false)}>About</li>
						<li onClick={() => setIsOpen(false)}>Tools</li>
						<li onClick={() => setIsOpen(false)}>News & Insights</li>
						<li onClick={() => setIsOpen(false)}>What We Do</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Navbar;
