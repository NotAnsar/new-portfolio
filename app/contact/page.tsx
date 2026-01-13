import { ContactForm } from '@/components/ContactForm';
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function page() {
	return (
		<div className='space-y-12 pb-16'>
			{/* Header */}
			<section className='space-y-6 pt-8'>
				<div className='space-y-4 max-w-2xl'>
					<p className='text-sm uppercase tracking-widest text-muted-foreground'>
						Get in touch
					</p>
					<h1 className='text-4xl md:text-5xl font-bold tracking-tight'>
						Let's work together
					</h1>
					<p className='text-lg text-muted-foreground leading-relaxed'>
						I'm always open to discussing new projects, creative ideas, or
						opportunities. Feel free to reach out!
					</p>
				</div>
			</section>

			{/* Main Content - Two Column */}
			<section className='grid lg:grid-cols-[1fr_400px] gap-12'>
				{/* Contact Form */}
				<div className='space-y-6'>
					<div className='flex items-baseline justify-between'>
						<h2 className='text-sm uppercase tracking-widest text-muted-foreground'>
							Send a message
						</h2>
						<div className='h-px flex-1 bg-border ml-8' />
					</div>
					<ContactForm />
				</div>

				{/* Contact Info Sidebar */}
				<div className='space-y-8'>
					<div className='flex items-baseline justify-between'>
						<h2 className='text-sm uppercase tracking-widest text-muted-foreground'>
							Contact info
						</h2>
						<div className='h-px flex-1 bg-border ml-8' />
					</div>

					<div className='space-y-6'>
						{contactInfo.map((info) => (
							<Link
								key={info.label}
								href={info.href}
								target='_blank'
								className='flex items-start gap-4 group'
							>
								<div className='p-3 border rounded-lg group-hover:bg-secondary transition-colors'>
									<info.icon className='w-5 h-5 text-muted-foreground' />
								</div>
								<div className='space-y-1 flex-1'>
									<p className='text-sm text-muted-foreground'>{info.label}</p>
									<p className='font-medium group-hover:text-muted-foreground transition-colors flex items-center gap-1'>
										{info.value}
										<ArrowUpRight className='w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all' />
									</p>
								</div>
							</Link>
						))}
					</div>

					{/* Location Card */}
					<div className='border rounded-2xl p-6 space-y-4'>
						<div className='flex items-center gap-3'>
							<MapPin className='w-5 h-5 text-muted-foreground' />
							<p className='font-medium'>Based in Casablanca, Morocco</p>
						</div>
						<p className='text-sm text-muted-foreground'>
							Available for remote work worldwide and local projects in Morocco.
						</p>
					</div>

					{/* Availability */}
					<div className='flex items-center gap-3 p-4 bg-secondary/50 rounded-lg'>
						<div className='w-2 h-2 bg-green-500 rounded-full' />
						<p className='text-sm'>Currently available for new projects</p>
					</div>
				</div>
			</section>
		</div>
	);
}

const contactInfo = [
	{
		icon: Mail,
		label: 'Email',
		value: 'karrouach.ansar@gmail.com',
		href: 'mailto:karrouach.ansar@gmail.com',
	},
	{
		icon: Linkedin,
		label: 'LinkedIn',
		value: 'linkedin.com/in/ansarkarrouach',
		href: 'https://linkedin.com/in/ansarkarrouach/',
	},
	{
		icon: Github,
		label: 'GitHub',
		value: 'github.com/NotAnsar',
		href: 'https://github.com/NotAnsar',
	},
];
