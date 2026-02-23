# Email Configuration Setup

This guide explains how to set up the contact form email functionality for Sensity.

## Quick Start

1. **Generate Gmail App Password**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Factor Authentication if not already enabled
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer"
   - Copy the 16-character password provided

2. **Update `.env` file**
   ```
   EMAIL_USER=alfredsinameta00@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   SERVER_PORT=5173
   VITE_API_URL=http://localhost:5173
   ```

3. **Run both servers**
   - Terminal 1: `bun run dev` (Vite dev server on port 5173)
   - Terminal 2: `bun run server` (Email API on port 5173)

4. **Test the form**
   - Navigate to the Contact section
   - Fill in the form and submit
   - You should receive emails at `alfredsinameta00@gmail.com`

## How It Works

### Frontend (Contact.tsx)
- Collects user input (name, email, message)
- Sends POST request to `/api/contact` endpoint
- Shows loading, success, or error status to user
- Resets form on successful submission

### Backend (server.ts)
- Bun HTTP server running on port 5173
- Receives contact form data from `/api/contact` endpoint
- Uses nodemailer to send two emails:
  - **To your inbox**: Full contact details
  - **To user**: Confirmation email
- Handles CORS for cross-origin requests

## Email Features

- ✅ Sends to: `alfredsinameta00@gmail.com`
- ✅ Receives confirmation from: User's email
- ✅ Validates all required fields
- ✅ Provides user feedback (loading, success, error states)
- ✅ Sends formatted HTML emails
- ✅ Error handling and logging

## Deployment Notes

### For Production Deployment:

1. **Update API URL** in `.env` or `.env.production`:
   ```
   VITE_API_URL=https://your-domain.com
   ```

2. **Server Deployment Options:**
   - Deploy `server.ts` to your hosting (Vercel, Railway, Heroku, etc.)
   - Or use serverless functions (if needed)
   - Update the API endpoint in Contact.tsx

3. **Environment Variables:**
   - Keep email credentials secure
   - Use environment variables in production
   - Never commit `.env` to git

## Troubleshooting

### "Network error" message
- Check if server is running: `bun run server`
- Verify port 5173 is not blocked
- Check browser console for detailed errors

### Emails not sending
- Verify Gmail App Password is correct
- Check 2FA is enabled on Gmail account
- Verify email address in `.env` matches Gmail account
- Check spam folder

### CORS errors
- Make sure both servers are running
- Check `VITE_API_URL` matches server address
- Server has CORS headers enabled for all origins

## Files Modified

- `src/components/Contact.tsx` - Added API integration and status handling
- `server.ts` - New Bun server with email endpoint
- `.env` - Configuration file (add to .gitignore)
- `package.json` - Added server scripts

## Dependencies

- `nodemailer` - Email sending library
- All other dependencies already in project
