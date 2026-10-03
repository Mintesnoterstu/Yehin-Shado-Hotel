"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useLanguage();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-canvas px-5 text-center">
      <h1 className="text-forest-fg">{t.system.quietError}</h1>
      <p className="mt-4 max-w-md">{t.system.tryAgainBody}</p>
      <Button className="mt-8" onClick={reset} type="button">
        {t.system.tryAgain}
      </Button>
    </section>
  );
}
