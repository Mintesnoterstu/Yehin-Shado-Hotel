"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { GalleryVideo } from "@/data/gallery";

type FramedImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/** Still photos use a landscape frame — 9:16 is reserved for video. */
export function FramedImage({ src, alt, priority, sizes, className }: FramedImageProps) {
  return (
    <figure className={cn("relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sage", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
        className="object-cover object-center"
      />
    </figure>
  );
}

type FramedVideoProps = {
  video: GalleryVideo;
  title?: string;
  className?: string;
};

export function FramedVideo({ video, title, className }: FramedVideoProps) {
  const reduce = useReducedMotion();
  const label = title ?? video.title;

  return (
    <div className={cn("mx-auto w-full max-w-[17.5rem]", className)}>
      <div className="relative aspect-[9/16] overflow-hidden rounded-[1.85rem] bg-forest-dark shadow-lg ring-1 ring-white/15">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          poster={video.poster}
          autoPlay={!reduce}
          muted
          loop
          playsInline
          controls
          aria-label={label}
        >
          <source src={video.src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
