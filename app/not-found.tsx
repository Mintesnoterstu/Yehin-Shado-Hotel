import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-ivory px-5 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-sand">404</p>
      <h1 className="mt-4 text-forest">This room is empty</h1>
      <p className="mt-4 max-w-md">The page you asked for is not part of the hotel. Return to the foyer.</p>
      <Button asChild className="mt-8">
        <Link href="/">Back home</Link>
      </Button>
    </section>
  );
}
