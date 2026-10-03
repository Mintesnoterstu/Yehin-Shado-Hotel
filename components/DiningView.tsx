"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FramedImage, FramedVideo } from "@/components/FramedMedia";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { gallery } from "@/data/gallery";
import { useLanguage } from "@/components/LanguageProvider";

export function DiningView() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.dining.pageTitle} description={t.dining.pageDescription} />

      <section className="bg-canvas py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading
              title={t.dining.restaurantTitle}
              description={t.dining.restaurantDescription}
            />
          </FadeIn>
          <FadeIn className="mt-10 mx-auto max-w-md">
            <FramedVideo video={gallery.videos.dining} className="h-[32rem]" />
          </FadeIn>
          <div className="mt-10">
            <Button asChild>
              <Link href="/contact">{t.actions.reserveTable}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-ivory lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading
              invert
              eyebrow={t.dining.barEyebrow}
              title={t.dining.barTitle}
              description={t.dining.barDescription}
            />
          </FadeIn>
          <FadeIn className="mt-10 grid gap-4 sm:grid-cols-2">
            {gallery.spa.moroccan.slice(0, 2).map((image) => (
              <FramedImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="h-[22rem] border border-white/10 sm:h-[26rem]"
              />
            ))}
          </FadeIn>
          <div className="mt-10">
            <Button asChild variant="secondary">
              <Link href="/contact">{t.actions.reserveTable}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
