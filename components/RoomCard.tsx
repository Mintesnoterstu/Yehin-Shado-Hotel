import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";
import { cn } from "@/lib/utils";

type RoomCardProps = {
  title: string;
  description: string;
  href: string;
  image?: GalleryImage;
};

export function RoomCard({ title, description, href, image }: RoomCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-sage bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-forest to-forest-dark">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <p className="absolute bottom-4 left-4 font-serif text-xl text-ivory">{title}</p>
        )}
      </div>
      <div className="space-y-3 p-6">
        <h3 className="text-ink">{title}</h3>
        <p className="text-moss">{description}</p>
        <Link href={href} className="inline-flex items-center gap-2 text-sm text-forest">
          View Details
          <ArrowRight className="h-4 w-4 text-sand transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export function RoomCardGrid({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("grid gap-6 md:grid-cols-2", className)}>{children}</div>;
}
