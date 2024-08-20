'use client';
import React, { useState, useRef, useEffect } from 'react';
import { LayoutGrid } from './ui/layout-grid';

export default function Main() {
	return (
		<div id='about' className='h-screen bg-white py-20 w-full '>
			<h2 className='max-w-7xl pl-12 mx-auto text-3xl md:text-5xl font-bold text-neutral-800  font-sans'>
				Check out our amazing photos
			</h2>
			<LayoutGrid cards={cards} />
		</div>
	);
}

const SkeletonOne = () => {
	return (
		<div>
			<p className='font-bold md:text-4xl text-xl text-white '>Mesmerizing Pink Sea</p>
			<p className='font-normal text-base text-white'>Dive into tranquility</p>
			<p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
				Experience the breathtaking beauty of the Pink Sea, where the water's delicate hues create a mesmerizing vista
				against the horizon. Ideal for those looking to immerse themselves in a serene and colorful seascape.
			</p>
		</div>
	);
};

const SkeletonTwo = () => {
	return (
		<div>
			<p className='font-bold md:text-4xl text-xl text-white'>Tranquil Pink Lake</p>
			<p className='font-normal text-base text-white'>Embrace the serenity</p>
			<p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
				Discover the enchanting beauty of the Pink Lake, where the water's vibrant hues blend seamlessly with the
				peaceful surroundings. Perfect for those seeking a tranquil escape amidst nature's vivid canvas.
			</p>
		</div>
	);
};
const SkeletonThree = () => {
	return (
		<div>
			<p className='font-bold md:text-4xl text-xl text-white'>Red-Blue Tree Wonder</p>
			<p className='font-normal text-base text-white'>A vibrant fusion of hues</p>
			<p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
				The Red-Blue Tree features a striking blend of red and blue branches, creating a visually captivating and unique
				display. This tree stands out with its bold color combination, showcasing nature's ability to blend vivid hues
				in an unexpected way.
			</p>
		</div>
	);
};
const SkeletonFour = () => {
	return (
		<div>
			<p className='font-bold md:text-4xl text-xl text-white'>Enchanting Violet Sea</p>
			<p className='font-normal text-base text-white'>Immerse in purple tranquility</p>
			<p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
				Discover the enchanting allure of the Violet Sea, where the purple-tinted waters blend seamlessly with the
				twilight sky. A perfect escape for those seeking a serene and magical seascape, where every moment feels like a
				tranquil dream.
			</p>
		</div>
	);
};

const cards = [
	{
		id: 1,
		content: <SkeletonOne />,
		className: 'md:col-span-2',
		thumbnail: '/p1.jpg',
	},
	{
		id: 2,
		content: <SkeletonTwo />,
		className: 'col-span-1',
		thumbnail: '/p2.png',
	},
	{
		id: 3,
		content: <SkeletonThree />,
		className: 'col-span-1',
		thumbnail: '/p3.jpg',
	},
	{
		id: 4,
		content: <SkeletonFour />,
		className: 'md:col-span-2',
		thumbnail: '/p4.jpg',
	},
];
