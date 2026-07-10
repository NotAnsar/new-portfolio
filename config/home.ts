export const featuredSkills = [
	'React',
	'Next.js',
	'TypeScript',
	'Spring Boot',
	'Node.js',
	'PostgreSQL',
	'TailwindCSS',
	'AWS',
];

export const experiences = [
	{
		title: 'Frontend Developer',
		company: 'UPWORK',
		period: 'Oct 2024 - Present',
		location: 'Freelance Remote',
		description:
			'Designed and developed a full-stack music platform with responsive, mobile-friendly interface using Next.js 14, TypeScript, ShadCN, and TailwindCSS. Implemented secure user authentication with email and OAuth, utilized PostgreSQL with Prisma ORM on Amazon RDS, and integrated AWS S3 for scalable storage.',
		technologies: [
			'Next.js',
			'TypeScript',
			'ShadCN',
			'TailwindCSS',
			'PostgreSQL',
			'Prisma',
			'AWS S3',
		],
	},
	{
		title: 'Frontend Developer',
		company: 'DEVTI TECHNOLOGIE',
		period: 'Jun 2024 - Oct 2024',
		location: 'Tanger, MA',
		description:
			'Collaborated with backend and mobile developers to build SwapRx (radiology recruitment platform) and AgroApp (SaaS for hygiene and food traceability). Developed responsive web applications using TypeScript, React, Next.js, and TailwindCSS. Integrated RESTful APIs and optimized performance across devices.',
		technologies: [
			'TypeScript',
			'React',
			'Next.js',
			'TailwindCSS',
			'REST APIs',
			'Postman',
		],
	},
	{
		title: 'FullStack Developer',
		company: 'NJT GROUP',
		period: 'Apr 2023 - Jul 2023',
		location: 'Marrakech, MA',
		description:
			'Developed Connectify, a full-stack social media application using React for frontend and Express.js for backend. Created features including user authentication, profile management, content sharing, and messaging. Integrated Socket.io for real-time messaging and live updates.',
		technologies: [
			'React',
			'Express.js',
			'Socket.io',
			'MongoDB',
			'Node.js',
			'Postman',
		],
	},
];

export const education = [
	{
		degree: "Master's Degree - Big Data and Internet of Things",
		institution: 'ENSAM Casablanca',
		period: 'Sep 2024 - Present',
		location: 'Casablanca, MA',
		description:
			'Currently pursuing advanced studies in Big Data analytics, IoT systems, and modern data processing technologies.',
	},
	{
		degree: 'Professional License - Technologies and Web Programming',
		institution: 'Faculty of Sciences Semlalia (FSSM)',
		period: 'Sep 2022 - Jul 2023',
		location: 'Marrakech, MA',
		description:
			'Specialized program focusing on web development technologies, programming fundamentals, and software engineering best practices.',
	},
];

export const favoriteStack = ['React', 'Next.js', 'TypeScript', 'Spring Boot'];

/** Expandable experience rows for the landing page (Landing Minimal design) */
export type Job = {
	period: string;
	role: string;
	company: string;
	place: string;
	description: string;
	tags: string[];
};

export const jobs: Job[] = [
	{
		period: 'Feb 2026 - Jun 2026',
		role: 'Software Engineer Intern',
		company: 'VOID Digital Agency',
		place: 'Casablanca',
		description:
			'Built and deployed a Next.js and TypeScript frontend for RMA Assurance with audience-scoped routing, search, and API-driven content. Set up a full CI/CD pipeline from scratch with Jenkins, Docker, SonarQube and Trivy, and developed a Playwright E2E framework covering 290 tests across 18 specs and 5 browsers.',
		tags: [
			'Next.js',
			'TypeScript',
			'Jenkins',
			'Docker',
			'Playwright',
			'SonarQube',
		],
	},
	{
		period: 'Oct 2024 - May 2026',
		role: 'Full Stack Developer, Freelance',
		company: 'Sounding Future',
		place: 'Remote',
		description:
			'Sole developer of two production platforms: a custom editorial platform with role-based access control, structured content workflows and a Tiptap v3 rich text editor, and AudioSpace, a subscription-based audio streaming and LMS platform serving 300+ artists and 400+ tracks with Stripe payments. Designed and operated the infrastructure with Docker, Coolify, Traefik, AWS S3 and automated PostgreSQL backups.',
		tags: [
			'Next.js',
			'Node.js',
			'PostgreSQL',
			'Stripe',
			'Tiptap',
			'Docker',
			'AWS S3',
		],
	},
	{
		period: 'Jun 2024 - Oct 2024',
		role: 'Frontend Developer Intern',
		company: 'Devti Technologie',
		place: 'Tanger',
		description:
			'Built key user workflows for SwapRx including map-based job discovery, DocuSeal digital contract signing and multi-step onboarding. Built dashboards and data management interfaces for AgroApp with Recharts data visualization.',
		tags: ['Next.js', 'TypeScript', 'ShadCN', 'Recharts', 'DocuSeal'],
	},
	{
		period: 'Apr 2023 - Jul 2023',
		role: 'Full Stack Developer Intern',
		company: 'NJT Group',
		place: 'Marrakech',
		description:
			'Built Connectify, a real-time social media application with messaging, live presence tracking and content sharing. Designed a RESTful API with JWT authentication, validated through Postman testing.',
		tags: ['React', 'Express.js', 'Socket.io', 'MySQL', 'JWT'],
	},
];

/** Landing page stat counters */
export const landingStats = [
	{ target: 3, label: 'Years experience' },
	{ target: 10, label: 'Projects completed' },
	{ target: 4, label: 'Companies' },
];

/** Landing page Education section (section 04) */
export type EducationColumn = {
	heading: string;
	subheading: string;
	items: string[];
};

export const educationColumns: EducationColumn[] = [
	{
		heading: 'ENSAM Casablanca',
		subheading: "Master's in Big Data & IoT",
		items: ['2024 - 2026'],
	},
	{
		heading: 'FSSM Marrakech',
		subheading: 'Professional License, Web Technologies',
		items: ['2023'],
	},
	{
		heading: 'Languages',
		subheading: 'Spoken & certifications',
		items: [
			'English — Fluent',
			'French — Fluent',
			'Arabic — Native',
			'AWS Academy Cloud Foundations',
		],
	},
];

/** Landing page Stack section (section 05) — one marquee band per group */
export type StackGroup = {
	label: string;
	items: string[];
};

export const stackGroups: StackGroup[] = [
	{
		label: 'Frontend',
		items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN', 'Redux'],
	},
	{
		label: 'Backend',
		items: [
			'Node.js',
			'Express.js',
			'Prisma',
			'PostgreSQL',
			'MySQL',
			'REST APIs',
		],
	},
	{
		label: 'DevOps & Cloud',
		items: [
			'Docker',
			'Jenkins',
			'CI/CD',
			'AWS S3',
			'Coolify',
			'Traefik',
			'SonarQube',
		],
	},
	{
		label: 'Testing & Tools',
		items: ['Playwright', 'Postman', 'Git', 'Figma', 'Stripe'],
	},
];
