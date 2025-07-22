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
import { ExternalLink, Github, Youtube } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/config/project';
import { Badge } from './ui/badge';

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className='rounded-md cursor-pointer hover:bg-primary/15 transition-colors duration-200 p-2'>
					<Image
						src={project.cover}
						alt={project.title}
						className='w-full object-cover rounded-md aspect-video bg-primary'
						width={300}
						height={200}
					/>

					<h4 className='mt-2 font-semibold'>{project.title}</h4>
					<p className='text-xs text-muted-foreground line-clamp-2'>
						{project.description}
					</p>

					<div className='flex gap-x-2 gap-y-1 flex-wrap mt-2'>
						{project.tags.map((tag) => (
							<Badge key={tag} variant='secondary' className='text-[10px]'>
								{tag}
							</Badge>
						))}
					</div>
				</div>
			</DialogTrigger>
			<DialogContent className='gradient-bg sm:max-w-screen-xl mx-auto p-3 max-w-full md:p-6 max-h-4/5 flex	flex-col overflow-y-scroll'>
				<DialogHeader>
					<DialogTitle className='text-xl md:text-4xl text-left md:mb-4'>
						{project.title}
					</DialogTitle>
				</DialogHeader>
				<aside className='grid md:grid-cols-3 gap-6 '>
					<div className='col-span-1 space-y-3 md:sticky md:top-0 md:self-start'>
						<p className='text-base text-muted-foreground whitespace-pre-line'>
							{project.description}
						</p>
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

						<div className='flex gap-3 pt-4 flex-wrap'>
							{project.link && (
								<Link
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
								</Link>
							)}

							{project.github && (
								<Link
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
								</Link>
							)}
							{project.frontendRepo && (
								<Link
									href={project.frontendRepo}
									target='_blank'
									rel='noopener noreferrer'
									className={cn(
										buttonVariants({ variant: 'outline', size: 'sm' }),
										'flex items-center gap-2'
									)}
								>
									<Github className='h-4 w-4' />
									Frontend
								</Link>
							)}
							{project.backendRepo && (
								<Link
									href={project.backendRepo}
									target='_blank'
									rel='noopener noreferrer'
									className={cn(
										buttonVariants({ variant: 'outline', size: 'sm' }),
										'flex items-center gap-2'
									)}
								>
									<Github className='h-4 w-4' />
									Frontend
								</Link>
							)}

							{project.youtube && (
								<Link
									href={project.youtube}
									target='_blank'
									rel='noopener noreferrer'
									className={cn(
										buttonVariants({ size: 'sm' }),
										'flex items-center gap-2 !bg-red-600 text-white dark:text-white hover:!bg-red-500 dark:hover:!bg-red-700'
									)}
								>
									<Youtube className='h-4 w-4' />
									View demo
								</Link>
							)}
						</div>
					</div>
					<div className='col-span-2 space-y-6'>
						{project.images?.map((img) => (
							<Image
								key={img}
								src={img}
								alt={project.title}
								className='w-full object-cover rounded-sm border'
								width={1366}
								height={768}
							/>
						))}
					</div>
				</aside>
			</DialogContent>
		</Dialog>
	);
}
