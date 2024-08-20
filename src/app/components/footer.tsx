// Footer.jsx
import React from 'react';

export default function Footer() {
	return (
		<footer id='contact' className='bg-white border-t border-gray-200 text-gray-600'>
			<div className='container mx-auto px-6 py-8'>
				<div className='flex flex-col md:flex-row justify-between items-center'>
					{/* Brand Section */}
					<div className='flex-shrink-0 mb-6 md:mb-0 text-center md:text-left'>
						<h1 className='text-2xl font-bold text-pink-600'>Prism Capture</h1>
						<p className='text-gray-500 mt-2'>Capturing moments with precision and creativity.</p>
					</div>

					{/* Links Sections */}
					<div className='flex flex-col md:flex-row gap-12'>
						<div className='text-center md:text-left'>
							<h2 className='text-lg font-semibold text-gray-700'>Company</h2>
							<ul className='mt-2 space-y-1'>
								<li>
									<a href='#' className='text-gray-600 hover:text-pink-600'>
										About Us
									</a>
								</li>
								<li>
									<a href='#' className='text-gray-600 hover:text-pink-600'>
										Careers
									</a>
								</li>
								<li>
									<a href='#' className='text-gray-600 hover:text-pink-600'>
										Press
									</a>
								</li>
							</ul>
						</div>
						<div className='text-center md:text-left'>
							<h2 className='text-lg font-semibold text-gray-700'>Support</h2>
							<ul className='mt-2 space-y-1'>
								<li>
									<a href='#' className='text-gray-600 hover:text-pink-600'>
										Help Center
									</a>
								</li>
								<li>
									<a href='#' className='text-gray-600 hover:text-pink-600'>
										Contact Us
									</a>
								</li>
								<li>
									<a href='#' className='text-gray-600 hover:text-pink-600'>
										Privacy Policy
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className='flex justify-center items-center min-h-[4rem]'>
					<div className='text-center'>
						<p className='text-sm text-gray-500'>
							&copy; {new Date().getFullYear()} Prism Capture. All rights reserved.
						</p>
						<p className='text-sm text-gray-500 mt-1'>
							Designed with <span className='text-red-500'>&hearts;</span> by{' '}
							<a href='#' className='text-pink-600 hover:underline'>
								Your Company
							</a>
							.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
