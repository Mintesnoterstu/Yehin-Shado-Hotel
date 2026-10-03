import Image from "next/image";
import type { GalleryImage } from "@/data/gallery";

type PageHeroProps = {
  title: string;
  description: string;
  image?: GalleryImage;
};

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[52vh] overflow-hidden">
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-forest to-forest-dark" />
      )}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(31,59,44,0.35), rgba(31,59,44,0.7))",
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 lg:px-8">
        <h1 className="text-ivory">{title}</h1>
        <p className="mt-4 max-w-xl text-ivory/90">{description}</p>
      </div>
    </section>
  );
}
