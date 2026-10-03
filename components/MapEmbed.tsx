import { getMapsEmbedUrl } from "@/lib/utils";
import { site } from "@/data/site";

type MapEmbedProps = {
  className?: string;
};

export function MapEmbed({ className }: MapEmbedProps) {
  return (
    <div className={className}>
      <iframe
        title={`Map of ${site.name} in ${site.address.neighborhood}, Addis Ababa`}
        src={getMapsEmbedUrl()}
        className="map-muted h-72 w-full rounded-xl border border-sage bg-forest-light"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
