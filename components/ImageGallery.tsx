import type { GalleryImage } from "@/data/gallery";
import { FramedImage } from "@/components/FramedMedia";
import { cn } from "@/lib/utils";

type ImageGalleryProps = {
  images: readonly GalleryImage[];
  fallbackLabel: string;
  className?: string;
};

export function ImageGallery({ images, fallbackLabel, className }: ImageGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "grid gap-4",
        images.length === 1 && "grid-cols-1 justify-items-center",
        images.length === 2 && "grid-cols-1 sm:grid-cols-2",
        images.length >= 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {images.map((image) => (
        <FramedImage
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="h-56 w-full sm:h-72"
        />
      ))}
      <span className="sr-only">{fallbackLabel}</span>
    </div>
  );
}
