import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { AboutSnippet } from "@/components/AboutSnippet";
import { RoomCard, RoomCardGrid } from "@/components/RoomCard";
import { SpaCard, SpaCardGrid } from "@/components/SpaCard";
import { DiningPreview } from "@/components/DiningPreview";
import { Testimonial } from "@/components/Testimonial";
import { LocationStrip } from "@/components/LocationStrip";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { JsonLd } from "@/components/JsonLd";
import { rooms } from "@/data/rooms";
import { spa } from "@/data/spa";
import { testimonials } from "@/data/testimonials";
import { gallery } from "@/data/gallery";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} — Boutique Hotel & Spa in Addis Ababa`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <AboutSnippet />

      <section className="bg-forest-light py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Stay"
              title="Rooms for quiet nights"
              description="Two considered layouts — nothing excess, everything needed for rest."
            />
          </FadeIn>
          <FadeIn className="mt-12">
            <RoomCardGrid>
              {rooms.preview.map((room) => (
                <RoomCard
                  key={room.slug}
                  title={room.title}
                  description={room.description}
                  href="/rooms"
                  image={
                    room.slug === "standard" ? gallery.rooms.standard[0] : gallery.rooms.double[0]
                  }
                />
              ))}
            </RoomCardGrid>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Spa"
              title={spa.heading}
              description="Moroccan-inspired suites, professional massage, steam, and Finnish sauna."
            />
          </FadeIn>
          <FadeIn className="mt-12">
            <SpaCardGrid>
              {spa.features.map((feature) => (
                <SpaCard key={feature.title} {...feature} />
              ))}
            </SpaCardGrid>
          </FadeIn>
          <Link href="/spa" className="mt-10 inline-block text-sm text-forest hover:underline">
            Explore the spa →
          </Link>
        </div>
      </section>

      <DiningPreview />

      <section className="bg-forest-light py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Guest voices"
              title="Notes from a quiet stay"
              description="Placeholder quotes until approved guest testimonials are provided."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <FadeIn key={item.quote}>
                <Testimonial {...item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
