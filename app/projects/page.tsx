import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects, tabs } from '@/config/project';

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
						<ProjectCard project={project} key={i} />
					))}
			</div>
		</>
	);
}
