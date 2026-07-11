'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function LandingEffects() {
	const barRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const pre = document.querySelector<HTMLElement>('.preloader');
		const preBar = pre?.querySelector<HTMLElement>('.preloader-bar') ?? null;
		const preCount =
			pre?.querySelector<HTMLElement>('.preloader-count') ?? null;

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			// No entrance animations — just show the final counter values
			document.querySelectorAll<HTMLElement>('.count-num').forEach((el) => {
				el.textContent = (el.dataset.target ?? '0') + '+';
			});
			// Preloader: skip the count animation — brief hold, plain opacity fade
			let fadeId: ReturnType<typeof setTimeout> | undefined;
			let hideId: ReturnType<typeof setTimeout> | undefined;
			if (pre) {
				if (preCount) preCount.textContent = '100';
				if (preBar) preBar.style.transform = 'scaleX(1)';
				fadeId = setTimeout(() => {
					pre.style.transition = 'opacity 0.3s';
					pre.style.opacity = '0';
					hideId = setTimeout(() => {
						pre.style.display = 'none';
					}, 320);
				}, 300);
			}
			return () => {
				clearTimeout(fadeId);
				clearTimeout(hideId);
			};
		}

		gsap.registerPlugin(ScrollTrigger);

		let gateId: ReturnType<typeof setInterval> | undefined;
		let safetyId: ReturnType<typeof setTimeout> | undefined;

		const ctx = gsap.context(() => {
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

		// Hero reveals, gated behind the preloader exit. The from-state un-hides
		// the elements (globals.css keeps them visibility:hidden until then so
		// SSR HTML doesn't flash in its final position).
		const startHero = () =>
			ctx.add(() => {
				gsap.fromTo(
					'.hero-line',
					{ yPercent: 110, visibility: 'visible' },
					{ yPercent: 0, duration: 0.85, ease: 'power4.out', stagger: 0.09, delay: 0.05 }
				);
				gsap.fromTo(
					'.hero-fade',
					{ opacity: 0, y: 24, visibility: 'visible' },
					{ opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.08, delay: 0.45 }
				);
			});

		if (!pre) {
			// Client-side route change: no preloader, run the entrance directly
			startHero();
		} else {
			// Count to ~90 quickly, hold until fonts/assets are ready, finish to
			// 100, then sweep the preloader up — hero entrance starts at the sweep.
			let assetsReady = false;
			Promise.all([
				document.fonts?.ready ?? Promise.resolve(),
				new Promise<void>((resolve) =>
					document.readyState === 'complete'
						? resolve()
						: window.addEventListener('load', () => resolve(), { once: true })
				),
			]).then(() => {
				assetsReady = true;
			});
			safetyId = setTimeout(() => {
				assetsReady = true;
			}, 4000);

			// Take over from the CSS preflight animation: kill it and continue
			// counting from wherever the bar got to, instead of restarting at 0.
			let startV = 0;
			if (preBar) {
				const t = getComputedStyle(preBar).transform;
				if (t && t !== 'none') {
					startV = Math.min(90, Math.round(new DOMMatrixReadOnly(t).a * 100));
				}
				preBar.style.animation = 'none';
			}
			const obj = { v: startV };
			const render = () => {
				if (preCount)
					preCount.textContent = String(Math.round(obj.v)).padStart(2, '0');
				if (preBar) preBar.style.transform = `scaleX(${obj.v / 100})`;
			};
			render(); // sync bar + counter to the measured value immediately
			const finish = () =>
				ctx.add(() => {
					gsap.to(obj, {
						v: 100,
						duration: 0.25,
						ease: 'power1.in',
						onUpdate: render,
						onComplete: () =>
							ctx.add(() => {
								gsap.to(pre, {
									yPercent: -100,
									duration: 0.8,
									ease: 'power4.inOut',
									onComplete: () => {
										pre.style.display = 'none';
									},
								});
								startHero(); // hero entrance starts as the preloader sweeps up
							}),
					});
				});
			ctx.add(() => {
				gsap.to(obj, {
					v: 90,
					duration: 1.1,
					ease: 'power2.out',
					onUpdate: render,
					onComplete: () => {
						if (assetsReady) finish();
						else {
							gateId = setInterval(() => {
								if (assetsReady) {
									clearInterval(gateId);
									finish();
								}
							}, 80);
						}
					},
				});
			});
		}

		return () => {
			clearInterval(gateId);
			clearTimeout(safetyId);
			ctx.revert();
		};
	}, []);

	return (
		<div
			ref={barRef}
			className='fixed top-0 left-0 right-0 h-0.5 bg-(--ds-accent) scale-x-0 origin-left z-[100]'
		/>
	);
}
