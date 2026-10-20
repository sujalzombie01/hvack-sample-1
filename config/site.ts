// ============================================================
// SITE CONFIGURATION — edit this file for each new client
// ============================================================

// ── Business Identity ─────────────────────────────────────
export const BUSINESS_NAME    = "Apex Clean Exterior Wash";
export const LOGO_TEXT        = "Apex";
export const OWNER_NAME       = "Marcus Vance";
export const PHONE            = "(555) 789-2345";
export const PHONE_RAW        = "5557892345";  // digits only for tel: links
export const EMAIL            = "info@apexexteriorwash.com";

// ── Location (Optional / Client Specific) ─────────────────
export const CITY  = "Metro Area";
export const STATE = "USA";

export const SERVICE_AREAS: string[] = [
  "North Metro Communities",
  "Westside Suburbs",
  "South Valley & Hills",
  "Eastside Neighborhoods",
  "Downtown & Commercial District",
  "Lakeside Estates",
  "Riverview Area",
  "Pinecrest & Highlands",
];

// ── Business Details ──────────────────────────────────────
export const YEARS_IN_BUSINESS = 10;

// ── Branding & Colors ─────────────────────────────────────
export const PRIMARY_COLOR = {
  dot:        "bg-cyan-500",
  badge:      "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  badgeDot:   "bg-cyan-400",
  link:       "text-cyan-400",
  btnPrimary: "bg-cyan-600 hover:bg-cyan-500",
  pillLight:  "bg-cyan-50 text-cyan-800 border-cyan-200/60",
};

// ── Services ──────────────────────────────────────────────
export const SERVICES = [
  {
    id: "house-washing",
    title: "House Washing",
    description:
      "Low-pressure soft washing removes mold, mildew, algae, and years of grime from vinyl, brick, stucco, and wood siding — without causing damage.",
    tag: "Most Popular",
    icon: "🏠",
  },
  {
    id: "driveway-concrete",
    title: "Driveway & Concrete Cleaning",
    description:
      "High-pressure surface cleaning lifts oil stains, tire marks, and embedded dirt from driveways, sidewalks, and parking areas.",
    tag: "Quick Results",
    icon: "🚗",
  },
  {
    id: "roof-soft-washing",
    title: "Roof Soft Washing",
    description:
      "Safe, low-pressure treatment eliminates black streaks, moss, and lichen from asphalt shingles and tile roofs without voiding your warranty.",
    tag: "Eco Safe",
    icon: "🏚️",
  },
  {
    id: "deck-fence",
    title: "Deck & Fence Cleaning",
    description:
      "Restore the natural beauty of wood, composite, or vinyl decks and fences by removing weather staining, algae, and built-up grime.",
    tag: null,
    icon: "🌲",
  },
  {
    id: "patio-cleaning",
    title: "Patio Cleaning",
    description:
      "Bring pavers, concrete, and stone patios back to life. We remove organic growth, efflorescence, and surface staining.",
    tag: null,
    icon: "🪑",
  },
  {
    id: "gutter-brightening",
    title: "Gutter Brightening",
    description:
      "Exterior gutter faces are cleaned of tiger-stripe oxidation and black streaks, leaving aluminum and vinyl gutters looking brand new.",
    tag: null,
    icon: "🌧️",
  },
  {
    id: "commercial",
    title: "Commercial Storefronts",
    description:
      "First impressions matter. We clean sidewalks, building facades, drive-throughs, and parking areas for retail and commercial clients.",
    tag: "Business",
    icon: "🏢",
  },
] as const;

// ── Why Choose Us ─────────────────────────────────────────
export const TRUST_POINTS = [
  {
    icon: "🛡️",
    title: "Licensed & Insured",
    body: "We carry full general liability insurance. Ask us for a certificate of insurance before any job.",
  },
  {
    icon: "💬",
    title: "Free Estimates",
    body: "No obligation quotes — by phone, text, or on-site visit. You decide if the price works.",
  },
  {
    icon: "🌿",
    title: "Eco-Friendly Detergents",
    body: "We use biodegradable, plant-safe cleaning solutions that are tough on grime but gentle on your landscaping.",
  },
  {
    icon: "✅",
    title: "Satisfaction Focus",
    body: "We're not done until you're happy. We'll address any concerns before we pack up and leave.",
  },
] as const;

// ── Reviews ───────────────────────────────────────────────
// ⚠ Replace all three entries with real customer quotes before going live.
export const REVIEWS: { location: string; service: string; text: string; author: string }[] = [
  {
    location: "[City, ST]",
    service:  "House Washing",
    text:     "[REPLACE WITH REAL REVIEW] — Paste the customer's exact words here before publishing.",
    author:   "[Customer Name]",
  },
  {
    location: "[City, ST]",
    service:  "Driveway Cleaning",
    text:     "[REPLACE WITH REAL REVIEW] — Paste the customer's exact words here before publishing.",
    author:   "[Customer Name]",
  },
  {
    location: "[City, ST]",
    service:  "Roof Soft Washing",
    text:     "[REPLACE WITH REAL REVIEW] — Paste the customer's exact words here before publishing.",
    author:   "[Customer Name]",
  },
];

// ── FAQ ───────────────────────────────────────────────────
export const FAQ = [
  {
    q: "How often should I pressure wash my home?",
    a: "Most homes benefit from a professional exterior wash once a year. Homes in humid climates, heavily shaded areas, or near trees may need cleaning every 6–12 months due to faster mold and algae growth.",
  },
  {
    q: "Is pressure washing safe for siding and roofs?",
    a: "Yes — when done correctly. We use soft-wash (low-pressure) techniques for siding and roofs to prevent damage. High-pressure is reserved for concrete and masonry that can handle it.",
  },
  {
    q: "Do I need to be home during the service?",
    a: "Not necessarily. As long as we have access to an outdoor water spigot and can reach all areas to be cleaned, most exterior jobs can be completed while you're away. We'll confirm details when scheduling.",
  },
  {
    q: "Do you use my water or bring your own?",
    a: "We use the customer's outdoor water supply for most residential jobs. We carry our own water for situations where access isn't available — just let us know when booking.",
  },
] as const;

// ── How It Works ─────────────────────────────────────────
export const HOW_IT_WORKS = [
  { step: "01", title: "Request a Quote", body: "Call, text, or fill out our online form. Tell us what needs cleaning and where." },
  { step: "02", title: "Get a Price",     body: "We'll give you a clear, upfront price — no hidden fees, no surprises." },
  { step: "03", title: "We Schedule",     body: "Pick a time that works for you. We arrive on time and get to work." },
  { step: "04", title: "Enjoy the Clean", body: "Stand back and admire the results. Your property looks brand new." },
] as const;

// ── Quote Form ────────────────────────────────────────────
// Replace with your actual form endpoint (Formspree, Netlify Forms, etc.)
export const FORM_ENDPOINT = "https://formspree.io/f/REPLACE_ME";

// ── Missed-Call Text-Back ─────────────────────────────────
export const TEXTBACK_HEADLINE = "Can't answer? We text you back in seconds.";
export const TEXTBACK_SUBHEAD  =
  "When you're on a job and miss a call, our system instantly texts the customer back. " +
  "It keeps them engaged so they don't move on to the next result on Google.";
export const TEXTBACK_DEMO_MESSAGE =
  "Hey! We're on a job right now. Need a quote for house washing, driveway cleaning, or roof soft washing? Reply here and we'll get back to you fast! 🚿";

// ── Meta / SEO ────────────────────────────────────────────
export const META_TITLE       = `${BUSINESS_NAME} | Professional Pressure Washing & Exterior Cleaning`;
export const META_DESCRIPTION = `Top-rated pressure washing and exterior cleaning. House washing, driveway cleaning, roof soft washing, and more. Free estimates — call ${PHONE}.`;
export const META_KEYWORDS    = [
  "pressure washing",
  "house washing",
  "soft washing roof",
  "driveway cleaning",
  "exterior cleaning",
  "deck cleaning",
  "fence cleaning",
];
