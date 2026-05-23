import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, company, project, message } = await request.json();

  if (!name || !email || !project || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"OZ Agency" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `New project request — ${name}${company ? ` (${company})` : ""}`,
    html: `
      <h2 style="margin-bottom:16px">New Project Request</h2>
      <table style="border-collapse:collapse;width:100%;max-width:560px">
        <tr><td style="padding:8px 0;font-weight:bold;width:120px">Name</td><td>${name}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
        ${company ? `<tr><td style="padding:8px 0;font-weight:bold">Company</td><td>${company}</td></tr>` : ""}
        <tr><td style="padding:8px 0;font-weight:bold">Project type</td><td>${project}</td></tr>
      </table>
      <h3 style="margin-top:24px;margin-bottom:8px">Message</h3>
      <p style="white-space:pre-wrap">${message}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
