"use client";

import Link from "next/link";
import { Wifi, Bath, Volume2, ConciergeBell } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ImageGallery } from "@/components/ImageGallery";
import { FramedVideo } from "@/components/FramedMedia";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { gallery } from "@/data/gallery";
import { useLanguage } from "@/components/LanguageProvider";

const amenityIcons = [Wifi, Bath, Volume2, ConciergeBell] as const;

export function RoomsView() {
  const { t } = useLanguage();
  const amenityLabels = [
    t.rooms.amenities.wifi,
    t.rooms.amenities.bath,
    t.rooms.amenities.quiet,
    t.rooms.amenities.service,
  ];

  const types = [
    {
      slug: "standard",
      title: t.rooms.standardTitle,
      description: t.rooms.standardDescription,
      images: gallery.rooms.standard,
      videos: [gallery.videos.room],
    },
    {
      slug: "double",
      title: t.rooms.doubleTitle,
      description: t.rooms.doubleDescription,
      images: gallery.rooms.double,
      videos: [gallery.videos.doubleRoom, gallery.videos.doubleRoomAlt],
    },
  ];

  return (
    <>
      <PageHero title={t.rooms.pageTitle} description={t.rooms.pageDescription} />

      {types.map((room) => (
        <section
          key={room.slug}
          id={room.slug}
          className="bg-canvas py-20 even:bg-forest-light lg:py-24"
        >
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <FadeIn>
              <SectionHeading title={room.title} description={room.description} />
            </FadeIn>
            <FadeIn className="mt-8">
              <ImageGallery images={room.images} fallbackLabel={room.title} />
            </FadeIn>
            <FadeIn className="mt-6 grid gap-4 sm:grid-cols-2">
              {room.videos.map((video) => (
                <FramedVideo key={video.src} video={video} className="h-[32rem]" />
              ))}
            </FadeIn>
            <div className="mt-8 flex flex-wrap gap-2">
              {amenityLabels.map((amenity, index) => {
                const Icon = amenityIcons[index];
                return (
                  <span
                    key={amenity}
                    className="inline-flex items-center gap-2 rounded-full bg-forest-light px-3 py-1.5 text-sm text-forest-fg"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    {amenity}
                  </span>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-forest-light py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading eyebrow={t.rooms.environmentEyebrow} title={t.rooms.environmentTitle} />
            <p className="mt-6 max-w-2xl">{t.rooms.environment}</p>
            <div className="mt-8">
              <ImageGallery images={gallery.rooms.details} fallbackLabel={t.rooms.environmentTitle} />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-canvas py-16">
        <div className="mx-auto max-w-6xl px-5 text-center lg:px-8">
          <Button asChild>
            <Link href="/contact?tab=booking">{t.actions.inquireAvailability}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
