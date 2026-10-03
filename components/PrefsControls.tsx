"use client";

import { Leaf, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";
import type { ThemeName } from "@/data/copy";

type PrefsProps = {
  inverted?: boolean;
};

export function PrefsControls({ inverted = false }: PrefsProps) {
  const { locale, setLocale, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const themes: { name: ThemeName; label: string; icon: typeof Sun }[] = [
    { name: "default", label: t.header.default, icon: Leaf },
    { name: "light", label: t.header.light, icon: Sun },
    { name: "dark", label: t.header.dark, icon: Moon },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div
        className={cn(
          "flex rounded-full border p-0.5 text-xs",
          inverted ? "border-ivory/30" : "border-sage",
        )}
        role="group"
        aria-label={t.header.language}
      >
        <button
          type="button"
          aria-pressed={locale === "en"}
          className={cn(
            "rounded-full px-2.5 py-1",
            locale === "en" ? "bg-forest text-ivory" : inverted ? "text-ivory/80" : "text-moss hover:text-forest-fg",
          )}
          onClick={() => setLocale("en")}
        >
          {t.header.english}
        </button>
        <button
          type="button"
          aria-pressed={locale === "am"}
          className={cn(
            "rounded-full px-2.5 py-1",
            locale === "am" ? "bg-forest text-ivory" : inverted ? "text-ivory/80" : "text-moss hover:text-forest-fg",
          )}
          onClick={() => setLocale("am")}
        >
          {t.header.amharic}
        </button>
      </div>
      <span
        className={cn("hidden h-5 w-px sm:block", inverted ? "bg-ivory/25" : "bg-sage")}
        aria-hidden
      />
      <div
        className={cn(
          "flex rounded-full border p-0.5 text-xs",
          inverted ? "border-ivory/30" : "border-sage",
        )}
        role="group"
        aria-label={t.header.theme}
      >
        {themes.map(({ name, label, icon: Icon }) => (
          <button
            type="button"
            key={name}
            title={label}
            aria-pressed={theme === name}
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2 py-1",
              theme === name ? "bg-forest text-ivory" : inverted ? "text-ivory/80" : "text-moss hover:text-forest-fg",
            )}
            onClick={() => setTheme(name)}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
