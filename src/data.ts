export type ConceptId = 'egypt-kenya' | 'namibia-victoria' | 'egypt-victoria';

export type ScoreKey = 'Budget' | 'Ease' | 'Culture' | 'Nature' | 'Romance';

export type ItineraryConcept = {
  id: ConceptId;
  label: string;
  title: string;
  pairing: string;
  summary: string;
  image: string;
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
  }>;
  strengths: string[];
  watchouts: string[];
  scores: Record<ScoreKey, number>;
};

export const tripBrief = {
  title: 'October Africa Honeymoon',
  subtitle:
    'A 14-17 day shortlist from London focused on culture, natural wonders, and a tightly capped 3-4 day safari.',
  budget: 'NZ$10k-12k pp',
  origin: 'London',
  timing: 'October',
  avios: '200,000 Avios',
};

export const concepts: ItineraryConcept[] = [
  {
    id: 'egypt-kenya',
    label: 'Concept 1',
    title: 'Antiquity & Savannah',
    pairing: 'Egypt + Kenya',
    summary:
      'The most classic blend: serious Egyptian history first, then a short luxury Masai Mara finish.',
    image:
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1600&q=80',
    costLabel: 'NZ$9,178-10,000 pp',
    costMin: 9178,
    costMax: 10000,
    duration: '14-16 days',
    transit: 'Moderate',
    safariDays: '3-4 days',
    culturalWonder: 'Pyramids of Giza, Karnak, Luxor',
    naturalWonder: 'Great Rift Valley',
    safariBase: 'Fairmont Mara Safari Club, Masai Mara',
    route: ['London', 'Cairo', 'Luxor', 'Nairobi', 'Masai Mara', 'London'],
    assetFocus: [
      'Avios on London-Cairo and Nairobi-London',
      'Accor Plus at Fairmont Mara',
      'Kindred only if Cairo or Nairobi inventory is strong',
    ],
    idealFor:
      'Best when the honeymoon should feel culturally weighty, romantic, and recognisably East African.',
    budget: [
      {
        label: 'International and intra-Africa flights',
        amount: 1000,
        detail: 'Avios absorbs the heavy UK-Africa legs; cash mainly covers Cairo-Nairobi.',
      },
      {
        label: 'Egypt culture week',
        amount: 3500,
        detail: 'Private Egyptologist, Cairo/Luxor lodging, dining, and domestic flights.',
      },
      {
        label: 'Kenya safari',
        amount: 4178,
        detail: 'Fairmont Mara package and conservancy fees, before optional ballooning.',
      },
      {
        label: 'Nairobi transit',
        amount: 500,
        detail: 'Two practical nights using Accor inventory where useful.',
      },
    ],
    timeline: [
      {
        days: 'Days 1-3',
        title: 'Cairo arrival and Giza',
        base: 'Cairo',
        detail: 'Use the first nights for Giza, the Sphinx, the Egyptian Museum, and recovery from London.',
      },
      {
        days: 'Days 4-7',
        title: 'Luxor deep dive',
        base: 'Luxor',
        detail: 'Valley of the Kings, Karnak, Hatshepsut, and private guiding while October heat is manageable.',
      },
      {
        days: 'Days 8-10',
        title: 'Nairobi bridge',
        base: 'Nairobi',
        detail: 'Direct Cairo-Nairobi flight, one buffer night, then light aircraft into the Mara.',
      },
      {
        days: 'Days 11-14',
        title: 'Masai Mara finish',
        base: 'Olchoro Oirowua Conservancy',
        detail: 'A focused safari cap with shared game drives, riverfront tented lodging, and a relaxed finale.',
      },
    ],
    strengths: [
      'Lowest realistic cost while still feeling premium',
      'Strongest culture and safari balance',
      'October sits outside the most expensive Mara peak window',
    ],
    watchouts: [
      'Requires a Cairo-Nairobi cash flight',
      'Mara conservancy fees should be modelled explicitly',
      'Optional ballooning can push the trip closer to NZ$10k pp',
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
    label: 'Concept 2',
    title: 'Dunes, Deltas & Smoke',
    pairing: 'Namibia + Victoria Falls',
    summary:
      'The cleanest routing and the strongest landscape contrast: Namib Desert, Sossusvlei, Victoria Falls, and short Zambezi/Chobe safari days.',
    image:
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=80',
    costLabel: 'NZ$8,952-10,000 pp',
    costMin: 8952,
    costMax: 10000,
    duration: '14-15 days',
    transit: 'Low',
    safariDays: '3-4 days',
    culturalWonder: 'Ancient teak forests and desert-adapted routes',
    naturalWonder: 'Sossusvlei Dunes and Victoria Falls',
    safariBase: 'Mbano Manor, Zambezi National Park, Chobe',
    route: ['London', 'Doha', 'Windhoek', 'Sossusvlei', 'Victoria Falls', 'London'],
    assetFocus: [
      'Avios sweet spot into Windhoek via Doha',
      'Accor Plus at Movenpick Windhoek',
      'Accor Plus at Mbano Manor by Mantis',
    ],
    idealFor:
      'Best when the brief is maximum natural wonder, minimum routing friction, and no South Africa transit.',
    budget: [
      {
        label: 'International and regional flights',
        amount: 1280,
        detail: 'Avios for long haul, plus Airlink Windhoek-Victoria Falls.',
      },
      {
        label: 'Namibia landscapes',
        amount: 3400,
        detail: 'Windhoek stop, desert lodges, guided transfers, Sossusvlei, and Deadvlei.',
      },
      {
        label: 'Victoria Falls base',
        amount: 3272,
        detail: 'Four nights at Mbano Manor before member discounts or package value.',
      },
      {
        label: 'Falls and safari activities',
        amount: 1000,
        detail: "Devil's Pool, targeted game drives, and a Chobe day option.",
      },
    ],
    timeline: [
      {
        days: 'Days 1-2',
        title: 'Windhoek landing',
        base: 'Windhoek',
        detail: 'Use Movenpick or similar Accor inventory as a secure reset before the desert.',
      },
      {
        days: 'Days 3-8',
        title: 'Sossusvlei and Deadvlei',
        base: 'Namib Desert',
        detail: 'Dunes, salt pans, stargazing, and guided transfers instead of self-driving long gravel roads.',
      },
      {
        days: 'Day 9',
        title: 'Direct Airlink bridge',
        base: 'Windhoek to Victoria Falls',
        detail: 'The key route unlock: Windhoek to Victoria Falls in about 1 hour 25 minutes.',
      },
      {
        days: 'Days 10-14',
        title: 'Falls, river, and light safari',
        base: 'Victoria Falls',
        detail: "Mbano Manor base, Devil's Pool timing, Zambezi game drives, and optional Chobe elephants.",
      },
    ],
    strengths: [
      'Best logistics and lowest transit drag',
      'Most cinematic natural-wonder itinerary',
      'Direct Windhoek-Victoria Falls route avoids South Africa',
    ],
    watchouts: [
      'Less ancient-history depth than Egypt concepts',
      'Namibia transfers must be planned carefully',
      'October heat can be intense in the Zambezi region',
    ],
    scores: {
      Budget: 5,
      Ease: 5,
      Culture: 3,
      Nature: 5,
      Romance: 4,
    },
  },
  {
    id: 'egypt-victoria',
    label: 'Concept 3',
    title: 'Pan-African Masterpiece',
    pairing: 'Egypt + Victoria Falls',
    summary:
      'The most ambitious option: Egypts monuments and Victoria Falls in one continent-spanning honeymoon.',
    image:
      'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1600&q=80',
    costLabel: 'NZ$10,910-11,500 pp',
    costMin: 10910,
    costMax: 11500,
    duration: '14-17 days',
    transit: 'High',
    safariDays: '3-4 days',
    culturalWonder: 'Egyptian monoliths and Nile Valley sites',
    naturalWonder: 'Victoria Falls and the Zambezi',
    safariBase: 'Mbano Manor, Chobe, Zambezi National Park',
    route: ['London', 'Cairo', 'Luxor', 'Addis Ababa or Nairobi', 'Victoria Falls', 'London'],
    assetFocus: [
      'Avios on London-Cairo and Victoria Falls-London',
      'Kindred credits in Cairo if available',
      'Accor Plus at Mbano Manor',
    ],
    idealFor:
      'Best when the couple wants the highest drama and is comfortable spending more time in the air.',
    budget: [
      {
        label: 'International and intercontinental flights',
        amount: 2300,
        detail: 'Avios covers outer legs; Cairo-Victoria Falls likely needs cash.',
      },
      {
        label: 'Egypt cultural segment',
        amount: 2700,
        detail: 'Kindred can offset Cairo lodging; budget goes to guides, dining, and Luxor flights.',
      },
      {
        label: 'Victoria Falls lodging',
        amount: 4910,
        detail: 'Six nights at Mbano Manor baseline before discounts or package value.',
      },
      {
        label: 'Chobe and falls experiences',
        amount: 1000,
        detail: 'Flight of Angels, river cruise, Chobe excursion, and Zambezi drives.',
      },
    ],
    timeline: [
      {
        days: 'Days 1-7',
        title: 'Egypt anchor week',
        base: 'Cairo and Luxor',
        detail: 'Pyramids, museum time, Luxor temples, Valley of the Kings, and private guide continuity.',
      },
      {
        days: 'Day 8',
        title: 'Long continental bridge',
        base: 'Cairo to Victoria Falls',
        detail: 'One-stop routing via Addis Ababa or Nairobi, ideally protected on one ticket.',
      },
      {
        days: 'Days 9-12',
        title: 'Victoria Falls immersion',
        base: 'Mbano Manor',
        detail: 'Falls viewpoints, rainforest micro-climate, helicopter flight, and Zambezi sunset cruise.',
      },
      {
        days: 'Days 13-15',
        title: 'Chobe and Zambezi safari cap',
        base: 'Botswana and Zimbabwe',
        detail: 'Two-day Chobe pulse plus one or two local Zambezi drives without turning the trip into a full safari.',
      },
    ],
    strengths: [
      'Most iconic culture-plus-nature combination',
      'Kindred can materially protect the Egypt cash budget',
      'Strong honeymoon narrative from Nile to Zambezi',
    ],
    watchouts: [
      'Highest cost and longest transit profile',
      'Yellow fever certificate planning matters if routing through endemic zones',
      'Needs stronger buffer days than the other concepts',
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
    title: 'Visas and borders',
    items: [
      'Egypt e-Visa or visa on arrival for UK citizens; passport validity should exceed six months.',
      'Kenya eTA applies to the Kenya concept and should be submitted at least three days before travel.',
      'For Victoria Falls, request the KAZA Univisa where eligible to cover Zimbabwe, Zambia, and Chobe day trips.',
    ],
  },
  {
    title: 'Health planning',
    items: [
      'Zambezi, Chobe, and Masai Mara areas require malaria advice from a travel clinic.',
      'Yellow fever certification depends on routing; avoid accidental certificate triggers where possible.',
      'October heat means early-morning activity blocks and protected midday recovery time.',
    ],
  },
  {
    title: 'Safety profile',
    items: [
      'Use private guides and direct domestic flights in Egypts main antiquities corridor.',
      'In Namibia, prefer guided transfers or regional flights over long self-drive gravel sections.',
      'Safari zones around Mara, Zambezi, and Chobe are best handled through lodge-arranged guiding.',
    ],
  },
];

export const sourceReport = {
  label: 'Gemini Deep Research report',
  path: '/Users/oc/.openclaw/deep-research/20260507T010738Z-honeymoon-itineraries-in-africa-for-october-2-2-5-weeks-from-london-budget-10k-1.md',
  completed: '7 May 2026, 02:18 London',
};
