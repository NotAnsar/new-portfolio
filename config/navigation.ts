import { Github, Linkedin, Mail } from 'lucide-react';

export const navigationItems = [
	{ href: '/', label: 'Home' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/skills', label: 'Skills' },
	{ href: '/contact', label: 'Contact' },
];

export const socialLinks = [
	{
		href: 'mailto:karrouach.ansar@gmail.com',
		icon: Mail,
		label: 'Email',
		value: 'karrouach.ansar@gmail.com',
	},
	{
		href: 'https://github.com/NotAnsar',
		icon: Github,
		label: 'GitHub',
		value: 'github.com/NotAnsar',
	},
	{
		href: 'https://linkedin.com/in/ansarkarrouach/',
		icon: Linkedin,
		label: 'LinkedIn',
		value: 'linkedin.com/in/ansarkarrouach',
	},
];

export const siteStats = {
	yearsExperience: '2+',
	projectsCompleted: '8+',
};
