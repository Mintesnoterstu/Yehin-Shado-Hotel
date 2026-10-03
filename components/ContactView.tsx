"use client";

import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ContactTabs } from "@/components/ContactTabs";
import { MapEmbed } from "@/components/MapEmbed";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { getWhatsAppLink } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";

export function ContactView() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.contact.pageTitle} description={t.contact.pageDescription} />

      <section className="bg-canvas py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <FadeIn>
            <Suspense fallback={<p className="text-moss">{t.contact.loadingForm}</p>}>
              <ContactTabs />
            </Suspense>
          </FadeIn>
        </div>
      </section>

      <section className="bg-forest-light py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-sand">{t.contact.findUs}</p>
            <h2 className="mt-3 text-forest-fg">{t.location.neighborhood}</h2>
            <address className="mt-4 not-italic text-moss">{t.location.addressLine}</address>
            <a href={`tel:${site.phoneE164}`} className="mt-4 block text-forest-fg">
              {site.phoneDisplay}
            </a>
            <p className="mt-6 text-sm text-fog">{t.location.hoursNote}</p>
            <ul className="mt-3 space-y-1 text-sm text-moss">
              <li>
                {t.contact.reception}: {t.location.receptionHours}
              </li>
              <li>
                {t.contact.spa}: {t.location.spaHours}
              </li>
              <li>
                {t.contact.restaurant}: {t.location.restaurantHours}
              </li>
              <li>
                {t.contact.bar}: {t.location.barHours}
              </li>
            </ul>
            <p className="mt-6">{t.location.airportNote}</p>
            <Button asChild className="mt-6">
              <a href={getWhatsAppLink()} target="_blank" rel="noreferrer">
                {t.actions.whatsapp}
              </a>
            </Button>
          </div>
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
