"use client";

import { useEffect, useRef, useState } from "react";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onPointer);
    return () => window.removeEventListener("mousedown", onPointer);
  }, []);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.header.language}
        title={t.header.language}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/20 text-current hover:bg-current/10"
        onClick={() => setOpen((value) => !value)}
      >
        <Languages className="h-4 w-4" />
        <span className="sr-only">{t.header.language}</span>
      </button>
      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 min-w-[9rem] overflow-hidden rounded-xl border border-sage bg-surface py-1 text-sm text-ink shadow-md"
        >
          <li>
            <button
              type="button"
              role="option"
              aria-selected={locale === "en"}
              className={cn(
                "flex w-full px-3 py-2 text-left hover:bg-forest-light",
                locale === "en" && "bg-forest-light font-medium text-forest-fg",
              )}
              onClick={() => {
                setLocale("en");
                setOpen(false);
              }}
            >
              English
            </button>
          </li>
          <li>
            <button
              type="button"
              role="option"
              aria-selected={locale === "am"}
              className={cn(
                "flex w-full px-3 py-2 text-left hover:bg-forest-light",
                locale === "am" && "bg-forest-light font-medium text-forest-fg",
              )}
              onClick={() => {
                setLocale("am");
                setOpen(false);
              }}
            >
              አማርኛ
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
