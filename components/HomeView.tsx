"use client";

import Link from "next/link";
import { Hero } from "@/components/Hero";
import { RoomCard, RoomCardGrid } from "@/components/RoomCard";
import { SpaCard, SpaCardGrid } from "@/components/SpaCard";
import { DiningPreview } from "@/components/DiningPreview";
import { Testimonial } from "@/components/Testimonial";
import { LocationStrip } from "@/components/LocationStrip";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { gallery } from "@/data/gallery";
import { useLanguage } from "@/components/LanguageProvider";

export function HomeView() {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      <AboutSnippet />

      <section className="bg-forest-light py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow={t.home.stayEyebrow}
              title={t.home.stayTitle}
              description={t.home.stayDescription}
            />
          </FadeIn>
          <FadeIn className="mt-12">
            <RoomCardGrid>
              <RoomCard
                title={t.rooms.standardTitle}
                description={t.rooms.standardPreview}
                href="/rooms"
                image={gallery.rooms.standard[0]}
              />
              <RoomCard
                title={t.rooms.doubleTitle}
                description={t.rooms.doublePreview}
                href="/rooms"
                image={gallery.rooms.double[0]}
              />
            </RoomCardGrid>
          </FadeIn>
        </div>
      </section>

      <section className="bg-canvas py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow={t.home.spaEyebrow}
              title={t.spa.heading}
              description={t.home.spaDescription}
            />
          </FadeIn>
          <FadeIn className="mt-12">
            <SpaCardGrid>
              {t.spa.features.map((feature) => (
                <SpaCard key={feature.title} {...feature} />
              ))}
            </SpaCardGrid>
          </FadeIn>
          <Link href="/spa" className="mt-10 inline-block text-sm text-forest-fg hover:underline">
            {t.home.exploreSpaLink}
          </Link>
        </div>
      </section>

      <DiningPreview />

      <section className="bg-forest-light py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow={t.home.voicesEyebrow}
              title={t.home.voicesTitle}
              description={t.home.voicesDescription}
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.testimonials.map((item) => (
              <FadeIn key={item.quote}>
                <Testimonial {...item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
