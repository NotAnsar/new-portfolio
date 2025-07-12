import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { ExternalLink, Github } from 'lucide-react';

export default async function page({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const { tab } = await searchParams;

	return (
		<>
			<h3 className='font-bold text-3xl'>Projects</h3>
			<p className='text-muted-foreground'>
				A selection of my recent work, showcasing my skills in web development
				and design.
			</p>

			<div className='flex items-center gap-2 mt-4'>
				{tabs.map(({ value, label }) => (
					<Link
						key={value}
						className={cn(
							'cursor-pointer group relative overflow-hidden font-semibold',
							buttonVariants({
								size: 'sm',
								variant: (tab || 'all') === value ? 'default' : 'outline',
							}),
							'border-0'
						)}
						href={`/projects?tab=${value}`}
						data-label={label}
					>
						{label}
					</Link>
				))}
			</div>

			<div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{projects
					.filter((project) => !tab || tab === 'all' || project.type === tab)
					.map((project, i) => (
						<Dialog key={i}>
							<DialogTrigger asChild>
								<div className='rounded-md cursor-pointer hover:bg-primary/15 transition-colors duration-200 p-2'>
									<div className='w-full object-cover rounded-md aspect-video bg-primary' />
									<h4 className='mt-2 font-semibold'>{project.title}</h4>
									<p className='text-xs text-muted-foreground line-clamp-2'>
										{project.description}
									</p>
									<div className='mt-2'>
										{project.tags.map((tag) => (
											<span
												key={tag}
												className='inline-block bg-muted text-muted-foreground rounded-full px-2 py-1 text-[10px] font-semibold mr-2'
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</DialogTrigger>
							<DialogContent className='gradient-bg sm:max-w-screen-md mx-auto p-6 overflow-y-scroll max-h-4/5'>
								<DialogHeader>
									<DialogTitle className='text-2xl'>
										{project.title}
									</DialogTitle>
									<DialogDescription className='text-base'>
										{project.description}
									</DialogDescription>
								</DialogHeader>
								<div className='space-y-4'>
									<div className='w-full bg-primary rounded-md aspect-video' />
									<div className='flex flex-wrap gap-2'>
										{project.tags.map((tag) => (
											<span
												key={tag}
												className='inline-block bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm font-medium'
											>
												{tag}
											</span>
										))}
									</div>

									<p className='text-[15px] text-muted-foreground'>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Sunt, perferendis ut recusandae cumque quos sint ab
										voluptate at fugiat rerum quidem, harum nulla nisi error
										explicabo soluta in reprehenderit vero adipisci eveniet
										quisquam. Unde earum facere aspernatur impedit deleniti
										reiciendis quo exercitationem tenetur totam beatae placeat
										saepe, laboriosam et? In beatae sunt omnis nemo, voluptate
										nobis reprehenderit assumenda ea doloremque dolorum harum
										odio et consectetur dolorem magnam. Iusto beatae
										perspiciatis odit quidem consectetur! Blanditiis iste
										dolores magnam, perferendis exercitationem temporibus
										deleniti voluptate quod omnis earum in ut explicabo
										reiciendis mollitia non autem illum quaerat ab consequuntur
										cumque eaque aspernatur? Ipsum maiores nemo error rerum
										sapiente consequatur obcaecati esse. Quasi iure eaque
										veritatis illo rerum pariatur, in earum. Accusantium,
										tenetur voluptates!
									</p>

									<div className='flex gap-3 pt-4'>
										<a
											href={project.link}
											target='_blank'
											rel='noopener noreferrer'
											className={cn(
												buttonVariants({ variant: 'default', size: 'sm' }),
												'flex items-center gap-2'
											)}
										>
											<ExternalLink className='h-4 w-4' />
											View Live
										</a>
										{project.github && (
											<a
												href={project.github}
												target='_blank'
												rel='noopener noreferrer'
												className={cn(
													buttonVariants({ variant: 'outline', size: 'sm' }),
													'flex items-center gap-2'
												)}
											>
												<Github className='h-4 w-4' />
												View Code
											</a>
										)}
									</div>
								</div>
							</DialogContent>
						</Dialog>
					))}
			</div>
		</>
	);
}

const tabs = [
	{ label: 'All', value: 'all' },
	{ label: 'Front-end', value: 'front-end' },
	{ label: 'Full-stack', value: 'full-stack' },
];

const projects = [
	{
		title: 'Portfolio Website',
		description:
			'A personal portfolio website built with Next.js and Tailwind CSS.',
		tags: ['Next.js', 'Tailwind CSS'],
		image: '/projects/portfolio.png',
		link: 'https://my-portfolio.com',
		github: 'https://github.com/username/portfolio',
		type: 'front-end',
	},
	{
		title: 'E-commerce Platform',
		description:
			'A full-stack e-commerce platform built with Next.js, Tailwind CSS, and MongoDB.',
		tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
		image: '/projects/ecommerce.png',
		link: 'https://my-ecommerce.com',
		github: 'https://github.com/username/ecommerce',
		type: 'front-end',
	},
	{
		title: 'Blog Website',
		description: 'A personal blog website built with Next.js and Tailwind CSS.',
		tags: ['Next.js', 'Tailwind CSS'],
		image: '/projects/blog.png',
		link: 'https://my-blog.com',
		github: 'https://github.com/username/blog',
		type: 'full-stack',
	},
	{
		title: 'Portfolio Website',
		description:
			'A personal portfolio website built with Next.js and Tailwind CSS.',
		tags: ['Next.js', 'Tailwind CSS'],
		image: '/projects/portfolio.png',
		link: 'https://my-portfolio.com',
		github: 'https://github.com/username/portfolio',
		type: 'front-end',
	},
	{
		title: 'E-commerce Platform',
		description:
			'A full-stack e-commerce platform built with Next.js, Tailwind CSS, and MongoDB.',
		tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
		image: '/projects/ecommerce.png',
		link: 'https://my-ecommerce.com',
		github: 'https://github.com/username/ecommerce',
		type: 'front-end',
	},
	{
		title: 'Blog Website',
		description: 'A personal blog website built with Next.js and Tailwind CSS.',
		tags: ['Next.js', 'Tailwind CSS'],
		image: '/projects/blog.png',
		link: 'https://my-blog.com',
		github: 'https://github.com/username/blog',
		type: 'full-stack',
	},
];
