import { skillCategories } from '@/config/skills';
import { siteStats } from '@/config/navigation';

export default function SkillsPage() {
	return (
		<div className='space-y-12 pb-16'>
			{/* Header */}
			<section className='space-y-6 pt-8'>
				<div className='space-y-4 max-w-2xl'>
					<p className='text-sm uppercase tracking-widest text-muted-foreground'>
						Expertise
					</p>
					<h1 className='text-4xl md:text-5xl font-bold tracking-tight'>
						Skills & Technologies
					</h1>
					<p className='text-lg text-muted-foreground leading-relaxed'>
						A comprehensive overview of my technical skills and the tools I use
						to build modern applications.
					</p>
				</div>
			</section>

			{/* Skills Categories */}
			{skillCategories.map((category) => (
				<section key={category.title} className='space-y-6'>
					<div className='flex items-baseline justify-between'>
						<h2 className='text-sm uppercase tracking-widest text-muted-foreground'>
							{category.title}
						</h2>
						<div className='h-px flex-1 bg-border ml-8' />
					</div>

					<p className='text-muted-foreground leading-relaxed max-w-3xl'>
						{category.description}
					</p>

					<div className='grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
						{category.items.map((skill) => (
							<div
								key={skill.name}
								className='flex items-center gap-3 px-4 py-3 border rounded-lg hover:bg-secondary transition-colors'
							>
								<skill.icon className='w-5 h-5 text-muted-foreground flex-shrink-0' />
								<span className='text-sm font-medium truncate'>
									{skill.name}
								</span>
							</div>
						))}
					</div>
				</section>
			))}

			{/* Summary Stats */}
			<section className='border rounded-2xl p-8'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
					<div className='text-center space-y-1'>
						<p className='text-3xl font-bold'>
							{skillCategories.reduce((acc, cat) => acc + cat.items.length, 0)}+
						</p>
						<p className='text-sm text-muted-foreground'>Technologies</p>
					</div>
					<div className='text-center space-y-1'>
						<p className='text-3xl font-bold'>{skillCategories.length}</p>
						<p className='text-sm text-muted-foreground'>Categories</p>
					</div>
					<div className='text-center space-y-1'>
						<p className='text-3xl font-bold'>{siteStats.yearsExperience}</p>
						<p className='text-sm text-muted-foreground'>Years Experience</p>
					</div>
					<div className='text-center space-y-1'>
						<p className='text-3xl font-bold'>{siteStats.projectsCompleted}</p>
						<p className='text-sm text-muted-foreground'>Projects Built</p>
					</div>
				</div>
			</section>
		</div>
	);
}
