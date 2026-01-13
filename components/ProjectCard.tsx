import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { ExternalLink, Github, Youtube, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/config/project';

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div
					className='group cursor-pointer border rounded-lg overflow-hidden hover:border-foreground/20 transition-colors'
					role='button'
					aria-label={`View details for ${project.title}`}
				>
					<div className='overflow-hidden'>
						<Image
							src={project.cover}
							alt={project.title}
							className='w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-300'
							width={600}
							height={400}
						/>
					</div>

					<div className='p-4 space-y-2'>
						<div className='flex items-start justify-between gap-2'>
							<h3 className='font-medium'>{project.title} </h3>
							<ArrowUpRight className='h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity' />
						</div>
						<p className='text-sm text-muted-foreground line-clamp-2'>
							{project.description}
						</p>
						<div className='flex flex-wrap gap-1.5 pt-1'>
							{project.tags.slice(0, 4).map((tag) => (
								<span
									key={tag}
									className='text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded'
								>
									{tag}
								</span>
							))}
							{project.tags.length > 4 && (
								<span className='text-xs text-muted-foreground'>
									+{project.tags.length - 4}
								</span>
							)}
						</div>
					</div>
				</div>
			</DialogTrigger>

			<DialogContent className='gradient-bg sm:max-w-screen-xl max-h-[85vh] overflow-y-auto p-3 md:p-6'>
				<DialogHeader>
					<DialogTitle className='font-semibold text-xl md:text-4xl text-left md:mb-4'>
						{project.title}
					</DialogTitle>
				</DialogHeader>

				<div className='grid md:grid-cols-3 gap-6'>
					{/* Sidebar */}
					<aside className='col-span-1 space-y-6 md:sticky md:top-0 md:self-start'>
						<div className='space-y-3'>
							<p className='text-sm uppercase tracking-widest text-muted-foreground'>
								About
							</p>
							<p className='text-muted-foreground leading-relaxed'>
								{project.description}
							</p>
						</div>

						<div className='space-y-3'>
							<p className='text-sm uppercase tracking-widest text-muted-foreground'>
								Technologies
							</p>
							<div className='flex flex-wrap gap-2'>
								{project.tags.map((tag) => (
									<span
										key={tag}
										className='px-3 py-1 border rounded-full text-xs'
									>
										{tag}
									</span>
								))}
							</div>
						</div>

						{(project.link ||
							project.github ||
							project.frontendRepo ||
							project.backendRepo ||
							project.youtube) && (
							<div className='space-y-3'>
								<p className='text-sm uppercase tracking-widest text-muted-foreground'>
									Links
								</p>
								<div className='flex flex-col gap-2'>
									{project.link && (
										<Link
											href={project.link}
											target='_blank'
											rel='noopener noreferrer'
											className={cn(
												buttonVariants({ size: 'sm' }),
												'justify-start'
											)}
										>
											<ExternalLink className='mr-2 h-4 w-4' />
											View Live
										</Link>
									)}

									{project.github && (
										<Link
											href={project.github}
											target='_blank'
											rel='noopener noreferrer'
											className={cn(
												buttonVariants({ variant: 'outline', size: 'sm' }),
												'justify-start'
											)}
										>
											<Github className='mr-2 h-4 w-4' />
											Source Code
										</Link>
									)}

									{project.frontendRepo && (
										<Link
											href={project.frontendRepo}
											target='_blank'
											rel='noopener noreferrer'
											className={cn(
												buttonVariants({ variant: 'outline', size: 'sm' }),
												'justify-start'
											)}
										>
											<Github className='mr-2 h-4 w-4' />
											Frontend Repo
										</Link>
									)}

									{project.backendRepo && (
										<Link
											href={project.backendRepo}
											target='_blank'
											rel='noopener noreferrer'
											className={cn(
												buttonVariants({ variant: 'outline', size: 'sm' }),
												'justify-start'
											)}
										>
											<Github className='mr-2 h-4 w-4' />
											Backend Repo
										</Link>
									)}

									{project.youtube && (
										<Link
											href={project.youtube}
											target='_blank'
											rel='noopener noreferrer'
											className={cn(
												buttonVariants({ variant: 'outline', size: 'sm' }),
												'justify-start'
											)}
										>
											<Youtube className='mr-2 h-4 w-4' />
											Watch Demo
										</Link>
									)}
								</div>
							</div>
						)}
					</aside>

					{/* Gallery */}
					<div className='col-span-2 space-y-4'>
						<p className='text-sm uppercase tracking-widest text-muted-foreground'>
							Screenshots
						</p>
						<div className='space-y-4'>
							{project.images?.map((img, index) => (
								<Image
									key={img}
									src={img}
									alt={`${project.title} screenshot ${index + 1}`}
									className='w-full object-cover rounded-lg border'
									width={1366}
									height={768}
									loading='lazy'
									sizes='(max-width: 768px) 100vw, 66vw'
								/>
							))}
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
