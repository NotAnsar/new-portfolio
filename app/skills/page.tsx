import { skillCategories } from '@/config/skills';

export default function page() {
	return (
		<>
			<h3 className='font-bold text-3xl'>Skills</h3>
			<p className='text-muted-foreground'>
				A comprehensive overview of my technical skills and expertise.
			</p>

			<div>
				{skillCategories.map((category) => (
					<div key={category.title} className='space-y-4'>
						<h4 className='text-xl font-semibold mt-6 mb-2'>
							{category.title}
						</h4>

						<div className='grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
							{category.items.map((lang) => (
								<div
									key={lang.name}
									className='flex items-center gap-2 bg-secondary	px-4 py-2.5 rounded-lg border text-foreground hover:bg-secondary/80 duration-200 ease-out'
								>
									<lang.icon className='w-5 h-auto aspect-square inline-block' />
									<span className=' font-semibold'>{lang.name}</span>
								</div>
							))}
						</div>

						<p className='text-sm'>{category.description}</p>
					</div>
				))}
			</div>
		</>
	);
}
