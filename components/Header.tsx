import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X, Download } from 'lucide-react';
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
	{ href: '/', label: 'Home' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/skills', label: 'Skills' },
	{ href: '/contact', label: 'Contact' },
];

const Logo = ({ onClick }: { onClick?: () => void }) => (
	<Link
		href='/'
		className='cursor-pointer hover:opacity-70 transition-opacity'
		onClick={onClick}
	>
		<span className='text-lg font-bold tracking-tight'>AK</span>
	</Link>
);

export default function Header() {
	return (
		<header className='sticky top-0 z-50 w-full border-b ease-in-out backdrop-blur-3xl animate-header-slide-down-fade'>
			<div className='max-w-screen-lg mx-auto flex items-center justify-between h-14 px-4'>
				<Logo />

				{/* Desktop Navigation */}
				<nav className='hidden sm:flex items-center gap-1'>
					{navigationItems.map((n) => (
						<Link
							key={n.label}
							href={n.href}
							className='px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors'
						>
							{n.label}
						</Link>
					))}
				</nav>

				<div className='hidden sm:flex items-center gap-2'>
					<Button asChild variant='outline' size='sm'>
						<Link
							href='/Karrouach_ansar_cv.pdf'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Download className='mr-2 h-4 w-4' />
							Resume
						</Link>
					</Button>
					<ModeToggle size='sm' />
				</div>

				{/* Mobile Navigation */}
				<div className='flex sm:hidden items-center gap-2'>
					<ModeToggle size='sm' />
					<Sheet>
						<SheetTrigger asChild>
							<Button variant='ghost' size='icon' className='h-9 w-9'>
								<Menu className='h-5 w-5' />
							</Button>
						</SheetTrigger>
						<SheetContent side='right' className='w-full max-w-xs'>
							<SheetHeader className='flex-row items-center justify-between pb-6 border-b'>
								<SheetTitle>
									<SheetClose asChild>
										<Logo />
									</SheetClose>
								</SheetTitle>
								<SheetClose asChild>
									<Button variant='ghost' size='icon' className='h-8 w-8'>
										<X className='h-4 w-4' />
									</Button>
								</SheetClose>
								<SheetDescription className='sr-only'>
									Navigation menu
								</SheetDescription>
							</SheetHeader>

							<nav className='flex flex-col gap-1 py-6'>
								{navigationItems.map((n) => (
									<SheetClose asChild key={n.label}>
										<Link
											href={n.href}
											className='px-2 py-3 text-lg font-medium hover:bg-secondary rounded-lg transition-colors'
										>
											{n.label}
										</Link>
									</SheetClose>
								))}
							</nav>

							<div className='pt-6 border-t'>
								<SheetClose asChild>
									<Button asChild className='w-full'>
										<Link
											href='/Karrouach_ansar_cv.pdf'
											target='_blank'
											rel='noopener noreferrer'
										>
											<Download className='mr-2 h-4 w-4' />
											Download Resume
										</Link>
									</Button>
								</SheetClose>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
