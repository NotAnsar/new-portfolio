'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function LandingEffects() {
	const barRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			// No entrance animations — just show the final counter values
			document.querySelectorAll<HTMLElement>('.count-num').forEach((el) => {
				el.textContent = (el.dataset.target ?? '0') + '+';
			});
			return;
		}

		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			// Hero reveals
			gsap.fromTo(
				'.hero-line',
				{ yPercent: 110 },
				{ yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.15, delay: 0.15 }
			);
			gsap.fromTo(
				'.hero-fade',
				{ opacity: 0, y: 24 },
				{ opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', stagger: 0.12, delay: 0.85 }
			);

			// Scroll progress bar
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

			// Section reveals
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

			// Stat counters
			gsap.utils.toArray<HTMLElement>('.count-num').forEach((el) => {
				const target = parseInt(el.dataset.target ?? '0', 10);
				const obj = { v: 0 };
				gsap.to(obj, {
					v: target,
					duration: 1.4,
					ease: 'power2.out',
					scrollTrigger: { trigger: el, start: 'top 90%', once: true },
					onUpdate: () => {
						el.textContent = Math.round(obj.v) + '+';
					},
				});
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
