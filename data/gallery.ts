export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryVideo = {
  src: string;
  poster?: string;
  title: string;
};

export const gallery = {
  hero: [
    {
      src: "/images/yihen-shado/hero/main.webp",
      alt: "Yehin Shado Hotel building illuminated at night in Jemo 1, Addis Ababa",
    },
    {
      src: "/images/yihen-shado/hero/night.jpg",
      alt: "Night view of Yehin Shado Hotel with rooftop signage",
    },
    {
      src: "/images/yihen-shado/hero/facade.jpg",
      alt: "Facade of Yehin Shado Hotel in Addis Ababa",
    },
    {
      src: "/images/yihen-shado/hero/wordmark-facade.jpeg",
      alt: "Yehin Shado Hotel sign on the building facade",
    },
  ],
  rooms: {
    standard: [
      {
        src: "/images/yihen-shado/rooms/standard/standard-1.webp",
        alt: "Standard bedroom with dressed bed, warm lighting, and quiet curtains",
      },
      {
        src: "/images/yihen-shado/rooms/standard/standard-2.webp",
        alt: "Private bathroom with twin basins and tiled finishes",
      },
    ],
    double: [
      {
        src: "/images/yihen-shado/rooms/double/double-1.webp",
        alt: "Double bedroom prepared for rest with floral welcome details",
      },
      {
        src: "/images/yihen-shado/rooms/double/double-2.webp",
        alt: "Bathroom serving the double bedroom with private vanity space",
      },
    ],
    details: [
      {
        src: "/images/yihen-shado/rooms/details/in-room-1.webp",
        alt: "In-room bathroom with mosaic ceiling and calm lighting",
      },
      {
        src: "/images/yihen-shado/rooms/details/in-room-2.webp",
        alt: "Secure wooden lockers and shoe storage for wellness guests",
      },
    ],
  },
  spa: {
    moroccan: [
      {
        src: "/images/yihen-shado/spa/moroccan/moroccan-1.webp",
        alt: "Spa lounge chairs with candlelight and rose petals",
      },
      {
        src: "/images/yihen-shado/spa/moroccan/moroccan-2.webp",
        alt: "Rolled spa towels prepared for Moroccan-style bath rituals",
      },
      {
        src: "/images/yihen-shado/spa/moroccan/moroccan-3.webp",
        alt: "Private spa lockers for guests during treatments",
      },
    ],
    massage: [
      {
        src: "/images/yihen-shado/spa/massage/massage-1.webp",
        alt: "Fresh spa linens ready for professional massage treatments",
      },
      {
        src: "/images/yihen-shado/spa/massage/massage-2.webp",
        alt: "Quiet rest area adjoining the massage suites",
      },
    ],
    thermal: [
      {
        src: "/images/yihen-shado/spa/thermal/steam-1.webp",
        alt: "Steam cabin with glass door in the thermal suite",
      },
      {
        src: "/images/yihen-shado/spa/thermal/sauna-1.webp",
        alt: "Finnish sauna with wooden ladle pouring water over hot stones",
      },
    ],
  },
  dining: {
    restaurant: [] as GalleryImage[],
    bar: [] as GalleryImage[],
  },
  brand: {
    logo: {
      src: "/images/yihen-shado/brand/logo.png",
      alt: "Yehin Shado Hotel YS monogram",
    },
  },
  videos: {
    hero: {
      src: "/videos/yihen-shado/hero-ambient.mp4",
      poster: "/images/yihen-shado/hero/main.webp",
      title: "Quiet interiors — comfort, taste, and relaxation",
    },
    room: {
      src: "/videos/yihen-shado/room.mp4",
      poster: "/images/yihen-shado/rooms/standard/standard-1.webp",
      title: "A walk through a guest bedroom",
    },
    doubleRoom: {
      src: "/videos/yihen-shado/double-room.mp4",
      poster: "/images/yihen-shado/rooms/double/double-1.webp",
      title: "Elegant double bedroom",
    },
    doubleRoomAlt: {
      src: "/videos/yihen-shado/double-room-2.mp4",
      poster: "/images/yihen-shado/rooms/double/double-1.webp",
      title: "Second view of the double bedroom",
    },
    sauna: {
      src: "/videos/yihen-shado/sauna.mp4",
      poster: "/images/yihen-shado/spa/thermal/sauna-1.webp",
      title: "Guest enjoying the sauna",
    },
    dining: {
      src: "/videos/yihen-shado/dining-celebration.mp4",
      title: "A celebration hosted at Yehin Shado Hotel",
    },
  },
} as const satisfies {
  hero: GalleryImage[];
  rooms: {
    standard: GalleryImage[];
    double: GalleryImage[];
    details: GalleryImage[];
  };
  spa: {
    moroccan: GalleryImage[];
    massage: GalleryImage[];
    thermal: GalleryImage[];
  };
  dining: {
    restaurant: GalleryImage[];
    bar: GalleryImage[];
  };
  brand: { logo: GalleryImage };
  videos: Record<string, GalleryVideo>;
};
