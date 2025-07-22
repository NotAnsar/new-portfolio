'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const contactSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.email('Invalid email address'),
	subject: z.string().min(1, 'Subject is required'),
	message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactData = z.infer<typeof contactSchema>;

export type State = {
	success?: boolean;
	errors?: { [K in keyof ContactData]?: string[] };
	message?: string | null;
	data?: Partial<ContactData>;
};

export async function submitContactForm(
	prevState: State,
	formData: FormData
): Promise<State> {
	const rawData = {
		name: formData.get('name') as string,
		email: formData.get('email') as string,
		subject: formData.get('subject') as string,
		message: formData.get('message') as string,
	};

	try {
		const validatedFields = contactSchema.safeParse(rawData);

		if (!validatedFields.success) {
			return {
				errors: validatedFields.error.flatten().fieldErrors,
				message: 'Please fix the errors below',
				data: rawData,
				success: false,
			};
		}

		const { name, email, subject, message } = validatedFields.data;

		// Here you would typically send the email
		// Example: await sendEmail({ name, email, subject, message })
		console.log('Contact form submission:', { name, email, subject, message });

		// Simulate processing time
		await new Promise((resolve) => setTimeout(resolve, 1000));

		return {
			message: "Message sent successfully! I'll get back to you soon.",
			success: true,
		};
	} catch (error) {
		console.error('Contact form error:', error);
		return {
			message: 'There was an error sending your message. Please try again.',
			success: false,
			data: rawData,
		};
	}
}
