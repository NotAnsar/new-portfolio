'use client';

import { useActionState, useEffect, useRef } from 'react';
import { submitContactForm, type State } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useTheme } from 'next-themes';

export function ContactForm() {
	const [state, formAction, isPending] = useActionState<State, FormData>(
		submitContactForm,
		{ message: '', errors: {}, data: {} }
	);

	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (state.success) {
			toast.success(state.message || 'Message sent successfully!', {
				unstyled: true,
				className:
					'text-foreground dark:bg-secondary border-input flex rounded-md border p-3 shadow-xs text-[13px] gap-2 font-semibold w-fit items-center ',
			});
			formRef.current?.reset();
		}
	}, [state]);

	return (
		<form
			ref={formRef}
			action={formAction}
			className='flex flex-col gap-4 mt-4 max-w-screen-sm'
		>
			<div>
				<Label htmlFor='name'>Name</Label>
				<Input
					id='name'
					placeholder='Your Name'
					className='mt-2 h-12 focus:ring-2 focus:ring-primary focus:border-transparent transition-all'
					name='name'
					defaultValue={state.data?.name || ''}
					required
				/>
				{state.errors?.name && (
					<p className='text-destructive text-sm mt-1'>
						{state.errors.name[0]}
					</p>
				)}
			</div>

			<div>
				<Label htmlFor='email'>Email</Label>
				<Input
					id='email'
					type='email'
					placeholder='your.email@example.com'
					className='mt-2 h-12 focus:ring-2 focus:ring-primary focus:border-transparent transition-all'
					name='email'
					defaultValue={state.data?.email || ''}
					required
				/>
				{state.errors?.email && (
					<p className='text-destructive text-sm mt-1'>
						{state.errors.email[0]}
					</p>
				)}
			</div>

			<div>
				<Label htmlFor='subject'>Subject</Label>
				<Input
					id='subject'
					placeholder='What is this about?'
					className='mt-2 h-12 focus:ring-2 focus:ring-primary focus:border-transparent transition-all'
					name='subject'
					defaultValue={state.data?.subject || ''}
					required
				/>
				{state.errors?.subject && (
					<p className='text-destructive text-sm mt-1'>
						{state.errors.subject[0]}
					</p>
				)}
			</div>

			<div>
				<Label htmlFor='message'>Message</Label>
				<Textarea
					id='message'
					placeholder='Tell me about your project or idea...'
					className='mt-2 h-32 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none'
					name='message'
					defaultValue={state.data?.message || ''}
					required
				/>
				{state.errors?.message && (
					<p className='text-destructive text-sm mt-1'>
						{state.errors.message[0]}
					</p>
				)}
			</div>

			{state.message && !state.success && (
				<div
					className={`text-sm ${
						state.success ? 'text-green-600' : 'text-destructive'
					}`}
				>
					{state.message}
				</div>
			)}

			<Button
				className='cursor-pointer group w-fit font-bold'
				size={'lg'}
				type='submit'
				disabled={isPending}
			>
				<div className='cursor-pointer relative overflow-hidden'>
					<div className='absolute inset-0 group-hover:-translate-y-5 after:content-["Send_Message"] after:absolute after:inset-0 after:translate-y-5 after:duration-200 after:transition-all cursor-pointer duration-200 z-50 '>
						{isPending ? 'Sending...' : 'Send Message'}
					</div>
					<span className='opacity-0 z-0'>
						{isPending ? 'Sending...' : 'Send Message'}
					</span>
				</div>
			</Button>
		</form>
	);
}
