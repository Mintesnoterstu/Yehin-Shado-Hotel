"use client";

import { gallery } from "@/data/gallery";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { FramedImage } from "@/components/FramedMedia";
import { useLanguage } from "@/components/LanguageProvider";

export function AboutSnippet() {
  const { t } = useLanguage();
  const image = gallery.hero[0] ?? gallery.hero[3];

  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-10">
        <FadeIn>
          <SectionHeading eyebrow={t.home.aboutEyebrow} title={t.home.aboutTitle} />
          <p className="mt-8">{t.home.aboutP1}</p>
          <p className="mt-5">{t.home.aboutP2}</p>
        </FadeIn>
        <FadeIn delay={0.08}>
          {image ? <FramedImage src={image.src} alt={image.alt} /> : null}
        </FadeIn>
      </div>
    </section>
  );
}
