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
import { ExternalLink, Github, Youtube } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/config/project';

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
			<DialogContent className='gradient-bg sm:max-w-screen-xl mx-auto p-6 max-h-4/5 flex	flex-col 	overflow-y-scroll'>
				<DialogHeader className='mb-4'>
					<DialogTitle className='text-4xl'>{project.title}</DialogTitle>
				</DialogHeader>
				{/* <aside className='grid md:grid-cols-3 gap-6 overflow-y-scroll'> */}
				<aside className='grid md:grid-cols-3 gap-6 '>
					<div className='col-span-1 space-y-3 md:sticky md:top-0 md:self-start'>
						<p className='text-base text-muted-foreground'>
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

						<div className='flex gap-3 pt-4'>
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
								src={img}
								alt={project.title}
								className='w-full object-cover rounded-md border'
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

// export default function ProjectCard({ project }: { project: Project }) {
// 	return (
// 		<Dialog>
// 			<DialogTrigger asChild>
// 				<div className='rounded-md cursor-pointer hover:bg-primary/15 transition-colors duration-200 p-2'>
// 					<Image
// 						src={project.cover}
// 						alt={project.title}
// 						className='w-full object-cover rounded-md aspect-video bg-primary'
// 						width={300}
// 						height={200}
// 					/>

// 					<h4 className='mt-2 font-semibold'>{project.title}</h4>
// 					<p className='text-xs text-muted-foreground line-clamp-2'>
// 						{project.description}
// 					</p>
// 					<div className='mt-2'>
// 						{project.tags.map((tag) => (
// 							<span
// 								key={tag}
// 								className='inline-block bg-muted text-muted-foreground rounded-full px-2 py-1 text-[10px] font-semibold mr-2'
// 							>
// 								{tag}
// 							</span>
// 						))}
// 					</div>
// 				</div>
// 			</DialogTrigger>
// 			<DialogContent className='gradient-bg sm:max-w-screen-xl mx-auto p-6 overflow-y-scroll max-h-4/5'>
// 				<DialogHeader>
// 					<DialogTitle className='text-2xl'>{project.title}</DialogTitle>

// 					<DialogDescription className='text-base'>
// 						{project.description}
// 					</DialogDescription>
// 					<div className='flex flex-wrap gap-2'>
// 						{project.tags.map((tag) => (
// 							<span
// 								key={tag}
// 								className='inline-block bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm font-medium'
// 							>
// 								{tag}
// 							</span>
// 						))}
// 					</div>
// 				</DialogHeader>

// 				<div className='space-y-4'>
// 					{project.images?.map((img) => (
// 						<Image
// 							src={img}
// 							alt={project.title}
// 							className='w-full object-cover rounded-md'
// 							width={1366}
// 							height={768}
// 						/>
// 					))}

// 					<p className='text-[15px] text-muted-foreground'>
// 						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
// 						perferendis ut recusandae cumque quos sint ab voluptate at fugiat
// 						rerum quidem, harum nulla nisi error explicabo soluta in
// 						reprehenderit vero adipisci eveniet quisquam. Unde earum facere
// 						aspernatur impedit deleniti reiciendis quo exercitationem tenetur
// 						totam beatae placeat saepe, laboriosam et? In beatae sunt omnis
// 						nemo, voluptate nobis reprehenderit assumenda ea doloremque dolorum
// 						harum odio et consectetur dolorem magnam. Iusto beatae perspiciatis
// 						odit quidem consectetur! Blanditiis iste dolores magnam, perferendis
// 						exercitationem temporibus deleniti voluptate quod omnis earum in ut
// 						explicabo reiciendis mollitia non autem illum quaerat ab
// 						consequuntur cumque eaque aspernatur? Ipsum maiores nemo error rerum
// 						sapiente consequatur obcaecati esse. Quasi iure eaque veritatis illo
// 						rerum pariatur, in earum. Accusantium, tenetur voluptates!
// 					</p>

// 					<div className='flex gap-3 pt-4'>
// 						<Link
// 							href={project.link}
// 							target='_blank'
// 							rel='noopener noreferrer'
// 							className={cn(
// 								buttonVariants({ variant: 'default', size: 'sm' }),
// 								'flex items-center gap-2'
// 							)}
// 						>
// 							<ExternalLink className='h-4 w-4' />
// 							View Live
// 						</Link>
// 						{project.github && (
// 							<Link
// 								href={project.github}
// 								target='_blank'
// 								rel='noopener noreferrer'
// 								className={cn(
// 									buttonVariants({ variant: 'outline', size: 'sm' }),
// 									'flex items-center gap-2'
// 								)}
// 							>
// 								<Github className='h-4 w-4' />
// 								View Code
// 							</Link>
// 						)}
// 						{project.youtube && (
// 							<Link
// 								href={project.youtube}
// 								target='_blank'
// 								rel='noopener noreferrer'
// 								className={cn(
// 									buttonVariants({ size: 'sm' }),
// 									'flex items-center gap-2 !bg-red-600 text-white dark:text-white hover:!bg-red-500 dark:hover:!bg-red-700'
// 								)}
// 							>
// 								<Youtube className='h-4 w-4' />
// 								View demo
// 							</Link>
// 						)}
// 					</div>
// 				</div>
// 			</DialogContent>
// 		</Dialog>
// 	);
// }

{
	/* <Carousel className='w-full bg-primary rounded-md aspect-video'>
						<CarouselContent>
							{Array.from({ length: 5 }).map((_, index) => (
								<CarouselItem key={index}>
									<div className='w-full bg-primary rounded-md aspect-video'>
										<Image
											src={'/image/cadency.png'}
											alt={project.title}
											className='w-full object-cover rounded-md aspect-video bg-primary'
											width={1366}
											height={768}
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel> */
}
