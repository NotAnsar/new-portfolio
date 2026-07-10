'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import type { Project } from '@/config/project';

export default function SelectedWork({ projects }: { projects: Project[] }) {
	const [previewSrc, setPreviewSrc] = useState('');
	const previewRef = useRef<HTMLDivElement>(null);
	const reducedRef = useRef(false);
	// Tracks which row index is currently hovered so an out-of-order mouseleave
	// from a row we already left can't hide a preview a newer row owns.
	const activeRef = useRef<number | null>(null);
	const quickRef = useRef<{
		x: (v: number) => void;
		y: (v: number) => void;
	} | null>(null);

	useEffect(() => {
		reducedRef.current = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;
		if (reducedRef.current) return;

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

		// Scrolling doesn't fire mouseleave, so hide the preview on scroll.
		const onScroll = () => {
			if (!previewRef.current) return;
			activeRef.current = null;
			gsap.killTweensOf(previewRef.current, 'opacity,scale');
			gsap.to(previewRef.current, {
				opacity: 0,
				duration: 0.2,
				ease: 'power2.in',
			});
		};
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			window.removeEventListener('mousemove', onMouse);
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	const showPreview = (index: number, src: string) => {
		if (reducedRef.current || !previewRef.current) return;
		activeRef.current = index;
		setPreviewSrc(src);
		// Only kill fade tweens, not the cursor-follow x/y quickTo tweens.
		gsap.killTweensOf(previewRef.current, 'opacity,scale');
		gsap.to(previewRef.current, {
			opacity: 1,
			scale: 1,
			duration: 0.3,
			ease: 'power2.out',
		});
	};

	const forceHide = () => {
		if (reducedRef.current || !previewRef.current) return;
		activeRef.current = null;
		gsap.killTweensOf(previewRef.current, 'opacity,scale');
		gsap.to(previewRef.current, {
			opacity: 0,
			duration: 0.25,
			ease: 'power2.in',
		});
	};

	const hidePreview = (index: number) => {
		// A newer row already took over — ignore this stale leave.
		if (activeRef.current !== index) return;
		forceHide();
	};

	return (
		<>
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

			<div className='flex flex-col' onMouseLeave={forceHide}>
				{projects.map((project, i) => (
					<Link
						key={project.title}
						href={project.slug ? `/projects/${project.slug}` : '/projects'}
						onMouseEnter={() => showPreview(i, project.cover)}
						onMouseLeave={() => hidePreview(i)}
						className='reveal grid grid-cols-[48px_1fr_auto] sm:grid-cols-[80px_1fr_auto_auto] items-center gap-4 sm:gap-8 py-10 px-2 border-t border-border no-underline text-inherit transition-[padding-left] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:pl-8'
					>
						<span className='text-sm text-(--ds-muted2) font-sans'>
							{String(i + 1).padStart(2, '0')}
						</span>
						<span className='text-[clamp(28px,4vw,52px)] font-semibold tracking-[-0.02em] leading-[1.1]'>
							{project.title.split(' | ')[0]}
						</span>
						<span className='hidden sm:block text-[13px] text-(--ds-muted) tracking-[0.08em] uppercase text-right'>
							{project.category} · {project.focus ?? project.tags[0]}
						</span>
						<span className='text-[22px] text-(--ds-accent)'>↗</span>
					</Link>
				))}
				<div className='reveal border-t border-border' />
			</div>
		</>
	);
}
