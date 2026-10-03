import { gallery } from "@/data/gallery";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { FramedImage } from "@/components/FramedMedia";

export function AboutSnippet() {
  const image = gallery.hero[0] ?? gallery.hero[3];

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
            <FramedImage src={image.src} alt={image.alt} className="h-[32rem] border border-sage" />
          ) : null}
        </FadeIn>
      </div>
    </section>
  );
}
