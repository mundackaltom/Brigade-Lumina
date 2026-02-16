// Simple in-memory rate limiting (per IP)
const RATE_LIMIT = 3;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const ipHits: Record<string, { count: number; first: number }> = {};
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  // Get IP address (works for Vercel/Node/Edge)
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
  const now = Date.now();
  if (!ipHits[ip] || now - ipHits[ip].first > RATE_LIMIT_WINDOW) {
    ipHits[ip] = { count: 1, first: now };
  } else {
    ipHits[ip].count++;
  }
  if (ipHits[ip].count > RATE_LIMIT) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }
  try {
  const { firstName, lastName, email, phone, message } = await req.json();

  // Sanitize message input
  const cleanMessage = typeof message === 'string' ? message.trim().slice(0, 1000) : '';

    if (!firstName || !email || !cleanMessage) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // IMPORTANT: Use a verified sender from your domain for production
    // Make sure noreply@yourdomain.com is verified in Resend and SPF/DKIM are set up
    await resend.emails.send({
      from: "Brigade Lumina <noreply@yourdomain.com>",
      to: ["soniasrealtymedia@gmail.com"],
      subject: "New Contact Form Submission - Brigade Lumina",
      html: `
        <h2>New Lead - Brigade Lumina</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${cleanMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
