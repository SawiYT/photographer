import React from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import { Montserrat } from 'next/font/google';
import Main from './components/main';
import AboutUs from './components/about-us';
import Footer from './components/footer';

const montserrat = Montserrat({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
});

function page() {
	return (
		<div className={montserrat.className}>
			<Navbar />
			<Header />
			<Main />
			<AboutUs />
			<Footer />
		</div>
	);
}

export default page;
