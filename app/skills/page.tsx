import {
	Brackets,
	Cloud,
	CodeXml,
	Database,
	Figma,
	GitCommit,
	Github,
	Palette,
	Slack,
	Users2,
} from 'lucide-react';
import React from 'react';

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
									className='flex items-center gap-2 bg-secondary	px-4 py-2.5 rounded-lg border text-foreground hover:bg-secondary/80'
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

const skillCategories = [
	{
		title: 'Programming Languages',
		items: [
			{ icon: CodeXml, name: 'JavaScript' },
			{ icon: CodeXml, name: 'TypeScript' },
			{ icon: CodeXml, name: 'Java' },
			{ icon: CodeXml, name: 'C' },
			{ icon: CodeXml, name: 'Python' },
		],
		description:
			'Proficient in JavaScript, TypeScript, Java, C, and Python, with extensive experience in developing web applications, backend services, and data processing tools. Skilled in writing clean, efficient, and well-documented code.',
	},
	{
		title: 'Frontend Development',
		items: [
			{ icon: Brackets, name: 'HTML' },
			{ icon: Brackets, name: 'CSS' },
			{ icon: Brackets, name: 'Next.js' },
			{ icon: Brackets, name: 'React' },
			{ icon: Brackets, name: 'React Query' },
		],
		description:
			'Experienced with HTML, CSS, Next.js, React, Redux, and React Query for building dynamic and responsive user interfaces. Familiar with server-side rendering, client-side routing, and state management. Strong expertise in React and Next.js, enabling the creation of high-performance web applications.',
	},
	{
		title: 'Backend Development',
		items: [
			{ icon: Brackets, name: 'Node.js' },
			{ icon: Brackets, name: 'Express.js' },
			{ icon: Brackets, name: 'Socket.io' },
			{ icon: Brackets, name: 'Jee' },
			{ icon: Brackets, name: 'Spring Boot' },
		],
		description:
			'Skilled in backend development using Node.js, Express.js, Socket.io, Jee, and Spring Boot. Capable of creating robust and scalable APIs and real-time applications. Proficient in designing and implementing server-side logic.',
	},
	{
		title: 'Database and ORM',
		items: [
			{ icon: Database, name: 'PL/SQL' },
			{ icon: Database, name: 'PostgreSQL' },
			{ icon: Database, name: 'MySQL' },
			{ icon: Database, name: 'MongoDB' },
			{ icon: Database, name: 'Prisma' },
			{ icon: Database, name: 'Firebase' },
			{ icon: Database, name: 'Supabase' },
		],
		description:
			'Experienced with various database systems including PL/SQL, PostgreSQL, MySQL, MongoDB, Firebase, Supabase, and Prisma. Skilled in database design, querying, and optimization. Proficient in both relational and non-relational databases.',
	},
	{
		title: 'UI Tools',
		items: [
			{ icon: Palette, name: 'TailwindCSS' },
			{ icon: Palette, name: 'ShadCn' },
			{ icon: Palette, name: 'Sass' },
			{ icon: Palette, name: 'Styled Components' },
		],
		description:
			'Proficient in using UI tools such as TailwindCSS, ShadCN, Sass, and Styled Components to create visually appealing and consistent user interfaces. Skilled in styling and theming web applications.',
	},
	{
		title: 'Others',
		items: [
			{ icon: GitCommit, name: 'Git' },
			{ icon: Github, name: 'Github' },
			{ icon: Slack, name: 'Slack' },
			{ icon: CodeXml, name: 'Jira' },
			{ icon: Users2, name: 'Agile/Scrum' },
			{ icon: Figma, name: 'Figma' },
			{ icon: CodeXml, name: 'Postman' },
			{ icon: Cloud, name: 'Vercel' },
		],
		description:
			'Comfortable using Git for version control, GitHub for collaboration, Slack for communication, Jira for project management, and Agile/Scrum methodologies for efficient workflows. Skilled in design prototyping with Figma, API testing with Postman, and deploying applications on Vercel. Familiar with UML for system design.',
	},
];
