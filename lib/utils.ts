import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";
}

export function getWhatsAppLink(message?: string) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "251904222223";
  const text = encodeURIComponent(
    message ?? "Hello Yehin Shado Hotel — I would like to inquire about a stay.",
  );
  return `https://wa.me/${number}?text=${text}`;
}

export function getPhoneHref() {
  const phone = process.env.NEXT_PUBLIC_PHONE ?? "+251904222223";
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function getMapsEmbedUrl() {
  return (
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ??
    "https://maps.google.com/maps?q=Jemo%201%20Addis%20Ababa&t=&z=15&ie=UTF8&iwloc=&output=embed"
  );
}
