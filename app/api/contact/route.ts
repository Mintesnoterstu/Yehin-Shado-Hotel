import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { getFromAddress, getResendClient } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const json: unknown = await request.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Please check the form and try again." },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_EMAIL_TO;
    const resend = getResendClient();

    if (!to || !resend) {
      console.error("Contact email is not configured.");
      return NextResponse.json(
        { ok: false, message: "Inquiries are temporarily unavailable." },
        { status: 503 },
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    const result = await resend.emails.send({
      from: getFromAddress(),
      to,
      replyTo: email,
      subject: `Inquiry: ${subject}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, `Subject: ${subject}`, "", message].join(
        "\n",
      ),
    });

    if (result.error) {
      console.error("Resend contact error:", result.error);
      return NextResponse.json(
        { ok: false, message: "We could not send your message." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { ok: false, message: "We could not send your message." },
      { status: 500 },
    );
  }
}
