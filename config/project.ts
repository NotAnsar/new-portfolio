export const tabs = [
	{ label: 'All', value: 'all' },
	{ label: 'Front-end', value: 'front-end' },
	{ label: 'Full-stack', value: 'full-stack' },
];

export type Project = {
	title: string;
	description: string;
	tags: string[];
	cover: string;
	images?: string[];
	link: string;
	github: string;
	youtube?: string;
	type: string;
};
export const projects: Project[] = [
	{
		title: 'Xcelerate | Tech Landing Page',
		description:
			'Xcelerate is a tech company landing page developed with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Figma.',
		tags: [
			'Next.js',
			'TypeScript',
			'React.js',
			'Tailwind CSS',
			'Framer Motion',
			'Figma',
		],
		cover: '/image/xcelerate/cover.png',
		images: [
			'/image/xcelerate/cover.png',
			'/image/xcelerate/1.png',
			'/image/xcelerate/2.png',
		],
		link: 'http://xcelerate.vercel.app/',
		github: 'https://github.com/NotAnsar/xcelerate',
		type: 'front-end',
	},
	{
		title: 'SwapRX | Radiology Replacement Platform',
		description:
			'Xcelerate is a tech company landing page developed with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Figma.',
		tags: [
			'Next.js',
			'TypeScript',
			'React.js',
			'Tailwind CSS',
			'Shadcn/ui',
			'React Hook Form',
			'Axios',
			'Google Maps',
			'DocuSeal',
		],
		cover: '/image/swaprx/cover.png',
		images: [
			'/image/swaprx/cover.png',
			'/image/swaprx/home.png',
			'/image/swaprx/offres.png',
			'/image/swaprx/offres_map.png',
			'/image/swaprx/about.png',
			'/image/swaprx/contact.png',
			'/image/swaprx/blog.png',
			'/image/swaprx/blogDetails.png',
			'/image/swaprx/moncompte.png',
			'/image/swaprx/mesoofres.png',
			'/image/swaprx/chat.png',
			'/image/swaprx/chat_convo.png',
			'/image/swaprx/contracts.png',
			'/image/swaprx/agenda.png',
		],
		link: 'http://xcelerate.vercel.app/',
		github: 'https://github.com/NotAnsar/xcelerate',
		type: 'front-end',
	},
	{
		title: 'Cadency | Music Web App',
		description:
			'Cadency is a music platform developed using cutting-edge technology, including Next.js 14, Tailwind CSS, and Shadcn UI for styling, Prisma with a PostgreSQL database, and NextAuth for authentication.',
		tags: [
			'Next.js',
			'TypeScript',
			'React.js',
			'Tailwind CSS',
			'Shadcn/ui',
			'Prisma',
			'PostgreSQL',
			'Next Auth',
		],
		cover: '/image/cadency/cover.png',
		images: [
			'/image/cadency/cover.png',
			'/image/cadency/1.png',
			'/image/cadency/2.png',
			'/image/cadency/3.png',
			'/image/cadency/4.png',
			'/image/cadency/5.png',
			'/image/cadency/6.png',
		],
		link: 'http://xcelerate.vercel.app/',
		github: 'https://github.com/NotAnsar/xcelerate',
		type: 'full-stack',
	},
	{
		title: 'AgroApp | SaaS for food traceability',
		description:
			'Cadency is a music platform developed using cutting-edge technology, including Next.js 14, Tailwind CSS, and Shadcn UI for styling, Prisma with a PostgreSQL database, and NextAuth for authentication.',
		tags: [
			'Next.js',
			'TypeScript',
			'React.js',
			'Tailwind CSS',
			'Shadcn/ui',
			'Prisma',
			'PostgreSQL',
			'Next Auth',
		],
		cover: '/image/agro/cover.png',
		images: [
			'/image/cadency/cover.png',
			'/image/cadency/1.png',
			'/image/cadency/2.png',
			'/image/cadency/3.png',
			'/image/cadency/4.png',
			'/image/cadency/5.png',
			'/image/cadency/6.png',
		],
		link: 'http://xcelerate.vercel.app/',
		github: 'https://github.com/NotAnsar/xcelerate',
		type: 'front-end',
	},
	// {
	// 	title: 'E-commerce Platform',
	// 	description:
	// 		'A full-stack e-commerce platform built with Next.js, Tailwind CSS, and MongoDB.',
	// 	tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
	// 	image: '/projects/ecommerce.png',
	// 	link: 'https://my-ecommerce.com',
	// 	github: 'https://github.com/username/ecommerce',
	// 	type: 'front-end',
	// },
	// {
	// 	title: 'Blog Website',
	// 	description: 'A personal blog website built with Next.js and Tailwind CSS.',
	// 	tags: ['Next.js', 'Tailwind CSS'],
	// 	image: '/projects/blog.png',
	// 	link: 'https://my-blog.com',
	// 	github: 'https://github.com/username/blog',
	// 	type: 'full-stack',
	// },
	// {
	// 	title: 'Portfolio Website',
	// 	description:
	// 		'A personal portfolio website built with Next.js and Tailwind CSS.',
	// 	tags: ['Next.js', 'Tailwind CSS'],
	// 	image: '/projects/portfolio.png',
	// 	link: 'https://my-portfolio.com',
	// 	github: 'https://github.com/username/portfolio',
	// 	type: 'front-end',
	// },
	// {
	// 	title: 'E-commerce Platform',
	// 	description:
	// 		'A full-stack e-commerce platform built with Next.js, Tailwind CSS, and MongoDB.',
	// 	tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
	// 	image: '/projects/ecommerce.png',
	// 	link: 'https://my-ecommerce.com',
	// 	github: 'https://github.com/username/ecommerce',
	// 	type: 'front-end',
	// },
	// {
	// 	title: 'Blog Website',
	// 	description: 'A personal blog website built with Next.js and Tailwind CSS.',
	// 	tags: ['Next.js', 'Tailwind CSS'],
	// 	image: '/projects/blog.png',
	// 	link: 'https://my-blog.com',
	// 	github: 'https://github.com/username/blog',
	// 	type: 'full-stack',
	// },
];
