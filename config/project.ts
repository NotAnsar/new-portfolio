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
	link?: string;
	github?: string;
	frontendRepo?: string;
	backendRepo?: string;
	youtube?: string;
	type: 'front-end' | 'full-stack';
};
export const projects: Project[] = [
	{
		title: 'SwapRX | Radiology Replacement Platform',
		description:
			'SwapRx is a healthcare recruitment platform frontend for the radiology sector, built with Next.js, TypeScript, React.js, Tailwind CSS, Shadcn/ui, React Hook Form, and Axios. It includes features like job listings, user registration, calendar views, document uploads, and an interactive map powered by Google Maps. DocuSeal integration enables seamless contract generation and electronic signatures.',
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
		type: 'front-end',
		link: 'https://www.swapsante.online/',
	},
	{
		title: 'Orava | E-commerce Dashboard with AI Assistant',
		description:
			'An intelligent e-commerce dashboard featuring AI-powered analytics, inventory management, sales tracking, and automated insights. Designed to streamline business operations with modern UI/UX principles.',
		tags: [
			'Spring Boot',
			'Next.js',
			'React.js',
			'Java',
			'TypeScript',
			'AWS S3',
			'Tailwind CSS',
			'Shadcn/ui',
			'Axios',
			'AI ADK',
			'Chart.js',
		],
		cover: '/image/orava/login.png',
		images: [
			'/image/orava/home.png',
			'/image/orava/analytics.png',
			'/image/orava/user.png',
			'/image/orava/categories.png',
			'/image/orava/products.png',
			'/image/orava/add_product.png',
			'/image/orava/order_details.png',
			'/image/orava/login_dark.png',
			'/image/orava/order_list.png',
			'/image/orava/kanban.png',
			'/image/orava/calendar.png',
		],
		backendRepo: 'https://github.com/NotAnsar/orava-api/',
		frontendRepo: 'https://github.com/NotAnsar/orava-front/',
		type: 'full-stack',
	},
	{
		title: 'AudioSpace | Music Streaming Platform',
		description:
			'AudioSpace is a music-focused web platform with integrated learning features. It delivers curated audio-based courses through a clean, minimalist interface, with a strong focus on performance and accessibility.\nIt includes a full LMS for structured learning and is built using Next.js, TypeScript, ShadCN UI, Prisma, and PostgreSQL, with Amazon S3 for efficient file uploads and audio storage.',
		tags: [
			'Next.js',
			'TypeScript',
			'S3 Bucket',
			'Tailwind CSS',
			'Shadcn/ui',
			'Prisma',
			'PostgreSQL',
			'Next Auth',
		],
		cover: '/image/audiospace/login.png',
		images: [
			'/image/audiospace/home.png',
			'/image/audiospace/tracks.png',
			'/image/audiospace/artists.png',
			'/image/audiospace/courses.png',
			'/image/audiospace/courses_details.png',
			'/image/audiospace/curated.png',
			'/image/audiospace/curated_details.png',
			'/image/audiospace/genres.png',
			'/image/audiospace/login.png',

			'/image/audiospace/artist_tracks.png',
			'/image/audiospace/track_details.png',
			'/image/audiospace/help_center.png',
			'/image/audiospace/followed.png',
			'/image/audiospace/liked.png',
			'/image/audiospace/my_learning.png',
			'/image/audiospace/about.png',
			'/image/audiospace/legal.png',
			'/image/audiospace/support_us.png',
		],
		link: 'https://audiospace.soundingfuture.com/',
		type: 'full-stack',
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
			'/image/cadency/landing.png',
			'/image/cadency/landing_light.png',
			'/image/cadency/HomeDark.png',
			'/image/cadency/HomeLight.png',
			'/image/cadency/artist.png',
			'/image/cadency/album.png',
			'/image/cadency/search.png',
			'/image/cadency/setting.png',
			'/image/cadency/Sign_in.png',
		],
		youtube: 'https://www.youtube.com/watch?v=rZtQ6qjDk0I',
		link: 'https://cadency-music.vercel.app/',
		github: 'http://github.com/NotAnsar/cadency',
		type: 'full-stack',
	},
	{
		title: 'AgroApp | SaaS for food traceability',
		description:
			'AgroApp is the frontend of a web application for hygiene and food traceability in the agri-food sector. Built with React, Next.js, TypeScript, Tailwind CSS, Axios, and Nodemailer, it offers a responsive and intuitive interface for managing temperature logs, cleaning schedules, checklists, labeling, and real-time dashboards—designed for professionals like restaurants, caterers, and food retailers.',
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
			'/image/agro/cover.png',
			'/image/agro/landing.png',
			'/image/agro/landing_light.png',
			'/image/agro/login.png',
			'/image/agro/register.png',
			'/image/agro/dashboard.png',
			'/image/agro/dashboard_light.png',
			'/image/agro/page.png',
			'/image/agro/page_light.png',
		],
		type: 'front-end',
	},
	{
		title: 'Connectify | Social Media App',
		description:
			'Connectify is a social media application developed using React.js, Node.js, SCSS, Express.js, and MySQL as the database.',
		tags: [
			'React.js',
			'Javascipt',
			'Node.js',
			'ExpressJS',
			'MySQL',
			'SCSS',
			'MERN Stack',
		],
		cover: '/image/connectify/cover.png',
		images: [
			'/image/connectify/cover.png',
			'/image/connectify/Home.png',
			'/image/connectify/Profile.png',
			'/image/connectify/Login.png',
			'/image/connectify/Chat.png',
			'/image/connectify/Setting.png',
		],
		youtube: 'https://www.youtube.com/watch?v=M3_dqIESm5Y',
		frontendRepo: 'https://github.com/NotAnsar/connectify-client',
		backendRepo: 'https://github.com/NotAnsar/connectify-api',
		type: 'full-stack',
	},
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
		title: 'Portfolio V1 | Personal Website',
		description:
			'Explore my portfolio v1 website with a sleek dark/light mode switch, built using Next.js, Tailwind CSS, and Shadcn UI, with TypeScript for robustness. Integrated Figma for UI/UX design and Nodemailer for a seamless contact form experience. Discover my work, skills, and experiences in a modern, user-friendly design.',
		tags: [
			'Next.js',
			'TypeScript',
			'React.js',
			'Framer Motion',
			'Tailwind CSS',
			'Shadcn/ui',
			'Nodemailer',
			'Figma',
		],
		cover: '/image/portfolio-v1/cover.png',
		images: [
			'/image/portfolio-v1/landing.png',
			'/image/portfolio-v1/landing_light.png',
		],
		github: 'https://github.com/NotAnsar/ansar-portfolio',
		link: 'https://ansar.vercel.app/',
		type: 'front-end',
	},
];
