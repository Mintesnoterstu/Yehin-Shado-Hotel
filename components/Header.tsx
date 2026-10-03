"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { gallery } from "@/data/gallery";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        scrolled || open ? "bg-ivory/95 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 lg:h-[4.25rem] lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src={gallery.brand.logo.src}
            alt={gallery.brand.logo.alt}
            width={36}
            height={36}
            className="rounded-full"
          />
          <span
            className={cn(
              "font-serif text-lg tracking-[-0.02em] sm:text-xl",
              scrolled || open ? "text-forest" : "text-ivory",
            )}
          >
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group text-sm",
                scrolled ? "text-moss hover:text-forest" : "text-ivory/85 hover:text-ivory",
              )}
            >
              {item.label}
              <span className="block h-px max-w-0 bg-sand transition-all duration-300 group-hover:max-w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${site.phoneE164}`}
            className={cn("text-sm", scrolled ? "text-moss hover:text-forest" : "text-ivory/80 hover:text-ivory")}
          >
            {site.phoneDisplay}
          </a>
          <Button asChild size="sm">
            <Link href="/contact?tab=booking">Book Now</Link>
          </Button>
        </div>

        <button
          type="button"
          className={cn("lg:hidden", scrolled || open ? "text-forest" : "text-ivory")}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-sage bg-ivory px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-serif text-2xl text-forest"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${site.phoneE164}`} className="text-moss">
              {site.phoneDisplay}
            </a>
            <Button asChild className="w-full">
              <Link href="/contact?tab=booking" onClick={() => setOpen(false)}>
                Book Now
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
