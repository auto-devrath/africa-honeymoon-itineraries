export type ConceptId = 'egypt-kenya' | 'namibia-victoria' | 'egypt-victoria';

export type ScoreKey = 'Budget' | 'Ease' | 'Culture' | 'Nature' | 'Romance';

export type Tour = {
  name: string;
  location: string;
  style: string;
  signal: string;
  price: string;
  duration: string;
  why: string;
  book: string;
  source: string;
};

export type ItineraryConcept = {
  id: ConceptId;
  label: string;
  title: string;
  pairing: string;
  summary: string;
  image: string;
  gallery: string[];
  costLabel: string;
  costMin: number;
  costMax: number;
  duration: string;
  transit: 'Low' | 'Moderate' | 'High';
  safariDays: string;
  culturalWonder: string;
  naturalWonder: string;
  safariBase: string;
  route: string[];
  assetFocus: string[];
  idealFor: string;
  mood: string;
  headlineDetail: string;
  budget: Array<{
    label: string;
    amount: number;
    detail: string;
  }>;
  timeline: Array<{
    days: string;
    title: string;
    base: string;
    detail: string;
    focus: string;
  }>;
  strengths: string[];
  watchouts: string[];
  tours: Tour[];
  scores: Record<ScoreKey, number>;
};

export type RouteCandidate = {
  name: string;
  status: 'Shortlist' | 'Backup' | 'Watchlist' | 'Exclude';
  safari: string;
  companion: string;
  octoberFit: string;
  safetyFit: string;
  budgetFit: string;
  verdict: string;
};

export type AssetPlan = {
  asset: string;
  bestUse: string;
  avoid: string;
  action: string;
};

export type SafetyCheck = {
  route: string;
  risks: string;
  mitigations: string;
  decision: string;
};

export type SourceNote = {
  area: string;
  confidence: 'High' | 'Medium' | 'Low';
  evidence: string;
  nextCheck: string;
};

export type FlightWatchItem = {
  route: string;
  leg: string;
  timing: string;
  why: string;
  googleFlightsUrl: string;
};

export type RewardWatchItem = {
  route: string;
  leg: string;
  priority: 'High' | 'Medium' | 'Low';
  rewardPath: string;
  cashCompare: string;
  actionUrl: string;
};

export type FlightDecisionCard = {
  route: string;
  bestGateways: string;
  likelyAirlines: string;
  aviosAngle: string;
  cashFallback: string;
  openJawOption: string;
  rewardSeatConfidence: 'Easy' | 'Medium' | 'Hard';
  flightRiskScore: 'Low' | 'Medium' | 'High';
  regionalWarning: string;
  checks: string[];
};

export type GatewayDecision = {
  gateway: string;
  quality: 'Smooth' | 'Good' | 'Useful' | 'Friction';
  bestFor: string;
  watchout: string;
};

export type CashAviosComparison = {
  route: string;
  likelyCashFare: string;
  likelyAviosFees: string;
  goodValueWhen: string;
  cashCleanerWhen: string;
};

export type AccommodationPlan = {
  route: string;
  strategy: string;
  nightlyTarget: string;
  bestSplurge: string;
  avoid: string;
  tiers: Array<{
    tier: string;
    useFor: string;
    guide: string;
    notes: string;
  }>;
  nights: Array<{
    nights: string;
    base: string;
    stay: string;
    guide: string;
  }>;
  safariCost: Array<{
    item: string;
    guide: string;
    note: string;
  }>;
};

export const tripBrief = {
  title: 'Africa Honeymoon Studio',
  subtitle:
    'A polished October shortlist from London with culture, natural wonders, independent bookable tours, and safari kept to 3-4 days.',
  budget: 'NZ$10k-12k pp',
  origin: 'London',
  timing: 'October',
  avios: '200,000 Avios',
};

const egyptGallery = [
  'https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=1200&q=82',
  'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&w=1200&q=82',
  'https://images.unsplash.com/photo-1602693680203-a617da61c07b?auto=format&fit=crop&w=1200&q=82',
];

const namibiaGallery = [
  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=82',
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=82',
  'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=82',
];

const victoriaGallery = [
  'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=82',
  'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?auto=format&fit=crop&w=1200&q=82',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82',
];

export const concepts: ItineraryConcept[] = [
  {
    id: 'egypt-kenya',
    label: '01',
    title: 'Antiquity & Savannah',
    pairing: 'Egypt + Kenya',
    summary:
      'The most emotionally complete route: a private Egyptologist-led Cairo and Luxor week, then a tightly edited Masai Mara safari finale.',
    headlineDetail:
      'Use Egypt for depth and texture, Kenya for the once-in-a-lifetime wildlife note, and keep the whole trip from feeling like a packaged circuit.',
    mood: 'Monuments, candlelit Nile dinners, Mara dawn drives',
    image: egyptGallery[0],
    gallery: egyptGallery,
    costLabel: 'NZ$9,000-10,800 pp',
    costMin: 9000,
    costMax: 10800,
    duration: '14-16 days',
    transit: 'Moderate',
    safariDays: '3-4 days',
    culturalWonder: 'Giza, Saqqara, Karnak, Luxor West Bank',
    naturalWonder: 'Great Rift Valley and Masai Mara plains',
    safariBase: 'Masai Mara conservancy or reserve lodge',
    route: ['London', 'Cairo', 'Luxor', 'Nairobi', 'Masai Mara', 'London'],
    assetFocus: [
      'Avios for London-Cairo and Nairobi-London',
      'Accor Plus for Nairobi or Fairmont Mara if rates work',
      'Kindred only for Cairo/Nairobi city nights',
    ],
    idealFor:
      'Best if you want Jordan-like history, a proper honeymoon arc, and only a short safari hit.',
    budget: [
      {
        label: 'Flights and positioning',
        amount: 1250,
        detail: 'Avios reduces the UK-Africa cash hit; Cairo-Nairobi is the key paid bridge.',
      },
      {
        label: 'Egypt private culture week',
        amount: 3650,
        detail: 'Private guiding, domestic flights or train, high-comfort hotels, and nicer meals.',
      },
      {
        label: 'Masai Mara safari cap',
        amount: 4300,
        detail: 'Three nights including game drives, park fees, meals, and transfers or light aircraft.',
      },
      {
        label: 'Buffers and treats',
        amount: 900,
        detail: 'Spa, rooftop dinners, extra museum time, visas, tips, and contingency.',
      },
    ],
    timeline: [
      {
        days: 'Days 1-3',
        title: 'Cairo, but done calmly',
        base: 'Cairo',
        detail:
          'Private Giza and Saqqara day, Grand Egyptian Museum or Egyptian Museum, Islamic Cairo at golden hour, then a food walk rather than hotel dining every night.',
        focus: 'History plus city texture',
      },
      {
        days: 'Days 4-7',
        title: 'Luxor deep dive',
        base: 'Luxor',
        detail:
          'Valley of the Kings, Karnak, Hatshepsut, Medinet Habu, and a felucca or private dinner. Start early, rest at midday, go atmospheric in the evening.',
        focus: 'Archaeology without burnout',
      },
      {
        days: 'Days 8-10',
        title: 'Nairobi bridge',
        base: 'Nairobi',
        detail:
          'Fly Cairo to Nairobi, use one practical buffer night, then decide between drive-in value or fly-in romance for the Mara.',
        focus: 'Transit protection',
      },
      {
        days: 'Days 11-14',
        title: 'Short, beautiful safari',
        base: 'Masai Mara',
        detail:
          'Three nights is enough for sunrise drives, sundowners, and a Maasai community visit without letting safari dominate the honeymoon.',
        focus: 'Wildlife finale',
      },
    ],
    strengths: [
      'Strongest culture-to-safari balance',
      'Independent tours are easy to book city by city',
      'Flexible enough to upgrade one piece without changing the whole route',
    ],
    watchouts: [
      'Cairo-Nairobi flight pricing can move the budget',
      'Mara fly-in options feel more romantic but cost more than road transfers',
      'October is still warm in Egypt, so early starts matter',
    ],
    tours: [
      {
        name: 'Cairo Nights Food Tour',
        location: 'Cairo',
        style: 'Small-group evening food walk',
        signal: 'Tripadvisor search result showed 4.9 from 98 reviews for the 15+ tastings night tour',
        price: 'Live rate, usually booked per person',
        duration: 'Evening',
        why: 'Use this after the monument days so Cairo feels lived-in: street food, markets, and a guided local rhythm instead of another hotel dinner.',
        book: 'https://www.tripadvisor.com/Search?q=Cairo%20Nights%20Food%20Tour%2015%20Tastings',
        source: 'Tripadvisor',
      },
      {
        name: 'Giza, Saqqara and Memphis Private Day',
        location: 'Cairo / Giza',
        style: 'Private ancient-sites guide',
        signal: 'Tripadvisor private pyramid day listings commonly surface 4.9+ ratings and thousands of reviews',
        price: 'Live rate; private car/guide varies by inclusions',
        duration: 'Full day',
        why: 'This is the first real honeymoon anchor: Giza at opening, Saqqara for depth, then Memphis without being dragged through a package circuit.',
        book: 'https://www.tripadvisor.com/Search?q=Giza%20Saqqara%20Memphis%20private%20tour%20Cairo',
        source: 'Tripadvisor search',
      },
      {
        name: 'Valley of the Kings Private Guided Tour',
        location: 'Luxor',
        style: 'Private Egyptologist',
        signal: 'Tripadvisor Travelers Choice listing',
        price: 'Check live rate',
        duration: '4-8 hours',
        why: 'The right splurge: a private guide changes Luxor from checklist sightseeing into narrative.',
        book: 'https://www.tripadvisor.com/AttractionProductReview-g294205-d11459562-Private_Guided_Tour_to_Valley_of_the_Kings-Luxor_Nile_River_Valley.html',
        source: 'Tripadvisor',
      },
      {
        name: '3 Days Maasai Mara Guided Safari from Nairobi',
        location: 'Nairobi to Masai Mara',
        style: 'Short safari package',
        signal: 'Tripadvisor 4.6 from 170 reviews',
        price: 'From live supplier rate',
        duration: '3 days',
        why: 'A compact bookable option if you want the safari fixed independently rather than bundled into one giant honeymoon package.',
        book: 'https://www.tripadvisor.com/AttractionProductReview-g294207-d11462655-3_Days_Maasai_Mara_Guided_Safari_from_Nairobi-Nairobi.html',
        source: 'Tripadvisor',
      },
      {
        name: 'Natural World Kenya Safaris Mara Quote Check',
        location: 'Nairobi to Masai Mara',
        style: 'Local operator quote',
        signal: 'Google search surfaces strong review visibility for the operator; use as a benchmark quote',
        price: 'Custom quote',
        duration: '3-4 days',
        why: 'Good for sanity-checking the Tripadvisor product price and requesting a honeymoon-appropriate lodge without expanding safari beyond the cap.',
        book: 'https://www.naturaltoursandsafaris.com/',
        source: 'Operator site',
      },
    ],
    scores: {
      Budget: 5,
      Ease: 3,
      Culture: 5,
      Nature: 4,
      Romance: 5,
    },
  },
  {
    id: 'namibia-victoria',
    label: '02',
    title: 'Dunes, Falls & Smoke',
    pairing: 'Namibia + Victoria Falls',
    summary:
      'The most modern-feeling honeymoon: design lodges, red dunes, stargazing, then Victoria Falls and a Chobe day safari.',
    headlineDetail:
      'This is the cleanest choice if you want fewer museums, more awe, and a route that feels visually extraordinary every second day.',
    mood: 'Desert silence, flightseeing, waterfall mist, river sundowners',
    image: namibiaGallery[0],
    gallery: namibiaGallery,
    costLabel: 'NZ$8,900-11,300 pp',
    costMin: 8900,
    costMax: 11300,
    duration: '14-15 days',
    transit: 'Moderate',
    safariDays: '2-3 days',
    culturalWonder: 'Desert communities and colonial-era Swakopmund/Windhoek texture',
    naturalWonder: 'Sossusvlei, Deadvlei, Victoria Falls, Chobe River',
    safariBase: 'Victoria Falls with Chobe day trip and Zambezi river activities',
    route: ['London', 'Windhoek', 'Sossusvlei', 'Swakopmund', 'Victoria Falls', 'London'],
    assetFocus: [
      'Avios for London-Africa legs only if award space and taxes beat cash',
      'Accor Plus in Windhoek and Victoria Falls/Mantis inventory',
      'Cash for desert lodges and high-quality transfers',
    ],
    idealFor:
      'Best if the priority is visual drama, simpler logistics, and minimal safari fatigue.',
    budget: [
      {
        label: 'Flights and regional hop',
        amount: 1500,
        detail: 'Avios for long haul where useful; protect the Windhoek-Victoria Falls bridge early.',
      },
      {
        label: 'Namibia landscapes',
        amount: 3900,
        detail: 'Guided Sossusvlei/Deadvlei, Swakopmund or Sandwich Harbour, lodges, and transfers.',
      },
      {
        label: 'Victoria Falls base',
        amount: 3100,
        detail: 'Four nights near the Falls with room for Accor/Mantis value.',
      },
      {
        label: 'Independent tours',
        amount: 1450,
        detail: 'Chobe, helicopter or microlight, guided Falls walk, river cruise, tips, visas.',
      },
    ],
    timeline: [
      {
        days: 'Days 1-2',
        title: 'Windhoek reset',
        base: 'Windhoek',
        detail:
          'Arrive, sleep properly, collect local SIM/cash, and avoid launching straight into long gravel transfers while tired.',
        focus: 'Low-friction landing',
      },
      {
        days: 'Days 3-6',
        title: 'Sossusvlei and Deadvlei',
        base: 'Namib Desert',
        detail:
          'Dune 45, Big Daddy/Deadvlei, Sesriem Canyon, night skies, and lodge downtime. Guided transfer beats self-driving if you want honeymoon energy.',
        focus: 'Signature natural wonder',
      },
      {
        days: 'Days 7-9',
        title: 'Swakopmund or Sandwich Harbour',
        base: 'Coast',
        detail:
          'Add one ocean-desert contrast chapter: Sandwich Harbour 4x4, dunes meeting the Atlantic, cafes, and a gentler pace before the Falls.',
        focus: 'Landscape contrast',
      },
      {
        days: 'Days 10-14',
        title: 'Victoria Falls and Chobe',
        base: 'Victoria Falls / Livingstone',
        detail:
          'Guided Falls walk, Devil’s Pool if seasonal and conditions permit, sunset cruise, helicopter, and a single Chobe day for elephants.',
        focus: 'Falls plus light safari',
      },
    ],
    strengths: [
      'Most cinematic and least package-like',
      'Safari can stay as a day-trip layer rather than a lodge-heavy block',
      'October is good for dry-season wildlife around Chobe and Victoria Falls',
    ],
    watchouts: [
      'Less ancient history than Egypt routes',
      'Namibia distances are real; private transfers cost more but protect the mood',
      'Devil’s Pool is seasonal and water-level dependent',
    ],
    tours: [
      {
        name: 'Deadvlei and Sossusvlei guided visit',
        location: 'Namib-Naukluft Park',
        style: 'Natural wonder day',
        signal: 'Deadvlei Tripadvisor 4.8 from 1,041 reviews',
        price: 'Usually booked via lodge or local guide',
        duration: 'Sunrise to midday',
        why: 'This is the visual heart of Namibia: salt pan, red dunes, petrified camel-thorn trees, and proper silence.',
        book: 'https://www.tripadvisor.com/Attraction_Review-g1184851-d4074559-Reviews-Deadvlei-Sossusvlei_Namib_Naukluft_Park.html',
        source: 'Tripadvisor',
      },
      {
        name: 'Sandwich Harbour 4x4',
        location: 'Walvis Bay / Swakopmund',
        style: 'Small-group 4x4',
        signal: 'Tripadvisor/Google searches consistently surface specialist operators with very high ratings',
        price: 'Live operator rate; compare half-day and full-day versions',
        duration: 'Half or full day',
        why: 'Dunes dropping into the Atlantic gives Namibia a second wow moment beyond Sossusvlei, and specialist drivers matter because tide and sand conditions are real.',
        book: 'https://www.tripadvisor.com/Search?q=Sandwich%20Harbour%204x4%20tour%20Namibia',
        source: 'Tripadvisor search',
      },
      {
        name: 'Namib Sky Balloon Safari',
        location: 'Sossusvlei area',
        style: 'Sunrise balloon and desert breakfast',
        signal: 'Frequently recommended luxury add-on in Sossusvlei planning searches',
        price: 'Premium splurge; check live rate',
        duration: 'Early morning',
        why: 'The cleanest romantic upgrade for this route: one unforgettable morning rather than adding another destination.',
        book: 'https://www.namibsky.com/',
        source: 'Operator site',
      },
      {
        name: 'Chobe Day Trip From Victoria Falls Zimbabwe',
        location: 'Victoria Falls to Chobe',
        style: 'Boat and land safari',
        signal: 'Tripadvisor 5.0 from 60 reviews; 98% recommended',
        price: 'From about US$170 on comparable listings',
        duration: 'Full day',
        why: 'The cleanest way to add elephants and river wildlife while keeping safari days capped.',
        book: 'https://www.tripadvisor.com/AttractionProductReview-g293761-d20204001-Chobe_Day_Trip_From_Victoria_Falls_Zimbabwe-Victoria_Falls_Matabeleland_North_Prov.html',
        source: 'Tripadvisor',
      },
    ],
    scores: {
      Budget: 4,
      Ease: 5,
      Culture: 3,
      Nature: 5,
      Romance: 5,
    },
  },
  {
    id: 'egypt-victoria',
    label: '03',
    title: 'Nile to Zambezi',
    pairing: 'Egypt + Victoria Falls',
    summary:
      'The big-swing route: Egypt’s best ancient sites paired with Victoria Falls, Devil’s Pool, Chobe, and river-based romance.',
    headlineDetail:
      'Choose this when you want the most iconic story and accept that it needs careful flight buffers to stay elegant.',
    mood: 'Ancient stone, rainforest spray, helicopter views, Zambezi sunsets',
    image: victoriaGallery[0],
    gallery: victoriaGallery,
    costLabel: 'NZ$10,900-12,000 pp',
    costMin: 10900,
    costMax: 12000,
    duration: '15-17 days',
    transit: 'High',
    safariDays: '2-3 days',
    culturalWonder: 'Cairo, Giza, Saqqara, Luxor temples',
    naturalWonder: 'Victoria Falls and Zambezi / Chobe ecosystem',
    safariBase: 'Victoria Falls, Livingstone, Chobe',
    route: ['London', 'Cairo', 'Luxor', 'Addis Ababa or Nairobi', 'Victoria Falls', 'London'],
    assetFocus: [
      'Avios for outer legs if routings price cleanly',
      'Kindred for Cairo if availability is excellent',
      'Accor/Mantis at Victoria Falls where rates fit',
    ],
    idealFor:
      'Best if you want the honeymoon to feel like a once-only African greatest-hits journey.',
    budget: [
      {
        label: 'Flights and bridges',
        amount: 2600,
        detail: 'The expensive piece: Egypt to Victoria Falls needs protected connections.',
      },
      {
        label: 'Egypt culture block',
        amount: 3400,
        detail: 'Private guide continuity, domestic transit, museums, temples, and better hotels.',
      },
      {
        label: 'Victoria Falls stay',
        amount: 3900,
        detail: 'Four to five nights in a romantic base with Falls access and river activities.',
      },
      {
        label: 'Experiences and buffer',
        amount: 1300,
        detail: 'Devil’s Pool/Livingstone Island, Chobe, flightseeing, visas, tips, and delay cushion.',
      },
    ],
    timeline: [
      {
        days: 'Days 1-4',
        title: 'Cairo and ancient Memphis',
        base: 'Cairo',
        detail:
          'Giza, Saqqara, museums, Coptic or Islamic Cairo, then a food tour to make the city feel lived-in rather than purely monumental.',
        focus: 'Ancient plus modern Cairo',
      },
      {
        days: 'Days 5-8',
        title: 'Luxor with space',
        base: 'Luxor',
        detail:
          'Valley of the Kings, Karnak, Hatshepsut, Luxor Temple by evening, and one slower day so the Egypt section lands emotionally.',
        focus: 'Deep history',
      },
      {
        days: 'Days 9-10',
        title: 'Continental bridge',
        base: 'In transit',
        detail:
          'Keep one protected buffer and avoid stitching separate tickets too tightly. This route should feel considered, not heroic.',
        focus: 'Risk control',
      },
      {
        days: 'Days 11-16',
        title: 'Falls, island, river, Chobe',
        base: 'Victoria Falls / Livingstone',
        detail:
          'Guided Falls walk, Livingstone Island or Devil’s Pool if open, flightseeing, Zambezi sunset cruise, and one Chobe day trip.',
        focus: 'Natural wonder finale',
      },
    ],
    strengths: [
      'Most iconic culture-plus-nature narrative',
      'Independent activities are plentiful around both Cairo/Luxor and the Falls',
      'Chobe gives wildlife without committing to a full safari lodge block',
    ],
    watchouts: [
      'Highest routing complexity',
      'Budget can hit the upper ceiling if flights are not solved with points',
      'Needs careful visa and yellow fever routing checks',
    ],
    tours: [
      {
        name: 'Devil’s Pool / Livingstone Island',
        location: 'Victoria Falls, Zambia',
        style: 'Guided falls-edge experience',
        signal: 'Tripadvisor Travelers Choice attraction; prominent Livingstone search-result ranking',
        price: 'Seasonal live rate',
        duration: 'Half day',
        why: 'The high-drama honeymoon moment, but only if conditions and comfort level are right.',
        book: 'https://www.tripadvisor.com/Attraction_Review-g298089-d1636701-Reviews-Devil_s_Pool-Livingstone_Southern_Province.html',
        source: 'Tripadvisor',
      },
      {
        name: 'Chobe Full Day Trip From Victoria Falls',
        location: 'Victoria Falls to Chobe',
        style: 'Boat cruise plus game drive',
        signal: 'Tripadvisor 4.6 from 43 reviews; 90% recommended',
        price: 'From about US$170 on listing',
        duration: 'Full day',
        why: 'A one-day wildlife injection that keeps the honeymoon weighted toward wonders, not safari logistics.',
        book: 'https://www.tripadvisor.com/AttractionProductReview-g293761-d13828630-Chobe_Full_Day_Trip_From_Victoria_Falls-Victoria_Falls_Matabeleland_North_Province.html',
        source: 'Tripadvisor',
      },
      {
        name: 'Wild Horizons Helicopter Flight',
        location: 'Victoria Falls',
        style: 'Flightseeing',
        signal: 'Google and Tripadvisor searches surface Wild Horizons as a major, well-reviewed Falls operator',
        price: 'Premium add-on; check current flight length and fees',
        duration: '12-25 minute flight options',
        why: 'If you skip extra safari nights, this is where to spend: it turns the Falls from a viewpoint into a proper natural-wonder finale.',
        book: 'https://www.wildhorizons.co.za/',
        source: 'Operator site',
      },
      {
        name: 'Cairo Nights Food Tour with 15+ tastings',
        location: 'Cairo',
        style: 'Food and city walk',
        signal: 'Tripadvisor surfaced 4.9 from 98 reviews for comparable Cairo night food tour',
        price: 'Check live rate',
        duration: 'Evening',
        why: 'Breaks up heavy ancient-site days and gives the trip a more independent, less package-tour feeling.',
        book: 'https://www.tripadvisor.com/Search?q=Cairo%20Nights%20Food%20Tour%2015%20Tastings',
        source: 'Tripadvisor search',
      },
    ],
    scores: {
      Budget: 3,
      Ease: 2,
      Culture: 5,
      Nature: 5,
      Romance: 5,
    },
  },
];

export const logistics = [
  {
    title: 'Booking Strategy',
    items: [
      'Book flights and lodges separately, then layer independent tours by city so you are not locked into one large package.',
      'Use private guiding for Egypt, lodge-arranged or vetted operators for desert/falls logistics, and only package the short safari block where it genuinely simplifies the trip.',
      'Hold a flexible buffer before any international return because intra-Africa connections are the fragile part of the plan.',
    ],
  },
  {
    title: 'Visas And Borders',
    items: [
      'Egypt e-Visa or visa on arrival for UK citizens; passport validity should exceed six months.',
      'Kenya eTA applies to the Kenya concept and should be submitted before travel.',
      'For Victoria Falls and Chobe, check KAZA Univisa eligibility and whether your route enters Zimbabwe, Zambia, Botswana, or all three.',
    ],
  },
  {
    title: 'Health And Safety',
    items: [
      'Zambezi, Chobe, and Masai Mara areas require malaria advice from a travel clinic.',
      'Yellow fever certification depends on routing; avoid accidental certificate triggers where possible.',
      'Prefer private transfers at night, early starts in hot regions, and guide-led remote activities.',
    ],
  },
  {
    title: 'Points And Memberships',
    items: [
      'Use Avios where cash fares are ugly, but do not force awkward routings for theoretical points value.',
      'Accor Plus is most useful for city buffers and selected Fairmont/Mantis inventory, not every remote lodge.',
      'Kindred is a bonus for Cairo or Nairobi apartment-style nights, but should not determine the itinerary.',
    ],
  },
];

export const sourceReport = {
  label: 'Research-backed working plan',
  path: 'Gemini Deep Research reports from 5 and 7 May 2026, with a refresh job started 8 May 2026',
  completed: 'Updated 8 May 2026',
};

export const routeCandidates: RouteCandidate[] = [
  {
    name: 'Egypt + Kenya / Masai Mara',
    status: 'Shortlist',
    safari: 'Masai Mara, 3-4 days',
    companion: 'Cairo, Luxor, possibly Aswan',
    octoberFit: 'Strong: Egypt shoulder season and East Africa late dry season.',
    safetyFit: 'Manageable with private guides, tourist corridors, and Nairobi buffer nights.',
    budgetFit: 'Strong because Egypt keeps the non-safari week efficient.',
    verdict: 'Best culture-plus-safari answer to the original brief.',
  },
  {
    name: 'Oman + Tanzania / Serengeti or Ruaha',
    status: 'Backup',
    safari: 'Serengeti, Ruaha, or northern Tanzania, 3-4 days',
    companion: 'Muscat, Nizwa, Wahiba Sands, Hajar Mountains',
    octoberFit: 'Strong: safe desert/culture first, then peak Tanzania safari conditions.',
    safetyFit: 'Very strong on the Oman side; Tanzania is well-trodden but needs malaria planning.',
    budgetFit: 'Strong if one safari lodge is chosen carefully.',
    verdict: 'Best alternative if Egypt feels too hectic; technically not all-Africa, but very on-brief emotionally.',
  },
  {
    name: 'Namibia + Victoria Falls / Chobe',
    status: 'Shortlist',
    safari: 'Chobe day safari or Zambezi wildlife cruise, 1-3 days',
    companion: 'Sossusvlei, Deadvlei, Swakopmund, Victoria Falls',
    octoberFit: 'Excellent wildlife visibility, but hot and dry.',
    safetyFit: 'Generally stable; road safety and urban opportunistic crime are the main watchouts.',
    budgetFit: 'Good if transfers are planned and lodge splurges are selective.',
    verdict: 'Best natural-wonder route if heat tolerance is acceptable.',
  },
  {
    name: 'Zambia / Victoria Falls + South Luangwa',
    status: 'Watchlist',
    safari: 'South Luangwa, 3-4 days',
    companion: 'Livingstone, Victoria Falls, Zambezi activities',
    octoberFit: 'Peak wildlife, but extreme heat; Victoria Falls can be low on the Zambian side.',
    safetyFit: 'Politically stable tourism circuit; medical/heat planning matters.',
    budgetFit: 'Good, but premium camps consume budget quickly.',
    verdict: 'A brilliant safari choice, but less honeymoon-comfortable in early October.',
  },
  {
    name: 'Pure Tanzania / Serengeti + Ngorongoro + culture',
    status: 'Backup',
    safari: 'Serengeti or Ngorongoro, 3-4 days',
    companion: 'Arusha coffee/cultural stays, Lake Eyasi/Hadzabe only if done ethically',
    octoberFit: 'Strong for wildlife and weather.',
    safetyFit: 'Well-established tourism corridor.',
    budgetFit: 'Good, though luxury fly-in safari rises fast.',
    verdict: 'Strong safari-first backup, but weaker than Egypt/Kenya for ancient cultural depth.',
  },
  {
    name: 'West Africa safari + culture',
    status: 'Exclude',
    safari: 'Ghana/Mole, Senegal/Niokolo-Koba, or Benin/Pendjari region',
    companion: 'Accra, Cape Coast, Dakar, Ouidah, Benin heritage routes',
    octoberFit: 'Variable: some parks are less compelling than East/Southern Africa for first safari.',
    safetyFit: 'Mixed; several richer wildlife areas sit near higher-risk border regions.',
    budgetFit: 'Can fit, but routing and operator confidence are weaker.',
    verdict: 'Culturally fascinating, but not the best honeymoon safari answer under the safety constraint.',
  },
  {
    name: 'South Africa + Victoria Falls',
    status: 'Exclude',
    safari: 'Kruger or private reserves',
    companion: 'Cape Town, Winelands, Garden Route',
    octoberFit: 'Good overall.',
    safetyFit: 'Well-travelled but city crime planning is more prominent.',
    budgetFit: 'Strong.',
    verdict: 'Ruled out because the brief says South Africa should probably be a separate trip.',
  },
  {
    name: 'Ethiopia historical route + Kenya',
    status: 'Exclude',
    safari: 'Kenya add-on',
    companion: 'Lalibela, Gondar, Danakil, Simien routes',
    octoberFit: 'Culturally exceptional.',
    safetyFit: 'Fails the safety bar because official travel warnings affect major historical regions.',
    budgetFit: 'Could fit, but insurance/risk profile is the blocker.',
    verdict: 'Do not build a honeymoon around this unless advisories materially improve.',
  },
];

export const assetPlans: AssetPlan[] = [
  {
    asset: '200,000 Avios',
    bestUse: 'Use for the most expensive UK-Africa long-haul legs, especially BA/Qatar or partner routings to Nairobi, Cairo, Windhoek, or Victoria Falls gateways.',
    avoid: 'Do not force multi-stop awards that create risky separate tickets or awkward overnight transits.',
    action: 'Check award seats 355-361 days out, compare taxes/fees against cash fares, and treat Avios as a comfort/budget lever rather than a route dictator.',
  },
  {
    asset: 'Accor Plus / ALL',
    bestUse: 'City buffers and selected luxury properties: Fairmont Mara, Sofitel Legend Old Cataract, Mantis/Mbano Manor, Movenpick Windhoek, Nairobi hotels.',
    avoid: 'Expecting Accor to solve remote desert lodges or every safari camp.',
    action: 'Price Accor properties against direct lodge packages and only use the benefit where location and cancellation terms are still right.',
  },
  {
    asset: 'Kindred',
    bestUse: 'Cairo, Nairobi, Muscat, Windhoek, or London pre/post nights where apartment-style living is useful.',
    avoid: 'Remote safari, desert, national park, or Victoria Falls inventory assumptions.',
    action: 'Treat as upside only: check city availability after route choice, then redirect any savings to private guides or one signature experience.',
  },
  {
    asset: 'DIY booking',
    bestUse: 'Book flights, city hotels, private guides, and single-day experiences independently; package only the short safari block if it reduces logistics.',
    avoid: 'One giant honeymoon package that hides lodge/fee/transfer assumptions.',
    action: 'Get 2-3 safari quotes after choosing the route, then compare inclusions: park fees, conservancy fees, transfers, meals, drinks, laundry, and evacuation cover.',
  },
];

export const safetyChecks: SafetyCheck[] = [
  {
    route: 'Egypt + Kenya',
    risks: 'Cairo/Luxor crowd pressure, road hassle, Nairobi transit risk, malaria in safari areas.',
    mitigations: 'Private Egyptologist/driver, flights over long road moves, Nairobi buffer, vetted Mara lodge, travel clinic before booking.',
    decision: 'Passes safety bar if kept to main tourist corridors and reputable operators.',
  },
  {
    route: 'Namibia + Victoria Falls',
    risks: 'Long gravel drives, heat, Windhoek petty crime, border complexity around Zimbabwe/Zambia/Botswana.',
    mitigations: 'Guided transfers or fly-in segments, no night driving, KAZA Univisa planning, lodge-arranged Chobe/Falls activities.',
    decision: 'Passes safety bar, but heat tolerance and road strategy need an explicit couple decision.',
  },
  {
    route: 'Zambia + South Luangwa',
    risks: 'October heat above normal comfort thresholds, malaria, domestic flight dependence.',
    mitigations: 'Choose air-conditioned/luxury camps, schedule only dawn/dusk activities, build connection buffers.',
    decision: 'Viable but not the most comfortable honeymoon choice for early October.',
  },
  {
    route: 'West Africa wildlife routes',
    risks: 'Less predictable safari payoff, weaker luxury operator depth, some high-value parks near higher-risk border areas.',
    mitigations: 'Could design a culture-first Ghana/Senegal trip, but it would not be the strongest safari honeymoon.',
    decision: 'Exclude from main shortlist; include only as a separate cultural trip idea.',
  },
];

export const sourceNotes: SourceNote[] = [
  {
    area: 'Research coverage',
    confidence: 'High',
    evidence: 'Two completed Gemini Deep Research reports dated 5 and 7 May 2026 plus an 8 May refresh job.',
    nextCheck: 'Fold in the 8 May report when it completes and preserve source links for live supplier checks.',
  },
  {
    area: 'Safety',
    confidence: 'Medium',
    evidence: 'Research used official-advisory style screening and ruled out Ethiopia despite its Jordan-like cultural appeal.',
    nextCheck: 'Recheck FCDO country pages immediately before deposits and again before final payment.',
  },
  {
    area: 'Budget',
    confidence: 'Medium',
    evidence: 'Ranges use public safari/operator/hotel signals and USD/NZD planning conversions.',
    nextCheck: 'Replace planning ranges with real quotes for flights, safari camps, and transfers once dates are fixed.',
  },
  {
    area: 'Flight prices',
    confidence: 'Low',
    evidence: 'The site now includes Google Flights search links for the route legs, but no live fare API is connected.',
    nextCheck: 'Set alerts while signed in as divyan.devs@gmail.com; Google emails on price changes, with Tuesday/Friday manual reviews for cadence.',
  },
  {
    area: 'Avios',
    confidence: 'Medium',
    evidence: 'BA confirms Avios reward flights can cover BA and oneworld partners with cash taxes/fees; Qatar confirms BA/Qatar accounts can be linked to move Avios.',
    nextCheck: 'Search BA and Qatar while signed in, then compare each high-priority reward leg against its Google Flights cash alert before spending Avios.',
  },
  {
    area: 'Kindred and Accor',
    confidence: 'Medium',
    evidence: 'Useful in hubs and selected branded hotels, weak in remote safari/desert locations.',
    nextCheck: 'Check actual Kindred homes and Accor cancellable rates only after selecting the route.',
  },
];

const googleFlightsSearch = (query: string) =>
  `https://www.google.com/travel/flights?q=${encodeURIComponent(query)}`;

export const flightWatchlist: FlightWatchItem[] = [
  {
    route: 'Egypt + Kenya',
    leg: 'London to Cairo',
    timing: 'Target departure: 2 Oct 2026',
    why: 'Outbound culture leg; track cash fares before deciding whether to spend Avios.',
    googleFlightsUrl: googleFlightsSearch('Flights from London to Cairo on 2 October 2026'),
  },
  {
    route: 'Egypt + Kenya',
    leg: 'Cairo to Nairobi',
    timing: 'Target bridge: 9 Oct 2026',
    why: 'This is the budget-sensitive bridge into the Mara section.',
    googleFlightsUrl: googleFlightsSearch('Flights from Cairo to Nairobi on 9 October 2026'),
  },
  {
    route: 'Egypt + Kenya',
    leg: 'Nairobi to London',
    timing: 'Target return: 18 Oct 2026',
    why: 'Return leg where Avios may help if cash fares are ugly.',
    googleFlightsUrl: googleFlightsSearch('Flights from Nairobi to London on 18 October 2026'),
  },
  {
    route: 'Namibia + Victoria Falls',
    leg: 'London to Windhoek',
    timing: 'Target departure: 2 Oct 2026',
    why: 'Core test for whether Namibia stays inside budget without awkward points logic.',
    googleFlightsUrl: googleFlightsSearch('Flights from London to Windhoek on 2 October 2026'),
  },
  {
    route: 'Namibia + Victoria Falls',
    leg: 'Windhoek to Victoria Falls',
    timing: 'Target bridge: 11 Oct 2026',
    why: 'The fragile regional hop; compare Victoria Falls, Livingstone, and protected connections.',
    googleFlightsUrl: googleFlightsSearch('Flights from Windhoek to Victoria Falls on 11 October 2026'),
  },
  {
    route: 'Namibia + Victoria Falls',
    leg: 'Victoria Falls to London',
    timing: 'Target return: 18 Oct 2026',
    why: 'Return pricing decides whether Falls remains a neat finale or needs a Johannesburg buffer.',
    googleFlightsUrl: googleFlightsSearch('Flights from Victoria Falls to London on 18 October 2026'),
  },
  {
    route: 'Egypt + Victoria Falls',
    leg: 'London to Cairo',
    timing: 'Target departure: 2 Oct 2026',
    why: 'Same Egypt entry test; reuse the alert if Egypt remains in either leading route.',
    googleFlightsUrl: googleFlightsSearch('Flights from London to Cairo on 2 October 2026'),
  },
  {
    route: 'Egypt + Victoria Falls',
    leg: 'Cairo to Victoria Falls or Livingstone',
    timing: 'Target bridge: 10 Oct 2026',
    why: 'Hardest routing in the whole shortlist; alert both Falls gateways before trusting the route.',
    googleFlightsUrl: googleFlightsSearch('Flights from Cairo to Victoria Falls or Livingstone on 10 October 2026'),
  },
  {
    route: 'Egypt + Victoria Falls',
    leg: 'Victoria Falls to London',
    timing: 'Target return: 18 Oct 2026',
    why: 'Return pricing is the main pressure point on the high-complexity option.',
    googleFlightsUrl: googleFlightsSearch('Flights from Victoria Falls to London on 18 October 2026'),
  },
];

export const rewardWatchlist: RewardWatchItem[] = [
  {
    route: 'Egypt + Kenya',
    leg: 'London to Cairo',
    priority: 'Medium',
    rewardPath: 'Check British Airways Club reward search first; then compare part-pay with Avios against cash.',
    cashCompare: 'Use Avios only if taxes/fees do not erase the value versus a cheap cash fare.',
    actionUrl: 'https://www.britishairways.com/travel/flightfinderhome/public/executive-club/spending-avios.page',
  },
  {
    route: 'Egypt + Kenya',
    leg: 'Cairo to Nairobi',
    priority: 'Low',
    rewardPath: 'Treat as cash-first unless a clean oneworld option appears without a long detour.',
    cashCompare: 'Do not burn Avios on awkward connections just to use points.',
    actionUrl: 'https://www.google.com/travel/flights?q=Flights%20from%20Cairo%20to%20Nairobi%20on%209%20October%202026',
  },
  {
    route: 'Egypt + Kenya',
    leg: 'Nairobi to London',
    priority: 'High',
    rewardPath: 'Check BA reward availability and Qatar Privilege Club Avios options before cash booking.',
    cashCompare: 'This is one of the best places for the 200k Avios to reduce the long-haul cash hit.',
    actionUrl: 'https://www.britishairways.com/travel/flightfinderhome/public/executive-club/spending-avios.page',
  },
  {
    route: 'Namibia + Victoria Falls',
    leg: 'London to Windhoek',
    priority: 'High',
    rewardPath: 'Check Qatar Privilege Club and BA partner availability, but keep cash as the baseline.',
    cashCompare: 'Only use Avios if the connection is clean and taxes/fees beat the tracked Google Flights cash fare.',
    actionUrl: 'https://www.qatarairways.com/en/Privilege-Club/redeem-avios.html',
  },
  {
    route: 'Namibia + Victoria Falls',
    leg: 'Windhoek to Victoria Falls',
    priority: 'Low',
    rewardPath: 'Cash-first regional bridge; reward options are likely weak or operationally awkward.',
    cashCompare: 'Protect schedule reliability over theoretical points value.',
    actionUrl: 'https://www.google.com/travel/flights?q=Flights%20from%20Windhoek%20to%20Victoria%20Falls%20on%2011%20October%202026',
  },
  {
    route: 'Namibia + Victoria Falls',
    leg: 'Victoria Falls to London',
    priority: 'Medium',
    rewardPath: 'Check Avios only if a clean partner path appears; otherwise price a Johannesburg buffer plus cash fare.',
    cashCompare: 'This leg decides whether Falls works as a neat finale or needs a more conservative route.',
    actionUrl: 'https://www.qatarairways.com/en/Privilege-Club/redeem-avios.html',
  },
  {
    route: 'Egypt + Victoria Falls',
    leg: 'London to Cairo',
    priority: 'Medium',
    rewardPath: 'Same BA reward check as Egypt + Kenya; avoid duplicating alerts.',
    cashCompare: 'Keep this as a shared Egypt entry watch item.',
    actionUrl: 'https://www.britishairways.com/travel/flightfinderhome/public/executive-club/spending-avios.page',
  },
  {
    route: 'Egypt + Victoria Falls',
    leg: 'Cairo to Victoria Falls or Livingstone',
    priority: 'Low',
    rewardPath: 'Cash-first; Avios is unlikely to be worth a long backtrack or separate-ticket risk.',
    cashCompare: 'If this bridge prices badly, deprioritise the whole Egypt + Falls route.',
    actionUrl: 'https://www.google.com/travel/flights?q=Flights%20from%20Cairo%20to%20Victoria%20Falls%20or%20Livingstone%20on%2010%20October%202026',
  },
  {
    route: 'Egypt + Victoria Falls',
    leg: 'Victoria Falls to London',
    priority: 'Medium',
    rewardPath: 'Check Qatar/partner Avios availability, then compare against the cash alert.',
    cashCompare: 'Useful only if it avoids painful routing and keeps fees sensible.',
    actionUrl: 'https://www.qatarairways.com/en/Privilege-Club/redeem-avios.html',
  },
];

export const flightDecisionCards: FlightDecisionCard[] = [
  {
    route: 'Egypt + Kenya',
    bestGateways: 'London -> Cairo, then Cairo -> Nairobi, return Nairobi -> London.',
    likelyAirlines:
      'BA or Egyptair for Cairo, Egyptair/Kenya Airways for Cairo-Nairobi, BA/Qatar/Kenya Airways or partners for Nairobi-London.',
    aviosAngle:
      'Best used on Nairobi-London or a clean London-Cairo / Nairobi-London open jaw. Do not waste Avios on the Cairo-Nairobi bridge unless it is genuinely convenient.',
    cashFallback:
      'Pay cash for Cairo-Nairobi and compare cash vs Avios + fees on the two outer legs before choosing lodges.',
    openJawOption:
      'Test London -> Cairo and Nairobi -> London as a multi-city search; it avoids backtracking through Cairo.',
    rewardSeatConfidence: 'Medium',
    flightRiskScore: 'Medium',
    regionalWarning:
      'The Mara transfer or light aircraft is separate from the long-haul plan; budget it as safari logistics, not as Avios-covered flying.',
    checks: [
      'Search BA for London-Cairo and Nairobi-London rewards.',
      'Search Qatar Privilege Club for Nairobi-London via Doha after linking BA/Qatar Avios.',
      'Check Google Flights for Cairo-Nairobi cash fare and arrival time before holding the Mara lodge.',
    ],
  },
  {
    route: 'Namibia + Victoria Falls',
    bestGateways: 'London -> Windhoek, then Windhoek -> Victoria Falls/Livingstone, return Victoria Falls/Livingstone or Johannesburg -> London.',
    likelyAirlines:
      'Qatar/Ethiopian/Lufthansa-family options to Windhoek; regional cash links via Johannesburg or direct/limited Victoria Falls/Livingstone services.',
    aviosAngle:
      'Use Avios only for a clean long-haul gateway if Qatar/BA partner space appears. This is not a route to force points onto regional hops.',
    cashFallback:
      'Treat cash as the baseline and use Avios only if it beats a sane one-stop fare without creating overnight friction.',
    openJawOption:
      'Test London -> Windhoek and Victoria Falls/Johannesburg -> London; Johannesburg may be the cleaner return if Falls awards are thin.',
    rewardSeatConfidence: 'Hard',
    flightRiskScore: 'Medium',
    regionalWarning:
      'Windhoek-Falls is the fragile link: services can be infrequent, expensive, or routed through Johannesburg, so protect the schedule with a buffer.',
    checks: [
      'Search Qatar/BA partner options into Windhoek and out of Victoria Falls/Johannesburg.',
      'Compare Victoria Falls vs Livingstone as the Falls gateway before choosing the hotel side.',
      'Price the Windhoek-Falls bridge before paying for desert lodges.',
    ],
  },
  {
    route: 'Egypt + Victoria Falls',
    bestGateways: 'London -> Cairo, then Cairo -> Addis/Nairobi/Johannesburg -> Victoria Falls/Livingstone, return Falls/Johannesburg -> London.',
    likelyAirlines:
      'BA/Egyptair into Cairo; Ethiopian, Kenya Airways, or Johannesburg connections for the Falls bridge; Qatar/BA partner options for the return if available.',
    aviosAngle:
      'Use Avios for outer long-haul only if the routing is clean. The Egypt-Falls bridge should be cash-first because award availability is unlikely to solve the real bottleneck.',
    cashFallback:
      'If Cairo-Falls prices badly or forces risky separate tickets, downgrade this route behind Egypt + Kenya and Namibia + Falls.',
    openJawOption:
      'Test London -> Cairo and Victoria Falls/Livingstone/Johannesburg -> London; do not build this as a return to Cairo.',
    rewardSeatConfidence: 'Hard',
    flightRiskScore: 'High',
    regionalWarning:
      'This route has the most expensive and awkward intra-Africa bridge; add a transit night and yellow-fever-document check before committing.',
    checks: [
      'Search Cairo to Victoria Falls, Livingstone, and Johannesburg separately.',
      'Check whether any transit country changes yellow fever certificate requirements.',
      'Only hold Falls hotels after the bridge and return route are proven on cash fares.',
    ],
  },
];

export const gatewayDecisions: GatewayDecision[] = [
  {
    gateway: 'Cairo',
    quality: 'Smooth',
    bestFor: 'Egypt culture block and London entry.',
    watchout: 'October heat and airport-to-city transfer friction; use private transfers.',
  },
  {
    gateway: 'Nairobi',
    quality: 'Smooth',
    bestFor: 'Masai Mara access and a practical return gateway to London.',
    watchout: 'Keep a buffer night before Mara or the international return.',
  },
  {
    gateway: 'Kilimanjaro / JRO',
    quality: 'Good',
    bestFor: 'Northern Tanzania and Serengeti/Ngorongoro backups.',
    watchout: 'Good safari gateway, weaker for non-safari culture; reward seats may be scarce.',
  },
  {
    gateway: 'Dar es Salaam',
    quality: 'Useful',
    bestFor: 'Tanzania cash routings and possible Qatar/oneworld positioning.',
    watchout: 'Often adds backtracking if the trip is not using Zanzibar or southern Tanzania.',
  },
  {
    gateway: 'Windhoek',
    quality: 'Good',
    bestFor: 'Namibia landscapes and desert-road routing.',
    watchout: 'Long-haul options are thinner than Nairobi/Cairo; compare cash before forcing Avios.',
  },
  {
    gateway: 'Victoria Falls / Livingstone',
    quality: 'Useful',
    bestFor: 'Falls, Chobe day trip, Zambezi activities.',
    watchout: 'Great destination gateway, weaker reward gateway; test both sides of the Falls.',
  },
  {
    gateway: 'Lusaka',
    quality: 'Friction',
    bestFor: 'Zambia/South Luangwa watchlist routes.',
    watchout: 'Adds a domestic or regional hop and more heat/logistics risk in early October.',
  },
  {
    gateway: 'Johannesburg',
    quality: 'Useful',
    bestFor: 'Southern Africa positioning and rescue routings.',
    watchout: 'Can make flight logistics cleaner, but pulls the trip toward a South Africa-style journey.',
  },
];

export const cashAviosComparisons: CashAviosComparison[] = [
  {
    route: 'Egypt + Kenya',
    likelyCashFare: 'Often the cleanest cash structure: London-Cairo, Cairo-Nairobi, Nairobi-London.',
    likelyAviosFees: 'Use BA/Qatar searches for the outer legs; still pay taxes, fees, and the Cairo-Nairobi bridge.',
    goodValueWhen: 'Nairobi-London cash fares are high and a clean BA/Qatar/partner reward exists.',
    cashCleanerWhen: 'London-Cairo is cheap or Avios forces a worse connection than a normal cash fare.',
  },
  {
    route: 'Namibia + Victoria Falls',
    likelyCashFare: 'Expect higher variance because Windhoek and Falls are thinner gateways.',
    likelyAviosFees: 'Potentially useful via Qatar/partners on long-haul, but regional hops are cash-first.',
    goodValueWhen: 'A clean Windhoek or Johannesburg long-haul reward appears without a punishing overnight.',
    cashCleanerWhen: 'The reward gets you near the region but leaves an expensive, risky separate ticket.',
  },
  {
    route: 'Egypt + Victoria Falls',
    likelyCashFare: 'Most fragile and likely highest total flight cost because of the Cairo-Falls bridge.',
    likelyAviosFees: 'Use Avios only on London-Cairo or the return; the middle bridge remains the route test.',
    goodValueWhen: 'Outer legs price badly in cash and the Cairo-Falls bridge is still reasonable.',
    cashCleanerWhen: 'The bridge needs multiple stops, separate tickets, or an extra positioning city.',
  },
];

export const costResearch = [
  {
    region: 'Masai Mara short safari',
    anchor: 'US$600-950 pp mid-range 3-day road safari; luxury/fly-in commonly starts around US$1,150-1,600+ pp.',
    nzd: 'Approx NZ$1,000-2,700+ pp at ~1 USD = 1.68 NZD.',
    useInPlan:
      'Keep Kenya safari to three nights, choose road transfer for value or one fly-in upgrade if the rest of the trip is under budget.',
    source: 'SafariBookings, MasaiMaraSafari.travel, Maasai Mara Safari Tours',
  },
  {
    region: 'Namibia landscapes',
    anchor: 'Self-drive lodge trips range widely: about US$160-320 pp/day budget, US$300-650 mid-range, US$700-1,800+ luxury.',
    nzd: 'Approx NZ$270-1,090 pp/day for budget/mid-range, or NZ$1,175-3,020+ luxury.',
    useInPlan:
      'Use guided private transfers only for the harder desert/coast segments, then spend on one standout lodge instead of making every night premium.',
    source: 'Namibia Adventures, Etosha National Park Namibia cost guide, SafariBookings',
  },
  {
    region: 'Victoria Falls activities',
    anchor: '12-15 minute helicopter flights list around US$173-252; Chobe day trips commonly sit around US$150-350.',
    nzd: 'Approx NZ$290-425 helicopter and NZ$250-590 Chobe day trip, before taxes/fees/tips.',
    useInPlan:
      'Treat Falls as an experience budget: choose helicopter plus Chobe, or sunset cruise plus guided Falls walk if you want a softer spend.',
    source: 'Visit Livingstone, VictoriaFalls-Guide, Visit Victoria Falls activity packages',
  },
  {
    region: 'Egypt culture block',
    anchor: 'Private Cairo/Luxor packages vary widely; efficient 5-9 day guided blocks commonly range from low four figures to luxury tour pricing.',
    nzd: 'Working model NZ$3,200-5,500 pp for private guiding, quality hotels, domestic movement, entries, and nicer meals.',
    useInPlan:
      'Spend on private Egyptologist days in Cairo and Luxor, then keep evenings independent with food walks and rooftop dinners.',
    source: 'Discovery Tours Egypt, private Egypt tour operators, live public tour listings',
  },
  {
    region: 'Currency working rate',
    anchor: 'USD/NZD public converters sat around 1.67-1.68 on 7 May 2026, with normal card and FX margin variation.',
    nzd: 'Use 1.68 as planning math, then add 5-8% buffer for card spreads and rate movement.',
    useInPlan:
      'Show costs as decision ranges, not fixed quotes, and preserve NZ$800-1,200 pp contingency inside each concept.',
    source: 'TradingView, Xe, Investing.com, Wise, Revolut',
  },
];

export const accommodationPlans: AccommodationPlan[] = [
  {
    route: 'Egypt + Kenya',
    strategy:
      'Keep Cairo/Luxor comfortable rather than ultra-luxury, then spend the accommodation premium on the 3-night Mara block where lodge quality changes the whole safari.',
    nightlyTarget: 'City nights NZ$220-420 per room; Mara NZ$1.1k-1.7k pp/night bundled with meals, drives, fees, and transfers.',
    bestSplurge: 'One fly-in or conservancy lodge upgrade in the Mara, not a luxury room every night in Egypt.',
    avoid: 'A cheap Mara lodge far from wildlife or a separate low-cost hotel plus ad hoc game drives.',
    tiers: [
      {
        tier: 'Value-smart',
        useFor: 'Cairo, Luxor, Nairobi buffer',
        guide: 'NZ$180-280 per room/night',
        notes: 'Use this for clean logistics, private transfers, and location. Kindred can replace some city nights if availability is strong.',
      },
      {
        tier: 'Honeymoon comfort',
        useFor: 'Cairo Nile view, Luxor heritage stay, Nairobi calm buffer',
        guide: 'NZ$280-520 per room/night',
        notes: 'Best default tier for this route: enough comfort without stealing money from the Mara.',
      },
      {
        tier: 'Safari lodge',
        useFor: 'Masai Mara reserve or conservancy',
        guide: 'NZ$3.4k-5.1k pp for 3 nights',
        notes: 'Usually includes full board, shared drives, park/conservancy fees, and internal transfers or fly-in options.',
      },
    ],
    nights: [
      { nights: '1-3', base: 'Cairo', stay: 'Central hotel or Kindred if strong', guide: 'NZ$540-1,260 room total' },
      { nights: '4-6', base: 'Luxor', stay: 'Heritage or Nile-side comfort hotel', guide: 'NZ$660-1,560 room total' },
      { nights: '7', base: 'Nairobi', stay: 'Practical airport or Karen/Langata buffer', guide: 'NZ$220-420 room total' },
      { nights: '8-10', base: 'Masai Mara', stay: 'Conservancy/reserve lodge package', guide: 'NZ$6.8k-10.2k couple total' },
      { nights: '11-14/16', base: 'Cairo/London buffer', stay: 'Flexible city nights around flights', guide: 'NZ$700-1,500 room total' },
    ],
    safariCost: [
      { item: '3-night lodge package', guide: 'NZ$3.4k-5.1k pp', note: 'Core safari spend; compare road vs fly-in before booking.' },
      { item: 'Park/conservancy fees', guide: 'Usually bundled, verify line item', note: 'Ask whether 2026 fee changes are included.' },
      { item: 'Private vehicle upgrade', guide: 'NZ$250-700 per day if available', note: 'Worth it only if the lodge is otherwise right.' },
    ],
  },
  {
    route: 'Namibia + Victoria Falls',
    strategy:
      'Use reliable mid-range stays in Windhoek/Swakopmund/Falls, then choose one standout desert lodge near Sossusvlei or Deadvlei.',
    nightlyTarget: 'City/coast/Falls NZ$220-500 per room; desert lodge NZ$650-1,200+ per room with meals/activities sometimes extra.',
    bestSplurge: 'Two nights at a desert lodge with early Sossusvlei access, stargazing, and guided dune logistics.',
    avoid: 'Making every Namibia night premium; distances and transfers already carry enough cost.',
    tiers: [
      {
        tier: 'Logistics base',
        useFor: 'Windhoek arrival, Swakopmund, Victoria Falls',
        guide: 'NZ$180-360 per room/night',
        notes: 'Good for arrival recovery, laundry, and flexible meals. Accor/Mantis may help around Windhoek or Falls.',
      },
      {
        tier: 'Landscape comfort',
        useFor: 'Sossusvlei, NamibRand, Damaraland-style lodge nights',
        guide: 'NZ$500-900 per room/night',
        notes: 'The best value tier for the route if location saves early-morning driving.',
      },
      {
        tier: 'Signature lodge',
        useFor: 'One desert stay or Falls river-view finale',
        guide: 'NZ$900-1,600+ per room/night',
        notes: 'Use sparingly. This route becomes expensive quickly once transfers and activities are added.',
      },
    ],
    nights: [
      { nights: '1', base: 'Windhoek', stay: 'Arrival buffer hotel', guide: 'NZ$220-360 room total' },
      { nights: '2-4', base: 'Sossusvlei/Deadvlei', stay: 'Desert lodge, ideally activity-ready', guide: 'NZ$1.8k-3.6k room total' },
      { nights: '5-7', base: 'Swakopmund or coast', stay: 'Comfort hotel or guesthouse', guide: 'NZ$750-1,350 room total' },
      { nights: '8-10', base: 'Windhoek/transit', stay: 'Practical hotel around flight bridge', guide: 'NZ$500-900 room total' },
      { nights: '11-14/16', base: 'Victoria Falls', stay: 'Mantis/river/Falls access hotel', guide: 'NZ$1.2k-2.5k room total' },
    ],
    safariCost: [
      { item: 'Chobe day safari', guide: 'NZ$250-590 pp', note: 'Keeps safari to one wildlife day without a lodge block.' },
      { item: 'Desert guided activities', guide: 'NZ$150-450 pp/day', note: 'Often lodge-arranged; confirm whether included.' },
      { item: 'Private transfers', guide: 'NZ$700-1.8k pp route-dependent', note: 'The hidden cost of avoiding self-drive fatigue.' },
    ],
  },
  {
    route: 'Egypt + Victoria Falls',
    strategy:
      'Treat accommodation as two romantic anchors: efficient Egypt hotels first, then a stronger Falls base because this route lacks a full safari lodge moment.',
    nightlyTarget: 'Egypt NZ$240-520 per room; Falls NZ$350-800 per room; Chobe remains a day-trip cost rather than a lodge stay.',
    bestSplurge: 'Falls river-view or high-service property plus helicopter/river activity, after flight bridges are proven.',
    avoid: 'Holding non-refundable Falls hotels before confirming Cairo-Falls routing, yellow-fever documentation, and transit times.',
    tiers: [
      {
        tier: 'Culture comfort',
        useFor: 'Cairo and Luxor',
        guide: 'NZ$240-520 per room/night',
        notes: 'Prioritise private guiding and location over ultra-luxury rooms.',
      },
      {
        tier: 'Falls honeymoon base',
        useFor: 'Victoria Falls or Livingstone',
        guide: 'NZ$350-800 per room/night',
        notes: 'Choose the side only after checking flight timings, visas, and activity access.',
      },
      {
        tier: 'Experience-led luxury',
        useFor: 'Falls finale',
        guide: 'NZ$800-1,400+ per room/night',
        notes: 'Use only if the Cairo-Falls bridge stays sane and budget remains under the NZ$12k pp ceiling.',
      },
    ],
    nights: [
      { nights: '1-4', base: 'Cairo', stay: 'Comfort hotel or Kindred if available', guide: 'NZ$960-2,080 room total' },
      { nights: '5-7', base: 'Luxor', stay: 'Heritage/Nile-side hotel', guide: 'NZ$720-1,560 room total' },
      { nights: '8-9', base: 'Transit buffer', stay: 'Flexible airport/city hotel', guide: 'NZ$450-900 room total' },
      { nights: '10-14/16', base: 'Victoria Falls/Livingstone', stay: 'Falls access or river-facing base', guide: 'NZ$1.8k-4.0k room total' },
    ],
    safariCost: [
      { item: 'Chobe day safari', guide: 'NZ$250-590 pp', note: 'Best wildlife add-on without turning the trip safari-heavy.' },
      { item: 'Falls guided walk + cruise', guide: 'NZ$180-420 pp', note: 'Good alternative if the helicopter feels too spendy.' },
      { item: 'Helicopter flight', guide: 'NZ$290-425 pp before extras', note: 'The right splurge if weather and budget line up.' },
    ],
  },
];
