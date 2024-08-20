'use client';

import bg1 from '../../../public/bg1.jpg';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { FlipWords } from './ui/flip-words';
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
	const bg = useRef(null);
	const img_container = useRef(null);
	const img = useRef(null);
	const [showImage2, setShowImage2] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.innerWidth > 768 && window.scrollY > 500) {
				setShowImage2(true);
			} else {
				setShowImage2(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useLayoutEffect(() => {
		if (window.innerWidth > 768) {
			let ctx = gsap.context(() => {
				ScrollTrigger.create({
					trigger: bg.current,
					pin: bg.current,
					pinSpacing: false,
					start: 'top top',
					endTrigger: '.last',
					end: 'bottom bottom',
				});

				gsap
					.timeline({
						scrollTrigger: {
							trigger: img_container.current,
							pin: img_container.current,
							scrub: 1,
							start: '0% 0%',
						},
					})
					.to(img.current, {
						transform: 'translateZ(2200px)',
					});
			});

			return () => ctx.revert();
		}
	}, []);

	const words = ['Stunning', 'Elegant', 'Breathtaking', 'Captivating'];

	return (
		<div id='home' className='relative bg-black'>
			{/* Mobile background image */}
			<div className='md:hidden h-screen w-full bg-cover bg-center' style={{ backgroundImage: `url(${bg1.src})` }}>
				<div className='flex items-center justify-center h-full'>
					<div className='text-center p-4'>
						<h1 className='text-8xl md:text-8xl lg:text-[120px] text-white'>
							<span className='text-stroke'>Outlook</span> above
						</h1>

						{showImage2 ? (
							<div className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-stone-200'>
								Designing
								<FlipWords words={words} /> <br />
								Memories with Prism Capture
							</div>
						) : (
							<p className='opacity-90 text-center text-white mx-auto'>
								A Showcase of the world's best aerial photography
							</p>
						)}
					</div>
				</div>
			</div>

			{/* Desktop view with animated image */}
			<div className='hidden md:block'>
				<div ref={bg} className='bg-[#141414] absolute inset-0 z-[-1]'></div>
				<section>
					<div ref={img_container} className='img-container perspective flex items-center justify-center h-screen'>
						<Image ref={img} className='image' src={bg1} alt='pink sea' />
						<div className='bg2'></div>
						<div className={`image-2 ${showImage2 ? 'visible' : 'invisible'}`}></div>
						<div className='absolute flex flex-col items-center justify-center'>
							<h1 className='text-6xl sm:text-8xl md:text-9xl lg:text-[170px] text-white'>
								<span className='text-stroke'>Outlook</span> above
							</h1>

							{showImage2 ? (
								<div className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl mx-auto font- text-stone-200 text-with-outline text-center'>
									Designing
									<FlipWords words={words} /> <br />
									Memories with Prism Capture
								</div>
							) : (
								<p className='opacity-90 w-48 text-sm sm:text-base md:text-lg lg:text-[14px] text-center text-white'>
									A Showcase of the world's best aerial photography
								</p>
							)}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
