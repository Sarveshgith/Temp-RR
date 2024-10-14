import { useEffect, useState } from 'react';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Firm from './pages/Firm';
import Home from './pages/Home';
import News from './pages/News';
import Mutual from './pages/Mutual';
import Motor from './pages/Motor';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

// const items3 = [
// 	{
// 		src: 'https://via.placeholder.com/300',
// 		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quam placeat, ducimus magnam aspernatur voluptatum fugit asperiores quis nihil deserunt esse suscipit ab obcaecati earum iure corporis tenetur, aut illum!',
// 	},
// 	{
// 		src: 'https://via.placeholder.com/300',
// 		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quam placeat, ducimus magnam aspernatur voluptatum fugit asperiores quis nihil deserunt esse suscipit ab obcaecati earum iure corporis tenetur, aut illum!',
// 	},
// 	{
// 		src: 'https://via.placeholder.com/300',
// 		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quam placeat, ducimus magnam aspernatur voluptatum fugit asperiores quis nihil deserunt esse suscipit ab obcaecati earum iure corporis tenetur, aut illum!',
// 	},
// ];

const items4 = [
	{
		src: 'https://via.placeholder.com/300',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quam placeat, ducimus magnam aspernatur voluptatum fugit asperiores quis nihil deserunt esse suscipit ab obcaecati earum iure corporis tenetur, aut illum!',
	},
	{
		src: 'https://via.placeholder.com/300',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quam placeat, ducimus magnam aspernatur voluptatum fugit asperiores quis nihil deserunt esse suscipit ab obcaecati earum iure corporis tenetur, aut illum!',
	},
	{
		src: 'https://via.placeholder.com/300',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quam placeat, ducimus magnam aspernatur voluptatum fugit asperiores quis nihil deserunt esse suscipit ab obcaecati earum iure corporis tenetur, aut illum!',
	},
	{
		src: 'https://via.placeholder.com/300',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quam placeat, ducimus magnam aspernatur voluptatum fugit asperiores quis nihil deserunt esse suscipit ab obcaecati earum iure corporis tenetur, aut illum!',
	},
];

const items2 = [
	{
		src: 'https://via.placeholder.com/300',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quam placeat, ducimus magnam aspernatur voluptatum fugit asperiores quis nihil deserunt esse suscipit ab obcaecati earum iure corporis tenetur, aut illum!',
	},
	{
		src: 'https://via.placeholder.com/300',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quam placeat, ducimus magnam aspernatur voluptatum fugit asperiores quis nihil deserunt esse suscipit ab obcaecati earum iure corporis tenetur, aut illum!',
	},
];

const items1 = [
	{
		src: 'https://via.placeholder.com/300',
		desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quam placeat, ducimus magnam aspernatur voluptatum fugit asperiores quis nihil deserunt esse suscipit ab obcaecati earum iure corporis tenetur, aut illum!',
	},
];

const App = () => {

	return (
		<div>
			<MainPage />
			<About />
			<Firm />
			<Home />
			<News title='News' isButton={false} />
			<Mutual />
			<Motor title='Motor Insurance' isleft={true} />
			<Motor title='Health Insurance' isleft={false} />
			<Motor title='Insurance' isleft={true} />
			<Motor title='Insurance' isleft={false} />
			<News title='Insurance' list={items2} isButton={false} />
			<News title='Motor Insurance' list={items4} isButton={true} />
			<News title='Health Insurance' list={items2} isButton={true} />
			<News title='Insurance' list={items4} isButton={true} />
			<News title='Car Insurance' list={items1} isButton={true} />
		</div>
	);
};

export default App;
