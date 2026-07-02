import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ParticleBackground from '@/components/ParticleBackground';
import LandingEffects from '@/components/LandingEffects';
import SelectedWork from '@/components/SelectedWork';
import { projects } from '@/config/project';
import { jobs, landingStats } from '@/config/home';

const sectionLabel = (num: string, label: string) => (
	<div className='reveal flex items-baseline gap-4 mb-16'>
		<span className='text-[13px] text-(--ds-accent) tracking-[0.2em]'>
			{num}
		</span>
		<h2 className='m-0 text-[15px] tracking-[0.25em] uppercase font-medium text-(--ds-muted)'>
			{label}
		</h2>
	</div>
);

export default function Home() {
	const featured = projects.slice(0, 4);
	const projectCount = String(projects.length).padStart(2, '0');

	return (
		<div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
			<ParticleBackground
				particleCount={500}
				particleOpacity={0.55}
				wirePosition={[8, 1, -4]}
			/>
			<LandingEffects />

			<div className='relative z-[1]'>
				<SiteHeader />

				{/* Hero: full-viewport typographic */}
				<section className='min-h-screen flex flex-col justify-center px-6 sm:px-10 relative'>
					<div className='max-w-[1280px] mx-auto w-full flex flex-col items-center text-center'>
						<div className='overflow-hidden'>
							<div className='hero-line flex items-center gap-3.5 mb-7'>
								<span className='w-9 h-px bg-(--ds-accent)' />
								<p className='m-0 text-[13px] tracking-[0.3em] uppercase text-(--ds-accent) font-medium'>
									Software Engineer
								</p>
								<span className='w-9 h-px bg-(--ds-accent)' />
							</div>
						</div>
						<div className='overflow-hidden pb-[0.08em]'>
							<h1 className='hero-line m-0 text-[clamp(56px,10vw,160px)] font-semibold tracking-[-0.03em] leading-[1.05] text-foreground'>
								Ansar{' '}
								<span className='font-serif italic font-normal tracking-[-0.02em]'>
									Karrouach
								</span>
								<span className='text-(--ds-accent)'>.</span>
							</h1>
						</div>
						<p className='hero-fade mt-7 mb-0 max-w-[480px] text-base leading-[1.7] text-(--ds-muted) font-sans'>
							Turning ideas into fast, considered products with React, Next.js
							and TypeScript. Master&apos;s in Big Data and IoT.
						</p>
						<div className='hero-fade flex items-center gap-2.5 px-[18px] py-[9px] border border-(--ds-accent-30) rounded-full mt-8'>
							<span className='animate-pulse-dot w-[7px] h-[7px] rounded-full bg-[oklch(0.72_0.1_145)] [animation:pulse-dot_2s_infinite]' />
							<span className='text-[13px] text-(--ds-fg-soft)'>
								Open to opportunities
							</span>
						</div>
					</div>
					<div className='hero-fade absolute bottom-8 left-6 right-6 sm:left-10 sm:right-10 flex justify-between items-end'>
						<span className='inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-(--ds-muted2)'>
							<span className='text-(--ds-accent)'>→</span> V2.0
						</span>
						<div className='hidden sm:flex flex-col items-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-0'>
							<span className='text-[11px] tracking-[0.3em] uppercase text-(--ds-muted2)'>
								Scroll
							</span>
							<span className='animate-scroll-hint text-(--ds-accent) [animation:scroll-hint_1.6s_infinite]'>
								↓
							</span>
						</div>
						<div className='flex gap-4 sm:gap-[22px]'>
							<a
								href='https://github.com/NotAnsar'
								target='_blank'
								rel='noopener noreferrer'
								className='text-xs tracking-[0.15em] uppercase text-(--ds-muted) no-underline hover:text-(--ds-accent) transition-colors'
							>
								GitHub
							</a>
							<a
								href='https://linkedin.com/in/ansarkarrouach'
								target='_blank'
								rel='noopener noreferrer'
								className='text-xs tracking-[0.15em] uppercase text-(--ds-muted) no-underline hover:text-(--ds-accent) transition-colors'
							>
								LinkedIn
							</a>
							<a
								href='mailto:karrouach.ansar@gmail.com'
								className='text-xs tracking-[0.15em] uppercase text-(--ds-muted) no-underline hover:text-(--ds-accent) transition-colors'
							>
								Email
							</a>
						</div>
					</div>
				</section>

				{/* Selected work: index list */}
				<section id='work' className='py-[140px] px-6 sm:px-10'>
					<div className='max-w-[1280px] mx-auto'>
						{sectionLabel('01', 'Selected Work')}
						<SelectedWork projects={featured} />
						<div className='reveal flex justify-end mt-8'>
							<Link
								href='/projects'
								className='inline-flex items-center gap-2.5 px-6 py-3 text-[13px] font-medium tracking-[0.12em] uppercase text-foreground border border-(--ds-accent-40) rounded-full no-underline transition-colors duration-300 hover:bg-(--ds-accent-btn-30)'
							>
								All Projects · {projectCount} ↗
							</Link>
						</div>
					</div>
				</section>

				{/* About: single large statement */}
				<section id='about' className='py-[140px] px-6 sm:px-10'>
					<div className='max-w-[1280px] mx-auto'>
						{sectionLabel('02', 'About')}
						<p className='reveal m-0 max-w-[900px] text-[clamp(26px,3.4vw,44px)] font-normal leading-[1.35] tracking-[-0.015em]'>
							I build fast, considered products with{' '}
							<span className='text-(--ds-accent-bright)'>
								React, Next.js and TypeScript
							</span>
							. I hold a Master&apos;s in Big Data and IoT from ENSAM
							Casablanca, and I specialize in component architecture,
							performance and SEO.
						</p>
						<div className='flex gap-12 sm:gap-20 mt-[72px] flex-wrap'>
							{landingStats.map((stat) => (
								<div key={stat.label} className='reveal flex flex-col gap-1.5'>
									<span
										className='count-num text-[56px] font-bold text-(--ds-accent-bright) leading-none'
										data-target={stat.target}
									>
										0
									</span>
									<span className='text-[13px] tracking-[0.15em] uppercase text-(--ds-muted)'>
										{stat.label}
									</span>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Experience: compact */}
				<section className='py-[140px] px-6 sm:px-10'>
					<div className='max-w-[1280px] mx-auto'>
						{sectionLabel('03', 'Experience')}
						<div className='flex flex-col'>
							{jobs.map((job) => (
								<div
									key={`${job.company}-${job.period}`}
									className='reveal grid grid-cols-1 sm:grid-cols-[200px_1fr_auto] gap-2 sm:gap-8 items-baseline py-8 px-2 border-t border-border'
								>
									<span className='text-sm text-(--ds-accent) font-sans'>
										{job.period}
									</span>
									<div className='flex flex-col gap-1'>
										<span className='text-xl font-semibold'>{job.role}</span>
										<span className='text-sm text-(--ds-muted) font-sans'>
											{job.company} · {job.place}
										</span>
									</div>
									<span className='text-[13px] text-(--ds-muted2) tracking-[0.08em] uppercase'>
										{job.stack}
									</span>
								</div>
							))}
							<div className='reveal border-t border-border' />
						</div>
					</div>
				</section>

				{/* Contact: giant CTA */}
				<section id='contact' className='pt-40 pb-[60px] px-6 sm:px-10'>
					<div className='max-w-[1280px] mx-auto'>
						{sectionLabel('04', 'Contact')}
						<div className='grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-[72px] items-end'>
							<div className='flex flex-col gap-7'>
								<p className='reveal m-0 ml-1.5 text-sm tracking-[0.25em] uppercase text-(--ds-accent)'>
									Have a project in mind?
								</p>
								<a
									href='mailto:karrouach.ansar@gmail.com'
									className='reveal inline-block self-start text-[clamp(52px,8.5vw,130px)] font-bold tracking-[-0.04em] leading-none text-foreground no-underline border-b-[3px] border-(--ds-accent-btn) pb-3 transition-colors duration-300 hover:text-(--ds-accent-bright) hover:border-(--ds-accent-bright)'
								>
									LET&apos;S TALK ↗
								</a>
								<p className='reveal m-0 ml-1.5 max-w-[460px] text-[15px] leading-[1.7] text-(--ds-muted) font-sans'>
									Currently open to freelance projects and full-time
									opportunities. Whether you have a question or just want to say
									hi, I usually reply within 24 hours.
								</p>
							</div>
							<div className='reveal flex flex-col'>
								<a
									href='mailto:karrouach.ansar@gmail.com'
									className='flex justify-between items-baseline gap-4 py-5 px-1 border-t border-border no-underline transition-[padding-left] duration-300 hover:pl-3'
								>
									<span className='text-xs tracking-[0.15em] uppercase text-(--ds-muted2)'>
										Email
									</span>
									<span className='text-[15px] text-foreground font-sans'>
										karrouach.ansar@gmail.com ↗
									</span>
								</a>
								<a
									href='https://github.com/NotAnsar'
									target='_blank'
									rel='noopener noreferrer'
									className='flex justify-between items-baseline gap-4 py-5 px-1 border-t border-border no-underline transition-[padding-left] duration-300 hover:pl-3'
								>
									<span className='text-xs tracking-[0.15em] uppercase text-(--ds-muted2)'>
										GitHub
									</span>
									<span className='text-[15px] text-foreground font-sans'>
										@NotAnsar ↗
									</span>
								</a>
								<a
									href='https://linkedin.com/in/ansarkarrouach'
									target='_blank'
									rel='noopener noreferrer'
									className='flex justify-between items-baseline gap-4 py-5 px-1 border-t border-border no-underline transition-[padding-left] duration-300 hover:pl-3'
								>
									<span className='text-xs tracking-[0.15em] uppercase text-(--ds-muted2)'>
										LinkedIn
									</span>
									<span className='text-[15px] text-foreground font-sans'>
										ansarkarrouach ↗
									</span>
								</a>
								<div className='flex justify-between items-baseline gap-4 py-5 px-1 border-t border-b border-border'>
									<span className='text-xs tracking-[0.15em] uppercase text-(--ds-muted2)'>
										Location
									</span>
									<span className='text-[15px] text-foreground font-sans'>
										Casablanca, Morocco
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<SiteFooter />
			</div>
		</div>
	);
}
