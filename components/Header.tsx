import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Header() {
	return (
		<div
			className={cn(
				'border-b w-full sticky top-0 z-50 font-secondary',
				'ease-in-out backdrop-blur-sm animate-header-slide-down-fade'
			)}
		>
			<header className='max-w-screen-md mx-auto flex items-center justify-between p-2 '>
				<Link
					href={'/'}
					className='cursor-pointer hover:opacity-75 transition-all flex items-center gap-2'
				>
					<h3 className='font-bold text-lg'>Ansar's Portfolio</h3>
				</Link>
				<nav className='flex items-center gap-4'>
					<ul className='flex items-center gap-8 text-sm font-medium '>
						<li className='group cursor-pointer relative overflow-hidden'>
							<Link
								href={'/skills'}
								className='absolute inset-0 hover:-translate-y-4 after:content-["Skills"] after:absolute after:inset-0 after:translate-y-4 after:duration-200 after:transition-all cursor-pointer duration-200 z-50'
							>
								Skills
							</Link>
							<span className='opacity-0 z-0'>Skills</span>
						</li>
						<li className='group cursor-pointer relative overflow-hidden'>
							<Link
								href={'/projects'}
								className='absolute inset-0 hover:-translate-y-[18px] after:content-["Projects"] after:absolute after:inset-0 after:translate-y-[18px] after:duration-200 after:transition-all cursor-pointer duration-200 z-50'
							>
								Projects
							</Link>
							<span className='opacity-0 z-0'>Projects</span>
						</li>
						<li className='group cursor-pointer relative overflow-hidden'>
							<Link
								href={'/contact'}
								className='absolute inset-0 hover:-translate-y-4 after:content-["Contact"] after:absolute after:inset-0 after:translate-y-4 after:duration-200 after:transition-all cursor-pointer duration-200 z-50'
							>
								Contact
							</Link>
							<span className='opacity-0 z-0'>Contact</span>
						</li>
					</ul>

					<Button className='cursor-pointer font-bold group'>
						<div className='cursor-pointer relative overflow-hidden'>
							<div className='absolute inset-0 group-hover:-translate-y-4 after:content-["Resume"] after:absolute after:inset-0 after:translate-y-4 after:duration-200 after:transition-all cursor-pointer duration-200 z-50 '>
								Resume
							</div>
							<span className='opacity-0 z-0'>Resume</span>
						</div>
					</Button>
				</nav>
			</header>
		</div>
	);
}
