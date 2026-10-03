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
    <article className="rounded-2xl border border-sage bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-forest hover:shadow-md">
      <Icon className="h-6 w-6 text-forest" aria-hidden />
      <h3 className="mt-4 text-ink">{title}</h3>
      <p className="mt-2 text-sm text-moss">{description}</p>
    </article>
  );
}

export function SpaCardGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-4", className)}>{children}</div>;
}
