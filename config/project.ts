export const tabs = [
	{ label: 'All', value: 'all' },
	{ label: 'Front-end', value: 'front-end' },
	{ label: 'Full-stack', value: 'full-stack' },
];

export type Highlight = { title: string; body: string };
export type GalleryImage = { src: string; label: string };

export type Project = {
	title: string;
	category: string;
	focus?: string;
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
	/** Case-study detail page (app/projects/[slug]) — omitted for projects without one */
	slug?: string;
	year?: string;
	role?: string;
	projectType?: string;
	tagline?: string;
	overview?: string;
	highlights?: Highlight[];
	gallery?: GalleryImage[];
};
export const projects: Project[] = [
	{
		title: 'Sounding Future | Music & 3D Audio Platform',
		category: 'Audio-Tech Platform',
		focus: 'Next.js',
		description:
			'Sounding Future is a platform for contemporary music creation and 3D audio technology, featuring 105+ in-depth articles from practitioners and researchers, self-paced spatial-audio courses, and curated resources for sound practice.\nAs the sole full-stack developer, I built this custom editorial platform end to end, from architecture to deployment: React/Next.js frontend, Node.js API, database modeling and authentication, role-based access control (author/editor/admin), structured content workflows, and a Tiptap v3 rich text editor with custom React extensions. Deployed on Docker, Coolify, and Traefik with AWS S3 and automated PostgreSQL backups.',
		tags: [
			'Next.js',
			'TypeScript',
			'Node.js',
			'Tiptap v3',
			'PostgreSQL',
			'Tailwind CSS',
			'AWS S3',
			'Docker',
			'Coolify',
		],
		cover: '/image/soundingfuture/cover.png',
		images: [
			'/image/soundingfuture/cover.png',
			'/image/soundingfuture/articles.png',
			'/image/soundingfuture/listen.png',
			'/image/soundingfuture/learn.png',
			'/image/soundingfuture/whats-on.png',
		],
		link: 'https://www.soundingfuture.com/',
		type: 'full-stack',
		slug: 'soundingfuture',
		year: '2024 – 2026',
		role: 'Sole Full Stack Developer',
		projectType: 'Freelance, production',
		tagline:
			'A custom editorial platform for contemporary music creation and 3D audio technology, with 105+ articles and self-paced spatial-audio courses.',
		overview:
			'Sounding Future turns a niche audio-tech publication into a full editorial platform, built and operated end to end by one developer.',
		highlights: [
			{
				title: 'Custom editorial platform',
				body: 'Role-based access control (author/editor/admin), structured content workflows, and a Tiptap v3 rich text editor with custom React extensions for a 105+ article library.',
			},
			{
				title: 'Sister platform: AudioSpace',
				body: 'Also sole developer of AudioSpace, the subscription audio streaming and LMS platform serving 300+ artists and 400+ tracks with Stripe payments.',
			},
			{
				title: 'Owned infrastructure',
				body: 'Docker, Coolify and Traefik deployment with AWS S3 storage and automated PostgreSQL backups, run solo in production.',
			},
		],
		gallery: [
			{ src: '/image/soundingfuture/articles.png', label: 'Articles' },
			{ src: '/image/soundingfuture/listen.png', label: '3D AudioSpace' },
			{ src: '/image/soundingfuture/learn.png', label: 'Courses' },
			{ src: '/image/soundingfuture/whats-on.png', label: "What's on" },
		],
	},
	{
		title: 'SwapRX | Radiology Replacement Platform',
		category: 'Healthcare',
		focus: 'Next.js',
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
		slug: 'swaprx',
		year: '2024',
		role: 'Frontend Developer',
		projectType: 'Client project',
		tagline:
			'A recruitment platform connecting radiology professionals with clinics, from discovery to signed contract.',
		overview:
			'SwapRX turns a slow, paperwork-heavy hiring process into a single flow: find a mission on the map, apply, and sign digitally.',
		highlights: [
			{
				title: 'Map-based job discovery',
				body: 'Interactive Google Maps view with clustered missions, filtering, and location-aware search so radiologists find nearby placements at a glance.',
			},
			{
				title: 'Digital contract signing',
				body: 'DocuSeal integration generating contracts from mission data and capturing legally binding electronic signatures without leaving the platform.',
			},
			{
				title: 'Multi-step onboarding',
				body: 'Guided registration with document upload, validation and progress persistence, cutting drop-off in the sign-up funnel.',
			},
		],
		gallery: [
			{ src: '/image/swaprx/home.png', label: 'Home' },
			{ src: '/image/swaprx/offres_map.png', label: 'Map-based job discovery' },
			{ src: '/image/swaprx/chat_convo.png', label: 'Messaging' },
			{ src: '/image/swaprx/contracts.png', label: 'Contracts' },
		],
	},
	{
		title: 'Orava | E-commerce Dashboard with AI Assistant',
		category: 'AI Dashboard',
		focus: 'Spring Boot',
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
		slug: 'orava',
		year: '2025',
		role: 'Full Stack Developer',
		projectType: 'Personal project',
		tagline:
			'An intelligent e-commerce dashboard with AI-powered analytics and automated insights.',
		overview:
			'Orava gives store operators one screen for inventory, sales and AI-generated recommendations.',
		highlights: [
			{
				title: 'AI-assisted analytics',
				body: 'Automated insight generation over sales and inventory data, surfacing anomalies and recommendations.',
			},
			{
				title: 'Java backend, typed frontend',
				body: 'Spring Boot REST API consumed by a fully typed Next.js dashboard with Chart.js visualizations.',
			},
			{
				title: 'S3 media pipeline',
				body: 'Product imagery stored and served through AWS S3 with signed access.',
			},
		],
		gallery: [
			{ src: '/image/orava/home.png', label: 'Dashboard' },
			{ src: '/image/orava/products.png', label: 'Products' },
			{ src: '/image/orava/analytics.png', label: 'Analytics' },
			{ src: '/image/orava/kanban.png', label: 'Kanban' },
		],
	},
	{
		title: 'AudioSpace | Music Streaming Platform',
		category: 'Music Platform',
		focus: 'AWS',
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
		slug: 'audiospace',
		year: '2024 – 2026',
		role: 'Sole Full Stack Developer',
		projectType: 'Freelance, production',
		tagline:
			'A subscription audio streaming and learning platform serving 300+ artists and 400+ tracks.',
		overview:
			'AudioSpace pairs a streaming catalogue with structured audio courses, built and operated end to end by one developer.',
		highlights: [
			{
				title: '300+ artists, 400+ tracks',
				body: 'Production catalogue with S3-backed audio delivery, focused on performance and accessibility across devices.',
			},
			{
				title: 'Stripe subscriptions',
				body: 'Tiered subscription model with webhooks-driven entitlements gating streaming and course access.',
			},
			{
				title: 'Owned infrastructure',
				body: 'Dockerized deployment on Coolify with Traefik routing and automated PostgreSQL backups, run solo in production.',
			},
		],
		gallery: [
			{ src: '/image/audiospace/home.png', label: 'Home' },
			{ src: '/image/audiospace/tracks.png', label: 'Track catalogue' },
			{ src: '/image/audiospace/courses.png', label: 'Audio courses' },
			{ src: '/image/audiospace/artists.png', label: 'Artists' },
		],
	},

	{
		title: 'Cadency | Music Web App',
		category: 'Music App',
		focus: 'Next.js 14',
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
		slug: 'cadency',
		year: '2024',
		role: 'Full Stack Developer',
		projectType: 'Personal project',
		tagline: 'A music platform focused on a curated listening experience.',
		overview:
			'Cadency is a clean, fast music web app built on the modern Next.js stack.',
		highlights: [
			{
				title: 'Curated listening',
				body: 'Playlist and collection system designed around discovery rather than infinite scroll.',
			},
			{
				title: 'Modern auth',
				body: 'NextAuth with email and OAuth providers over a Prisma/PostgreSQL data layer.',
			},
			{
				title: 'Polished UI',
				body: 'Shadcn UI component system with a fully responsive player.',
			},
		],
		gallery: [
			{ src: '/image/cadency/HomeDark.png', label: 'Home' },
			{ src: '/image/cadency/artist.png', label: 'Artist page' },
			{ src: '/image/cadency/search.png', label: 'Search' },
		],
	},
	{
		title: 'AgroApp | SaaS for food traceability',
		category: 'SaaS',
		description:
			'AgroApp is the frontend of a web application for hygiene and food traceability in the agri-food sector. Built with React, Next.js, TypeScript, Tailwind CSS, Axios, and Nodemailer, it offers a responsive and intuitive interface for managing temperature logs, cleaning schedules, checklists, labeling, and real-time dashboards, designed for professionals like restaurants, caterers, and food retailers.',
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
		slug: 'agro',
		year: '2024',
		role: 'Frontend Developer',
		projectType: 'Client project',
		tagline: 'A hygiene and food-traceability SaaS for the agri-food sector.',
		overview:
			'AgroApp digitizes hygiene compliance for restaurants, caterers and food retailers.',
		highlights: [
			{
				title: 'Compliance workflows',
				body: 'Temperature logging, cleaning schedules and checklist flows mapped to real regulatory processes.',
			},
			{
				title: 'Live dashboards',
				body: 'Recharts-powered dashboards giving managers real-time visibility across sites.',
			},
			{
				title: 'Data-dense UI',
				body: 'Tables, filters and forms designed for daily operational use on tablets and desktops.',
			},
		],
		gallery: [
			{ src: '/image/agro/dashboard.png', label: 'Dashboard' },
			{ src: '/image/agro/landing.png', label: 'Landing' },
			{ src: '/image/agro/page.png', label: 'Operations' },
		],
	},
	{
		title: 'Connectify | Social Media App',
		category: 'Social Media',
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
		slug: 'connectify',
		year: '2023',
		role: 'Full Stack Developer',
		projectType: 'Internship project',
		tagline:
			'A real-time social media application with messaging and live presence.',
		overview:
			'Connectify covers the full social loop: profiles, sharing, and real-time conversation.',
		highlights: [
			{
				title: 'Real-time messaging',
				body: 'Socket.io channels for instant messaging and live presence indicators.',
			},
			{
				title: 'JWT-secured API',
				body: 'RESTful Express API with JWT authentication, exercised through Postman test collections.',
			},
			{
				title: 'Full social loop',
				body: 'Profiles, follows, posts and comments over a normalized MySQL schema.',
			},
		],
		gallery: [
			{ src: '/image/connectify/Home.png', label: 'Feed' },
			{ src: '/image/connectify/Chat.png', label: 'Real-time chat' },
			{ src: '/image/connectify/Profile.png', label: 'Profile' },
		],
	},
	{
		title: 'Xcelerate | Tech Landing Page',
		category: 'Landing Page',
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
		category: 'Personal Site',
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
