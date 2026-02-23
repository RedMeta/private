#!/usr/bin/env bun
import nodemailer from 'nodemailer';

// Configure your email service
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER || 'your-email@gmail.com',
		pass: process.env.EMAIL_PASSWORD || 'your-app-password',
	},
});

interface ContactFormData {
	name: string;
	email: string;
	message: string;
}

// Email template styles
const emailStyles = `
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: #2c2c2c;
      background-color: #f9f9f9;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      border: 1px solid #e8e8e8;
    }
    .header {
      background: linear-gradient(135deg, #FFF8F0 0%, #f5ede0 100%);
      color: #2E221A;
      padding: 30px;
      text-align: left;
      display: flex;
      align-items: center;
      gap: 20px;
      border-bottom: 4px solid #E31E24;
    }
    .header-logo {
      flex-shrink: 0;
      width: 60px;
      height: 60px;
    }
    .header-logo img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .header-content {
      flex: 1;
    }
    .header h1 {
      margin: 0;
      font-size: 32px;
      font-weight: 800;
      letter-spacing: 1.5px;
      color: #2E221A;
      text-transform: uppercase;
    }
    .header p {
      margin: 8px 0 0 0;
      font-size: 14px;
      color: #E31E24;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .content {
      padding: 40px 30px;
      background: #ffffff;
    }
    .section {
      margin-bottom: 28px;
    }
    .section-title {
      font-size: 15px;
      font-weight: 800;
      color: #1a1a1a;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 18px;
      border-bottom: 3px solid #E31E24;
      padding-bottom: 12px;
      display: inline-block;
    }
    .field {
      margin-bottom: 18px;
      background: #f8f8f8;
      padding: 16px;
      border-radius: 6px;
      border-left: 4px solid #E31E24;
    }
    .field-label {
      font-size: 12px;
      font-weight: 800;
      color: #1a1a1a;
      text-transform: uppercase;
      letter-spacing: 0.7px;
      margin-bottom: 8px;
      display: block;
    }
    .field-value {
      font-size: 14px;
      color: #1a1a1a;
      word-break: break-word;
      white-space: pre-wrap;
      line-height: 1.6;
      font-weight: 500;
    }
    .field-value a {
      color: #E31E24;
      text-decoration: none;
      font-weight: 600;
    }
    .field-value a:hover {
      text-decoration: underline;
    }
    .message-box {
      background: #f0f0f0;
      border-left: 5px solid #E31E24;
      padding: 24px;
      border-radius: 6px;
      font-size: 14px;
      line-height: 1.8;
      color: #1a1a1a;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
    }
    .greeting {
      font-size: 18px;
      color: #1a1a1a;
      margin-bottom: 20px;
      line-height: 1.6;
      font-weight: 600;
    }
    .intro-text {
      font-size: 15px;
      color: #2c2c2c;
      line-height: 1.8;
      margin-bottom: 16px;
      font-weight: 500;
    }
    .cta-button {
      display: inline-block;
      background-color: #ffffff;
      color: #2E221A;
      padding: 14px 32px;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 700;
      font-size: 13px;
      margin-top: 20px;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      border: 2px solid #E31E24;
      box-shadow: 0 4px 8px rgba(227, 30, 36, 0.2);
    }
    .cta-button:hover {
      background-color: #f5f5f5;
      border-color: #c71922;
    }
    .footer {
      background: linear-gradient(135deg, #2E221A 0%, #3d2f26 100%);
      padding: 30px;
      border-top: none;
      font-size: 12px;
      color: #e8d4c4;
      text-align: center;
    }
    .footer p {
      margin: 8px 0;
      color: #e8d4c4;
    }
    .footer strong {
      color: #FFF8F0;
      font-weight: 700;
    }
    .divider {
      height: 2px;
      background: linear-gradient(90deg, transparent, #E31E24, transparent);
      margin: 28px 0;
      border: none;
    }
    .highlight {
      color: #E31E24;
      font-weight: 700;
    }
    .info-grid {
      display: block;
    }
    .info-item {
      margin-bottom: 18px;
    }
    .info-icon {
      margin-right: 8px;
    }
    
    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      body {
        background-color: #1a1a1a;
      }
      .container {
        background: #2d2d2d;
        border-color: #444;
      }
      .content {
        background: #2d2d2d;
      }
      .header {
        background: linear-gradient(135deg, #363636 0%, #2d2d2d 100%);
        color: #ffffff;
        border-bottom-color: #E31E24;
      }
      .header h1 {
        color: #ffffff;
      }
      .header p {
        color: #E31E24;
      }
      .section-title {
        color: #ffffff;
      }
      .field {
        background: #3d3d3d;
        border-left-color: #555;
      }
      .field-label {
        color: #f0f0f0;
      }
      .field-value {
        color: #e0e0e0;
      }
      .message-box {
        background: #404040;
        color: #f0f0f0;
        border-left-color: #E31E24;
      }
      .greeting {
        color: #ffffff;
      }
      .intro-text {
        color: #d0d0d0;
      }
      .divider {
        background: linear-gradient(90deg, transparent, #E31E24, transparent);
      }
      .footer p {
        color: #d0c0b0;
      }
      .footer strong {
        color: #f5f5f5;
      }
    }
  </style>
`;

// Admin notification email template
const adminEmailTemplate = (data: ContactFormData) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <title>New Contact Form Submission</title>
    ${emailStyles}
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="header-logo">
          <img src="https://sensity.redmeta.top/public/logo.jpg" alt="Sensity Logo" />
        </div>
        <div class="header-content">
          <h1>Sensity</h1>
          <p>New Customer Message</p>
        </div>
      </div>
      <div class="content">
        <div class="section">
          <div class="section-title">Contact Information</div>
          <div class="field">
            <span class="field-label">Name</span>
            <div class="field-value">${escapeHtml(data.name)}</div>
          </div>
          <div class="field">
            <span class="field-label">Email</span>
            <div class="field-value">
              <a href="mailto:${escapeHtml(data.email)}">
                ${escapeHtml(data.email)}
              </a>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <div class="section">
          <div class="section-title">Message</div>
          <div class="message-box">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
        </div>

        <div class="divider"></div>

        <div style="text-align: center; padding: 20px 0;">
          <p style="font-size: 13px; color: #010101; margin-bottom: 16px; font-weight: 600;">📅 ${new Date().toLocaleString()}</p>
          <a href="mailto:${escapeHtml(data.email)}" class="cta-button">Reply to Message</a>
        </div>
      </div>

      <div class="footer">
        <p><strong>Sensity Espresso Lovers</strong></p>
        <p>Vore Muçaj Nr. pasurie 20/92, Tiranë, Albania</p>
        <p>📧 sensityespres80@gmail.com</p>
      </div>
    </div>
  </body>
  </html>
`;

// Customer confirmation email template
const customerEmailTemplate = (data: ContactFormData) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <title>Thank You for Contacting Sensity</title>
    ${emailStyles}
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="header-logo">
          <img src="https://sensity.redmeta.top/public/logo.jpg" alt="Sensity Logo" />
        </div>
        <div class="header-content">
          <h1>Sensity</h1>
          <p>Thank you for reaching out</p>
        </div>
      </div>
      <div class="content">
        <div class="section">
          <p class="greeting">
            Hi <span class="highlight">${escapeHtml(data.name)}</span>,
          </p>
          <p class="intro-text">
            We've received your message and appreciate you getting in touch with us! Our team will review your inquiry and get back to you as soon as possible.
          </p>
          <p class="intro-text">
            In the meantime, feel free to explore our coffee selection or visit us in person.
          </p>
        </div>

        <div class="divider"></div>

        <div class="section">
          <div class="section-title">Your Message</div>
          <div class="message-box">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
        </div>

        <div class="divider"></div>

        <div class="section">
          <div class="section-title">Visit Us</div>
          <div class="info-grid">
            <div class="field">
              <span class="field-label">📍 Location</span>
              <div class="field-value">
                Vore Muçaj Nr. pasurie 20/92<br>
                Tiranë, Albania
              </div>
            </div>
            <div class="field">
              <span class="field-label">⏰ Hours</span>
              <div class="field-value">
                Monday - Friday: 8:00 - 17:00<br>
                Saturday: 8:00 - 12:00<br>
                Sunday: Closed
              </div>
            </div>
            <div class="field">
              <span class="field-label">📞 Phone</span>
              <div class="field-value">
                +355 69 542 0190<br>
                +355 68 362 9893
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <p><strong>Sensity Espresso Lovers</strong></p>
        <p>Experience the tradition, embrace the innovation.</p>
        <p style="margin-top: 20px; font-size: 11px;">
          This is an automated response. Please do not reply to this email.
        </p>
      </div>
    </div>
  </body>
  </html>
`;

// HTML escape function
function escapeHtml(text: string): string {
	const map: { [key: string]: string } = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;',
	};
	return text.replace(/[&<>"']/g, (m) => map[m]);
}

const server = Bun.serve({
	port: 5174,
	async fetch(req) {
		// Enable CORS
		if (req.method === 'OPTIONS') {
			return new Response(null, {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
					'Access-Control-Allow-Headers': 'Content-Type',
				},
			});
		}

		// Handle contact form submission
		if (req.method === 'POST' && req.url.endsWith('/api/contact')) {
			try {
				const data: ContactFormData = await req.json();

				// Validate input
				if (!data.name || !data.email || !data.message) {
					return new Response(
						JSON.stringify({ error: 'Missing required fields' }),
						{
							status: 400,
							headers: {
								'Content-Type': 'application/json',
								'Access-Control-Allow-Origin': '*',
							},
						}
					);
				}

				// Send email to your inbox
				await transporter.sendMail({
					from: process.env.EMAIL_USER,
					to: 'alfredsinameta00@gmail.com',
					subject: `New Contact Form Submission from ${escapeHtml(data.name)}`,
					html: adminEmailTemplate(data),
				});

				// Send confirmation email to user
				await transporter.sendMail({
					from: process.env.EMAIL_USER,
					to: data.email,
					subject: 'Thank you for contacting Sensity',
					html: customerEmailTemplate(data),
				});

				return new Response(
					JSON.stringify({ success: true, message: 'Email sent successfully' }),
					{
						status: 200,
						headers: {
							'Content-Type': 'application/json',
							'Access-Control-Allow-Origin': '*',
						},
					}
				);
			} catch (error) {
				console.error('Email error:', error);
				return new Response(
					JSON.stringify({
						error: 'Failed to send email',
						details: error instanceof Error ? error.message : String(error),
					}),
					{
						status: 500,
						headers: {
							'Content-Type': 'application/json',
							'Access-Control-Allow-Origin': '*',
						},
					}
				);
			}
		}

		// Health check
		if (req.url.endsWith('/healthz')) {
			return new Response('OK');
		}

		return new Response('Not Found', { status: 404 });
	},
});

console.log(`🚀 Server running at http://localhost:${server.port}`);

