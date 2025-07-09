import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { ModeToggle } from './ModeToggle';

export default function Footer() {
	return (
		<div className='border-t border-primary w-full'>
			<footer className='max-w-screen-md mx-auto flex items-center justify-between p-2 '>
				<h3 className='text-[15px]'>
					made by <span className='text-primary font-semibold'>ansar</span>
				</h3>
				<nav className='flex justify-center gap-4 '>
					<Link
						href='http://github.com/NotAnsar'
						target='_blank'
						className='hover:text-primary cursor-pointer text-muted-foreground'
					>
						<Github className='h-4 w-4 inline' />
					</Link>
					<Link
						href='https://www.linkedin.com/in/ansarkarrouach/'
						className='hover:text-primary cursor-pointer text-muted-foreground'
						target='_blank'
					>
						<Linkedin className='h-4 w-4 inline' />
					</Link>
					<ModeToggle />
				</nav>
			</footer>
		</div>
	);
	return (
		<footer className='py-12 border-t px-2'>
			<div>
				<nav className='flex justify-center gap-4 mb-4'>
					<Link
						href='http://github.com/NotAnsar'
						target='_blank'
						className='hover:text-primary cursor-pointer text-muted-foreground'
					>
						<Github className='h-5 w-5 inline' />
					</Link>
					<Link
						href='https://www.linkedin.com/in/ansarkarrouach/'
						className='hover:text-primary cursor-pointer text-muted-foreground'
						target='_blank'
					>
						<Linkedin className='h-5 w-5 inline' />
					</Link>
				</nav>

				<p className='text-center text-muted-foreground text-sm'>
					© 2025 Ansar's Portfolio. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
