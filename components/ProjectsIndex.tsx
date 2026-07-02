'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import type { Project } from '@/config/project';

type Tab = { label: string; value: string };

function projectLinks(project: Project) {
	const links: { label: string; href: string }[] = [];
	if (project.link) links.push({ label: 'View Live', href: project.link });
	if (project.github)
		links.push({ label: 'Source Code', href: project.github });
	if (project.frontendRepo)
		links.push({ label: 'Frontend Repo', href: project.frontendRepo });
	if (project.backendRepo)
		links.push({ label: 'Backend Repo', href: project.backendRepo });
	if (project.youtube)
		links.push({ label: 'Watch Demo', href: project.youtube });
	return links;
}

const typeLabel = { 'front-end': 'Front-end', 'full-stack': 'Full-stack' };

export default function ProjectsIndex({
	projects,
	tabs,
}: {
	projects: Project[];
	tabs: Tab[];
}) {
	const [tab, setTab] = useState('all');
	const [expanded, setExpanded] = useState(-1);
	const [previewSrc, setPreviewSrc] = useState('');
	const previewRef = useRef<HTMLDivElement>(null);
	const barRef = useRef<HTMLDivElement>(null);
	const reducedRef = useRef(false);
	const quickRef = useRef<{
		x: (v: number) => void;
		y: (v: number) => void;
	} | null>(null);

	const filtered = projects.filter((p) => tab === 'all' || p.type === tab);
	const count = String(filtered.length).padStart(2, '0');

	// Mount: hero reveals, scroll progress, cursor-follow preview
	useEffect(() => {
		reducedRef.current = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;
		if (reducedRef.current) return;

		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			gsap.fromTo(
				'.hero-line',
				{ yPercent: 110 },
				{ yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.12, delay: 0.1 }
			);
			gsap.fromTo(
				'.hero-fade',
				{ opacity: 0, y: 24 },
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
		});

		if (previewRef.current) {
			quickRef.current = {
				x: gsap.quickTo(previewRef.current, 'x', {
					duration: 0.4,
					ease: 'power3.out',
				}),
				y: gsap.quickTo(previewRef.current, 'y', {
					duration: 0.4,
					ease: 'power3.out',
				}),
			};
		}
		const onMouse = (e: MouseEvent) => {
			quickRef.current?.x(e.clientX + 28);
			quickRef.current?.y(e.clientY - 125);
		};
		window.addEventListener('mousemove', onMouse);

		return () => {
			window.removeEventListener('mousemove', onMouse);
			ctx.revert();
		};
	}, []);

	// Rows entrance on mount and on filter change
	useEffect(() => {
		if (reducedRef.current) return;
		gsap.fromTo(
			'.project-row',
			{ opacity: 0, y: 28 },
			{ opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.07 }
		);
	}, [tab]);

	// Detail entrance when a row expands
	useEffect(() => {
		if (reducedRef.current || expanded < 0) return;
		gsap.fromTo(
			'.row-detail',
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }
		);
	}, [expanded]);

	const showPreview = (src: string) => {
		if (reducedRef.current) return;
		setPreviewSrc(src);
		if (previewRef.current)
			gsap.to(previewRef.current, {
				opacity: 1,
				scale: 1,
				duration: 0.3,
				ease: 'power2.out',
			});
	};

	const hidePreview = () => {
		if (reducedRef.current || !previewRef.current) return;
		gsap.to(previewRef.current, {
			opacity: 0,
			duration: 0.25,
			ease: 'power2.in',
		});
	};

	return (
		<>
			{/* Scroll progress bar */}
			<div
				ref={barRef}
				className='fixed top-0 left-0 right-0 h-0.5 bg-(--ds-accent) scale-x-0 origin-left z-[100]'
			/>

			{/* Floating cover preview (follows cursor on row hover) */}
			<div
				ref={previewRef}
				aria-hidden
				className='fixed top-0 left-0 w-[400px] h-[250px] z-40 pointer-events-none opacity-0 overflow-hidden rounded-[10px] border border-(--ds-border-3) shadow-[0_24px_60px_oklch(0_0_0/55%)] hidden lg:block'
			>
				{previewSrc && (
					<Image
						src={previewSrc}
						alt=''
						fill
						sizes='400px'
						className='object-cover object-top'
					/>
				)}
			</div>

			{/* Page hero */}
			<section className='pt-[180px] pb-[60px] px-6 sm:px-10'>
				<div className='max-w-[1280px] mx-auto'>
					<div className='overflow-hidden'>
						<p className='hero-line m-0 mb-4 ml-1.5 text-sm tracking-[0.25em] uppercase text-(--ds-accent) font-medium'>
							Portfolio · Selected & complete index
						</p>
					</div>
					<div className='overflow-hidden'>
						<h1 className='hero-line m-0 text-[clamp(72px,12vw,170px)] font-bold tracking-[-0.04em] leading-[0.95]'>
							PROJECTS<span className='text-(--ds-accent)'>.</span>
						</h1>
					</div>
					<div className='flex justify-between items-end mt-10 flex-wrap gap-6'>
						<p className='hero-fade m-0 ml-1.5 max-w-[420px] text-base leading-[1.65] text-(--ds-muted) font-sans'>
							A selection of my recent work. Hover a row for a preview, click
							to expand the details.
						</p>
						<span className='hero-fade text-[56px] font-light text-(--ds-muted2) leading-none'>
							{count}
							<span className='text-[15px] tracking-[0.2em] uppercase ml-2.5'>
								projects
							</span>
						</span>
					</div>
				</div>
			</section>

			{/* Filters */}
			<section className='px-6 sm:px-10 pb-6'>
				<div className='hero-fade max-w-[1280px] mx-auto flex gap-2.5 flex-wrap'>
					{tabs.map((t) => (
						<button
							key={t.value}
							onClick={() => {
								setTab(t.value);
								setExpanded(-1);
							}}
							className={cn(
								'px-[22px] py-2.5 text-[13px] tracking-[0.08em] uppercase rounded-full cursor-pointer transition-all duration-300 border',
								t.value === tab
									? 'bg-(--ds-accent-btn) text-foreground border-(--ds-accent-btn)'
									: 'bg-transparent text-(--ds-muted) border-(--ds-border-3)'
							)}
						>
							{t.label}
						</button>
					))}
				</div>
			</section>

			{/* Index list */}
			<section className='pt-6 pb-[120px] px-6 sm:px-10'>
				<div className='max-w-[1280px] mx-auto flex flex-col'>
					{filtered.map((project, i) => {
						const isOpen = expanded === i;
						const links = projectLinks(project);
						return (
							<div key={project.title} className='border-t border-border'>
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
									onMouseEnter={() => showPreview(project.cover)}
									onMouseLeave={hidePreview}
									className='project-row grid grid-cols-[48px_1fr_auto] sm:grid-cols-[80px_1fr_auto_auto] items-center gap-4 sm:gap-8 py-9 px-2 cursor-pointer transition-[padding-left] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:pl-8'
								>
									<span className='text-sm text-(--ds-muted2) font-sans'>
										{String(i + 1).padStart(2, '0')}
									</span>
									<span className='text-[clamp(26px,3.6vw,48px)] font-semibold tracking-[-0.02em] leading-[1.1]'>
										{project.title.split(' | ')[0]}
									</span>
									<span className='hidden sm:block text-[13px] text-(--ds-muted) tracking-[0.08em] uppercase text-right'>
										{project.category} · {typeLabel[project.type]}
									</span>
									<span className='text-xl text-(--ds-accent) inline-block transition-transform duration-[350ms]'>
										{isOpen ? '×' : '+'}
									</span>
								</div>
								{isOpen && (
									<div className='row-detail grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-2 pb-12 lg:pl-28'>
										<div className='flex flex-col gap-5'>
											<p className='m-0 text-[15px] leading-[1.7] text-(--ds-fg-soft) font-sans whitespace-pre-line'>
												{project.description}
											</p>
											<div className='flex flex-wrap gap-2'>
												{project.tags.map((tag) => (
													<span
														key={tag}
														className='text-xs text-(--ds-muted) border border-(--ds-border-2) px-3 py-[5px] rounded-full'
													>
														{tag}
													</span>
												))}
											</div>
											{links.length > 0 && (
												<div className='flex flex-wrap gap-3 pt-1'>
													{links.map((l) => (
														<a
															key={l.href}
															href={l.href}
															target='_blank'
															rel='noopener noreferrer'
															onClick={(e) => e.stopPropagation()}
															className='inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium tracking-[0.08em] uppercase text-foreground border border-(--ds-accent-40) rounded-full no-underline transition-colors duration-300 hover:bg-(--ds-accent-btn-30)'
														>
															{l.label} ↗
														</a>
													))}
												</div>
											)}
										</div>
										<div className='relative overflow-hidden rounded-[10px] border border-border self-start h-[240px] sm:h-[320px] w-full'>
											<Image
												src={project.cover}
												alt={project.title}
												fill
												sizes='(max-width: 1024px) 100vw, 600px'
												className='object-cover object-top'
											/>
										</div>
									</div>
								)}
							</div>
						);
					})}
					<div className='border-t border-border' />
				</div>
			</section>
		</>
	);
}
