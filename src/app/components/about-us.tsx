'use client';

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

export default function AboutUs() {
	return (
		<div
			id='services'
			className=' pb-20 rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
			<h2 className='max-w-7xl p-6 mx-auto text-left text-3xl  md:text-5xl font-bold text-neutral-800  font-sans'>
				What others say about us
			</h2>
			<InfiniteMovingCards items={testimonials} direction='right' speed='slow' />
		</div>
	);
}

const testimonials = [
	{
		quote:
			'The photos from this company truly capture the essence of our brand. Each image is a work of art, beautifully composed and thoughtfully presented. They exceeded our expectations in every way.',
		name: 'Alex Johnson',
		title: 'Marketing Director, Tech Innovations',
	},
	{
		quote:
			'We were amazed by the quality and creativity of the photographs. The team was professional, and the final product was beyond what we imagined. These images have made a huge difference in our promotional materials.',
		name: 'Samantha Lee',
		title: 'Creative Director, Luxe Interiors',
	},
	{
		quote:
			'From start to finish, working with this company was a pleasure. The attention to detail and the ability to capture our company’s spirit in each shot was impressive. Highly recommended for any business looking for exceptional visuals.',
		name: 'Daniel Kim',
		title: 'Founder & CEO, Artisan Goods',
	},
	{
		quote:
			'The images delivered were absolutely stunning! They’ve added a whole new level of professionalism and elegance to our website and social media. We couldn’t be happier with the result.',
		name: 'Rachel Adams',
		title: 'Brand Manager, Green Horizons',
	},
	{
		quote:
			'Incredible work! The photographs perfectly represent our products and services. The team’s creativity and technical skills are evident in every image. We’ve received countless compliments on the visuals.',
		name: 'Jordan Martinez',
		title: 'Product Manager, Apex Solutions',
	},
];
