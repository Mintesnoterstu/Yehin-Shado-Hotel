export type Locale = "en" | "am";
export type ThemeName = "default" | "light" | "dark";

export const copy = {
  en: {
    name: "Yehin Shado Hotel",
    tagline: "A Quiet Retreat in Jemo",
    description:
      "A boutique hotel and Moroccan-inspired wellness spa in Addis Ababa.",
    nav: {
      home: "Home",
      rooms: "Rooms",
      spa: "Spa",
      dining: "Dining",
      contact: "Contact",
    },
    actions: {
      bookNow: "Book Now",
      bookRoom: "Book a Room",
      exploreSpa: "Explore the Spa",
      exploreDining: "Explore dining →",
      viewDetails: "View Details",
      inquireAvailability: "Inquire About Availability",
      reserveSpa: "Reserve a Spa Session",
      reserveTable: "Reserve a Table",
      contactBooking: "Contact & booking",
      whatsapp: "WhatsApp",
      whatsappAria: "Message Yehin Shado Hotel on WhatsApp",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      close: "Close",
    },
    header: {
      language: "Language",
      theme: "Appearance",
      default: "Default",
      light: "Day",
      dark: "Night",
      english: "EN",
      amharic: "አማ",
    },
    home: {
      aboutEyebrow: "About",
      aboutTitle: "Wellness first, hotel second",
      aboutP1:
        "Yehin Shado Hotel is a boutique stay and Moroccan-inspired spa in Jemo 1, Addis Ababa. Guests come for privacy, thermal rest, and a quieter pace — then remain for Ethiopian hospitality, considered rooms, and a bar that understands the hour after the sauna.",
      aboutP2:
        "The property sits next to Saba Building, inside Sisters Cafe Building: a residential corner of the city, close to Bole, far from spectacle.",
      stayEyebrow: "Stay",
      stayTitle: "Rooms for quiet nights",
      stayDescription:
        "Two considered layouts — nothing excess, everything needed for rest.",
      spaEyebrow: "Spa",
      spaDescription:
        "Moroccan-inspired suites, professional massage, steam, and Finnish sauna.",
      exploreSpaLink: "Explore the spa →",
      diningEyebrow: "Dining",
      diningTitle: "Table, bar, and coffee",
      diningDescription:
        "Ethiopian hospitality in two rooms — the restaurant for a proper meal, the lounge for juices, smoothies, and traditional coffee after the spa.",
      voicesEyebrow: "Guest voices",
      voicesTitle: "Notes from a quiet stay",
      voicesDescription:
        "Placeholder quotes until approved guest testimonials are provided.",
      locationTitle: "A quiet corner of Addis Ababa",
      insideTitle: "A look inside",
      guestRated: "Guest Rated",
    },
    location: {
      neighborhood: "Jemo 1",
      neighborhoodNote:
        "In the heart of Jemo 1 — next to Saba Building, inside Sisters Cafe Building. A quiet corner of Addis Ababa, minutes from Bole International Airport.",
      airportNote: "Minutes from Bole International Airport.",
      addressLine:
        "Jemo 1, next to Saba Building, inside Sisters Cafe Building, Addis Ababa 1000, Ethiopia",
      hoursNote: "[PLACEHOLDER — replace with confirmed hours]",
      receptionHours: "Open 24 hours",
      spaHours: "Daily, 9:00 – 21:00",
      restaurantHours: "Daily, 7:00 – 22:00",
      barHours: "Daily, 10:00 – 23:00",
    },
    rooms: {
      pageTitle: "Rooms",
      pageDescription:
        "Quiet bedrooms in Jemo 1 — tailored for rest after travel, work, or time in the spa.",
      environmentEyebrow: "In-room environment",
      environmentTitle: "Designed for rest",
      environment:
        "Rooms are composed for quiet. Soft lighting, private baths, and a measured layout keep the city at a distance so rest can arrive without effort.",
      amenities: {
        wifi: "Wi-Fi",
        bath: "Private bath",
        quiet: "Quiet ambiance",
        service: "Room service",
      },
      standardTitle: "Standard Bedroom",
      standardPreview:
        "A calm, minimalist room for solo travelers, business guests, or couples.",
      standardDescription:
        "Tailored for solo travelers, business guests, or couples. Comfort, privacy, and minimalist layout.",
      doubleTitle: "Double Bedroom",
      doublePreview:
        "A more spacious layout for families or guests who prefer extra room.",
      doubleDescription:
        "Larger variants with twin or larger bedding — ideal for families or guests wanting extra space.",
    },
    spa: {
      pageTitle: "Spa & Wellness",
      pageDescription:
        "Moroccan-inspired rituals, professional massage, steam, and Finnish sauna in Addis Ababa.",
      heading: "Rituals for Deep Rest",
      postSpaNote: "Post-spa refreshments available at our bar & lounge.",
      massageHeading: "Professional Massages",
      massageIntro:
        "Inquiry only — we will confirm the therapist and time when you write to us.",
      thermalHeading: "Thermal Facilities",
      thermalIntro:
        "Steam and Finnish sauna for detoxification and muscle rest.",
      features: [
        {
          title: "Moroccan-Style Spa Suites",
          description:
            "Private rooms for traditional bath rituals, exfoliation, and wraps.",
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
      moroccanTitle: "Moroccan-Style Spa Suites",
      moroccanDescription:
        "Traditional Moroccan bath rituals, targeted exfoliation, and body wraps — paced slowly, in private suites.",
      massages: [
        {
          title: "Deep Tissue",
          description:
            "Steady pressure for tightness held in the back, shoulders, and legs.",
          icon: "waves",
        },
        {
          title: "Swedish",
          description:
            "Long, flowing strokes for circulation and an unhurried calm.",
          icon: "flower",
        },
        {
          title: "Targeted Therapeutic",
          description:
            "Focused work on a specific area, guided by how you arrive.",
          icon: "heartPulse",
        },
      ],
      thermal: [
        {
          slug: "steam",
          title: "Steam Room",
          description:
            "Moist heat to support detoxification and a softer muscle tone.",
        },
        {
          slug: "sauna",
          title: "Finnish Sauna",
          description: "Classic dry sauna heat for deep muscle relaxation.",
        },
      ],
    },
    dining: {
      pageTitle: "Dining",
      pageDescription:
        "An in-house restaurant of Ethiopian classics and international comfort, with a bar and lounge for juices, coffee, and quiet conversation.",
      restaurantTitle: "In-House Restaurant",
      restaurantDescription:
        "Ethiopian classics alongside popular international comfort dishes — served without hurry, for hotel guests and visitors alike.",
      barEyebrow: "After the spa",
      barTitle: "Bar & Lounge",
      barDescription:
        "Fresh juices, smoothies, traditional Ethiopian coffee, and a considered list of alcoholic and non-alcoholic beverages. A natural pause after the spa.",
    },
    contact: {
      pageTitle: "Contact",
      pageDescription:
        "Write to us for rooms, spa sessions, or a table — we confirm by phone or email.",
      inquiry: "General Inquiry",
      booking: "Book a Stay",
      findUs: "Find us",
      loadingForm: "Loading form…",
      reception: "Reception",
      spa: "Spa",
      restaurant: "Restaurant",
      bar: "Bar",
    },
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      message: "Message",
      sendInquiry: "Send inquiry",
      sending: "Sending…",
      messageReceived: "Message received",
      thankYou: "Thank you. Our team will reply as soon as we can.",
      sendFail:
        "We could not send your message just now. Please call or use WhatsApp.",
      checkIn: "Check-in",
      checkOut: "Check-out",
      guests: "Guests",
      roomType: "Room type",
      chooseRoom: "Choose a room",
      continue: "Continue",
      back: "Back",
      spaOptional: "Optional — add spa time to your stay inquiry.",
      moroccanBath: "Moroccan bath",
      massage: "Massage",
      massageType: "Massage type",
      chooseMassage: "Choose a massage",
      sauna: "Finnish sauna",
      steam: "Steam room",
      notes: "Notes",
      notesPlaceholder: "Arrival time, preferences, or questions",
      sendBooking: "Send booking inquiry",
      inquirySent: "Inquiry sent",
      bookingThanks:
        "We have received your stay request. Our team will confirm availability by email or phone.",
      bookingFail:
        "We could not send this inquiry. Please call or message us on WhatsApp.",
      steps: "Booking steps",
      current: "current",
      errors: {
        name: "Please share your name.",
        email: "A valid email is required.",
        phone: "Please include a phone number.",
        subject: "Please add a subject.",
        message: "A little more detail helps us respond well.",
        checkIn: "Check-in date is required.",
        checkOut: "Check-out date is required.",
        checkOutAfter: "Check-out must be after check-in.",
        massageType: "Please choose a massage type.",
      },
    },
    videos: {
      hero: "Quiet interiors — comfort, taste, and relaxation",
      room: "A walk through a guest bedroom",
      doubleRoom: "Elegant double bedroom",
      doubleRoomAlt: "Second view of the double bedroom",
      sauna: "Guest enjoying the sauna",
      dining: "A celebration hosted at Yehin Shado Hotel",
    },
    footer: {
      visit: "Visit",
      contact: "Contact",
      follow: "Follow",
      privacy: "Privacy",
      terms: "Terms",
      rights: "All rights reserved.",
    },
    legal: {
      privacyTitle: "Privacy Policy",
      termsTitle: "Terms of Service",
      updated: "[PLACEHOLDER — replace with legal review]",
      privacy: [
        "[PLACEHOLDER — replace with legal review] Yehin Shado Hotel collects only the information you share through our inquiry and booking forms: name, email, phone, stay dates, and any notes you choose to include.",
        "[PLACEHOLDER — replace with legal review] We use this information to respond to your request, confirm availability, and communicate about your stay or spa visit. We do not sell personal data.",
        "[PLACEHOLDER — replace with legal review] Form submissions are delivered by email to our reservations team. Please contact us if you wish to update or remove information you have sent.",
      ],
      terms: [
        "[PLACEHOLDER — replace with legal review] Inquiries submitted through this website are requests, not confirmed reservations. A stay or spa session is confirmed only when our team replies in writing or by phone.",
        "[PLACEHOLDER — replace with legal review] Information on these pages describes the hotel and spa in good faith. Room types, spa offerings, and hours may change; we will confirm details when you inquire.",
        "[PLACEHOLDER — replace with legal review] By using this website you agree to contact us respectfully and to provide accurate details so we can assist you.",
      ],
    },
    testimonials: [
      {
        quote:
          "[PLACEHOLDER] A quiet room after a long arrival — the spa the following morning felt like the reason we came.",
        name: "[PLACEHOLDER name]",
        context: "Guest",
      },
      {
        quote:
          "[PLACEHOLDER] The hammam-style ritual and Finnish sauna were the calmest hours we spent in the city.",
        name: "[PLACEHOLDER name]",
        context: "Wellness visitor",
      },
      {
        quote:
          "[PLACEHOLDER] Breakfast was unhurried, the coffee was as it should be, and the staff never raised their voices.",
        name: "[PLACEHOLDER name]",
        context: "Overnight stay",
      },
    ],
    system: {
      emptyRoom: "This room is empty",
      emptyBody:
        "The page you asked for is not part of the hotel. Return to the foyer.",
      backHome: "Back home",
      quietError: "Something went quiet",
      tryAgainBody: "We could not load this page. Please try again.",
      tryAgain: "Try again",
      arriving: "Arriving…",
    },
  },
  am: {
    name: "የህን ሻዶ ሆቴል",
    tagline: "በጀሞ የተረጋጋ መጠለያ",
    description: "በአዲስ አበባ የሚገኝ ቡቲክ ሆቴል እና በሞሮኮ ተመስጦ የተዘጋጀ የጤና ስፓ።",
    nav: {
      home: "መነሻ",
      rooms: "ክፍሎች",
      spa: "ስፓ",
      dining: "ምግብ ቤት",
      contact: "ያግኙን",
    },
    actions: {
      bookNow: "አሁን ይያዙ",
      bookRoom: "ክፍል ይያዙ",
      exploreSpa: "ስፓውን ይጎብኙ",
      exploreDining: "ምግብ ቤቱን ይመልከቱ →",
      viewDetails: "ዝርዝር ይመልከቱ",
      inquireAvailability: "ስለ መኖር ይጠይቁ",
      reserveSpa: "የስፓ ቀጠሮ ይያዙ",
      reserveTable: "ጠረጴዛ ይያዙ",
      contactBooking: "ግንኙነት እና ቦታ ማስያዝ",
      whatsapp: "ዋትስአፕ",
      whatsappAria: "የህን ሻዶ ሆቴልን በዋትስአፕ ያግኙ",
      openMenu: "ምናሌ ክፈት",
      closeMenu: "ምናሌ ዝጋ",
      close: "ዝጋ",
    },
    header: {
      language: "ቋንቋ",
      theme: "ገጽታ",
      default: "ነባሪ",
      light: "ቀን",
      dark: "ሌሊት",
      english: "EN",
      amharic: "አማ",
    },
    home: {
      aboutEyebrow: "ስለ እኛ",
      aboutTitle: "መጀመሪያ ጤና፣ ከዚያ ሆቴል",
      aboutP1:
        "የህን ሻዶ ሆቴል በጀሞ 1፣ አዲስ አበባ የሚገኝ ቡቲክ መኖሪያ እና በሞሮኮ ተመስጦ የተዘጋጀ ስፓ ነው። እንግዶች ለግል ጸጥታ፣ ለሙቀት እረፍት እና ለረጋ መስመር ይመጣሉ — ከዚያም በኢትዮጵያዊ እንግዳ ተቀባይነት፣ በተረጋጉ ክፍሎች እና ከሳውና በኋላ ለሚገባው ባር ይቆያሉ።",
      aboutP2:
        "ሆቴሉ ከሳባ ሕንፃ አጠገብ፣ በሲስተርስ ካፌ ሕንፃ ውስጥ ይገኛል፤ ከቦሌ ቅርብ የሆነ ጸጥ ያለ የከተማ ማዕዘን።",
      stayEyebrow: "መኖሪያ",
      stayTitle: "ለጸጥታ ምሽት የተዘጋጁ ክፍሎች",
      stayDescription: "ሁለት የተመጣጠኑ አቀማመጦች — የሚያስፈልገው ብቻ፣ ለእረፍት የሚበቃ።",
      spaEyebrow: "ስፓ",
      spaDescription: "በሞሮኮ ተመስጦ የተዘጋጁ ስዊቶች፣ ሙያዊ ማሳጅ፣ ስቲም እና የፊንላንድ ሳውና።",
      exploreSpaLink: "ስፓውን ይጎብኙ →",
      diningEyebrow: "ምግብ",
      diningTitle: "ጠረጴዛ፣ ባር እና ቡና",
      diningDescription:
        "ኢትዮጵያዊ እንግዳ ተቀባይነት በሁለት ክፍሎች — ምግብ ቤቱ ለምግብ፣ ላውንጁ ከስፓ በኋላ ለጭማቂ፣ ስሙዚ እና ባህላዊ ቡና።",
      voicesEyebrow: "የእንግዶች ድምፅ",
      voicesTitle: "ከጸጥታ ቆይታ ማስታወሻዎች",
      voicesDescription: "እስከሚፀድቁ የእንግዶች ምስክርነቶች ድረስ የሙከራ ጥቅሶች።",
      locationTitle: "የአዲስ አበባ ጸጥ ያለ ማዕዘን",
      insideTitle: "ውስጡን ይመልከቱ",
      guestRated: "የእንግዶች ደረጃ",
    },
    location: {
      neighborhood: "ጀሞ 1",
      neighborhoodNote:
        "በጀሞ 1 ማዕከል — ከሳባ ሕንፃ አጠገብ፣ በሲስተርስ ካፌ ሕንፃ ውስጥ። የአዲስ አበባ ጸጥ ያለ ማዕዘን፣ ከቦሌ ዓለም አቀፍ አውሮፕላን ማረፊያ በደቂቃዎች።",
      airportNote: "ከቦሌ ዓለም አቀፍ አውሮፕላን ማረፊያ በደቂቃዎች።",
      addressLine: "ጀሞ 1፣ ከሳባ ሕንፃ አጠገብ፣ በሲስተርስ ካፌ ሕንፃ ውስጥ፣ አዲስ አበባ 1000፣ ኢትዮጵያ",
      hoursNote: "[PLACEHOLDER — በተረጋገጡ ሰዓቶች ይተካ]",
      receptionHours: "ሁልጊዜ ክፍት",
      spaHours: "በየቀኑ፣ 9:00 – 21:00",
      restaurantHours: "በየቀኑ፣ 7:00 – 22:00",
      barHours: "በየቀኑ፣ 10:00 – 23:00",
    },
    rooms: {
      pageTitle: "ክፍሎች",
      pageDescription: "በጀሞ 1 ጸጥ ያሉ መኝታ ክፍሎች — ከጉዞ፣ ከሥራ ወይም ከስፓ በኋላ ለእረፍት።",
      environmentEyebrow: "የክፍል አካባቢ",
      environmentTitle: "ለእረፍት የተዘጋጀ",
      environment:
        "ክፍሎቹ ለጸጥታ ተቀርፀዋል። ለስላሳ ብርሃን፣ የግል መታጠቢያ እና የተመጣጠነ አቀማመጥ ከተማዋን ርቀው እንዲቆዩ ያደርጋሉ።",
      amenities: {
        wifi: "ዋይፋይ",
        bath: "የግል መታጠቢያ",
        quiet: "ጸጥ ያለ ሁኔታ",
        service: "የክፍል አገልግሎት",
      },
      standardTitle: "መደበኛ መኝታ ክፍል",
      standardPreview: "ለብቻ ተጓዦች፣ የንግድ እንግዶች ወይም ጥንዶች የተረጋጋ፣ ቀላል ክፍል።",
      standardDescription:
        "ለብቻ ተጓዦች፣ የንግድ እንግዶች ወይም ጥንዶች። ምቾት፣ ግላዊነት እና ቀላል አቀማመጥ።",
      doubleTitle: "ድርብ መኝታ ክፍል",
      doublePreview: "ለቤተሰብ ወይም ተጨማሪ ቦታ ለሚፈልጉ እንግዶች ሰፊ አቀማመጥ።",
      doubleDescription:
        "ትልልቅ አማራጮች ከሁለት ወይም ከትልቅ አልጋ ጋር — ለቤተሰብ ወይም ለተጨማሪ ቦታ።",
    },
    spa: {
      pageTitle: "ስፓ እና ጤና",
      pageDescription:
        "በአዲስ አበባ በሞሮኮ ተመስጦ የተዘጋጁ ሥርዓቶች፣ ሙያዊ ማሳጅ፣ ስቲም እና የፊንላንድ ሳውና።",
      heading: "ለጥልቅ እረፍት ሥርዓቶች",
      postSpaNote: "ከስፓ በኋላ ማደስ በባር እና ላውንጅ ይገኛል።",
      massageHeading: "ሙያዊ ማሳጅ",
      massageIntro: "ዋጋ አይታይም — ሲጽፉልን ቀጠሮውን እና ባለሙያውን እናረጋግጣለን።",
      thermalHeading: "የሙቀት መገልገያዎች",
      thermalIntro: "ለመርዝ ማስወገድ እና ለጡንቻ እረፍት ስቲም እና የፊንላንድ ሳውና።",
      features: [
        {
          title: "የሞሮኮ ስፓ ስዊቶች",
          description: "ለባህላዊ መታጠቢያ፣ ማበጠር እና መጠቅለል የግል ክፍሎች።",
          icon: "bath",
        },
        {
          title: "ሙያዊ ማሳጅ",
          description: "ጥልቅ ቲሹ፣ ስዊድሽ እና የታለመ ሕክምና።",
          icon: "hand",
        },
        {
          title: "ስቲም ክፍል",
          description: "ከሕክምና በፊት ወይም በኋላ ሰውነትን የሚያለሰልስ ሙቀት።",
          icon: "cloud",
        },
        {
          title: "የፊንላንድ ሳውና",
          description: "ደረቅ ሙቀት እና እንጨት፣ ለጡንቻ መፍታት።",
          icon: "flame",
        },
      ],
      moroccanTitle: "የሞሮኮ ስፓ ስዊቶች",
      moroccanDescription:
        "ባህላዊ የሞሮኮ መታጠቢያ ሥርዓቶች፣ የታለመ ማበጠር እና የሰውነት መጠቅለል — በግል ስዊቶች፣ በዝግታ።",
      massages: [
        {
          title: "ጥልቅ ቲሹ",
          description: "በጀርባ፣ ትከሻ እና እግር ላይ ለተያዘ ጥብቅነት የተረጋጋ ጫና።",
          icon: "waves",
        },
        {
          title: "ስዊድሽ",
          description: "ለደም ዝውውር እና ለረጋ ሰላም ረጅም፣ የሚፈስ እንቅስቃሴ።",
          icon: "flower",
        },
        {
          title: "የታለመ ሕክምና",
          description: "በመጣችሁበት ሁኔታ መሠረት በአንድ ክፍል ላይ ያተኮረ ሥራ።",
          icon: "heartPulse",
        },
      ],
      thermal: [
        {
          slug: "steam",
          title: "ስቲም ክፍል",
          description: "ለመርዝ ማስወገድ እና ለለስላሳ ጡንቻ እርጥብ ሙቀት።",
        },
        {
          slug: "sauna",
          title: "የፊንላንድ ሳውና",
          description: "ለጥልቅ የጡንቻ እረፍት ክላሲክ ደረቅ ሳውና።",
        },
      ],
    },
    dining: {
      pageTitle: "ምግብ ቤት",
      pageDescription:
        "የኢትዮጵያ ባህላዊ ምግቦች እና ዓለም አቀፍ ምቾት፣ ከጭማቂ፣ ቡና እና ጸጥ ያለ ውይይት ጋር ባር እና ላውንጅ።",
      restaurantTitle: "የውስጥ ምግብ ቤት",
      restaurantDescription:
        "የኢትዮጵያ ባህላዊ ምግቦች ከታዋቂ ዓለም አቀፍ ምግቦች ጎን ለጎን — ሳይቸኩሉ፣ ለእንግዶች እና ለጎብኚዎች።",
      barEyebrow: "ከስፓ በኋላ",
      barTitle: "ባር እና ላውንጅ",
      barDescription:
        "ትኩስ ጭማቂዎች፣ ስሙዚዎች፣ ባህላዊ የኢትዮጵያ ቡና፣ አልኮል እና ያልሆኑ መጠጦች። ከስፓ በኋላ የሚገባ እረፍት።",
    },
    contact: {
      pageTitle: "ያግኙን",
      pageDescription: "ለክፍል፣ ለስፓ ወይም ለጠረጴዛ ይጻፉልን — በስልክ ወይም በኢሜይል እናረጋግጣለን።",
      inquiry: "አጠቃላይ ጥያቄ",
      booking: "ቆይታ ይያዙ",
      findUs: "የት እንገኛለን",
      loadingForm: "ቅጹ እየተጫነ ነው…",
      reception: "ሪሴፕሽን",
      spa: "ስፓ",
      restaurant: "ምግብ ቤት",
      bar: "ባር",
    },
    form: {
      name: "ስም",
      email: "ኢሜይል",
      phone: "ስልክ",
      subject: "ርዕስ",
      message: "መልእክት",
      sendInquiry: "ጥያቄ ላክ",
      sending: "እየተላከ ነው…",
      messageReceived: "መልእክቱ ደርሷል",
      thankYou: "አመሰግናለን። ቡድናችን በቅርቡ ይመልሳል።",
      sendFail: "አሁን መላክ አልተቻለም። እባክዎ ይደውሉ ወይም ዋትስአፕ ይጠቀሙ።",
      checkIn: "መግቢያ",
      checkOut: "መውጫ",
      guests: "እንግዶች",
      roomType: "የክፍል አይነት",
      chooseRoom: "ክፍል ይምረጡ",
      continue: "ቀጥል",
      back: "ተመለስ",
      spaOptional: "አማራጭ — በቆይታ ጥያቄዎ ላይ ስፓ ይጨምሩ።",
      moroccanBath: "የሞሮኮ መታጠቢያ",
      massage: "ማሳጅ",
      massageType: "የማሳጅ አይነት",
      chooseMassage: "ማሳጅ ይምረጡ",
      sauna: "የፊንላንድ ሳውና",
      steam: "ስቲም ክፍል",
      notes: "ማስታወሻ",
      notesPlaceholder: "የመድረሻ ሰዓት፣ ምርጫ ወይም ጥያቄ",
      sendBooking: "የቦታ ማስያዝ ጥያቄ ላክ",
      inquirySent: "ጥያቄው ተልኳል",
      bookingThanks: "የቆይታ ጥያቄዎ ደርሷል። ቡድናችን በኢሜይል ወይም በስልክ መኖሩን ያረጋግጣል።",
      bookingFail: "ጥያቄውን መላክ አልተቻለም። እባክዎ ይደውሉ ወይም በዋትስአፕ ይጻፉ።",
      steps: "የቦታ ማስያዝ ደረጃዎች",
      current: "አሁን",
      errors: {
        name: "እባክዎ ስምዎን ይጻፉ።",
        email: "ትክክለኛ ኢሜይል ያስፈልጋል።",
        phone: "እባክዎ ስልክ ቁጥር ያስገቡ።",
        subject: "እባክዎ ርዕስ ያክሉ።",
        message: "ትንሽ ተጨማሪ ዝርዝር እንድንመልስ ይረዳናል።",
        checkIn: "የመግቢያ ቀን ያስፈልጋል።",
        checkOut: "የመውጫ ቀን ያስፈልጋል።",
        checkOutAfter: "መውጫ ከመግቢያ በኋላ መሆን አለበት።",
        massageType: "እባክዎ የማሳጅ አይነት ይምረጡ።",
      },
    },
    videos: {
      hero: "ጸጥ ያሉ ውስጦች — ምቾት፣ ጣዕም እና እረፍት",
      room: "የእንግዳ መኝታ ክፍል ጉብኝት",
      doubleRoom: "ውብ ድርብ መኝታ ክፍል",
      doubleRoomAlt: "የድርብ መኝታ ክፍል ሁለተኛ እይታ",
      sauna: "እንግዳ በሳውና ላይ",
      dining: "በየህን ሻዶ ሆቴል የተደረገ በዓል",
    },
    footer: {
      visit: "ጎብኙ",
      contact: "ያግኙን",
      follow: "ተከተሉን",
      privacy: "ግላዊነት",
      terms: "ውሎች",
      rights: "መብቱ የተጠበቀ ነው።",
    },
    legal: {
      privacyTitle: "የግላዊነት ፖሊሲ",
      termsTitle: "የአገልግሎት ውሎች",
      updated: "[PLACEHOLDER — በህጋዊ ግምገማ ይተካ]",
      privacy: [
        "[PLACEHOLDER — በህጋዊ ግምገማ ይተካ] የህን ሻዶ ሆቴል በጥያቄ እና በቦታ ማስያዝ ቅጾች የሚያጋሩትን መረጃ ብቻ ይሰበስባል።",
        "[PLACEHOLDER — በህጋዊ ግምገማ ይተካ] ይህን መረጃ ለመመለስ፣ መኖርን ለማረጋገጥ እና ስለ ቆይታዎ ለመነጋገር እንጠቀማለን። የግል መረጃ አንሸጥም።",
        "[PLACEHOLDER — በህጋዊ ግምገማ ይተካ] ቅጾች በኢሜይል ወደ ቦታ ማስያዝ ቡድናችን ይደርሳሉ። መረጃ ማዘመን ወይም ማስወገድ ከፈለጉ ያግኙን።",
      ],
      terms: [
        "[PLACEHOLDER — በህጋዊ ግምገማ ይተካ] በዚህ ድረ-ገጽ የሚቀርቡ ጥያቄዎች ጥያቄዎች ናቸው እንጂ የተረጋገጠ ቦታ ማስያዝ አይደሉም።",
        "[PLACEHOLDER — በህጋዊ ግምገማ ይተካ] በገጾቹ ላይ ያለው መረጃ በጥሩ እምነት ነው። ዝርዝሮች ሲጠይቁ እናረጋግጣለን።",
        "[PLACEHOLDER — በህጋዊ ግምገማ ይተካ] ይህን ድረ-ገጽ በመጠቀም በአክብሮት እንድትገናኙ እና ትክክለኛ መረጃ እንድትሰጡ ተስማምተዋል።",
      ],
    },
    testimonials: [
      {
        quote:
          "[PLACEHOLDER] ከረጅም መድረስ በኋላ ጸጥ ያለ ክፍል — በማግስቱ ስፓው የመጣንበት ምክንያት ሆነ።",
        name: "[PLACEHOLDER ስም]",
        context: "እንግዳ",
      },
      {
        quote:
          "[PLACEHOLDER] የሃማም ሥርዓቱ እና የፊንላንድ ሳውና በከተማው ካሳለፍናቸው ሰዓታት በጣም የረጉ ነበሩ።",
        name: "[PLACEHOLDER ስም]",
        context: "የጤና ጎብኚ",
      },
      {
        quote:
          "[PLACEHOLDER] ቁርስ ሳይቸኩል ነበር፣ ቡናው እንደሚገባው ነበር፣ ሠራተኞቹ ድምፃቸውን ከፍ አላደረጉም።",
        name: "[PLACEHOLDER ስም]",
        context: "የምሽት ቆይታ",
      },
    ],
    system: {
      emptyRoom: "ይህ ክፍል ባዶ ነው",
      emptyBody: "የጠየቁት ገጽ የሆቴሉ አካል አይደለም። ወደ መነሻ ይመለሱ።",
      backHome: "ወደ መነሻ",
      quietError: "አንድ ነገር ጸጥ አለ",
      tryAgainBody: "ይህን ገጽ መጫን አልተቻለም። እባክዎ እንደገና ይሞክሩ።",
      tryAgain: "እንደገና ሞክር",
      arriving: "እየደረስን ነው…",
    },
  },
} as const;

export type Copy = (typeof copy)["en"];
