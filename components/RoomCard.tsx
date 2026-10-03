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
    <article className="group overflow-hidden rounded-2xl border border-sage bg-surface shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      {image ? (
        <FramedImage src={image.src} alt={image.alt} className="rounded-none" />
      ) : null}
      <div className="space-y-3 p-6">
        <h3 className="text-ink">{title}</h3>
        <p className="text-moss">{description}</p>
        <Link href={href} className="inline-flex items-center gap-2 text-sm text-forest-fg">
          {t.actions.viewDetails}
          <ArrowRight className="h-4 w-4 text-sand transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export function RoomCardGrid({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("grid gap-6 md:grid-cols-2", className)}>{children}</div>;
}
