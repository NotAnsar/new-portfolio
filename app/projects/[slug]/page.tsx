import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ParticleBackground from '@/components/ParticleBackgroundLazy';
import ProjectDetailEffects from '@/components/ProjectDetailEffects';
import { projects } from '@/config/project';

const caseStudies = projects.filter((p) => p.slug);
const typeLabel = { 'front-end': 'Front-end', 'full-stack': 'Full-stack' };

function projectLinks(project: (typeof projects)[number]) {
	const links: { label: string; href: string }[] = [];
	if (project.link) links.push({ label: 'View Live', href: project.link });
	if (project.github)
		links.push({ label: 'Source Code', href: project.github });
	if (project.frontendRepo)
		links.push({ label: 'Frontend Repo', href: project.frontendRepo });
	if (project.backendRepo)
		links.push({ label: 'Backend Repo', href: project.backendRepo });
	if (project.youtube)
		links.push({ label: 'Watch Demo', href: project.youtube });
	return links;
}

export function generateStaticParams() {
	return caseStudies.map((p) => ({ slug: p.slug! }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = caseStudies.find((p) => p.slug === slug);
	if (!project) return {};
	const name = project.title.split(' | ')[0];
	return {
		title: `${name} | Ansar Karrouach`,
		description: project.tagline ?? project.description,
	};
}

export default async function ProjectDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const idx = caseStudies.findIndex((p) => p.slug === slug);
	if (idx === -1) notFound();

	const project = caseStudies[idx];
	const next = caseStudies[(idx + 1) % caseStudies.length];
	const name = project.title.split(' | ')[0];
	const nextName = next.title.split(' | ')[0];
	const links = projectLinks(project);
	const caseNum = `${String(idx + 1).padStart(2, '0')} / ${String(
		caseStudies.length
	).padStart(2, '0')}`;

	return (
		<div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
			<ParticleBackground
				particleCount={300}
				particleOpacity={0.45}
				wirePosition={[-8, -2, -4]}
			/>
			<ProjectDetailEffects />

			<div className='relative z-[1]'>
				<SiteHeader />

				{/* Case study hero */}
				<section className='pt-[170px] px-6 sm:px-10'>
					<div className='max-w-[1280px] mx-auto'>
						<div className='overflow-hidden'>
							<div className='hero-line flex items-center gap-3.5 mb-5 flex-wrap'>
								<Link
									href='/projects'
									className='text-[13px] tracking-[0.2em] uppercase text-(--ds-muted) no-underline hover:text-(--ds-accent) transition-colors'
								>
									← All work
								</Link>
								<span className='w-9 h-px bg-(--ds-accent)' />
								<span className='text-[13px] tracking-[0.25em] uppercase text-(--ds-accent) font-medium'>
									Case study {caseNum}
								</span>
							</div>
						</div>
						<div className='overflow-hidden pb-[0.08em]'>
							<h1 className='hero-line m-0 text-[clamp(56px,10vw,150px)] font-semibold tracking-[-0.03em] leading-none'>
								{name}
								<span className='text-(--ds-accent)'>.</span>
							</h1>
						</div>
						<div className='hero-fade flex justify-between items-end mt-8 flex-wrap gap-6'>
							<p className='m-0 max-w-[520px] text-[17px] leading-[1.7] text-(--ds-muted) font-sans'>
								{project.tagline}
							</p>
							{links.length > 0 && (
								<div className='flex gap-3 flex-wrap'>
									{links.map((l) => (
										<a
											key={l.href}
											href={l.href}
											target='_blank'
											rel='noopener noreferrer'
											className='inline-flex items-center gap-2 px-[22px] py-[11px] text-xs font-medium tracking-[0.12em] uppercase text-foreground border border-(--ds-accent-40) rounded-full no-underline transition-colors duration-300 hover:bg-(--ds-accent-btn-30)'
										>
											{l.label} ↗
										</a>
									))}
								</div>
							)}
						</div>

						{/* Meta strip */}
						<div className='hero-fade grid grid-cols-2 sm:grid-cols-4 gap-8 mt-14 border-t border-border pt-7'>
							<div className='flex flex-col gap-1.5'>
								<span className='text-[11px] tracking-[0.25em] uppercase text-(--ds-muted2)'>
									Year
								</span>
								<span className='text-[15px] text-(--ds-fg-soft) font-sans'>
									{project.year}
								</span>
							</div>
							<div className='flex flex-col gap-1.5'>
								<span className='text-[11px] tracking-[0.25em] uppercase text-(--ds-muted2)'>
									Role
								</span>
								<span className='text-[15px] text-(--ds-fg-soft) font-sans'>
									{project.role}
								</span>
							</div>
							<div className='flex flex-col gap-1.5'>
								<span className='text-[11px] tracking-[0.25em] uppercase text-(--ds-muted2)'>
									Type
								</span>
								<span className='text-[15px] text-(--ds-fg-soft) font-sans'>
									{project.projectType}
								</span>
							</div>
							<div className='flex flex-col gap-1.5'>
								<span className='text-[11px] tracking-[0.25em] uppercase text-(--ds-muted2)'>
									Stack
								</span>
								<span className='text-[15px] text-(--ds-fg-soft) font-sans'>
									{project.tags.slice(0, 4).join(', ')}
								</span>
							</div>
						</div>
					</div>
				</section>

				{/* Cover */}
				<section className='pt-[72px] px-6 sm:px-10'>
					<div className='reveal max-w-[1280px] mx-auto rounded-[14px] overflow-hidden border border-border relative aspect-video'>
						<Image
							src={project.cover}
							alt={name}
							fill
							sizes='(max-width: 1280px) 100vw, 1280px'
							className='object-cover object-top'
							priority
						/>
					</div>
				</section>

				{/* 01 Overview */}
				<section className='pt-[120px] px-6 sm:px-10'>
					<div className='max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-[72px] items-start'>
						<div className='reveal flex items-baseline gap-4'>
							<span className='text-[13px] text-(--ds-accent) tracking-[0.2em]'>
								01
							</span>
							<h2 className='m-0 text-[15px] tracking-[0.25em] uppercase font-medium text-(--ds-muted)'>
								Overview
							</h2>
						</div>
						<div className='flex flex-col gap-10'>
							<p className='reveal m-0 text-[clamp(22px,2.4vw,32px)] font-normal leading-[1.45] tracking-[-0.01em]'>
								{project.overview}
							</p>
							<p className='reveal m-0 text-base leading-[1.75] text-(--ds-muted) font-sans whitespace-pre-line'>
								{project.description}
							</p>
						</div>
					</div>
				</section>

				{/* 02 Highlights */}
				<section className='pt-[120px] px-6 sm:px-10'>
					<div className='max-w-[1280px] mx-auto'>
						<div className='reveal flex items-baseline gap-4 mb-12'>
							<span className='text-[13px] text-(--ds-accent) tracking-[0.2em]'>
								02
							</span>
							<h2 className='m-0 text-[15px] tracking-[0.25em] uppercase font-medium text-(--ds-muted)'>
								Highlights
							</h2>
						</div>
						<div className='flex flex-col'>
							{(project.highlights ?? []).map((h, i) => (
								<div
									key={h.title}
									className='reveal grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-3 sm:gap-8 items-baseline py-[30px] px-2 border-t border-border'
								>
									<span className='text-sm text-(--ds-muted2) font-sans'>
										{String(i + 1).padStart(2, '0')}
									</span>
									<div className='flex flex-col gap-2'>
										<span className='text-[clamp(18px,2vw,24px)] font-semibold tracking-[-0.01em]'>
											{h.title}
										</span>
										<span className='text-[15px] text-(--ds-muted) font-sans leading-[1.65] max-w-[720px]'>
											{h.body}
										</span>
									</div>
								</div>
							))}
							<div className='reveal border-t border-border' />
						</div>
						<div className='reveal flex flex-wrap gap-2 mt-10'>
							{project.tags.map((tag) => (
								<span
									key={tag}
									className='text-xs text-(--ds-muted) border border-(--ds-border-2) px-3.5 py-1.5 rounded-full font-sans'
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</section>

				{/* 03 Gallery */}
				<section className='pt-[120px] px-6 sm:px-10'>
					<div className='max-w-[1280px] mx-auto'>
						<div className='reveal flex items-baseline gap-4 mb-12'>
							<span className='text-[13px] text-(--ds-accent) tracking-[0.2em]'>
								03
							</span>
							<h2 className='m-0 text-[15px] tracking-[0.25em] uppercase font-medium text-(--ds-muted)'>
								Inside the app
							</h2>
						</div>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
							{(project.gallery ?? []).map((g) => (
								<div key={g.src} className='reveal flex flex-col gap-3.5'>
									<div className='relative aspect-[16/10] overflow-hidden rounded-xl border border-border'>
										<Image
											src={g.src}
											alt={g.label}
											fill
											sizes='(max-width: 640px) 100vw, 620px'
											className='object-cover object-top'
										/>
									</div>
									<span className='text-[13px] tracking-[0.12em] uppercase text-(--ds-muted2)'>
										{g.label}
									</span>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Next project */}
				<section className='pt-[150px] pb-[60px] px-6 sm:px-10'>
					<div className='max-w-[1280px] mx-auto'>
						<Link
							href={`/projects/${next.slug}`}
							className='reveal flex flex-col items-center gap-4.5 no-underline py-16 px-6 border border-border rounded-2xl transition-colors duration-[350ms] hover:border-(--ds-accent-40) hover:bg-(--ds-row-hover)'
						>
							<span className='text-xs tracking-[0.3em] uppercase text-(--ds-muted2)'>
								Next case study
							</span>
							<span className='text-[clamp(40px,6vw,88px)] font-semibold tracking-[-0.03em] text-foreground leading-none'>
								{nextName} <span className='text-(--ds-accent)'>→</span>
							</span>
							<span className='text-[13px] tracking-[0.12em] uppercase text-(--ds-muted)'>
								{next.category} · {typeLabel[next.type]}
							</span>
						</Link>
					</div>
				</section>

				<SiteFooter />
			</div>
		</div>
	);
}
