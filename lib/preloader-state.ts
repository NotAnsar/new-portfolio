// Tracks whether the SPA has already completed an initial page load.
// Only ever mutated inside useEffect (client), so the server copy stays false
// and SSR always emits the preloader markup for hard loads.
export const navState = { hasNavigated: false };
