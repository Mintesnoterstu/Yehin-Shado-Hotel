"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-ivory px-5 text-center">
      <h1 className="text-forest">Something went quiet</h1>
      <p className="mt-4 max-w-md">We could not load this page. Please try again.</p>
      <Button className="mt-8" onClick={reset} type="button">
        Try again
      </Button>
    </section>
  );
}
