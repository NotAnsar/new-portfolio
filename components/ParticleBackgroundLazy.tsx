'use client';

import dynamic from 'next/dynamic';

// Three.js is the largest piece of the first-load bundle; loading it lazily
// (no SSR — it's a useEffect-driven canvas that renders nothing on the server)
// lets the page hydrate and the hero entrance start without waiting for it.
const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
	ssr: false,
});

export default ParticleBackground;
