import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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

			<form className='flex flex-col gap-4 mt-4 max-w-screen-sm'>
				<div>
					<Label htmlFor='name'>Name</Label>
					<Input
						id='name'
						placeholder='Your Name'
						className='mt-2 h-12 focus:ring-2 focus:ring-primary focus:border-transparent transition-all'
						name='name'
						required
					/>
				</div>
				<div>
					<Label htmlFor='email'>Email</Label>
					<Input
						id='email'
						type='email'
						placeholder='your.email@example.com'
						className='mt-2 h-12 focus:ring-2 focus:ring-primary focus:border-transparent transition-all'
						name='email'
						required
					/>
				</div>
				<div>
					<Label htmlFor='subject'>Subject</Label>
					<Input
						id='subject'
						placeholder='What is this about?'
						className='mt-2 h-12 focus:ring-2 focus:ring-primary focus:border-transparent transition-all'
						name='subject'
						required
					/>
				</div>
				<div>
					<Label htmlFor='message'>Message</Label>
					<Textarea
						id='message'
						placeholder='Tell me about your project or idea...'
						className='mt-2 h-32 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none'
						name='message'
						required
					/>
				</div>

				<Button
					className='cursor-pointer group w-fit font-bold'
					size={'lg'}
					type='submit'
				>
					<div className='cursor-pointer relative overflow-hidden'>
						<div className='absolute inset-0 group-hover:-translate-y-5 after:content-["Send_Message"] after:absolute after:inset-0 after:translate-y-5 after:duration-200 after:transition-all cursor-pointer duration-200 z-50 '>
							Send Message
						</div>
						<span className='opacity-0 z-0'>Send Message</span>
					</div>
				</Button>
			</form>

			<div>
				<h4 className='text-xl font-semibold mt-6 mb-3'>Contact Information</h4>
				<div className='space-y-4'>
					{contactInfo.map((info) => (
						<div className='flex items-center gap-3 ' key={info.label}>
							<span className='w-12 h-auto aspect-square flex items-center justify-center bg-secondary rounded-sm'>
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
