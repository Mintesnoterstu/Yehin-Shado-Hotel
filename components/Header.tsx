"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { gallery } from "@/data/gallery";
import { Button } from "@/components/ui/button";
import { PrefsControls } from "@/components/PrefsControls";
import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = scrolled || open;
  const inverted = !solid && theme !== "light";
  const linkClass = inverted ? "text-ivory/85 hover:text-ivory" : "text-moss hover:text-forest-fg";
  const activeClass = inverted ? "text-ivory" : "text-forest-fg";

  const nav = [
    { href: "/", label: t.nav.home },
    { href: "/rooms", label: t.nav.rooms },
    { href: "/spa", label: t.nav.spa },
    { href: "/dining", label: t.nav.dining },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        solid ? "bg-canvas/95 shadow-sm backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 lg:h-[4.25rem] lg:px-8">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src={gallery.brand.logo.src}
            alt={gallery.brand.logo.alt}
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-full bg-ivory object-cover ring-1 ring-sage"
            priority
          />
          <span
            className={cn(
              "truncate font-serif text-lg tracking-[-0.02em] sm:text-xl",
              inverted ? "text-ivory" : "text-forest-fg",
            )}
          >
            {t.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("group text-sm", linkClass, active && activeClass)}
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

        <div className="hidden min-w-0 items-center gap-3 lg:flex">
          <PrefsControls inverted={inverted} />
          <a href={`tel:${site.phoneE164}`} className={cn("hidden text-sm 2xl:inline", linkClass)}>
            {site.phoneDisplay}
          </a>
          <Button asChild size="sm">
            <Link href="/contact?tab=booking">{t.actions.bookNow}</Link>
          </Button>
        </div>

        <button
          type="button"
          className={cn("lg:hidden", inverted ? "text-ivory" : "text-forest-fg")}
          aria-expanded={open}
          aria-label={open ? t.actions.closeMenu : t.actions.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-sage bg-canvas px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-serif text-2xl text-forest-fg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${site.phoneE164}`} className="text-moss">
              {site.phoneDisplay}
            </a>
            <PrefsControls />
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
