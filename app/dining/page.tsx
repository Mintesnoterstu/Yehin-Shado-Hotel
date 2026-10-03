import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ImageGallery } from "@/components/ImageGallery";
import { AmbientVideo } from "@/components/AmbientVideo";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { dining } from "@/data/dining";
import { gallery } from "@/data/gallery";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Dining",
  description: dining.pageDescription,
  keywords: [...site.keywords],
  alternates: { canonical: "/dining" },
  openGraph: {
    title: `Dining · ${site.name}`,
    description: dining.pageDescription,
  },
};

export default function DiningPage() {
  return (
    <>
      <PageHero
        title={dining.pageTitle}
        description={dining.pageDescription}
        image={gallery.hero[1]}
      />

      <section className="bg-ivory py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading
              title={dining.restaurant.title}
              description={dining.restaurant.description}
            />
          </FadeIn>
          <FadeIn className="mt-10">
            <ImageGallery images={gallery.dining.restaurant} fallbackLabel="Restaurant" />
          </FadeIn>
          <FadeIn className="mt-6 overflow-hidden rounded-2xl">
            <AmbientVideo video={gallery.videos.dining} className="h-80 w-full object-cover" />
          </FadeIn>
          <div className="mt-10">
            <Button asChild>
              <Link href="/contact">Reserve a Table</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-ivory lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <FadeIn>
            <SectionHeading
              invert
              eyebrow="After the spa"
              title={dining.bar.title}
              description={dining.bar.description}
            />
          </FadeIn>
          <FadeIn className="mt-10">
            <ImageGallery images={gallery.dining.bar} fallbackLabel="Bar & Lounge" />
          </FadeIn>
          <div className="mt-10">
            <Button asChild variant="secondary">
              <Link href="/contact">Reserve a Table</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
