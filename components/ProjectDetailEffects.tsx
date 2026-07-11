'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProjectDetailEffects() {
	const barRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			// The from-state un-hides the elements (globals.css keeps them
			// visibility:hidden until hydration so SSR HTML doesn't flash).
			gsap.fromTo(
				'.hero-line',
				{ yPercent: 110, visibility: 'visible' },
				{ yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.12, delay: 0.1 }
			);
			gsap.fromTo(
				'.hero-fade',
				{ opacity: 0, y: 24, visibility: 'visible' },
				{ opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', stagger: 0.1, delay: 0.6 }
			);

			if (barRef.current) {
				gsap.to(barRef.current, {
					scaleX: 1,
					ease: 'none',
					scrollTrigger: {
						trigger: document.body,
						start: 'top top',
						end: 'bottom bottom',
						scrub: 0.3,
					},
				});
			}

			gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
				gsap.fromTo(
					el,
					{ opacity: 0, y: 36 },
					{
						opacity: 1,
						y: 0,
						duration: 0.9,
						ease: 'power3.out',
						scrollTrigger: { trigger: el, start: 'top 88%', once: true },
					}
				);
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<div
			ref={barRef}
			className='fixed top-0 left-0 right-0 h-0.5 bg-(--ds-accent) scale-x-0 origin-left z-[100]'
		/>
	);
}
