"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { FramedVideo } from "@/components/FramedMedia";
import { gallery } from "@/data/gallery";
import { useLanguage } from "@/components/LanguageProvider";

export function DiningPreview() {
  const { t } = useLanguage();

  return (
    <section className="bg-forest py-20 text-ivory lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow={t.home.diningEyebrow}
            title={t.home.diningTitle}
            invert
            description={t.home.diningDescription}
          />
          <div className="mt-10 grid gap-8">
            <div className="border-t border-sand/40 pt-6">
              <h3 className="text-ivory">{t.dining.restaurantTitle}</h3>
              <p className="mt-3 text-ivory/80">{t.dining.restaurantDescription}</p>
            </div>
            <div className="border-t border-sand/40 pt-6">
              <h3 className="text-ivory">{t.dining.barTitle}</h3>
              <p className="mt-3 text-ivory/80">{t.dining.barDescription}</p>
            </div>
          </div>
          <Link href="/dining" className="mt-10 inline-block text-sm text-sand hover:underline">
            {t.actions.exploreDining}
          </Link>
        </FadeIn>
        <FadeIn delay={0.08}>
          <FramedVideo video={gallery.videos.dining} title={t.videos.dining} />
        </FadeIn>
      </div>
    </section>
  );
}
