import { ContactForm } from '@/components/ContactForm';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function page() {
	return (
		<>
			<h3 className='font-bold text-3xl'>Contact</h3>
			<p className='text-muted-foreground'>
				I'm always open to discussing new projects, creative ideas, or
				opportunities. Feel free to reach out!
			</p>

			<ContactForm />

			<div>
				<h4 className='text-xl font-semibold mt-6 mb-3'>Contact Information</h4>
				<div className='space-y-4'>
					{contactInfo.map((info) => (
						<div className='flex items-center gap-3 group' key={info.label}>
							<span
								className={cn(
									'w-12 h-auto aspect-square flex items-center justify-center bg-muted-foreground dark:bg-secondary rounded-sm',
									'bg-card border border-border'
								)}
							>
								<info.icon className='w-5 h-auto aspect-square inline-block' />
							</span>
							<div className='flex flex-col'>
								<span className='font-semibold'>{info.label}</span>
								<Link
									className='text-muted-foreground text-[15px] hover:text-foreground transition-colors'
									href={info.href}
									target='_blank'
								>
									{info.value}
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

const contactInfo = [
	{
		icon: Mail,
		label: 'Email',
		value: 'karrouach.ansar@email.com',
		href: 'mailto:karrouach.ansar@email.com',
	},
	{
		icon: Linkedin,
		label: 'Linkedin',
		value: 'linkedin.com/in/ansarkarrouach/',
		href: 'https://linkedin.com/in/ansarkarrouach/',
	},
	{
		icon: Github,
		label: 'Github',
		value: 'github.com/notansar',
		href: 'https://github.com/notansar',
	},
];
