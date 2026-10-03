"use client";

import { useReducedMotion } from "framer-motion";
import type { GalleryVideo } from "@/data/gallery";

type AmbientVideoProps = {
  video: GalleryVideo;
  className?: string;
};

export function AmbientVideo({ video, className }: AmbientVideoProps) {
  const reduce = useReducedMotion();

  return (
    <video
      className={className}
      poster={video.poster}
      autoPlay={!reduce}
      muted
      loop
      playsInline
      controls={Boolean(reduce)}
      aria-label={video.title}
    >
      <source src={video.src} type="video/mp4" />
    </video>
  );
}
