"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { site } from "@/data/site";
import { gallery } from "@/data/gallery";
import { Button } from "@/components/ui/button";
import { FramedVideo } from "@/components/FramedMedia";
import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const day = theme === "light";
  const night = theme === "dark";
  const heroImage = gallery.hero[3] ?? gallery.hero[0];

  return (
    <section className="surface-dark relative min-h-[100svh] overflow-hidden bg-forest-soft">
      {heroImage ? (
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
      ) : null}
      <div
        className={cn(
          "absolute inset-0",
          day
            ? "bg-gradient-to-t from-canvas via-canvas/55 to-canvas/20"
            : night
              ? "bg-gradient-to-t from-forest-dark via-forest-dark/70 to-black/30"
              : "bg-gradient-to-t from-forest-soft via-forest-soft/55 to-forest-soft/20",
        )}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end gap-10 px-5 pb-16 pt-28 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:pb-20">
        <div className="max-w-2xl">
          <p className={cn("mb-5 text-xs uppercase tracking-[0.28em]", day ? "text-forest-fg" : "text-sand")}>
            Jemo 1 · Addis Ababa
          </p>
          <h1 className={cn("max-w-3xl", day ? "text-ink" : "text-ivory")}>{t.tagline}</h1>
          <p className={cn("mt-6 max-w-lg text-lg", day ? "text-moss" : "text-ivory/90")}>{t.description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact?tab=booking">{t.actions.bookRoom}</Link>
            </Button>
            <Button asChild variant={day ? "outline" : "secondary"} size="lg">
              <Link href="/spa">{t.actions.exploreSpa}</Link>
            </Button>
          </div>
          <div
            className={cn(
              "mt-8 inline-flex items-center gap-2 text-sm",
              day ? "text-forest-fg" : "text-sand",
            )}
          >
            <Star className="h-4 w-4 fill-sand text-sand" aria-hidden />
            <span>
              {site.rating} · {t.home.guestRated}
            </span>
          </div>
        </div>
        <FramedVideo video={gallery.videos.hero} title={t.videos.hero} className="max-w-[13.5rem] shrink-0" />
      </div>
    </section>
  );
}
