import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ContactTabs } from "@/components/ContactTabs";
import { MapEmbed } from "@/components/MapEmbed";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { gallery } from "@/data/gallery";
import { getWhatsAppLink } from "@/lib/utils";

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
  return (
    <>
      <PageHero
        title="Contact"
        description="Write to us for rooms, spa sessions, or a table — we confirm by phone or email."
        image={gallery.hero[3]}
      />

      <section className="bg-ivory py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <FadeIn>
            <Suspense fallback={<p className="text-moss">Loading form…</p>}>
              <ContactTabs />
            </Suspense>
          </FadeIn>
        </div>
      </section>

      <section className="bg-forest-light py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-sand">Find us</p>
            <h2 className="mt-3 text-forest">Jemo 1</h2>
            <address className="mt-4 not-italic text-moss">{site.address.line}</address>
            <a href={`tel:${site.phoneE164}`} className="mt-4 block text-forest">
              {site.phoneDisplay}
            </a>
            <p className="mt-6 text-sm text-fog">{site.hours.note}</p>
            <ul className="mt-3 space-y-1 text-sm text-moss">
              <li>Reception: {site.hours.reception}</li>
              <li>Spa: {site.hours.spa}</li>
              <li>Restaurant: {site.hours.restaurant}</li>
              <li>Bar: {site.hours.bar}</li>
            </ul>
            <p className="mt-6">{site.airportNote}</p>
            <Button asChild className="mt-6">
              <a href={getWhatsAppLink()} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
