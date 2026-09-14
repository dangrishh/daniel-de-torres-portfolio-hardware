import { NextResponse } from "next/server";
import { Resend } from "resend";
import { renderContactEmail } from "@/lib/contactEmail";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  facebook: string;
  device: string;
  concern: string;
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const facebook = (body.facebook ?? "").trim();
  const device = (body.device ?? "").trim();
  const concern = (body.concern ?? "").trim();

  if (!name || !email || !phone || !device || !concern) {
    return NextResponse.json(
      {
        error:
          "Name, email, contact number, device, and concern are all required.",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return NextResponse.json(
      { error: "Email delivery is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "DTech Solutions <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `New inquiry from ${name} — ${device}`,
      html: renderContactEmail({ name, email, phone, facebook, device, concern }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
