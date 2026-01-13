import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects, tabs } from '@/config/project';

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const { tab } = await searchParams;

	const filteredProjects = projects.filter(
		(project) => !tab || tab === 'all' || project.type === tab
	);

	return (
		<div className='space-y-12 pb-16'>
			{/* Header */}
			<section className='space-y-6 pt-8'>
				<div className='space-y-4 max-w-2xl'>
					<p className='text-sm uppercase tracking-widest text-muted-foreground'>
						Portfolio
					</p>
					<h1 className='text-4xl md:text-5xl font-bold tracking-tight'>
						Projects
					</h1>
					<p className='text-lg text-muted-foreground leading-relaxed'>
						A selection of my recent work, showcasing my skills in web
						development and design.
					</p>
				</div>
			</section>

			{/* Filters */}
			<section>
				<div className='flex items-baseline justify-between mb-6'>
					<h2 className='text-sm uppercase tracking-widest text-muted-foreground'>
						Filter by type
					</h2>
					<div className='h-px flex-1 bg-border ml-8' />
				</div>

				<div className='flex flex-wrap items-center gap-2'>
					{tabs.map(({ value, label }) => (
						<Link
							key={value}
							className={cn(
								'px-4 py-2 rounded-full text-sm transition-colors',
								(tab || 'all') === value
									? 'bg-foreground text-background'
									: 'border hover:bg-secondary'
							)}
							href={`/projects?tab=${value}`}
						>
							{label}
						</Link>
					))}
				</div>
			</section>

			{/* Projects Grid */}
			<section>
				<div className='flex items-baseline justify-between mb-6'>
					<h2 className='text-sm uppercase tracking-widest text-muted-foreground'>
						{filteredProjects.length}{' '}
						{filteredProjects.length === 1 ? 'Project' : 'Projects'}
					</h2>
					<div className='h-px flex-1 bg-border ml-8' />
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{filteredProjects.map((project, i) => (
						<ProjectCard project={project} key={i} />
					))}
				</div>
			</section>
		</div>
	);
}
