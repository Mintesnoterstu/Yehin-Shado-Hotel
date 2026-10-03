"use client";

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

  const themes: ThemeName[] = ["default", "light", "dark"];
  const themeLabel: Record<ThemeName, string> = {
    default: t.header.default,
    light: t.header.light,
    dark: t.header.dark,
  };

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
          className={cn(
            "rounded-full px-2.5 py-1",
            locale === "am" ? "bg-forest text-ivory" : inverted ? "text-ivory/80" : "text-moss hover:text-forest-fg",
          )}
          onClick={() => setLocale("am")}
        >
          {t.header.amharic}
        </button>
      </div>
      <div
        className={cn(
          "flex rounded-full border p-0.5 text-xs",
          inverted ? "border-ivory/30" : "border-sage",
        )}
        role="group"
        aria-label={t.header.theme}
      >
        {themes.map((name) => (
          <button
            type="button"
            key={name}
            className={cn(
              "rounded-full px-2.5 py-1",
              theme === name ? "bg-forest text-ivory" : inverted ? "text-ivory/80" : "text-moss hover:text-forest-fg",
            )}
            onClick={() => setTheme(name)}
          >
            {themeLabel[name]}
          </button>
        ))}
      </div>
    </div>
  );
}
