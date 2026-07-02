import Link from 'next/link';

const footerLink =
	'text-[13px] text-(--ds-muted) no-underline tracking-[0.08em] uppercase hover:text-(--ds-accent) transition-colors';

export default function SiteFooter() {
	return (
		<footer className='px-6 sm:px-10 pb-[60px]'>
			<div className='max-w-[1280px] mx-auto flex justify-between items-center pt-7 border-t border-border flex-wrap gap-4'>
				<span className='text-[13px] text-(--ds-muted2) font-sans'>
					© {new Date().getFullYear()} Ansar Karrouach
				</span>
				<div className='flex gap-6'>
					<Link href='/projects' className={footerLink}>
						Projects
					</Link>
					<a
						href='https://github.com/NotAnsar'
						target='_blank'
						rel='noopener noreferrer'
						className={footerLink}
					>
						GitHub
					</a>
					<a
						href='https://linkedin.com/in/ansarkarrouach'
						target='_blank'
						rel='noopener noreferrer'
						className={footerLink}
					>
						LinkedIn
					</a>
				</div>
				<span className='text-[13px] text-(--ds-muted2) font-sans'>
					Built with Next.js & Three.js
				</span>
			</div>
		</footer>
	);
}
