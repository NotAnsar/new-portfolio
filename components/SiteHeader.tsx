import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const linkClass =
	'text-[13px] tracking-[0.12em] uppercase text-foreground no-underline opacity-70 hover:opacity-100 transition-opacity';

export default function SiteHeader() {
	return (
		<header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border'>
			<div className='flex items-center justify-between px-6 sm:px-10 py-2.5'>
				<Link
					href='/'
					className='text-base font-bold tracking-[-0.02em] text-foreground no-underline'
				>
					AK<span className='text-(--ds-accent)'>.</span>
				</Link>
				<nav className='flex items-center gap-4 sm:gap-7'>
					<Link href='/projects' className={linkClass}>
						Work
					</Link>
					<Link href='/#about' className={linkClass}>
						About
					</Link>
					<Link href='/#contact' className={linkClass}>
						Contact
					</Link>
					<ThemeToggle />
				</nav>
			</div>
		</header>
	);
}
