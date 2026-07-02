'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import type { Job } from '@/config/home';

export default function ExperienceAccordion({ jobs }: { jobs: Job[] }) {
	const [expanded, setExpanded] = useState(-1);
	const reducedRef = useRef(false);

	useEffect(() => {
		reducedRef.current = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;
	}, []);

	// Detail entrance when a row expands
	useEffect(() => {
		if (reducedRef.current || expanded < 0) return;
		gsap.fromTo(
			'.job-detail',
			{ opacity: 0, y: 14 },
			{ opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
		);
	}, [expanded]);

	return (
		<div className='flex flex-col'>
			{jobs.map((job, i) => {
				const isOpen = expanded === i;
				return (
					<div
						key={`${job.company}-${job.period}`}
						className='reveal border-t border-border'
					>
						<div
							role='button'
							tabIndex={0}
							aria-expanded={isOpen}
							onClick={() => setExpanded(isOpen ? -1 : i)}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault();
									setExpanded(isOpen ? -1 : i);
								}
							}}
							className='grid grid-cols-[1fr_auto] sm:grid-cols-[200px_1fr_auto_auto] gap-2 sm:gap-8 items-baseline px-2 py-[30px] cursor-pointer transition-[padding-left] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:pl-6'
						>
							<span className='text-[13px] text-(--ds-muted2) font-sans tracking-[0.04em] order-1 sm:order-none col-span-2 sm:col-span-1'>
								{job.period}
							</span>
							<div className='flex items-baseline gap-3.5 flex-wrap'>
								<span className='text-[clamp(20px,2.2vw,28px)] font-semibold tracking-[-0.01em]'>
									{job.company}
								</span>
								<span className='text-sm text-(--ds-accent) font-sans'>
									{job.role}
								</span>
							</div>
							<span className='hidden sm:block text-[13px] text-(--ds-muted2) tracking-[0.08em] uppercase'>
								{job.place}
							</span>
							<span className='text-lg text-(--ds-accent) inline-block w-5 text-center'>
								{isOpen ? '×' : '+'}
							</span>
						</div>
						{isOpen && (
							<div className='job-detail grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-8 px-2 pb-[34px]'>
								<span className='hidden sm:block' />
								<div className='flex flex-col gap-4 max-w-[720px]'>
									<p className='m-0 text-[15px] leading-[1.7] text-(--ds-fg-soft) font-sans'>
										{job.description}
									</p>
									<div className='flex flex-wrap gap-2'>
										{job.tags.map((tag) => (
											<span
												key={tag}
												className='text-xs text-(--ds-muted) border border-(--ds-border-2) px-3 py-[5px] rounded-full'
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						)}
					</div>
				);
			})}
			<div className='reveal border-t border-border' />
		</div>
	);
}
