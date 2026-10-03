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
    <section className="bg-canvas py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow={t.home.aboutEyebrow} title={t.home.aboutTitle} />
          <p className="mt-6">{t.home.aboutP1}</p>
          <p className="mt-4">{t.home.aboutP2}</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          {image ? (
            <FramedImage src={image.src} alt={image.alt} className="h-[22rem] border border-sage sm:h-[26rem]" />
          ) : null}
        </FadeIn>
      </div>
    </section>
  );
}
