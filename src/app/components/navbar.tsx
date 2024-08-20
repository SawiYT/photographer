'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 870) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		// Cleanup the event listener on component unmount
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const goToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
		setMenuOpen(false); // Zamknij menu po kliknięciu w link
	};

	return (
		<nav
			className={`fixed z-50 w-full transition-all duration-300 ${
				scrolled ? 'border-b border-gray-300 bg-white text-black' : 'bg-transparent text-white'
			}`}>
			<div className='px-2 sm:px-6 lg:px-8 flex max-w-7xl mx-auto h-16 items-center justify-between'>
				<p className={`text-2xl font-bold ${scrolled ? 'text-pink-600' : 'text-white'}`}>Prism Capture</p>
				{/* Desktop Menu */}
				<div className='hidden font-semibold sm:flex space-x-4'>
					<Link
						href='#home'
						onClick={e => {
							e.preventDefault();
							goToSection('home');
						}}>
						Home
					</Link>
					<Link
						href='#about'
						onClick={e => {
							e.preventDefault();
							goToSection('about');
						}}>
						About
					</Link>
					<Link
						href='#services'
						onClick={e => {
							e.preventDefault();
							goToSection('services');
						}}>
						Services
					</Link>
					<Link
						href='#contact'
						onClick={e => {
							e.preventDefault();
							goToSection('contact');
						}}>
						Contact
					</Link>
				</div>
				{/* Mobile Menu Button */}
				<div className='sm:hidden flex items-center'>
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className={`p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset ${
							menuOpen ? 'text-gray-700' : 'text-gray-500'
						}`}>
						<svg
							className='h-6 w-6'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							{menuOpen ? (
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
							) : (
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
							)}
						</svg>
					</button>
				</div>
			</div>
			{/* Mobile Menu */}
			<div
				className={`sm:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full ${
					scrolled ? 'border-b border-gray-300 bg-white text-black' : 'bg-transparent text-white'
				}`}>
				<Link
					href='#home'
					onClick={e => {
						e.preventDefault();
						goToSection('home');
					}}
					className={`block px-4 py-2 text-md font-semibold hover:bg-gray-200`}>
					Home
				</Link>
				<Link
					href='#about'
					onClick={e => {
						e.preventDefault();
						goToSection('about');
					}}
					className={`block px-4 py-2 text-md font-semibold hover:bg-gray-200`}>
					About
				</Link>
				<Link
					href='#services'
					onClick={e => {
						e.preventDefault();
						goToSection('services');
					}}
					className={`block px-4 py-2 text-md font-semibold hover:bg-gray-200`}>
					Services
				</Link>
				<Link
					href='#contact'
					onClick={e => {
						e.preventDefault();
						goToSection('contact');
					}}
					className={`block px-4 py-2 text-md font-semibold hover:bg-gray-200`}>
					Contact
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
