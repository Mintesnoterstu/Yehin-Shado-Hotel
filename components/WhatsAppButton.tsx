"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-ivory shadow-lg hover:bg-forest-dark"
      aria-label="Message Yehin Shado Hotel on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}
