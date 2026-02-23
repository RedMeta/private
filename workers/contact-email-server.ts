import { handleContactRequest } from './contact-email';

const env = {
	RESEND_API_KEY: process.env.RESEND_API_KEY || '',
	TO_EMAIL: process.env.TO_EMAIL || 'alfredsinameta00@gmail.com',
	FROM_EMAIL: process.env.FROM_EMAIL || 'contact@redmeta.top',
};

const port = Number(process.env.SERVER_PORT) || 5174;

const server = Bun.serve({
	port,
	async fetch(request) {
		return handleContactRequest(request, env);
	},
});

console.log(`🚀 Resend server running at http://localhost:${server.port}`);
