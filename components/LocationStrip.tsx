"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { MapEmbed } from "@/components/MapEmbed";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";

export function LocationStrip() {
  const { t } = useLanguage();

  return (
    <section className="bg-forest py-20 text-ivory lg:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 lg:grid-cols-2 lg:px-8">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-sand">{t.location.neighborhood}</p>
          <h2 className="mt-3 text-ivory">{t.home.locationTitle}</h2>
          <p className="mt-4 text-ivory/85">{t.location.neighborhoodNote}</p>
          <address className="mt-6 not-italic text-ivory/80">{site.address.line}</address>
          <a href={`tel:${site.phoneE164}`} className="mt-3 inline-block text-sand">
            {site.phoneDisplay}
          </a>
          <div className="mt-6">
            <Button asChild variant="sand">
              <Link href="/contact">{t.actions.contactBooking}</Link>
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <MapEmbed />
        </FadeIn>
      </div>
    </section>
  );
}
