'use client';

import { useEffect, useState } from 'react';
import type { StackGroup } from '@/config/home';
import { iconPath } from '@/lib/stack-icons';

// Mirror the design: duplicate items to a seamless -50% loop, alternate
// direction and speed per band. Higher base + factor = slower scroll.
function buildBand(group: StackGroup, i: number) {
	let loop = group.items;
	while (loop.length < 12) loop = loop.concat(group.items);
	const dur = 58 + (loop.length - 12) * 3 + i * 6;
	return {
		...group,
		loopItems: loop.concat(loop),
		anim: `marquee${i % 2 ? '-rev' : ''} ${dur}s linear infinite`,
	};
}

function StackItem({ item }: { item: string }) {
	const path = iconPath(item);
	return (
		<span className='stack-item inline-flex items-center gap-3 font-semibold leading-none text-[clamp(24px,3vw,44px)] tracking-[-0.02em] text-(--ds-muted2) transition-colors duration-300'>
			{path && (
				<svg
					viewBox='0 0 24 24'
					aria-hidden
					className='size-[0.72em] shrink-0 fill-current'
				>
					<path d={path} />
				</svg>
			)}
			{item}
		</span>
	);
}

export default function StackMarquee({ groups }: { groups: StackGroup[] }) {
	const [reduced, setReduced] = useState(false);

	useEffect(() => {
		setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
	}, []);

	if (reduced) {
		return (
			<div className='reveal flex flex-col border-t border-border'>
				{groups.map((group) => (
					<div
						key={group.label}
						className='relative border-b border-border py-6 px-6 sm:px-10'
					>
						<span className='block mb-3 text-[11px] tracking-[0.25em] uppercase text-(--ds-accent)'>
							{group.label}
						</span>
						<div className='flex flex-wrap items-center gap-x-6 gap-y-3'>
							{group.items.map((item) => (
								<StackItem key={item} item={item} />
							))}
						</div>
					</div>
				))}
			</div>
		);
	}

	const bands = groups.map(buildBand);

	return (
		<div className='reveal flex flex-col border-t border-border'>
			{bands.map((band) => (
				<div
					key={band.label}
					className='marquee-band relative overflow-hidden border-b border-border py-6 cursor-default'
				>
					<span className='absolute top-2.5 left-6 sm:left-10 z-[2] text-[11px] tracking-[0.25em] uppercase text-(--ds-accent)'>
						{band.label}
					</span>
					<div
						className='marquee-track flex items-center w-max mt-4'
						style={{ animation: band.anim }}
					>
						{band.loopItems.map((item, idx) => (
							<span
								key={`${item}-${idx}`}
								className='inline-flex items-center whitespace-nowrap'
							>
								<StackItem item={item} />
								<span className='font-serif italic text-(--ds-accent) text-[clamp(20px,2vw,32px)] px-6'>
									✳
								</span>
							</span>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
