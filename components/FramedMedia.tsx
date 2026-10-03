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

/** Vertical (TikTok) still: blurred fill so the frame is never a flat color, sharp 9:16 photo in the center. */
export function FramedImage({ src, alt, priority, sizes, className }: FramedImageProps) {
  return (
    <figure className={cn("relative overflow-hidden rounded-2xl bg-forest-dark", className)}>
      <Image
        src={src}
        alt=""
        fill
        aria-hidden
        sizes="100vw"
        className="scale-125 object-cover blur-2xl opacity-70"
      />
      <div className="relative z-10 flex h-full items-center justify-center p-3 sm:p-4">
        <div className="relative h-full aspect-[9/16] overflow-hidden rounded-xl shadow-lg">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes ?? "(max-width: 768px) 80vw, 360px"}
            className="object-cover"
          />
        </div>
      </div>
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
    <div className={cn("relative overflow-hidden rounded-2xl bg-forest-dark", className)}>
      {video.poster ? (
        <Image
          src={video.poster}
          alt=""
          fill
          aria-hidden
          sizes="100vw"
          className="scale-125 object-cover blur-2xl opacity-70"
        />
      ) : null}
      <div className="relative z-10 flex h-full items-center justify-center p-3 sm:p-4">
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
    </div>
  );
}
