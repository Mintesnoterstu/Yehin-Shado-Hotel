import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ImageGallery } from "@/components/ImageGallery";
import { AmbientVideo } from "@/components/AmbientVideo";
import { SpaCard } from "@/components/SpaCard";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { spa } from "@/data/spa";
import { gallery } from "@/data/gallery";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Spa & Wellness",
  description: spa.pageDescription,
  keywords: [...site.keywords],
  alternates: { canonical: "/spa" },
  openGraph: {
    title: `Spa & Wellness · ${site.name}`,
    description: spa.pageDescription,
  },
};

export default function SpaPage() {
  return (
    <>
      <PageHero
        title={spa.pageTitle}
        description={spa.pageDescription}
        image={gallery.spa.moroccan[0]}
      />

      <section className="bg-forest-light py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading title={spa.moroccan.title} description={spa.moroccan.description} />
          </FadeIn>
          <FadeIn className="mt-10">
            <ImageGallery images={gallery.spa.moroccan} fallbackLabel="Moroccan-style spa" />
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="Professional Massages"
              description="Inquiry only — we will confirm the therapist and time when you write to us."
            />
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {spa.massages.map((item) => (
              <SpaCard key={item.title} {...item} />
            ))}
          </div>
          <FadeIn className="mt-8">
            <ImageGallery images={gallery.spa.massage} fallbackLabel="Massage suites" />
          </FadeIn>
        </div>
      </section>

      <section className="bg-forest-light py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="Thermal Facilities"
              description="Steam and Finnish sauna for detoxification and muscle rest."
            />
          </FadeIn>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {spa.thermal.map((item) => (
              <article key={item.slug} className="rounded-2xl border border-sage bg-white p-4">
                <ImageGallery
                  images={gallery.spa.thermal.filter((image) => image.src.includes(item.slug))}
                  fallbackLabel={item.title}
                />
                <h3 className="mt-4 px-2 text-ink">{item.title}</h3>
                <p className="mt-2 px-2 pb-2 text-sm">{item.description}</p>
              </article>
            ))}
          </div>
          <FadeIn className="mt-8 overflow-hidden rounded-2xl">
            <AmbientVideo video={gallery.videos.sauna} className="h-72 w-full object-cover" />
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-6xl space-y-6 px-5 text-center lg:px-8">
          <p>
            <Link href="/dining" className="text-forest hover:underline">
              {spa.postSpaNote}
            </Link>
          </p>
          <Button asChild>
            <Link href="/contact?tab=booking">Reserve a Spa Session</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
