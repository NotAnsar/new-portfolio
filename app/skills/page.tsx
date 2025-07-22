// import { skillCategories } from '@/config/skills';

// export default function page() {
// 	return (
// 		<>
// 			<h3 className='font-bold text-3xl'>Skills</h3>
// 			<p className='text-muted-foreground'>
// 				A comprehensive overview of my technical skills and expertise.
// 			</p>

// 			<div>
// 				{skillCategories.map((category) => (
// 					<div key={category.title} className='space-y-4'>
// 						<h4 className='text-xl font-semibold mt-6 mb-2'>
// 							{category.title}
// 						</h4>

// 						<div className='grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
// 							{category.items.map((lang) => (
// 								<div
// 									key={lang.name}
// 									className='flex items-center gap-2 bg-secondary	px-4 py-2.5 rounded-lg border text-foreground hover:bg-secondary/80 duration-200 ease-out'
// 								>
// 									<lang.icon className='w-5 h-auto aspect-square inline-block' />
// 									<span className=' font-semibold'>{lang.name}</span>
// 								</div>
// 							))}
// 						</div>

// 						<p className='text-sm'>{category.description}</p>
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	);
// }

import { skillCategories } from '@/config/skills';

export default function SkillsPage() {
	return (
		<>
			{/* Header Section */}
			<div className='mb-6'>
				<h3 className='font-bold text-3xl'>Skills</h3>
				<p className='text-muted-foreground'>
					A comprehensive overview of my technical skills and expertise.
				</p>
			</div>
			{/* Skills Categories */}
			<div className='space-y-12'>
				{skillCategories.map((category, index) => (
					<div key={category.title} className='space-y-6'>
						{/* Category Header */}
						<div className='space-y-2'>
							<div className='flex items-center gap-3'>
								<div className='w-1 h-6 bg-primary rounded-full'></div>
								<h2 className='text-2xl font-bold'>{category.title}</h2>
							</div>
							<p className='text-muted-foreground leading-relaxed pl-4 text-[15px]'>
								{category.description}
							</p>
						</div>

						{/* Skills Grid */}
						<div className='grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>
							{category.items.map((skill) => (
								<div
									key={skill.name}
									className='group flex items-center gap-3 bg-card hover:bg-card/50 px-4 py-3 rounded-lg border border-border hover:border-primary/30 transition-all duration-200 shadow-sm hover:shadow-md'
								>
									<skill.icon className='w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-200' />
									<span className='font-medium text-sm truncate'>
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
}
