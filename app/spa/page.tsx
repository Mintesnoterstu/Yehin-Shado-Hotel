import type { Metadata } from "next";
import { SpaView } from "@/components/SpaView";
import { spa } from "@/data/spa";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Spa & Wellness",
  description: spa.pageDescription,
  keywords: [...site.keywords],
  alternates: { canonical: "/spa" },
  openGraph: {
    title: `Spa & Wellness · ${site.name}`,
    description: spa.pageDescription,
  },
};

export default function SpaPage() {
  return <SpaView />;
}
