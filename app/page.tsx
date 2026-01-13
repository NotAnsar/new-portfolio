import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
	ArrowRight,
	Download,
	Github,
	Linkedin,
	Mail,
	ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import { education, experiences, featuredSkills } from '@/config/home';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/config/project';
import Image from 'next/image';

export default function Home() {
	const featuredProjects = projects.slice(0, 4);
	return (
		<div className='space-y-32 pb-16'>
			{/* Hero - Split Layout */}
			<section className='grid md:grid-cols-2 gap-12 items-center min-h-[70vh] pt-8'>
				<div className='space-y-8 order-2 md:order-1'>
					<div className='space-y-4'>
						<p className='text-sm uppercase tracking-widest text-muted-foreground'>
							Full Stack Developer
						</p>
						<h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]'>
							Ansar
							<br />
							Karrouach
						</h1>
						<p className='text-lg text-muted-foreground max-w-md leading-relaxed'>
							Building scalable web applications with modern technologies.
							Currently pursuing a Master's in Big Data & IoT.
						</p>
					</div>

					<div className='flex flex-wrap gap-3'>
						<Button asChild size='lg'>
							<Link href='/projects'>
								View Projects
								<ArrowRight className='ml-2 h-4 w-4' />
							</Link>
						</Button>
						<Button variant='outline' size='lg' asChild>
							<Link href='/Karrouach_ansar_cv.pdf' target='_blank'>
								<Download className='mr-2 h-4 w-4' />
								Download CV
							</Link>
						</Button>
					</div>

					<div className='flex items-center gap-4 pt-4'>
						<Link
							href='mailto:karrouach.ansar@gmail.com'
							className='text-muted-foreground hover:text-foreground transition-colors'
						>
							<Mail className='h-5 w-5' />
						</Link>
						<Link
							href='https://linkedin.com/in/ansarkarrouach'
							target='_blank'
							className='text-muted-foreground hover:text-foreground transition-colors'
						>
							<Linkedin className='h-5 w-5' />
						</Link>
						<Link
							href='https://github.com/NotAnsar'
							target='_blank'
							className='text-muted-foreground hover:text-foreground transition-colors'
						>
							<Github className='h-5 w-5' />
						</Link>
					</div>
				</div>

				<div className='order-1 md:order-2 flex justify-center md:justify-end'>
					<div className='relative'>
						<div className='w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden'>
							<Image
								src='/image/pic2.jpeg'
								alt='Ansar Karrouach'
								className='w-full h-full object-cover'
								width={413}
								height={477}
							/>
						</div>
						<div className='absolute -bottom-4 -left-4 bg-background border rounded-lg px-4 py-2 shadow-sm'>
							<p className='text-sm font-medium'>Based in Casablanca 🇲🇦</p>
						</div>
					</div>
				</div>
			</section>

			{/* About - Bento Style */}
			<section className='space-y-8'>
				<div className='flex items-baseline justify-between'>
					<h2 className='text-sm uppercase tracking-widest text-muted-foreground'>
						About
					</h2>
					<div className='h-px flex-1 bg-border ml-8' />
				</div>

				<div className='grid md:grid-cols-3 gap-6'>
					<div className='md:col-span-2 space-y-4'>
						<p className='text-lg leading-relaxed'>
							I'm a passionate full-stack developer with expertise in building
							scalable applications using React, Next.js, and Spring Boot. I
							specialize in creating modern frontends and robust backends.
						</p>
						<p className='text-muted-foreground leading-relaxed'>
							Currently pursuing my Master's in Big Data and IoT at ENSAM
							Casablanca, I'm focused on expanding into DevOps while
							strengthening my full-stack capabilities. I thrive in
							collaborative environments and enjoy solving complex technical
							challenges.
						</p>
					</div>
					<div className='space-y-4'>
						<div className='border rounded-lg p-4 space-y-1'>
							<p className='text-3xl font-bold'>2+</p>
							<p className='text-sm text-muted-foreground'>
								Years of Experience
							</p>
						</div>
						<div className='border rounded-lg p-4 space-y-1'>
							<p className='text-3xl font-bold'>8+</p>
							<p className='text-sm text-muted-foreground'>
								Projects Completed
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Projects */}
			<section className='space-y-8'>
				<div className='flex items-baseline justify-between'>
					<h2 className='text-sm uppercase tracking-widest text-muted-foreground'>
						Featured Work
					</h2>
					<div className='h-px flex-1 bg-border mx-8' />
					<Link
						href='/projects'
						className='text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1'
					>
						View All <ArrowRight className='h-3 w-3' />
					</Link>
				</div>

				<div className='grid md:grid-cols-2 gap-6'>
					{featuredProjects.map((project, index) => (
						<ProjectCard project={project} key={index} />
					))}
				</div>
			</section>

			{/* Experience */}
			<section className='space-y-8'>
				<div className='flex items-baseline justify-between'>
					<h2 className='text-sm uppercase tracking-widest text-muted-foreground'>
						Experience
					</h2>
					<div className='h-px flex-1 bg-border ml-8' />
				</div>

				<div className='space-y-0 divide-y'>
					{experiences.map((exp, index) => (
						<div
							key={index}
							className='grid md:grid-cols-[1fr_2fr] gap-4 py-8 first:pt-0 last:pb-0'
						>
							<div>
								<p className='font-medium'>{exp.company}</p>
								<p className='text-sm text-muted-foreground'>{exp.period}</p>
							</div>
							<div className='space-y-3'>
								<div>
									<h3 className='font-medium'>{exp.title}</h3>
									<p className='text-sm text-muted-foreground'>
										{exp.location}
									</p>
								</div>
								<p className='text-sm text-muted-foreground leading-relaxed'>
									{exp.description}
								</p>
								<div className='flex flex-wrap gap-2'>
									{exp.technologies.map((tech) => (
										<span
											key={tech}
											className='text-xs text-muted-foreground bg-secondary px-2 py-1 rounded'
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Education */}
			<section className='space-y-8'>
				<div className='flex items-baseline justify-between'>
					<h2 className='text-sm uppercase tracking-widest text-muted-foreground'>
						Education
					</h2>
					<div className='h-px flex-1 bg-border ml-8' />
				</div>

				<div className='space-y-0 divide-y'>
					{education.map((edu, index) => (
						<div
							key={index}
							className='grid md:grid-cols-[1fr_2fr] gap-4 py-8 first:pt-0 last:pb-0'
						>
							<div>
								<p className='font-medium'>{edu.institution}</p>
								<p className='text-sm text-muted-foreground'>{edu.period}</p>
							</div>
							<div className='space-y-2'>
								<h3 className='font-medium'>{edu.degree}</h3>
								<p className='text-sm text-muted-foreground'>{edu.location}</p>
								{edu.description && (
									<p className='text-sm text-muted-foreground leading-relaxed'>
										{edu.description}
									</p>
								)}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Skills */}
			<section className='space-y-8'>
				<div className='flex items-baseline justify-between'>
					<h2 className='text-sm uppercase tracking-widest text-muted-foreground'>
						Tech Stack
					</h2>
					<div className='h-px flex-1 bg-border mx-8' />
					<Link
						href='/skills'
						className='text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1'
					>
						View All <ArrowRight className='h-3 w-3' />
					</Link>
				</div>

				<div className='flex flex-wrap gap-3'>
					{featuredSkills.map((skill) => (
						<span
							key={skill}
							className='px-4 py-2 border rounded-full text-sm hover:bg-secondary transition-colors'
						>
							{skill}
						</span>
					))}
				</div>
			</section>

			{/* CTA */}
			<section className='border rounded-2xl p-8 md:p-12'>
				<div className='max-w-2xl mx-auto text-center space-y-6'>
					<h2 className='text-3xl md:text-4xl font-bold'>
						Let's build something great together
					</h2>
					<p className='text-muted-foreground'>
						I'm currently open to new opportunities and interesting projects.
						Whether you have a question or just want to say hi, I'll get back to
						you!
					</p>
					<div className='flex flex-wrap justify-center gap-3 pt-2'>
						<Button asChild size='lg'>
							<Link href='/contact'>
								<Mail className='mr-2 h-4 w-4' />
								Get in Touch
							</Link>
						</Button>
						<Button variant='outline' size='lg' asChild>
							<Link
								href='https://linkedin.com/in/ansarkarrouach'
								target='_blank'
							>
								<Linkedin className='mr-2 h-4 w-4' />
								Connect on LinkedIn
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
