import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validators";
import { getFromAddress, getResendClient } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const json: unknown = await request.json();
    const parsed = bookingSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Please check the booking details and try again." },
        { status: 400 },
      );
    }

    const to = process.env.BOOKING_EMAIL_TO;
    const resend = getResendClient();

    if (!to || !resend) {
      console.error("Booking email is not configured.");
      return NextResponse.json(
        { ok: false, message: "Booking inquiries are temporarily unavailable." },
        { status: 503 },
      );
    }

    const data = parsed.data;
    const addOns = [
      data.moroccanBath ? "Moroccan bath" : null,
      data.massage ? `Massage (${data.massageType ?? "unspecified"})` : null,
      data.sauna ? "Finnish sauna" : null,
      data.steam ? "Steam room" : null,
    ].filter((item): item is string => item !== null);

    const result = await resend.emails.send({
      from: getFromAddress(),
      to,
      replyTo: data.email,
      subject: `Stay inquiry — ${data.name} — ${data.roomType}`,
      text: [
        `Guest: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Check-in: ${data.checkIn}`,
        `Check-out: ${data.checkOut}`,
        `Guests: ${data.guests}`,
        `Room: ${data.roomType}`,
        `Spa add-ons: ${addOns.length > 0 ? addOns.join(", ") : "None"}`,
        `Notes: ${data.notes ?? "None"}`,
      ].join("\n"),
    });

    if (result.error) {
      console.error("Resend booking error:", result.error);
      return NextResponse.json(
        { ok: false, message: "We could not send your inquiry." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Booking route error:", error);
    return NextResponse.json(
      { ok: false, message: "We could not send your inquiry." },
      { status: 500 },
    );
  }
}
