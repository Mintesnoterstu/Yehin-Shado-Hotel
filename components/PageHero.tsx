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
    <section
      className={cn(
        "relative overflow-hidden",
        day ? "bg-canvas" : "surface-dark bg-forest-soft",
      )}
    >
      <div className="mx-auto flex min-h-[42vh] max-w-7xl flex-col justify-end px-5 pb-14 pt-32 lg:px-10">
        <div className="hairline mb-6" />
        <h1 className={day ? "text-ink" : "text-ivory"}>{title}</h1>
        <p className={cn("mt-5 max-w-xl", day ? "text-moss" : "text-ivory/85")}>{description}</p>
      </div>
    </section>
  );
}
