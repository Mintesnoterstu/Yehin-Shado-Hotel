import { site } from "@/data/site";
import { getSiteUrl } from "@/lib/utils";

export function JsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hotel",
        name: site.name,
        url,
        telephone: site.phoneE164,
        image: `${url}/images/yihen-shado/hero/main.webp`,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.neighborhood}, ${site.address.landmark}`,
          addressLocality: site.address.city,
          postalCode: site.address.postalCode,
          addressCountry: "ET",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating,
          reviewCount: site.reviewCount,
          bestRating: 5,
        },
      },
      {
        "@type": "LocalBusiness",
        name: site.name,
        url,
        telephone: site.phoneE164,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.neighborhood}, next to Saba Building, Sisters Cafe Building`,
          addressLocality: site.address.city,
          postalCode: site.address.postalCode,
          addressCountry: "ET",
        },
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
