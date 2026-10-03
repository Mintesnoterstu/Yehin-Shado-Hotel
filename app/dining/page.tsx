import type { Metadata } from "next";
import { DiningView } from "@/components/DiningView";
import { dining } from "@/data/dining";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Dining",
  description: dining.pageDescription,
  keywords: [...site.keywords],
  alternates: { canonical: "/dining" },
  openGraph: {
    title: `Dining · ${site.name}`,
    description: dining.pageDescription,
  },
};

export default function DiningPage() {
  return <DiningView />;
}
