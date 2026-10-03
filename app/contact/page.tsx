import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Inquire or book a stay at ${site.name} in Jemo 1, Addis Ababa.`,
  keywords: [...site.keywords],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact · ${site.name}`,
    description: `Inquire or book a stay at ${site.name} in Jemo 1, Addis Ababa.`,
  },
};

export default function ContactPage() {
  return <ContactView />;
}
