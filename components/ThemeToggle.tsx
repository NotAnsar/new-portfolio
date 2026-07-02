'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const isDark = !mounted || resolvedTheme === 'dark';

	return (
		<button
			aria-label='Toggle theme'
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			className='ml-1.5 inline-flex size-8 items-center justify-center rounded-full border border-(--ds-border-3) bg-transparent text-foreground cursor-pointer'
		>
			{isDark ? <Sun className='size-3.5' /> : <Moon className='size-3.5' />}
		</button>
	);
}
