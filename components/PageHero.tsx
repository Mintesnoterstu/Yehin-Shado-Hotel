import Image from "next/image";
import type { GalleryImage } from "@/data/gallery";

type PageHeroProps = {
  title: string;
  description: string;
  image?: GalleryImage;
};

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[52vh] overflow-hidden bg-forest-dark">
      {image ? (
        <>
          <Image
            src={image.src}
            alt=""
            fill
            aria-hidden
            sizes="100vw"
            className="scale-110 object-cover blur-sm"
          />
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </>
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest/20 to-transparent" />
      <div className="relative z-10 mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 lg:px-8">
        <h1 className="text-ivory drop-shadow-sm">{title}</h1>
        <p className="mt-4 max-w-xl text-ivory/90">{description}</p>
      </div>
    </section>
  );
}
