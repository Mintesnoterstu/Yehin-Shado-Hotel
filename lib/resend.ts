import { Resend } from "resend";

export function getResendClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return null;
  }
  return new Resend(key);
}

export function getFromAddress() {
  return process.env.RESEND_FROM_EMAIL ?? "Yehin Shado Hotel <onboarding@resend.dev>";
}
