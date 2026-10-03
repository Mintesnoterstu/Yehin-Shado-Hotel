"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { site } from "@/data/site";
import { gallery } from "@/data/gallery";
import { Button } from "@/components/ui/button";
import { FramedVideo } from "@/components/FramedMedia";
import { useLanguage } from "@/components/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-forest-dark">
      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 pb-16 pt-28 lg:grid-cols-2 lg:px-8 lg:pb-20">
        <div>
          <h1 className="max-w-3xl text-ivory drop-shadow-sm">{t.tagline}</h1>
          <p className="mt-5 max-w-xl text-lg text-ivory/90">{t.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact?tab=booking">{t.actions.bookRoom}</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/spa">{t.actions.exploreSpa}</Link>
            </Button>
          </div>
          <div className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-sand/40 bg-forest/40 px-4 py-2 text-sm text-sand backdrop-blur-sm">
            <Star className="h-4 w-4 fill-sand text-sand" aria-hidden />
            <span>
              {site.rating} · {t.home.guestRated}
            </span>
          </div>
        </div>
        <FramedVideo video={gallery.videos.hero} className="mx-auto h-[min(70vh,36rem)] w-full max-w-sm" />
      </div>
    </section>
  );
}
