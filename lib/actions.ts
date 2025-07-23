'use server';

import { Resend } from 'resend';
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

		await sendEmail({ name, email, subject, message });

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

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail({ name, email, subject, message }: ContactData) {
	try {
		console.log('Attempting to send email via Resend...');

		const { data, error } = await resend.emails.send({
			from: 'Ansar Karrouach <onboarding@resend.dev>',
			to: ['karrouach.ansar@gmail.com'],
			replyTo: email,
			subject: `Portfolio Contact: ${subject}`,
			headers: {
				'X-Priority': '3',
				'X-Mailer': 'Portfolio Contact Form',
			},
			html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f1f5f9; line-height: 1.6;">
          
          <div style="max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e2e8f0;">
            
            <!-- Header -->
            <div style="background: #1e293b; padding: 32px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.025em;">
                New Message
              </h1>
              <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 14px;">
                Portfolio Contact Form
              </p>
            </div>
            
            <!-- Content -->
            <div style="padding: 32px; background: #ffffff;">
              
              <!-- Contact Info -->
              <div style="margin-bottom: 32px;">
                <div style="background: #f8fafc; border-radius: 8px; border-left: 4px solid #3b82f6; padding: 20px; border: 1px solid #e2e8f0;">
                  <h2 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #1e293b;">
                    Contact Details
                  </h2>
                  <div>
                    <p style="margin: 0 0 8px 0; color: #475569; font-size: 14px;">
                      <span style="font-weight: 500; color: #64748b;">Name:</span> 
                      <span style="color: #1e293b; font-weight: 500;">${name}</span>
                    </p>
                    <p style="margin: 0 0 8px 0; color: #475569; font-size: 14px;">
                      <span style="font-weight: 500; color: #64748b;">Email:</span> 
                      <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none; font-weight: 500;">${email}</a>
                    </p>
                    <p style="margin: 0; color: #475569; font-size: 14px;">
                      <span style="font-weight: 500; color: #64748b;">Subject:</span> 
                      <span style="color: #1e293b; font-weight: 500;">${subject}</span>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Message -->
              <div style="margin-bottom: 24px;">
                <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600; color: #1e293b;">
                  Message
                </h3>
                <div style="background: #f8fafc; border-radius: 8px; border-left: 4px solid #10b981; padding: 20px; border: 1px solid #e2e8f0;">
                  <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

            </div>
            
            <!-- Footer -->
            <div style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 4px 0; color: #64748b; font-size: 13px;">
                Sent from <strong style="color: #1e293b;">karrouachansar.xyz</strong>
              </p>
              <p style="margin: 0; color: #64748b; font-size: 12px;">
                Portfolio Contact Form • ${new Date().toLocaleDateString()}
              </p>
            </div>
            
          </div>
          
        </body>
        </html>
      `,
			text: `
New Portfolio Contact

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from: karrouachansar.xyz
Date: ${new Date().toLocaleDateString()}
      `,
		});

		if (error) {
			console.error('Resend API Error Details:', {
				name: error.name,
				message: error.message,
				details: error,
			});
			throw new Error(`Failed to send email: ${error.message}`);
		}

		console.log('Email sent successfully:', data);
		return { success: true, data };
	} catch (error) {
		console.error('Email sending failed:', error);
		throw error;
	}
}
