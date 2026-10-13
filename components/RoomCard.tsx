"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";
import { FramedImage } from "@/components/FramedMedia";
import { useLanguage } from "@/components/LanguageProvider";
import { cn } from "@/lib/utils";

type RoomCardProps = {
  title: string;
  description: string;
  href: string;
  image?: GalleryImage;
};

export function RoomCard({ title, description, href, image }: RoomCardProps) {
  const { t } = useLanguage();

  return (
    <article className="group overflow-hidden bg-surface">
      {image ? <FramedImage src={image.src} alt={image.alt} className="aspect-[4/5]" /> : null}
      <div className="space-y-3 px-1 py-6">
        <h3 className="text-ink">{title}</h3>
        <p className="text-moss">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-forest-fg"
        >
          {t.actions.viewDetails}
          <ArrowRight className="h-4 w-4 text-sand transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export function RoomCardGrid({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("grid gap-10 md:grid-cols-2", className)}>{children}</div>;
}
