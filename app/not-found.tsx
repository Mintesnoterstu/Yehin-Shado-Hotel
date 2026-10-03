"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-canvas px-5 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-sand">404</p>
      <h1 className="mt-4 text-forest-fg">{t.system.emptyRoom}</h1>
      <p className="mt-4 max-w-md">{t.system.emptyBody}</p>
      <Button asChild className="mt-8">
        <Link href="/">{t.system.backHome}</Link>
      </Button>
    </section>
  );
}
