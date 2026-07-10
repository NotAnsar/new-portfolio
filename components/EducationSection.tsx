import type { EducationColumn } from '@/config/home';

export default function EducationSection({
	columns,
}: {
	columns: EducationColumn[];
}) {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8'>
			{columns.map((col) => (
				<div
					key={col.heading}
					className='reveal flex flex-col gap-4 pt-6 border-t border-border'
				>
					<div className='flex flex-col gap-1.5'>
						<span className='text-lg font-semibold tracking-[-0.01em]'>
							{col.heading}
						</span>
						<span className='text-sm text-(--ds-muted) font-sans'>
							{col.subheading}
						</span>
					</div>
					<ul className='m-0 p-0 list-none flex flex-col gap-2'>
						{col.items.map((item) => (
							<li
								key={item}
								className='text-[13px] text-(--ds-muted2) tracking-[0.04em] font-sans'
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
