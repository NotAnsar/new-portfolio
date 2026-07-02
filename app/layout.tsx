import type { Metadata } from 'next';
import {
	Inter as FontSans,
	Space_Grotesk as FontSecondary,
	Instrument_Serif as FontSerif,
} from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { Toaster } from 'sonner';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
	weight: ['200', '300', '400', '500', '600', '700'],
});
const fontSecondary = FontSecondary({
	subsets: ['latin'],
	variable: '--font-secondary',
});
const fontSerif = FontSerif({
	subsets: ['latin'],
	variable: '--font-serif',
	weight: '400',
	style: 'italic',
});

export const metadata: Metadata = {
	title: 'Ansar Karrouach | Full Stack Developer',
	description:
		'Full Stack Developer specializing in React, Next.js, and Spring Boot. Building scalable web applications with modern technologies.',
	keywords: [
		'Full Stack Developer',
		'React',
		'Next.js',
		'Spring Boot',
		'TypeScript',
		'Web Developer',
		'Morocco',
	],
	authors: [{ name: 'Ansar Karrouach' }],
	creator: 'Ansar Karrouach',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		title: 'Ansar Karrouach | Full Stack Developer',
		description:
			'Full Stack Developer specializing in React, Next.js, and Spring Boot.',
		siteName: 'Ansar Karrouach Portfolio',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ansar Karrouach | Full Stack Developer',
		description:
			'Full Stack Developer specializing in React, Next.js, and Spring Boot.',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				suppressHydrationWarning
				className={cn(
					`${fontSans.variable} ${fontSecondary.variable} ${fontSerif.variable} antialiased`,
					'font-secondary bg-background text-foreground min-h-screen',
				)}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
