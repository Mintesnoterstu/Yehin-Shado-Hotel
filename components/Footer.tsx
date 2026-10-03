"use client";

import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { gallery } from "@/data/gallery";
import { LegalModal } from "@/components/LegalModal";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const nav = [
    { href: "/", label: t.nav.home },
    { href: "/rooms", label: t.nav.rooms },
    { href: "/spa", label: t.nav.spa },
    { href: "/dining", label: t.nav.dining },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-forest-dark text-ivory/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={gallery.brand.logo.src}
              alt={gallery.brand.logo.alt}
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="font-serif text-xl text-ivory">{t.name}</span>
          </Link>
          <p className="text-sm text-ivory/70">{t.description}</p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-sand">{t.footer.visit}</p>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-sand">{t.footer.contact}</p>
            <address className="not-italic text-sm leading-relaxed">{t.location.addressLine}</address>
          <a href={`tel:${site.phoneE164}`} className="mt-3 block text-sm hover:text-sand">
            {site.phoneDisplay}
          </a>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-sand">{t.footer.follow}</p>
          <a
            href={site.social.tiktok.href}
            className="text-sm hover:text-sand"
            rel="noreferrer"
            target="_blank"
          >
            TikTok
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-ivory/60 sm:flex-row sm:items-center lg:px-8">
          <p>
            © {new Date().getFullYear()} {t.name}. {t.footer.rights}
          </p>
          <div className="flex gap-4">
            <LegalModal kind="privacy" />
            <LegalModal kind="terms" />
          </div>
        </div>
      </div>
    </footer>
  );
}
