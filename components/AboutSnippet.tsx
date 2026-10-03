import Image from "next/image";
import { gallery } from "@/data/gallery";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function AboutSnippet() {
  const image = gallery.hero[3] ?? gallery.hero[0];

  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="About" title="Wellness first, hotel second" />
          <p className="mt-6">
            Yehin Shado Hotel is a boutique stay and Moroccan-inspired spa in Jemo 1, Addis Ababa.
            Guests come for privacy, thermal rest, and a quieter pace — then remain for Ethiopian
            hospitality, considered rooms, and a bar that understands the hour after the sauna.
          </p>
          <p className="mt-4">
            The property sits next to Saba Building, inside Sisters Cafe Building: a residential
            corner of the city, close to Bole, far from spectacle.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          {image ? (
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-sage">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </FadeIn>
      </div>
    </section>
  );
}
