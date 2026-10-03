"use client";

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

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        day ? "bg-canvas" : night ? "bg-forest-dark" : "bg-forest",
      )}
    >
      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 pb-16 pt-28 lg:grid-cols-2 lg:px-8 lg:pb-20">
        <div>
          <h1 className={cn("max-w-3xl drop-shadow-sm", day ? "text-forest-fg" : "text-ivory")}>{t.tagline}</h1>
          <p className={cn("mt-5 max-w-xl text-lg", day ? "text-moss" : "text-ivory/90")}>{t.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact?tab=booking">{t.actions.bookRoom}</Link>
            </Button>
            <Button asChild variant={day ? "outline" : "secondary"}>
              <Link href="/spa">{t.actions.exploreSpa}</Link>
            </Button>
          </div>
          <div
            className={cn(
              "mt-10 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-sm",
              day ? "border-sage bg-surface text-forest-fg" : "border-sand/40 bg-forest/40 text-sand",
            )}
          >
            <Star className="h-4 w-4 fill-sand text-sand" aria-hidden />
            <span>
              {site.rating} · {t.home.guestRated}
            </span>
          </div>
        </div>
        <FramedVideo video={gallery.videos.hero} title={t.videos.hero} />
      </div>
    </section>
  );
}
