// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import {
// 	ArrowRight,
// 	Download,
// 	Github,
// 	Linkedin,
// 	Mail,
// 	Calendar,
// 	MapPin,
// 	GraduationCap,
// 	Briefcase,
// } from 'lucide-react';
// import Link from 'next/link';
// import { education, experiences, featuredSkills } from '@/config/home';
// import ProjectCard from '@/components/ProjectCard';
// import { projects } from '@/config/project';

// export default function Home() {
// 	const featuredProjects = projects.slice(0, 4);
// 	return (
// 		<div className='space-y-16'>
// 			<section className='flex flex-col items-center text-center space-y-8 py-16 relative'>
// 				<div className='w-24 h-24 rounded-full bg-primary/10 border border-primary/20 mb-4 flex items-center justify-center'>
// 					<span className='text-2xl text-primary font-bold'>AK</span>
// 				</div>

// 				<div className='space-y-4 max-w-2xl'>
// 					<h1 className='text-4xl md:text-5xl font-bold tracking-tight'>
// 						Hi, I'm <span className='text-primary'>Ansar Karrouach</span>
// 					</h1>
// 					<h2 className='text-xl md:text-2xl text-muted-foreground font-medium'>
// 						Full Stack Developer
// 					</h2>
// 					<p className='text-muted-foreground leading-relaxed'>
// 						I build scalable web applications with React, Next.js, and Spring
// 						Boot. Currently pursuing a Master's in Big Data and IoT.
// 					</p>
// 				</div>

// 				<div className='flex items-center gap-4'>
// 					<Button asChild size='lg' className='group'>
// 						<Link href='/projects'>
// 							View Work
// 							<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
// 						</Link>
// 					</Button>
// 					<Button variant='outline' size='lg' asChild>
// 						<Link href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
// 							<Download className='mr-2 h-4 w-4' />
// 							Resume
// 						</Link>
// 					</Button>
// 				</div>

// 				<div className='flex items-center gap-4 pt-4'>
// 					<Link
// 						href='mailto:karrouach.ansar@gmail.com'
// 						className='p-2 rounded-lg hover:bg-secondary transition-colors'
// 					>
// 						<Mail className='h-5 w-5' />
// 					</Link>
// 					<Link
// 						href='https://linkedin.com/in/ansarkarrouach'
// 						target='_blank'
// 						className='p-2 rounded-lg hover:bg-secondary transition-colors'
// 					>
// 						<Linkedin className='h-5 w-5' />
// 					</Link>
// 					<Link
// 						href='https://github.com/NotAnsar'
// 						target='_blank'
// 						className='p-2 rounded-lg hover:bg-secondary transition-colors'
// 					>
// 						<Github className='h-5 w-5' />
// 					</Link>
// 				</div>
// 			</section>

// 			{/* About Section */}
// 			<section className='space-y-8'>
// 				<h3 className='text-2xl font-bold'>About Me</h3>

// 				{/* Main About Content */}
// 				<div className='rounded-lg space-y-4'>
// 					<p className='text-muted-foreground leading-relaxed text-base'>
// 						I'm a passionate full-stack developer currently pursuing a Master's
// 						in Big Data and IoT. I specialize in building scalable applications
// 						with modern frontends and robust Java backends, with expertise in
// 						API development, PostgreSQL, AWS, and agile workflows.
// 					</p>
// 					<p className='text-muted-foreground leading-relaxed text-base'>
// 						I'm passionate about transitioning into DevOps or advancing in
// 						full-stack development with Spring Boot. I excel in API integration,
// 						performance optimization, and collaborative agile environments.
// 					</p>
// 					<Button asChild variant='outline' className='w-fit '>
// 						<Link href='/contact'>Get In Touch</Link>
// 					</Button>
// 				</div>

// 				{/* Quick Facts Grid */}
// 				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
// 					<div className='bg-secondary/50 rounded-lg p-4 space-y-2'>
// 						<div className='flex items-center gap-2'>
// 							<MapPin className='h-4 w-4 text-primary' />
// 							<span className='font-medium text-sm'>Location</span>
// 						</div>
// 						<p className='text-muted-foreground text-sm'>Settat, Morocco</p>
// 					</div>

// 					<div className='bg-secondary/50 rounded-lg p-4 space-y-2'>
// 						<div className='flex items-center gap-2'>
// 							<GraduationCap className='h-4 w-4 text-primary' />
// 							<span className='font-medium text-sm'>Education</span>
// 						</div>
// 						<p className='text-muted-foreground text-sm'>
// 							Master's in Big Data & IoT
// 						</p>
// 					</div>

// 					<div className='bg-secondary/50 rounded-lg p-4 space-y-2'>
// 						<div className='flex items-center gap-2'>
// 							<Briefcase className='h-4 w-4 text-primary' />
// 							<span className='font-medium text-sm'>Experience</span>
// 						</div>
// 						<p className='text-muted-foreground text-sm'>
// 							2+ Years Development
// 						</p>
// 					</div>
// 				</div>
// 			</section>

// 			{/* Featured Projects Section */}
// 			<section className='space-y-6'>
// 				<div className='flex items-center justify-between'>
// 					<h3 className='text-2xl font-bold'>Featured Projects</h3>
// 					<Button asChild variant='ghost'>
// 						<Link href='/projects'>
// 							View All
// 							<ArrowRight className='ml-2 h-4 w-4' />
// 						</Link>
// 					</Button>
// 				</div>

// 				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
// 					{featuredProjects.map((project, index) => (
// 						<ProjectCard project={project} key={index} />
// 					))}
// 				</div>
// 			</section>
// 			{/* Experience Section */}
// 			<section className='space-y-6'>
// 				<div className='flex items-center gap-2'>
// 					<Briefcase className='h-6 w-6 text-primary' />
// 					<h3 className='text-2xl font-bold'>Experience</h3>
// 				</div>
// 				<div className='space-y-6'>
// 					{experiences.map((exp, index) => (
// 						<div
// 							key={index}
// 							className='border-l-2 border-primary/20 pl-6 pb-6 last:pb-0'
// 						>
// 							<div className='bg-card dark:bg-secondary/20 dark:border rounded-lg p-6 shadow-sm'>
// 								<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3'>
// 									<div>
// 										<h4 className='text-lg font-bold'>{exp.title}</h4>
// 										<p className='text-primary font-semibold'>{exp.company}</p>
// 									</div>
// 									<div className='flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0'>
// 										<div className='flex items-center gap-1'>
// 											<Calendar className='h-4 w-4' />
// 											{exp.period}
// 										</div>
// 										<div className='flex items-center gap-1'>
// 											<MapPin className='h-4 w-4' />
// 											{exp.location}
// 										</div>
// 									</div>
// 								</div>
// 								<p className='text-muted-foreground leading-relaxed mb-3'>
// 									{exp.description}
// 								</p>
// 								<div className='flex flex-wrap gap-2'>
// 									{exp.technologies.map((tech) => (
// 										<Badge key={tech} variant='outline' className='text-xs'>
// 											{tech}
// 										</Badge>
// 									))}
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</section>
// 			{/* Education Section */}
// 			<section className='space-y-6'>
// 				<div className='flex items-center gap-2'>
// 					<GraduationCap className='h-6 w-6 text-primary' />
// 					<h3 className='text-2xl font-bold'>Education</h3>
// 				</div>
// 				<div className='space-y-4'>
// 					{education.map((edu, index) => (
// 						<div
// 							key={index}
// 							className='bg-card dark:bg-secondary/20 dark:border rounded-lg p-6 shadow-sm'
// 						>
// 							<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-1'>
// 								<div>
// 									<h4 className='text-lg font-bold'>{edu.degree}</h4>
// 									<p className='text-primary font-semibold'>
// 										{edu.institution}
// 									</p>
// 								</div>
// 								<div className='flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0 text-nowrap'>
// 									<div className='flex items-center gap-1'>
// 										<Calendar className='h-4 w-4' />
// 										{edu.period}
// 									</div>
// 									<div className='flex items-center gap-1 text-nowrap'>
// 										<MapPin className='h-4 w-4' />
// 										{edu.location}
// 									</div>
// 								</div>
// 							</div>
// 							{edu.description && (
// 								<p className='text-muted-foreground leading-relaxed mb-3'>
// 									{edu.description}
// 								</p>
// 							)}
// 						</div>
// 					))}
// 				</div>
// 			</section>
// 			{/* Skills Preview */}
// 			<section className='space-y-6'>
// 				<div className='flex items-center justify-between'>
// 					<h3 className='text-2xl font-bold'>Skills & Technologies</h3>
// 					<Button asChild variant='ghost'>
// 						<Link href='/skills'>
// 							View All Skills
// 							<ArrowRight className='ml-2 h-4 w-4' />
// 						</Link>
// 					</Button>
// 				</div>
// 				<div className='flex flex-wrap gap-2'>
// 					{featuredSkills.map((skill) => (
// 						<Badge
// 							key={skill}
// 							variant='secondary'
// 							className='px-3 py-1 bg-white dark:bg-secondary border border-border'
// 						>
// 							{skill}
// 						</Badge>
// 					))}
// 				</div>
// 			</section>
// 			{/* CTA Section */}
// 			<section className='text-center space-y-6 py-12 bg-white/40 dark:bg-secondary/30 rounded-lg border px-3'>
// 				<h3 className='text-2xl font-bold'>Let's Work Together</h3>
// 				<p className='text-muted-foreground max-w-md mx-auto'>
// 					I'm always interested in new opportunities and exciting projects.
// 					Let's discuss how we can bring your ideas to life.
// 				</p>
// 				<div className='flex flex-wrap items-center justify-center gap-4'>
// 					<Button asChild size='lg'>
// 						<Link href='/contact'>Start a Project</Link>
// 					</Button>
// 					<Button asChild variant='outline' size='lg'>
// 						<Link href='/projects'>See My Work</Link>
// 					</Button>
// 				</div>
// 			</section>
// 		</div>
// 	);
// }

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
	ArrowRight,
	Download,
	Github,
	Linkedin,
	Mail,
	Calendar,
	MapPin,
	GraduationCap,
	Briefcase,
} from 'lucide-react';
import Link from 'next/link';
import { education, experiences, featuredSkills } from '@/config/home';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/config/project';

export default function Home() {
	const featuredProjects = projects.slice(0, 4);
	return (
		<div className='space-y-16'>
			{/* Hero Section with Circle Gradient */}
			<section className='relative flex flex-col items-center text-center space-y-8 py-16'>
				{/* Circle Gradient Background */}

				{/* <div className='w-96 h-40 bg-primary absolute blur-[136px] rounded-full -z-10 -translate-x-14 -translate-y-10' /> */}

				<div className='w-24 h-24 rounded-full bg-primary/10 border border-primary/20 mb-4 flex items-center justify-center'>
					<span className='text-2xl text-primary font-bold'>AK</span>
				</div>

				<div className='space-y-4 max-w-2xl'>
					<h1 className='text-4xl md:text-5xl font-bold tracking-tight'>
						Hi, I'm <span className='text-primary'>Ansar Karrouach</span>
					</h1>
					<h2 className='text-xl md:text-2xl text-muted-foreground font-medium'>
						Full Stack Developer
					</h2>
					<p className='text-muted-foreground leading-relaxed'>
						I build scalable web applications with React, Next.js, and Spring
						Boot. Currently pursuing a Master's in Big Data and IoT.
					</p>
				</div>

				<div className='flex items-center gap-4'>
					<Button asChild size='lg' className='group'>
						<Link href='/projects'>
							View Work
							<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
						</Link>
					</Button>
					<Button variant='outline' size='lg' asChild>
						<Link href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
							<Download className='mr-2 h-4 w-4' />
							Resume
						</Link>
					</Button>
				</div>

				<div className='flex items-center gap-4 pt-4'>
					<Link
						href='mailto:karrouach.ansar@gmail.com'
						className='p-2 rounded-lg hover:bg-secondary transition-colors'
					>
						<Mail className='h-5 w-5' />
					</Link>
					<Link
						href='https://linkedin.com/in/ansarkarrouach'
						target='_blank'
						className='p-2 rounded-lg hover:bg-secondary transition-colors'
					>
						<Linkedin className='h-5 w-5' />
					</Link>
					<Link
						href='https://github.com/NotAnsar'
						target='_blank'
						className='p-2 rounded-lg hover:bg-secondary transition-colors'
					>
						<Github className='h-5 w-5' />
					</Link>
				</div>
			</section>

			{/* About Section */}
			<section className='space-y-8'>
				<h3 className='text-2xl font-bold'>About Me</h3>

				{/* Main About Content */}
				<div className='rounded-lg space-y-4'>
					<p className='text-muted-foreground leading-relaxed text-base'>
						I'm a passionate full-stack developer currently pursuing a Master's
						in Big Data and IoT. I specialize in building scalable applications
						with modern frontends and robust Java backends, with expertise in
						API development, PostgreSQL, AWS, and agile workflows.
					</p>
					<p className='text-muted-foreground leading-relaxed text-base'>
						I'm passionate about transitioning into DevOps or advancing in
						full-stack development with Spring Boot. I excel in API integration,
						performance optimization, and collaborative agile environments.
					</p>
					<Button asChild variant='outline' className='w-fit '>
						<Link href='/contact'>Get In Touch</Link>
					</Button>
				</div>

				{/* Quick Facts Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					<div className='bg-secondary/50 rounded-lg p-4 space-y-2'>
						<div className='flex items-center gap-2'>
							<MapPin className='h-4 w-4 text-primary' />
							<span className='font-medium text-sm'>Location</span>
						</div>
						<p className='text-muted-foreground text-sm'>Settat, Morocco</p>
					</div>

					<div className='bg-secondary/50 rounded-lg p-4 space-y-2'>
						<div className='flex items-center gap-2'>
							<GraduationCap className='h-4 w-4 text-primary' />
							<span className='font-medium text-sm'>Education</span>
						</div>
						<p className='text-muted-foreground text-sm'>
							Master's in Big Data & IoT
						</p>
					</div>

					<div className='bg-secondary/50 rounded-lg p-4 space-y-2'>
						<div className='flex items-center gap-2'>
							<Briefcase className='h-4 w-4 text-primary' />
							<span className='font-medium text-sm'>Experience</span>
						</div>
						<p className='text-muted-foreground text-sm'>
							2+ Years Development
						</p>
					</div>
				</div>
			</section>

			{/* Featured Projects Section */}
			<section className='space-y-6'>
				<div className='flex items-center justify-between'>
					<h3 className='text-2xl font-bold'>Featured Projects</h3>
					<Button asChild variant='ghost'>
						<Link href='/projects'>
							View All
							<ArrowRight className='ml-2 h-4 w-4' />
						</Link>
					</Button>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{featuredProjects.map((project, index) => (
						<ProjectCard project={project} key={index} />
					))}
				</div>
			</section>

			{/* Experience Section */}
			<section className='space-y-6'>
				<div className='flex items-center gap-2'>
					<Briefcase className='h-6 w-6 text-primary' />
					<h3 className='text-2xl font-bold'>Experience</h3>
				</div>
				<div className='space-y-6'>
					{experiences.map((exp, index) => (
						<div
							key={index}
							className='border-l-2 border-primary/20 pl-6 pb-6 last:pb-0'
						>
							<div className='bg-card dark:bg-secondary/20 dark:border rounded-lg p-6 shadow-sm'>
								<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3'>
									<div>
										<h4 className='text-lg font-bold'>{exp.title}</h4>
										<p className='text-primary font-semibold'>{exp.company}</p>
									</div>
									<div className='flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0'>
										<div className='flex items-center gap-1'>
											<Calendar className='h-4 w-4' />
											{exp.period}
										</div>
										<div className='flex items-center gap-1'>
											<MapPin className='h-4 w-4' />
											{exp.location}
										</div>
									</div>
								</div>
								<p className='text-muted-foreground leading-relaxed mb-3'>
									{exp.description}
								</p>
								<div className='flex flex-wrap gap-2'>
									{exp.technologies.map((tech) => (
										<Badge key={tech} variant='outline' className='text-xs'>
											{tech}
										</Badge>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Education Section */}
			<section className='space-y-6'>
				<div className='flex items-center gap-2'>
					<GraduationCap className='h-6 w-6 text-primary' />
					<h3 className='text-2xl font-bold'>Education</h3>
				</div>
				<div className='space-y-4'>
					{education.map((edu, index) => (
						<div
							key={index}
							className='bg-card dark:bg-secondary/20 dark:border rounded-lg p-6 shadow-sm'
						>
							<div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-1'>
								<div>
									<h4 className='text-lg font-bold'>{edu.degree}</h4>
									<p className='text-primary font-semibold'>
										{edu.institution}
									</p>
								</div>
								<div className='flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0 text-nowrap'>
									<div className='flex items-center gap-1'>
										<Calendar className='h-4 w-4' />
										{edu.period}
									</div>
									<div className='flex items-center gap-1 text-nowrap'>
										<MapPin className='h-4 w-4' />
										{edu.location}
									</div>
								</div>
							</div>
							{edu.description && (
								<p className='text-muted-foreground leading-relaxed mb-3'>
									{edu.description}
								</p>
							)}
						</div>
					))}
				</div>
			</section>

			{/* Skills Preview */}
			<section className='space-y-6'>
				<div className='flex items-center justify-between'>
					<h3 className='text-2xl font-bold'>Skills & Technologies</h3>
					<Button asChild variant='ghost'>
						<Link href='/skills'>
							View All Skills
							<ArrowRight className='ml-2 h-4 w-4' />
						</Link>
					</Button>
				</div>
				<div className='flex flex-wrap gap-2'>
					{featuredSkills.map((skill) => (
						<Badge
							key={skill}
							variant='secondary'
							className='px-3 py-1 bg-white dark:bg-secondary border border-border'
						>
							{skill}
						</Badge>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className='text-center space-y-6 py-12 bg-white/40 dark:bg-secondary/30 rounded-lg border px-3'>
				<h3 className='text-2xl font-bold'>Let's Work Together</h3>
				<p className='text-muted-foreground max-w-md mx-auto'>
					I'm always interested in new opportunities and exciting projects.
					Let's discuss how we can bring your ideas to life.
				</p>
				<div className='flex flex-wrap items-center justify-center gap-4'>
					<Button asChild size='lg'>
						<Link href='/contact'>Start a Project</Link>
					</Button>
					<Button asChild variant='outline' size='lg'>
						<Link href='/projects'>See My Work</Link>
					</Button>
				</div>
			</section>
		</div>
	);
}
