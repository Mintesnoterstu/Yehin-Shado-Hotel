import type { Metadata } from "next";
import { RoomsView } from "@/components/RoomsView";
import { rooms } from "@/data/rooms";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Rooms",
  description: rooms.pageDescription,
  keywords: [...site.keywords],
  alternates: { canonical: "/rooms" },
  openGraph: {
    title: `Rooms · ${site.name}`,
    description: rooms.pageDescription,
  },
};

export default function RoomsPage() {
  return <RoomsView />;
}
