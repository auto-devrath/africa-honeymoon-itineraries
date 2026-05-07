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
    image: './generated/route-egypt-kenya.png',
    gallery: egyptGallery,
    costLabel: 'NZ$9,200-10,400 pp',
    costMin: 9200,
    costMax: 10400,
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
    title: 'Dunes, Deltas & Smoke',
    pairing: 'Namibia + Victoria Falls',
    summary:
      'The most modern-feeling honeymoon: design lodges, red dunes, stargazing, then Victoria Falls and a Chobe day safari.',
    headlineDetail:
      'This is the cleanest choice if you want fewer museums, more awe, and a route that feels visually extraordinary every second day.',
    mood: 'Desert silence, flightseeing, waterfall mist, river sundowners',
    image: './generated/route-namibia-victoria.png',
    gallery: namibiaGallery,
    costLabel: 'NZ$9,000-10,800 pp',
    costMin: 9000,
    costMax: 10800,
    duration: '14-15 days',
    transit: 'Low',
    safariDays: '2-3 days',
    culturalWonder: 'Desert communities and colonial-era Swakopmund/Windhoek texture',
    naturalWonder: 'Sossusvlei, Deadvlei, Victoria Falls, Chobe River',
    safariBase: 'Victoria Falls with Chobe day trip and Zambezi drives',
    route: ['London', 'Doha', 'Windhoek', 'Sossusvlei', 'Swakopmund', 'Victoria Falls', 'London'],
    assetFocus: [
      'Avios into Windhoek via Doha if award space is kind',
      'Accor Plus in Windhoek and Victoria Falls/Mantis inventory',
      'Cash for desert lodges and high-quality transfers',
    ],
    idealFor:
      'Best if the priority is visual drama, simpler logistics, and minimal safari fatigue.',
    budget: [
      {
        label: 'Flights and regional hop',
        amount: 1500,
        detail: 'Avios for long haul where useful; protect Windhoek-Victoria Falls routing early.',
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
    image: './generated/route-egypt-victoria.png',
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
  path: 'Deep research report plus live 2026 public pricing checks on 7 May 2026',
  completed: 'Updated 7 May 2026',
};

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
