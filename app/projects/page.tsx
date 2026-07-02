import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ParticleBackground from '@/components/ParticleBackground';
import ProjectsIndex from '@/components/ProjectsIndex';
import { projects, tabs } from '@/config/project';

export const metadata = {
	title: 'Projects | Ansar Karrouach',
	description:
		'A selection of my recent work in web development: Next.js, TypeScript, and full-stack applications.',
};

export default function Page() {
	return (
		<div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
			<ParticleBackground
				particleCount={350}
				particleOpacity={0.45}
				wirePosition={[-8, -2, -4]}
			/>

			<div className='relative z-[1]'>
				<SiteHeader />

				<ProjectsIndex projects={projects} tabs={tabs} />

				{/* CTA + shared footer */}
				<section className='px-6 sm:px-10 pb-[72px]'>
					<div className='max-w-[1280px] mx-auto'>
						<Link
							href='/#contact'
							className='inline-block text-[clamp(36px,6vw,80px)] font-bold tracking-[-0.04em] leading-none text-foreground no-underline border-b-[3px] border-(--ds-accent-btn) pb-2.5 transition-colors duration-300 hover:text-(--ds-accent-bright)'
						>
							START A PROJECT ↗
						</Link>
					</div>
				</section>
				<SiteFooter />
			</div>
		</div>
	);
}
