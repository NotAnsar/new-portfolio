'use client';

import { useEffect } from 'react';
import { navState } from '@/lib/preloader-state';

// Rendered once in the root layout. After the initial load's effects run,
// any later mount of <Preloader /> is a client-side route change and skips
// itself (renders happen before effects, so the true initial load of `/`
// still shows the preloader).
export default function NavigationTracker() {
	useEffect(() => {
		navState.hasNavigated = true;
	}, []);

	return null;
}
