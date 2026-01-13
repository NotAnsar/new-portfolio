import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { navigationItems, socialLinks } from '@/config/navigation';

export default function Footer() {
	return (
		<footer className='border-t'>
			<div className='max-w-screen-lg mx-auto px-4 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{/* Brand */}
					<div className='space-y-4'>
						<Link href='/' className='text-lg font-bold tracking-tight'>
							AK
						</Link>
						<p className='text-sm text-muted-foreground leading-relaxed'>
							Full Stack Developer building scalable web applications with
							modern technologies.
						</p>
					</div>

					{/* Links */}
					<div className='space-y-4'>
						<p className='text-sm font-medium'>Pages</p>
						<nav className='flex flex-col gap-2'>
							{navigationItems.map((link) => (
								<Link
									key={link.label}
									href={link.href}
									className='text-sm text-muted-foreground hover:text-foreground transition-colors w-fit'
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					{/* Social */}
					<div className='space-y-4'>
						<p className='text-sm font-medium'>Connect</p>
						<div className='flex items-center gap-3'>
							{socialLinks.map((social) => (
								<Link
									key={social.label}
									href={social.href}
									target='_blank'
									className='p-2 border rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors'
									aria-label={social.label}
								>
									<social.icon className='h-4 w-4' />
								</Link>
							))}
							<ModeToggle size='sm' variant='outline' />
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className='flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t'>
					<p className='text-sm text-muted-foreground'>
						© {new Date().getFullYear()} Ansar Karrouach. All rights reserved.
					</p>
					<p className='text-sm text-muted-foreground'>
						Built with Next.js & Tailwind CSS
					</p>
				</div>
			</div>
		</footer>
	);
}
