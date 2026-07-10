'use client';

import { useEffect, useState } from 'react';

const formatCasablancaTime = () =>
	new Date().toLocaleTimeString('en-GB', {
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'Africa/Casablanca',
	});

export default function HeroClock() {
	// Empty on the server / first paint to avoid a hydration mismatch;
	// the live time is filled in after mount and refreshed every 30s.
	const [time, setTime] = useState('');

	useEffect(() => {
		const tick = () => setTime(formatCasablancaTime());
		tick();
		const id = setInterval(tick, 30000);
		return () => clearInterval(id);
	}, []);

	return (
		<div className='hero-fade absolute top-[84px] left-6 sm:left-10 flex flex-col gap-1.5'>
			<span className='text-xs tracking-[0.2em] uppercase text-(--ds-fg-soft)'>
				Casablanca, MA
			</span>
			<span className='text-xs tracking-[0.2em] uppercase text-(--ds-muted2)'>
				{time ? `${time} GMT+1` : ' '}
			</span>
		</div>
	);
}
