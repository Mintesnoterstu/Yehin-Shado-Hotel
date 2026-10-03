import type { GalleryImage } from "@/data/gallery";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageGalleryProps = {
  images: readonly GalleryImage[];
  fallbackLabel: string;
  className?: string;
};

export function ImageGallery({ images, fallbackLabel, className }: ImageGalleryProps) {
  if (images.length === 0) {
    return (
      <div
        className={cn(
          "flex min-h-[16rem] items-end rounded-2xl bg-gradient-to-br from-forest to-forest-dark p-6 text-ivory",
          className,
        )}
      >
        <p className="font-serif text-2xl">{fallbackLabel}</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-3",
        images.length === 1 && "grid-cols-1",
        images.length === 2 && "grid-cols-1 sm:grid-cols-2",
        images.length >= 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {images.map((image, index) => (
        <figure
          key={image.src}
          className={cn(
            "relative overflow-hidden rounded-2xl border border-sage bg-forest-light",
            index === 0 && images.length > 2 ? "sm:col-span-2 lg:col-span-2 min-h-[18rem]" : "min-h-[14rem]",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
            className="object-cover"
          />
        </figure>
      ))}
    </div>
  );
}
