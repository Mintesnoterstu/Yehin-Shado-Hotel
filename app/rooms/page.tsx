import type { Metadata } from "next";
import Link from "next/link";
import { Wifi, Bath, Volume2, ConciergeBell } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ImageGallery } from "@/components/ImageGallery";
import { FramedVideo } from "@/components/FramedMedia";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { rooms } from "@/data/rooms";
import { gallery } from "@/data/gallery";
import { site } from "@/data/site";

const amenityIcons = {
  "Wi-Fi": Wifi,
  "Private bath": Bath,
  "Quiet ambiance": Volume2,
  "Room service": ConciergeBell,
} as const;

export const metadata: Metadata = {
  title: "Rooms",
  description: rooms.pageDescription,
  keywords: [...site.keywords],
  alternates: { canonical: "/rooms" },
  openGraph: {
    title: `Rooms · ${site.name}`,
    description: rooms.pageDescription,
  },
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        title={rooms.pageTitle}
        description={rooms.pageDescription}
        image={gallery.hero[3]}
      />

      {rooms.types.map((room) => {
        const images = room.slug === "standard" ? gallery.rooms.standard : gallery.rooms.double;
        const videos =
          room.slug === "double"
            ? [gallery.videos.doubleRoom, gallery.videos.doubleRoomAlt]
            : [gallery.videos.room];

        return (
          <section
            key={room.slug}
            id={room.slug}
            className="bg-ivory py-20 even:bg-forest-light lg:py-24"
          >
            <div className="mx-auto max-w-6xl px-5 lg:px-8">
              <FadeIn>
                <SectionHeading title={room.title} description={room.description} />
              </FadeIn>
              <FadeIn className="mt-8">
                <ImageGallery images={images} fallbackLabel={room.title} />
              </FadeIn>
              <FadeIn className="mt-6 grid gap-4 sm:grid-cols-2">
                {videos.map((video) => (
                  <FramedVideo key={video.src} video={video} className="h-[32rem]" />
                ))}
              </FadeIn>
              <div className="mt-8 flex flex-wrap gap-2">
                {rooms.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity];
                  return (
                    <span
                      key={amenity}
                      className="inline-flex items-center gap-2 rounded-full bg-forest-light px-3 py-1.5 text-sm text-forest"
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                      {amenity}
                    </span>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-forest-light py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading eyebrow="In-room environment" title="Designed for rest" />
            <p className="mt-6 max-w-2xl">{rooms.environment}</p>
            <div className="mt-8">
              <ImageGallery images={gallery.rooms.details} fallbackLabel="In-room details" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-6xl px-5 text-center lg:px-8">
          <Button asChild>
            <Link href="/contact?tab=booking">Inquire About Availability</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
