'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ModeToggleProps {
	size?: 'sm' | 'md' | 'lg' | 'xl';
	variant?: 'outline' | 'ghost' | 'secondary';
	className?: string;
}

const sizeConfig = {
	sm: { button: 'h-7 w-7', icon: 'h-3 w-3' },
	md: { button: 'h-9 w-9', icon: 'h-4 w-4' },
	lg: { button: 'h-11 w-11', icon: 'h-5 w-5' },
	xl: { button: 'h-14 w-14', icon: 'h-6 w-6' },
};

export function ModeToggle({
	size = 'sm',
	variant = 'outline',
	className = '',
}: ModeToggleProps) {
	const { setTheme } = useTheme();
	const config = sizeConfig[size];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant={variant}
					className={`${config.button} aspect-square cursor-pointer ${className}`}
				>
					<Sun
						className={`${config.icon} scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90`}
					/>
					<Moon
						className={`${config.icon} absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0`}
					/>
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => setTheme('light')}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
