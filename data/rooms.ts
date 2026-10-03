export const rooms = {
  pageTitle: "Rooms",
  pageDescription:
    "Quiet bedrooms in Jemo 1 — tailored for rest after travel, work, or time in the spa.",
  environment:
    "Rooms are composed for quiet. Soft lighting, private baths, and a measured layout keep the city at a distance so rest can arrive without effort.",
  amenities: ["Wi-Fi", "Private bath", "Quiet ambiance", "Room service"],
  preview: [
    {
      slug: "standard",
      title: "Standard Bedroom",
      description: "A calm, minimalist room for solo travelers, business guests, or couples.",
    },
    {
      slug: "double",
      title: "Double Bedroom",
      description: "A more spacious layout for families or guests who prefer extra room.",
    },
  ],
  types: [
    {
      slug: "standard",
      title: "Standard Bedroom",
      description:
        "Tailored for solo travelers, business guests, or couples. Comfort, privacy, and minimalist layout.",
    },
    {
      slug: "double",
      title: "Double Bedroom",
      description:
        "Larger variants with twin or larger bedding — ideal for families or guests wanting extra space.",
    },
  ],
} as const;

export type RoomTypeSlug = (typeof rooms.types)[number]["slug"];
