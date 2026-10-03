export const spa = {
  pageTitle: "Spa & Wellness",
  pageDescription:
    "Moroccan-inspired rituals, professional massage, steam, and Finnish sauna in Addis Ababa.",
  heading: "Rituals for Deep Rest",
  postSpaNote: "Post-spa refreshments available at our bar & lounge.",
  features: [
    {
      title: "Moroccan-Style Spa Suites",
      description: "Private rooms for traditional bath rituals, exfoliation, and wraps.",
      icon: "bath",
    },
    {
      title: "Professional Massages",
      description: "Deep tissue, Swedish, and targeted therapeutic work.",
      icon: "hand",
    },
    {
      title: "Steam Room",
      description: "Warm steam to ease the body before or after treatment.",
      icon: "cloud",
    },
    {
      title: "Finnish Sauna",
      description: "Dry heat and wood, for muscle release and quiet heat.",
      icon: "flame",
    },
  ],
  moroccan: {
    title: "Moroccan-Style Spa Suites",
    description:
      "Traditional Moroccan bath rituals, targeted exfoliation, and body wraps — paced slowly, in private suites.",
  },
  massages: [
    {
      title: "Deep Tissue",
      description: "Steady pressure for tightness held in the back, shoulders, and legs.",
      icon: "waves",
    },
    {
      title: "Swedish",
      description: "Long, flowing strokes for circulation and an unhurried calm.",
      icon: "flower",
    },
    {
      title: "Targeted Therapeutic",
      description: "Focused work on a specific area, guided by how you arrive.",
      icon: "heartPulse",
    },
  ],
  thermal: [
    {
      slug: "steam",
      title: "Steam Room",
      description: "Moist heat to support detoxification and a softer muscle tone.",
    },
    {
      slug: "sauna",
      title: "Finnish Sauna",
      description: "Classic dry sauna heat for deep muscle relaxation.",
    },
  ],
} as const;
