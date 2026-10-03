"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ImageGallery } from "@/components/ImageGallery";
import { FramedVideo } from "@/components/FramedMedia";
import { SpaCard } from "@/components/SpaCard";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { gallery } from "@/data/gallery";
import { useLanguage } from "@/components/LanguageProvider";

export function SpaView() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.spa.pageTitle} description={t.spa.pageDescription} />

      <section className="bg-forest-light py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading title={t.spa.moroccanTitle} description={t.spa.moroccanDescription} />
          </FadeIn>
          <FadeIn className="mt-10">
            <ImageGallery images={gallery.spa.moroccan} fallbackLabel={t.spa.moroccanTitle} />
          </FadeIn>
        </div>
      </section>

      <section className="bg-canvas py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading title={t.spa.massageHeading} description={t.spa.massageIntro} />
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.spa.massages.map((item) => (
              <SpaCard key={item.title} {...item} />
            ))}
          </div>
          <FadeIn className="mt-8">
            <ImageGallery images={gallery.spa.massage} fallbackLabel={t.spa.massageHeading} />
          </FadeIn>
        </div>
      </section>

      <section className="bg-forest-light py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading title={t.spa.thermalHeading} description={t.spa.thermalIntro} />
          </FadeIn>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {t.spa.thermal.map((item) => (
              <article key={item.slug} className="rounded-2xl border border-sage bg-surface p-4">
                <ImageGallery
                  images={gallery.spa.thermal.filter((image) => image.src.includes(item.slug))}
                  fallbackLabel={item.title}
                />
                <h3 className="mt-4 px-2 text-ink">{item.title}</h3>
                <p className="mt-2 px-2 pb-2 text-sm">{item.description}</p>
              </article>
            ))}
          </div>
          <FadeIn className="mt-8 mx-auto max-w-md">
            <FramedVideo video={gallery.videos.sauna} className="h-[32rem]" />
          </FadeIn>
        </div>
      </section>

      <section className="bg-canvas py-16">
        <div className="mx-auto max-w-6xl space-y-6 px-5 text-center lg:px-8">
          <p>
            <Link href="/dining" className="text-forest-fg hover:underline">
              {t.spa.postSpaNote}
            </Link>
          </p>
          <Button asChild>
            <Link href="/contact?tab=booking">{t.actions.reserveSpa}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
