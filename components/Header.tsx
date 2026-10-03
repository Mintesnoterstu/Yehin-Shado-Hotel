"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const light = theme === "light";
  const night = theme === "dark";
  const onDark = !light;

  const nav = [
    { href: "/", label: t.nav.home },
    { href: "/rooms", label: t.nav.rooms },
    { href: "/spa", label: t.nav.spa },
    { href: "/dining", label: t.nav.dining },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b",
        light
          ? "border-sage bg-canvas text-forest-fg"
          : night
            ? "border-white/10 bg-forest-dark text-ivory"
            : "border-white/10 bg-forest text-ivory",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 lg:h-[4.25rem] lg:px-8">
        <Link
          href="/"
          className={cn(
            "min-w-0 shrink-0 font-serif text-lg tracking-[-0.02em] sm:text-xl",
            light ? "text-forest-fg" : "text-ivory",
          )}
          onClick={() => setOpen(false)}
        >
          {t.name}
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group text-sm",
                  onDark ? "text-ivory/85 hover:text-ivory" : "text-moss hover:text-forest-fg",
                  active && (onDark ? "text-ivory" : "text-forest-fg"),
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "block h-px bg-sand transition-all duration-300",
                    active ? "max-w-full" : "max-w-0 group-hover:max-w-full",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href={`tel:${site.phoneE164}`}
            className={cn("ml-1 hidden text-sm 2xl:inline", onDark ? "text-ivory/80" : "text-moss")}
          >
            {site.phoneDisplay}
          </a>
          <Button asChild size="sm" className="ml-1">
            <Link href="/contact?tab=booking">{t.actions.bookNow}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className={light ? "text-forest-fg" : "text-ivory"}
            aria-expanded={open}
            aria-label={open ? t.actions.closeMenu : t.actions.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          className={cn(
            "border-t px-5 py-6 lg:hidden",
            light ? "border-sage bg-canvas" : night ? "border-white/10 bg-forest-dark" : "border-white/10 bg-forest",
          )}
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn("font-serif text-2xl", light ? "text-forest-fg" : "text-ivory")}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${site.phoneE164}`} className={light ? "text-moss" : "text-ivory/80"}>
              {site.phoneDisplay}
            </a>
            <Button asChild className="w-full">
              <Link href="/contact?tab=booking" onClick={() => setOpen(false)}>
                {t.actions.bookNow}
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
