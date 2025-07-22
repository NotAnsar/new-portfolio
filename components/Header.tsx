import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from './ui/sheet';
import { ModeToggle } from './ModeToggle';

const navigationItems = [
	{ href: '/skills', label: 'Skills' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/contact', label: 'Contact' },
];

const Logo = ({ onClick }: { onClick?: () => void }) => (
	<Link
		href='/'
		className={
			'cursor-pointer hover:opacity-75 transition-all flex items-center gap-2'
		}
		onClick={onClick}
	>
		<h3 className='font-bold text-lg'>Ansar's Portfolio</h3>
	</Link>
);

export default function Header() {
	return (
		<div
			className={cn(
				'border-b w-full sticky top-0 z-50 font-secondary',
				'ease-in-out backdrop-blur-sm animate-header-slide-down-fade'
			)}
		>
			<header className='max-w-screen-md mx-auto flex items-center justify-between py-2 px-4'>
				<Logo />

				{/* Desktop Navigation */}
				<nav className='items-center gap-4 hidden sm:flex'>
					<ul className='flex items-center gap-8 text-sm font-medium'>
						{navigationItems.map((n) => (
							<li
								className='group cursor-pointer relative overflow-hidden'
								key={n.label}
							>
								<Link
									href={n.href}
									className='absolute inset-0 hover:-translate-y-[18px] after:content-[attr(data-label)] after:absolute after:inset-0 after:translate-y-[18px] after:duration-200 after:transition-all cursor-pointer duration-200 z-50'
									data-label={n.label}
								>
									{n.label}
								</Link>
								<span className='opacity-0 z-0'>{n.label}</span>
							</li>
						))}
					</ul>

					<Button asChild className='cursor-pointer font-bold group'>
						<Link href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
							<div className='cursor-pointer relative overflow-hidden'>
								<div className='absolute inset-0 group-hover:-translate-y-4 after:content-["Resume"] after:absolute after:inset-0 after:translate-y-4 after:duration-200 after:transition-all cursor-pointer duration-200 z-50'>
									Resume
								</div>
								<span className='opacity-0 z-0'>Resume</span>
							</div>
						</Link>
					</Button>
				</nav>

				{/* Mobile Navigation */}
				<Sheet>
					<SheetTrigger asChild className='bg-background'>
						<Button
							className='sm:hidden h-9 w-9 aspect-square cursor-pointer'
							variant='outline'
						>
							<Menu className='w-6 h-auto aspect-square inline-block' />
						</Button>
					</SheetTrigger>
					<SheetContent
						side='right'
						className={cn(
							'w-full px-4',
							'font-secondary bg-gradient-to-tr from-gray-200 via-background to-gray-200 dark:from-background dark:via-primary-background/50 dark:to-background',
							'ease-in-out backdrop-blur-sm animate-header-slide-down-fade',
							'[&>button:first-of-type]:hidden'
						)}
					>
						<SheetHeader className='px-0 flex-row items-center justify-between'>
							<SheetTitle className='flex-1'>
								<SheetClose asChild>
									<Logo />
								</SheetClose>
							</SheetTitle>

							<SheetClose asChild>
								<Button
									variant='outline'
									size='icon'
									className='h-8 w-8 rounded-full cursor-pointer	'
								>
									<X className='h-4 w-4' />
									<span className='sr-only'>Close menu</span>
								</Button>
							</SheetClose>

							<SheetDescription className='sr-only'>
								Ansar's Portfolio
							</SheetDescription>
						</SheetHeader>

						<nav className='flex flex-col gap-6 mt-6'>
							{navigationItems.map((n) => (
								<SheetClose asChild key={n.label}>
									<Link
										href={n.href}
										className='text-lg font-medium hover:opacity-80 transition-colors py-2'
									>
										{n.label}
									</Link>
								</SheetClose>
							))}

							<div className='flex gap-2 items-center'>
								{/* <SheetClose asChild>
									<Button className='cursor-pointer font-bold group flex-1'>
										<div className='cursor-pointer relative overflow-hidden'>
											<div className='absolute inset-0 group-hover:-translate-y-4 after:content-["Resume"] after:absolute after:inset-0 after:translate-y-4 after:duration-200 after:transition-all cursor-pointer duration-200 z-50'>
												Resume
											</div>
											<span className='opacity-0 z-0'>Resume</span>
										</div>
									</Button>
								</SheetClose> */}
								<SheetClose asChild>
									<Button
										asChild
										className='cursor-pointer font-bold group flex-1'
									>
										<Link
											href='/resume.pdf'
											target='_blank'
											rel='noopener noreferrer'
										>
											<div className='cursor-pointer relative overflow-hidden'>
												<div className='absolute inset-0 group-hover:-translate-y-4 after:content-["Resume"] after:absolute after:inset-0 after:translate-y-4 after:duration-200 after:transition-all cursor-pointer duration-200 z-50'>
													Resume
												</div>
												<span className='opacity-0 z-0'>Resume</span>
											</div>
										</Link>
									</Button>
								</SheetClose>
								<ModeToggle size='md' className='bg-background/60' />
							</div>
						</nav>
					</SheetContent>
				</Sheet>
			</header>
		</div>
	);
}
