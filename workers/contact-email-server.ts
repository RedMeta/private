import { handleContactRequest } from './contact-email';

const env = {
	RESEND_API_KEY: process.env.RESEND_API_KEY || '',
	TO_EMAIL: process.env.TO_EMAIL || 'contact@sensity.com',
	FROM_EMAIL: process.env.FROM_EMAIL || 'contact@sensity.com',
};

const port = Number(process.env.SERVER_PORT) || 5174;

const server = Bun.serve({
	hostname: '0.0.0.0',
	port,
	async fetch(request) {
		return handleContactRequest(request, env);
	},
});

console.log(`🚀 Resend server running at http://0.0.0.0:${server.port}`);
