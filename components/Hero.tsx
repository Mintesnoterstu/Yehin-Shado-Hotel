import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { site } from "@/data/site";
import { gallery } from "@/data/gallery";
import { Button } from "@/components/ui/button";

export function Hero() {
  const heroImage = gallery.hero[3] ?? gallery.hero[1] ?? gallery.hero[0];

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-forest-dark">
      {heroImage ? (
        <>
          <Image
            src={heroImage.src}
            alt=""
            fill
            aria-hidden
            sizes="100vw"
            className="scale-110 object-cover blur-sm"
          />
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </>
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest/25 to-forest/10" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-24 pt-32 lg:px-8">
        <h1 className="max-w-3xl text-ivory drop-shadow-sm">{site.tagline}</h1>
        <p className="mt-5 max-w-xl text-lg text-ivory/90">{site.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/contact?tab=booking">Book a Room</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/spa">Explore the Spa</Link>
          </Button>
        </div>
        <div className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-sand/40 bg-forest/40 px-4 py-2 text-sm text-sand backdrop-blur-sm">
          <Star className="h-4 w-4 fill-sand text-sand" aria-hidden />
          <span>
            {site.rating} · Guest Rated
          </span>
        </div>
      </div>
    </section>
  );
}
