"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Loading() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-canvas">
      <p className="font-serif text-2xl text-forest-fg">{t.system.arriving}</p>
    </div>
  );
}
