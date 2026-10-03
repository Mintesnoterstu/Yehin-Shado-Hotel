"use client";

import { useEffect, useRef, useState } from "react";
import { Leaf, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";
import type { ThemeName } from "@/data/copy";

const icons = {
  default: Leaf,
  light: Sun,
  dark: Moon,
} as const;

export function ThemeToggle() {
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const Icon = icons[theme];

  useEffect(() => {
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onPointer);
    return () => window.removeEventListener("mousedown", onPointer);
  }, []);

  const options: { name: ThemeName; label: string }[] = [
    { name: "default", label: t.header.default },
    { name: "light", label: t.header.light },
    { name: "dark", label: t.header.dark },
  ];

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.header.theme}
        title={t.header.theme}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/20 text-current hover:bg-current/10"
        onClick={() => setOpen((value) => !value)}
      >
        <Icon className="h-4 w-4" />
        <span className="sr-only">{t.header.theme}</span>
      </button>
      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 min-w-[9rem] overflow-hidden rounded-xl border border-sage bg-surface py-1 text-sm text-ink shadow-md"
        >
          {options.map((option) => {
            const OptionIcon = icons[option.name];
            return (
              <li key={option.name}>
                <button
                  type="button"
                  role="option"
                  aria-selected={theme === option.name}
                  className={cn(
                    "flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-forest-light",
                    theme === option.name && "bg-forest-light font-medium text-forest-fg",
                  )}
                  onClick={() => {
                    setTheme(option.name);
                    setOpen(false);
                  }}
                >
                  <OptionIcon className="h-4 w-4" aria-hidden />
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
