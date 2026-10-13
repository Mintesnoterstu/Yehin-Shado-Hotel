"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { gallery } from "@/data/gallery";
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
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const light = theme === "light";
  const overHero = isHome && !scrolled && !open && !light;
  const solidLight = light || (isHome && scrolled) || (!isHome && light);
  const darkChrome = !light && (overHero || !isHome || scrolled || open);

  const nav = [
    { href: "/", label: t.nav.home },
    { href: "/rooms", label: t.nav.rooms },
    { href: "/spa", label: t.nav.spa },
    { href: "/dining", label: t.nav.dining },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        overHero
          ? "border-transparent bg-transparent text-ivory"
          : light
            ? "border-b border-sage/80 bg-canvas/90 text-ink backdrop-blur-md"
            : "border-b border-white/10 bg-forest-dark/95 text-ivory backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-3 px-5 lg:px-10">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src={gallery.brand.logo.src}
            alt={gallery.brand.logo.alt}
            width={42}
            height={42}
            className="h-[42px] w-[42px] shrink-0 rounded-full object-cover ring-1 ring-white/20"
            priority
          />
          <span
            className={cn(
              "truncate font-serif text-[1.15rem] tracking-[-0.02em] sm:text-xl",
              light && !overHero ? "text-ink" : "text-ivory",
              light && (scrolled || !isHome) && "text-ink",
            )}
          >
            {t.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            const muted = overHero || darkChrome;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group text-[0.8rem] font-medium uppercase tracking-[0.16em]",
                  muted ? "text-ivory/80 hover:text-ivory" : "text-moss hover:text-ink",
                  active && (muted ? "text-ivory" : "text-ink"),
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "mt-1 block h-px bg-sand transition-all duration-300",
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
            className={cn(
              "ml-2 hidden text-sm xl:inline",
              overHero || darkChrome ? "text-ivory/80" : "text-moss",
            )}
          >
            {site.phoneDisplay}
          </a>
          <Button asChild size="sm" className="ml-2">
            <Link href="/contact?tab=booking">{t.actions.bookNow}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className={solidLight && !overHero && light ? "text-ink" : "text-ivory"}
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
            "border-t px-5 py-8 lg:hidden",
            light ? "border-sage bg-canvas text-ink" : "border-white/10 bg-forest-dark text-ivory",
          )}
        >
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-serif text-3xl"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${site.phoneE164}`} className="text-moss">
              {site.phoneDisplay}
            </a>
            <Button asChild className="mt-2 w-full">
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
