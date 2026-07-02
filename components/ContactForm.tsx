'use client';

import { useActionState } from 'react';
import { submitContactForm, type State } from '@/lib/actions';

const labelClass = 'text-xs tracking-[0.15em] uppercase text-(--ds-muted2)';
const inputClass =
	'bg-transparent border-0 border-b border-(--ds-border-3) px-0.5 py-2.5 text-base text-foreground font-sans outline-none rounded-none transition-colors duration-300 focus:border-(--ds-accent) placeholder:text-(--ds-muted2)';

export default function ContactForm() {
	const [state, formAction, isPending] = useActionState<State, FormData>(
		submitContactForm,
		{}
	);

	return (
		<form action={formAction} className='reveal flex flex-col gap-10'>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
				<label className='flex flex-col gap-2.5'>
					<span className={labelClass}>Your name</span>
					<input
						type='text'
						name='name'
						placeholder='John Doe'
						defaultValue={state.data?.name}
						className={inputClass}
					/>
					{state.errors?.name && (
						<span className='text-xs text-destructive font-sans'>
							{state.errors.name[0]}
						</span>
					)}
				</label>
				<label className='flex flex-col gap-2.5'>
					<span className={labelClass}>Your email</span>
					<input
						type='email'
						name='email'
						placeholder='john@company.com'
						defaultValue={state.data?.email}
						className={inputClass}
					/>
					{state.errors?.email && (
						<span className='text-xs text-destructive font-sans'>
							{state.errors.email[0]}
						</span>
					)}
				</label>
			</div>
			<label className='flex flex-col gap-2.5'>
				<span className={labelClass}>Message</span>
				<textarea
					name='message'
					rows={4}
					placeholder='What are we building?'
					defaultValue={state.data?.message}
					className={`${inputClass} resize-y min-h-24`}
				/>
				{state.errors?.message && (
					<span className='text-xs text-destructive font-sans'>
						{state.errors.message[0]}
					</span>
				)}
			</label>
			<div className='flex items-center gap-5 flex-wrap'>
				<button
					type='submit'
					disabled={isPending}
					className='inline-flex items-center gap-2.5 px-8 py-3.5 text-[13px] font-medium tracking-[0.15em] uppercase text-background bg-foreground border border-foreground rounded-full cursor-pointer transition-colors duration-300 hover:bg-(--ds-accent-btn) hover:border-(--ds-accent-btn) hover:text-[oklch(0.985_0_0)] disabled:opacity-60 disabled:cursor-default'
				>
					{isPending
						? 'Sending...'
						: state.success
						? 'Message sent'
						: 'Send message'}{' '}
					→
				</button>
				<span className='text-[13px] text-(--ds-muted2) font-sans'>
					{state.message ?? 'I usually reply within 24 hours.'}
				</span>
			</div>
		</form>
	);
}
