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

export function FramedImage({ src, alt, priority, sizes, className }: FramedImageProps) {
  return (
    <figure className={cn("relative overflow-hidden rounded-2xl bg-forest-dark", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
        className="object-cover"
      />
    </figure>
  );
}

type FramedVideoProps = {
  video: GalleryVideo;
  className?: string;
};

export function FramedVideo({ video, className }: FramedVideoProps) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden rounded-2xl bg-forest-dark p-3 sm:p-4", className)}>
      <video
        className="h-full aspect-[9/16] rounded-xl object-cover shadow-lg"
        poster={video.poster}
        autoPlay={!reduce}
        muted
        loop
        playsInline
        controls
        aria-label={video.title}
      >
        <source src={video.src} type="video/mp4" />
      </video>
    </div>
  );
}
