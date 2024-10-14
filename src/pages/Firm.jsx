import React from 'react';
import CountUp from 'react-countup';

const Firm = () => {
	return (
		<div className='min-h-screen flex flex-col justify-between'>
			<div className='text-3xl text-center flex flex-grow items-start justify-center mt-10'>
				THE FIRM
			</div>
			<div className='flex flex-grow items-center justify-center md:w-3/5 w-4/5 mx-auto mb-'>
				<p className='text-center md:text-xl text-sm'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum modi
					iste commodi, harum velit placeat nihil rem labore, ullam laboriosam
					itaque excepturi sit! Similique incidunt tenetur cum est aperiam
					laboriosam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Dolore dicta molestias, quis laudantium sunt quos consequuntur iure
					eveniet consectetur ratione placeat temporibus voluptate neque
					explicabo rerum harum. Ratione, consequatur consectetur!
				</p>
			</div>
			<div className='flex flex-grow items-end justify-center mb-14 text-xl md:text-2xl'>
				<ul className='flex flex-col space-y-10 md:space-x-20 md:flex-row'>
					<li>
						<div className='flex flex-col items-center'>
							<p className='text-2xl md:text-3xl'>
								<CountUp end={34} duration={3} />+
							</p>
							<p className='text-sm md:text-base'>Firm Management</p>
						</div>
					</li>
					<li>
						<div className='flex flex-col items-center'>
							<p className='text-2xl md:text-3xl'>
								<CountUp end={10} duration={4} />+
							</p>
							<p className='text-sm md:text-base'>Firm Management</p>
						</div>
					</li>
					<li>
						<div className='flex flex-col items-center'>
							<p className='text-2xl md:text-3xl'>
								<CountUp end={280} duration={2} />+
							</p>
							<p className='text-sm md:text-base'>Firm Management</p>
						</div>
					</li>
					<li>
						<div className='flex flex-col items-center'>
							<p className='text-2xl md:text-3xl'>
								<CountUp end={10} duration={3} />+
							</p>
							<p className='text-sm md:text-base'>Firm Management</p>
						</div>
					</li>
					<li>
						<div className='flex flex-col items-center'>
							<p className='text-2xl md:text-3xl'>
								<CountUp end={5} duration={4} />+
							</p>
							<p className='text-sm md:text-base'>Firm Management</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Firm;
