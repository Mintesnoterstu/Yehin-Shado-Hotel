"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  const { theme } = useTheme();
  const day = theme === "light";

  return (
    <section className={cn("relative min-h-[48vh] overflow-hidden", day ? "bg-canvas" : "bg-forest-dark")}>
      <div className="relative z-10 mx-auto flex min-h-[48vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 lg:px-8">
        <h1 className={cn("drop-shadow-sm", day ? "text-forest-fg" : "text-ivory")}>{title}</h1>
        <p className={cn("mt-4 max-w-xl", day ? "text-moss" : "text-ivory/90")}>{description}</p>
      </div>
    </section>
  );
}
