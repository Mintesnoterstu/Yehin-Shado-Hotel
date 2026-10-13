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
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-[0.7rem] font-medium uppercase tracking-[0.28em]",
            invert ? "text-sand" : "text-sand",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <div className={cn("hairline mb-5", align === "center" && "mx-auto")} />
      <h2 className={invert ? "text-ivory" : "text-ink"}>{title}</h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-xl",
            invert ? "text-ivory/80" : "text-moss",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
