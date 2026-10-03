export const site = {
  name: "Yehin Shado Hotel",
  shortName: "Yehin Shado",
  tagline: "A Quiet Retreat in Jemo",
  description:
    "A boutique hotel and Moroccan-inspired wellness spa in Addis Ababa.",
  rating: 4.7,
  reviewCount: 11,
  phoneDisplay: "+251 90 422 2223",
  phoneE164: "+251904222223",
  emailPlaceholder: "reservations@yehinshado.com",
  address: {
    neighborhood: "Jemo 1",
    landmark: "next to Saba Building, inside Sisters Cafe Building",
    city: "Addis Ababa",
    postalCode: "1000",
    country: "Ethiopia",
    line: "Jemo 1, next to Saba Building, inside Sisters Cafe Building, Addis Ababa 1000, Ethiopia",
  },
  hours: {
    note: "[PLACEHOLDER — replace with confirmed hours]",
    reception: "Open 24 hours",
    spa: "Daily, 9:00 – 21:00",
    restaurant: "Daily, 7:00 – 22:00",
    bar: "Daily, 10:00 – 23:00",
  },
  neighborhoodNote:
    "In the heart of Jemo 1 — next to Saba Building, inside Sisters Cafe Building. A quiet corner of Addis Ababa, minutes from Bole International Airport.",
  airportNote: "Minutes from Bole International Airport.",
  social: {
    tiktok: {
      label: "TikTok",
      href: "https://www.tiktok.com/",
      placeholder: true,
    },
  },
  nav: [
    { href: "/rooms", label: "Rooms" },
    { href: "/spa", label: "Spa" },
    { href: "/dining", label: "Dining" },
    { href: "/contact", label: "Contact" },
  ],
  keywords: [
    "Yehin Shado Hotel",
    "boutique hotel Addis Ababa",
    "spa Jemo",
    "Moroccan bath Addis Ababa",
    "sauna Addis Ababa",
    "hotel and spa Ethiopia",
  ],
} as const;

export type NavLink = (typeof site.nav)[number];
