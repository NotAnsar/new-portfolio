'use client';

import { navState } from '@/lib/preloader-state';

// Static preloader markup. A client component so its SSR HTML paints on first
// byte (covering the hydration gap) while soft navs skip it entirely.
// Driven by LandingEffects: count 00→100, bar fill, then sweep up.
export default function Preloader() {
	if (navState.hasNavigated) return null; // client-side route change: skip

	return (
		<div
			className='preloader fixed inset-0 bg-background z-[350] flex items-center justify-center'
			aria-hidden
		>
			<div className='flex flex-col items-center gap-[18px]'>
				<span className='font-display text-[clamp(40px,6vw,72px)] font-extrabold tracking-[-0.02em] leading-none text-foreground'>
					AK<span className='text-(--ds-accent)'>.</span>
				</span>
				<span className='block w-[160px] h-px bg-(--ds-border-3) relative overflow-hidden'>
					{/* Initial state must be transform (not Tailwind scale-x-0, which
					    compiles to the standalone `scale` property) — the preflight
					    keyframes and GSAP both drive `transform: scaleX()`. */}
					<span className='preloader-bar absolute inset-0 bg-(--ds-accent) [transform:scaleX(0)] origin-left' />
				</span>
				<span className='preloader-count font-sans text-xs tracking-[0.3em] uppercase text-(--ds-muted2)'>
					00
				</span>
			</div>
		</div>
	);
}
