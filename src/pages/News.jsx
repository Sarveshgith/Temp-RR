import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';

const News = ({ title, list, isButton }) => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true); // Track loading state

	const getNews = async () => {
		try {
			const newsColl = collection(db, 'news');
			const newsSnapshot = await getDocs(newsColl);
			const newsList = newsSnapshot.docs.map((doc) => doc.data());
			setNews(newsList);
		} catch (error) {
			console.error('Error fetching news:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (!list) {
			getNews();
		} else {
			setNews(list);
			setLoading(false); // No need to fetch, so stop loading
		}
	}, [list]);

	const len = news.length;

	if (loading) {
		return <div>Loading news...</div>; // Show a loading indicator
	}

	return (
		<div className='min-h-screen flex flex-col justify-between'>
			<div className='items-start'>
				<p className='text-center text-4xl m-8'>{title}</p>
			</div>
			<div className='flex flex-grow items-center justify-center w-full'>
				<ul className='flex md:flex-row flex-col justify-around w-full'>
					{news.map((item, index) => (
						<li key={item.name || index} className={`w-full md:w-1/${len} p-4`}>
							<div className='flex flex-col items-center justify-center text-center'>
								<img
									src={item.img || item.src}
									alt={item.name || 'News image'}
									className='mb-4 rounded-lg'
								/>
								<p className={`w-1/${len}`}>{item.desc}</p>
								{isButton && (
									<button className='bg-gray-200 hover:bg-gray-500 text-gray-900 hover:text-white px-7 py-2 rounded-xl border-2 border-gray-500 transition duration-300 ease-in-out m-5'>
										Next &rarr;
									</button>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default News;
