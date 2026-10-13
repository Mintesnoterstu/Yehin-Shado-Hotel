import type { ReactNode } from "react";
import { Bath, Cloud, Flame, Flower2, Hand, HeartPulse, Waves, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  bath: Bath,
  hand: Hand,
  cloud: Cloud,
  flame: Flame,
  waves: Waves,
  flower: Flower2,
  heartPulse: HeartPulse,
};

type SpaCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function SpaCard({ title, description, icon }: SpaCardProps) {
  const Icon = icons[icon] ?? Bath;

  return (
    <article className="border-t border-sage pt-6">
      <Icon className="h-5 w-5 text-sand" aria-hidden />
      <h3 className="mt-5 text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-moss">{description}</p>
    </article>
  );
}

export function SpaCardGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("grid gap-8 sm:grid-cols-2 lg:grid-cols-4", className)}>{children}</div>;
}
