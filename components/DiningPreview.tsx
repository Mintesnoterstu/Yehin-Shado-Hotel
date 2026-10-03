import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { dining } from "@/data/dining";

export function DiningPreview() {
  return (
    <section className="bg-forest py-20 text-ivory lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Dining"
            title="Table, bar, and coffee"
            invert
            description="Ethiopian hospitality in two rooms — the restaurant for a proper meal, the lounge for juices, smoothies, and traditional coffee after the spa."
          />
        </FadeIn>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div className="border-t border-sand/40 pt-6">
              <h3 className="text-ivory">{dining.restaurant.title}</h3>
              <p className="mt-3 text-ivory/80">{dining.restaurant.description}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="border-t border-sand/40 pt-6">
              <h3 className="text-ivory">{dining.bar.title}</h3>
              <p className="mt-3 text-ivory/80">{dining.bar.description}</p>
            </div>
          </FadeIn>
        </div>
        <Link href="/dining" className="mt-10 inline-block text-sm text-sand hover:underline">
          Explore dining →
        </Link>
      </div>
    </section>
  );
}
