import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center mx-auto max-w-2xl", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-medium uppercase tracking-[0.2em]",
            invert ? "text-sand" : "text-sand",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={invert ? "text-ivory" : "text-forest-fg"}>{title}</h2>
      {description ? (
        <p className={cn("mt-4 max-w-2xl", invert ? "text-ivory/80" : "text-moss", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
