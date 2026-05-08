import { useMemo, useState } from 'react';
import './App.css';
import {
  concepts,
  assetPlans,
  costResearch,
  flightWatchlist,
  logistics,
  rewardWatchlist,
  routeCandidates,
  safetyChecks,
  sourceReport,
  sourceNotes,
  tripBrief,
  type ConceptId,
  type ItineraryConcept,
  type ScoreKey,
  type Tour,
} from './data';

const scoreKeys: ScoreKey[] = ['Budget', 'Ease', 'Culture', 'Nature', 'Romance'];
type ViewId = 'concepts' | 'generator' | 'costing' | 'tours' | 'compare' | 'logistics';

const detailedCosts: Record<
  ConceptId,
  Array<{ label: string; value: string; note: string; tone: 'flight' | 'stay' | 'safari' | 'tour' | 'admin' | 'buffer' }>
> = {
  'egypt-kenya': [
    { label: 'Flights', value: 'NZ$1.1k-1.4k', note: 'Avios for outer legs; pay Cairo-Nairobi bridge', tone: 'flight' },
    { label: 'Accommodation', value: 'NZ$2.2k-2.7k', note: 'Cairo, Luxor, Nairobi, 3-night Mara lodge share', tone: 'stay' },
    { label: 'Safari', value: 'NZ$3.5k-4.1k', note: '3-4 days Mara, fees, meals, drives, transfer', tone: 'safari' },
    { label: 'Private guides', value: 'NZ$900-1.2k', note: 'Giza, Saqqara, Luxor West Bank, Karnak', tone: 'tour' },
    { label: 'Visas + health', value: 'NZ$250-350', note: 'Egypt, Kenya eTA, malaria clinic buffer', tone: 'admin' },
    { label: 'Honeymoon buffer', value: 'NZ$800-1.0k', note: 'Spa, rooftops, tips, delay cushion', tone: 'buffer' },
  ],
  'namibia-victoria': [
    { label: 'Flights', value: 'NZ$1.5k-2.2k', note: 'UK-Windhoek/Falls routing; Avios only if award space beats cash', tone: 'flight' },
    { label: 'Accommodation', value: 'NZ$3.0k-3.8k', note: 'Windhoek, desert lodge, coast, Victoria Falls base', tone: 'stay' },
    { label: 'Safari', value: 'NZ$350-800', note: 'Chobe day trip or light Zambezi wildlife cruise', tone: 'safari' },
    { label: 'Experiences', value: 'NZ$1.2k-1.8k', note: 'Sossusvlei, Sandwich Harbour, helicopter/balloon choice', tone: 'tour' },
    { label: 'Transfers', value: 'NZ$1.2k-1.7k', note: 'Guided desert/coast movement to avoid tired self-drive', tone: 'admin' },
    { label: 'Honeymoon buffer', value: 'NZ$800-1.0k', note: 'Tips, visas, better dinners, FX movement', tone: 'buffer' },
  ],
  'egypt-victoria': [
    { label: 'Flights', value: 'NZ$2.2k-3.0k', note: 'Hardest bridge: Egypt to Falls needs protection', tone: 'flight' },
    { label: 'Accommodation', value: 'NZ$3.1k-4.0k', note: 'Egypt city stays plus romantic Falls base', tone: 'stay' },
    { label: 'Safari', value: 'NZ$350-800', note: 'Chobe day only; no lodge-heavy safari block', tone: 'safari' },
    { label: 'Private guides', value: 'NZ$1.1k-1.5k', note: 'Egyptologist days plus Falls guiding', tone: 'tour' },
    { label: 'Falls add-ons', value: 'NZ$1.0k-1.5k', note: 'Devil’s Pool, helicopter, cruise, park fees', tone: 'tour' },
    { label: 'Admin + buffer', value: 'NZ$900-1.2k', note: 'Visas, health, tips, missed-connection cushion', tone: 'buffer' },
  ],
};

function formatCurrency(value: number) {
  return `NZ$${value.toLocaleString('en-NZ')}`;
}

function Hero({
  activeConcept,
  activeView,
  setActiveView,
}: {
  activeConcept: ItineraryConcept;
  activeView: string;
  setActiveView: (view: ViewId) => void;
}) {
  return (
    <header
      className="hero"
      style={{
        backgroundImage: 'linear-gradient(105deg, rgba(5, 8, 11, 0.8), rgba(5, 8, 11, 0.4) 46%, rgba(5, 8, 11, 0.04)), url(https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1800&q=82)',
      }}
    >
      <nav className="topbar" aria-label="Trip views">
        <button className="brand" type="button" onClick={() => setActiveView('concepts')}>
          <span>OC</span>
          <strong>Honeymoon Desk</strong>
        </button>
        <div className="view-tabs">
          {[
            ['concepts', 'Start'],
            ['generator', 'Fit'],
            ['compare', 'Choose'],
            ['costing', 'Budget'],
            ['tours', 'Book'],
            ['logistics', 'Prep'],
          ].map(([id, label]) => (
            <button
              key={id}
              className={activeView === id ? 'is-active' : ''}
              onClick={() => setActiveView(id as ViewId)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      <div className="hero-content">
        <p className="eyebrow">{tripBrief.timing} from {tripBrief.origin}</p>
        <h1>Choose the honeymoon route, then turn it into a trip.</h1>
        <p className="hero-copy">
          Start with the full Africa longlist from the brief, see what was ruled out, then pick
          the route that best fits October, safety, budget, Avios, and a 3-4 day safari cap.
        </p>
        <div className="hero-actions">
          <button type="button" onClick={() => setActiveView('generator')}>
            Find best fit
          </button>
          <button type="button" className="ghost" onClick={() => setActiveView('compare')}>
            Compare routes
          </button>
        </div>
        <div className="hero-stats" aria-label="Trip constraints">
          <span>{tripBrief.budget}</span>
          <span>{activeConcept.duration}</span>
          <span>{activeConcept.safariDays} safari</span>
          <span>{tripBrief.avios}</span>
        </div>
      </div>

      <aside className="hero-card" aria-label="Active itinerary">
        <p>Selected route</p>
        <h2>{activeConcept.title}</h2>
        <span>{activeConcept.pairing}</span>
        <small>{activeConcept.mood}</small>
      </aside>
    </header>
  );
}

function DecisionPath({
  activeConcept,
  setActiveView,
}: {
  activeConcept: ItineraryConcept;
  setActiveView: (view: ViewId) => void;
}) {
  const steps: Array<{
    number: string;
    title: string;
    body: string;
    action: string;
    view: ViewId;
  }> = [
    {
      number: '01',
      title: 'Set the fit',
      body: 'Decide pace, safari appetite, and whether culture or natural wonder should lead.',
      action: 'Tune fit',
      view: 'generator',
    },
    {
      number: '02',
      title: 'Choose the route',
      body: 'Compare the longlist first, then the three contenders by cost, safety, transit risk, and payoff.',
      action: 'Compare',
      view: 'compare',
    },
    {
      number: '03',
      title: 'Pressure-test cost',
      body: 'Check where Avios, Accor Plus, Kindred, and cash actually help the plan.',
      action: 'Budget',
      view: 'costing',
    },
    {
      number: '04',
      title: 'Plan the pieces',
      body: 'Move from concept to bookable tours, transfers, health checks, visas, and buffers.',
      action: 'Prep',
      view: 'logistics',
    },
  ];

  return (
    <section className="decision-path" aria-label="Honeymoon decision path">
      <div className="decision-path-intro">
        <p className="eyebrow">Start Here</p>
        <h2>Use this like a decision workspace, not a brochure.</h2>
        <p>
          The goal is to end with one route you both trust. Use
          <strong> {activeConcept.pairing}</strong> as the working case, then compare it against
          the budget, safety, transit, and safari-cap tradeoffs.
        </p>
      </div>
      <div className="path-step-grid">
        {steps.map((step) => (
          <article key={step.number} className="path-step">
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            <button type="button" onClick={() => setActiveView(step.view)}>
              {step.action}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function ConceptPicker({
  activeId,
  setActiveId,
}: {
  activeId: ConceptId;
  setActiveId: (id: ConceptId) => void;
}) {
  return (
    <section className="concept-strip-wrap" aria-label="Itinerary concepts">
      <div className="concept-strip-heading">
        <div>
          <p className="eyebrow">Step 2</p>
          <h2>Pick the route you want to keep planning.</h2>
        </div>
        <p>
          These are the three routes worth building after screening Serengeti/Tanzania, Masai Mara,
          Namibia, Zambia, West Africa, South Africa, and Ethiopia against the original brief.
        </p>
      </div>
      <div className="concept-strip">
        {concepts.map((concept) => (
          <button
            key={concept.id}
            type="button"
            className={`concept-tile ${concept.id === activeId ? 'is-selected' : ''}`}
            onClick={() => setActiveId(concept.id)}
          >
            <img src={concept.image} alt="" />
            <span>
              <small>{concept.label} / {concept.pairing}</small>
              <strong>{concept.title}</strong>
              <em>{concept.costLabel}</em>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function RouteLine({ route }: { route: string[] }) {
  return (
    <ol className="route-line" aria-label="Route">
      {route.map((stop) => (
        <li key={stop}>{stop}</li>
      ))}
    </ol>
  );
}

function Gallery({ concept }: { concept: ItineraryConcept }) {
  return (
    <section className="gallery-grid" aria-label={`${concept.title} inspiration gallery`}>
      {concept.gallery.map((image, index) => (
        <img key={image} src={image} alt={`${concept.pairing} inspiration ${index + 1}`} />
      ))}
    </section>
  );
}

function BudgetBreakdown({ concept }: { concept: ItineraryConcept }) {
  const total = concept.budget.reduce((sum, item) => sum + item.amount, 0);

  return (
    <section className="budget-panel">
      <div className="section-heading">
        <p className="eyebrow">Budget Model</p>
        <h2>{concept.costLabel}</h2>
      </div>
      <div className="budget-list">
        {concept.budget.map((item) => (
          <div className="budget-row" key={item.label}>
            <div>
              <strong>{item.label}</strong>
              <p>{item.detail}</p>
            </div>
            <span>{formatCurrency(item.amount)}</span>
            <div className="budget-meter" aria-hidden="true">
              <span style={{ width: `${Math.max(8, (item.amount / total) * 100)}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DetailedCostGrid({ concept }: { concept: ItineraryConcept }) {
  return (
    <section className="cost-tile-panel">
      <div className="section-heading compact-heading">
        <p className="eyebrow">Cost Stack</p>
        <h2>Where the money goes</h2>
      </div>
      <div className="table-scroll">
        <table className="planning-table cost-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Estimate pp</th>
              <th>Planning note</th>
            </tr>
          </thead>
          <tbody>
            {detailedCosts[concept.id].map((item) => (
              <tr key={`${concept.id}-${item.label}`}>
                <td>
                  <span className={`cost-dot tone-${item.tone}`} />
                  {item.label}
                </td>
                <td>{item.value}</td>
                <td>{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Timeline({ concept }: { concept: ItineraryConcept }) {
  return (
    <section className="timeline-panel">
      <div className="section-heading">
        <p className="eyebrow">Day By Day</p>
        <h2>{concept.duration}</h2>
      </div>
      <div className="table-scroll">
        <table className="planning-table timeline-table">
          <thead>
            <tr>
              <th>Days</th>
              <th>Base</th>
              <th>Focus</th>
              <th>Plan</th>
            </tr>
          </thead>
          <tbody>
            {concept.timeline.map((item) => (
              <tr key={`${concept.id}-${item.days}`}>
                <td>{item.days}</td>
                <td>
                  <strong>{item.base}</strong>
                  <span>{item.title}</span>
                </td>
                <td>{item.focus}</td>
                <td>{item.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function RouteSnapshotTable({ concept }: { concept: ItineraryConcept }) {
  const rows = [
    ['Route', concept.route.join(' -> ')],
    ['Cost', concept.costLabel],
    ['Trip length', concept.duration],
    ['Safari cap', concept.safariDays],
    ['Culture anchor', concept.culturalWonder],
    ['Nature anchor', concept.naturalWonder],
    ['Best for', concept.idealFor],
  ];

  return (
    <section className="snapshot-panel">
      <div className="section-heading compact-heading">
        <p className="eyebrow">Selected Route</p>
        <h2>{concept.pairing} at a glance</h2>
      </div>
      <div className="table-scroll">
        <table className="planning-table snapshot-table">
          <tbody>
            {rows.map(([label, value]) => (
              <tr key={label}>
                <th>{label}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="tour-card">
      <div className="tour-card-head">
        <p className="eyebrow">{tour.location}</p>
        <h3>{tour.name}</h3>
        <p>{tour.why}</p>
      </div>
      <dl>
        <div>
          <dt>Style</dt>
          <dd>{tour.style}</dd>
        </div>
        <div>
          <dt>Review signal</dt>
          <dd>{tour.signal}</dd>
        </div>
        <div>
          <dt>Time</dt>
          <dd>{tour.duration}</dd>
        </div>
        <div>
          <dt>Price</dt>
          <dd>{tour.price}</dd>
        </div>
      </dl>
      <a href={tour.book} target="_blank" rel="noreferrer">
        Check {tour.source}
      </a>
    </article>
  );
}

function DecisionSummary() {
  const summary = [
    {
      label: 'Best all-round brief match',
      route: 'Egypt + Kenya',
      reason:
        'Most Jordan/Egypt/Morocco-like on the culture side, with a short Masai Mara safari instead of a safari-dominated honeymoon.',
    },
    {
      label: 'Best natural-wonder honeymoon',
      route: 'Namibia + Victoria Falls',
      reason:
        'Most cinematic and lowest-safari-fatigue option: dunes, Deadvlei, Swakopmund, Falls, and a single Chobe wildlife hit.',
    },
    {
      label: 'Keep as backups, not lead options',
      route: 'Tanzania / Zambia / West Africa',
      reason:
        'Tanzania is strong but more safari-led, Zambia is excellent but hot/logistically sharper in early October, and West Africa fails the first-safari/safety-confidence bar.',
    },
  ];

  return (
    <section className="decision-summary" aria-label="Recommendation summary">
      {summary.map((item) => (
        <article key={item.label}>
          <span>{item.label}</span>
          <h3>{item.route}</h3>
          <p>{item.reason}</p>
        </article>
      ))}
    </section>
  );
}

function ConceptDetail({ concept }: { concept: ItineraryConcept }) {
  return (
    <main className="content-grid">
      <section className="feature-panel">
        <div className="feature-copy">
          <p className="eyebrow">{concept.pairing}</p>
          <h2>{concept.title}</h2>
          <ul className="summary-points">
            <li>{concept.summary}</li>
            <li>{concept.headlineDetail}</li>
          </ul>
          <RouteLine route={concept.route} />
          <div className="priority-list" aria-label="Planning emphasis">
            <span>{concept.culturalWonder}</span>
            <span>{concept.naturalWonder}</span>
            <span>{concept.safariBase}</span>
          </div>
        </div>
        <Gallery concept={concept} />
      </section>

      <RouteSnapshotTable concept={concept} />
      <DetailedCostGrid concept={concept} />

      <section className="two-column">
        <Timeline concept={concept} />
        <BudgetBreakdown concept={concept} />
      </section>

      <section className="section-split">
        <div className="section-heading">
          <p className="eyebrow">Step 4</p>
          <h2>Book the magic without a giant package.</h2>
        </div>
        <div className="tour-grid">
          {concept.tours.map((tour) => (
            <TourCard key={`${concept.id}-${tour.name}`} tour={tour} />
          ))}
        </div>
      </section>

      <section className="two-column">
        <div className="decision-panel">
          <div className="section-heading">
            <p className="eyebrow">Decision Signal</p>
            <h2>Why it works</h2>
          </div>
          <ul className="plain-list">
            {concept.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="decision-panel">
          <div className="section-heading">
            <p className="eyebrow">Planning Checks</p>
            <h2>Watchouts</h2>
          </div>
          <ul className="plain-list">
            {concept.watchouts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="asset-panel">
        <div className="section-heading">
          <p className="eyebrow">Step 3</p>
          <h2>Use points and memberships where they are actually useful.</h2>
        </div>
        <div className="asset-tags">
          {concept.assetFocus.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </main>
  );
}

function CostingView() {
  const groupedFlightLinks = flightWatchlist.reduce<Record<string, typeof flightWatchlist>>((groups, item) => {
    groups[item.route] = [...(groups[item.route] ?? []), item];
    return groups;
  }, {});
  const groupedRewardLinks = rewardWatchlist.reduce<Record<string, typeof rewardWatchlist>>((groups, item) => {
    groups[item.route] = [...(groups[item.route] ?? []), item];
    return groups;
  }, {});

  return (
    <main className="content-grid top-content">
      <section className="section-split research-intro">
        <div className="section-heading">
          <p className="eyebrow">Budget Check</p>
          <h2>Public price signals, condensed.</h2>
        </div>
        <p>
          Use this table to see what each big spend probably does to the budget. These are planning
          signals, not final supplier quotes.
        </p>
      </section>
      <section className="compare-table-wrap">
        <div className="table-scroll">
          <table className="planning-table research-table">
            <thead>
              <tr>
                <th>Spend area</th>
                <th>Public price signal</th>
                <th>NZD guide</th>
                <th>How to use it</th>
                <th>Sources</th>
              </tr>
            </thead>
            <tbody>
              {costResearch.map((item) => (
                <tr key={item.region}>
                  <td>{item.region}</td>
                  <td>{item.anchor}</td>
                  <td>{item.nzd}</td>
                  <td>{item.useInPlan}</td>
                  <td>{item.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="section-split">
        <div className="section-heading">
          <p className="eyebrow">Assets</p>
          <h2>Use points and memberships as levers, not constraints.</h2>
        </div>
        <div className="asset-plan-grid">
          {assetPlans.map((item) => (
            <article className="asset-plan-card" key={item.asset}>
              <h3>{item.asset}</h3>
              <dl>
                <div>
                  <dt>Best use</dt>
                  <dd>{item.bestUse}</dd>
                </div>
                <div>
                  <dt>Avoid</dt>
                  <dd>{item.avoid}</dd>
                </div>
                <div>
                  <dt>Next action</dt>
                  <dd>{item.action}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="section-split">
        <div className="section-heading">
          <p className="eyebrow">Flight Alerts</p>
          <h2>Google Flights searches to track from London.</h2>
        </div>
        <div className="decision-panel">
          <ul className="plain-list">
            <li>Use the signed-in Google account: divyan.devs@gmail.com.</li>
            <li>Open each search, confirm two travellers and cabin, then toggle Track prices.</li>
            <li>Google sends alert emails when prices move; use Tuesday and Friday as the manual review rhythm.</li>
          </ul>
        </div>
      </section>

      <section className="asset-plan-grid">
        {Object.entries(groupedFlightLinks).map(([route, links]) => (
          <article className="asset-plan-card" key={route}>
            <h3>{route}</h3>
            <dl>
              {links.map((item) => (
                <div key={`${item.route}-${item.leg}`}>
                  <dt>{item.leg}</dt>
                  <dd>
                    {item.timing}. {item.why}{' '}
                    <a href={item.googleFlightsUrl} target="_blank" rel="noreferrer">
                      Open Google Flights
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </section>

      <section className="section-split">
        <div className="section-heading">
          <p className="eyebrow">Reward Seats</p>
          <h2>Mix Avios checks into the same watchlist.</h2>
        </div>
        <div className="decision-panel">
          <ul className="plain-list">
            <li>Google Flights tracks cash fares only; reward seats need BA/Qatar account searches or a reward-seat alert tool.</li>
            <li>For every high-priority leg, compare cash fare versus Avios plus taxes before committing points.</li>
            <li>Use the twice-weekly Tuesday/Friday review to check both cash alerts and reward-seat availability.</li>
          </ul>
        </div>
      </section>

      <section className="asset-plan-grid">
        {Object.entries(groupedRewardLinks).map(([route, links]) => (
          <article className="asset-plan-card" key={`reward-${route}`}>
            <h3>{route}</h3>
            <dl>
              {links.map((item) => (
                <div key={`${item.route}-${item.leg}`}>
                  <dt>{item.leg} / {item.priority}</dt>
                  <dd>
                    {item.rewardPath} {item.cashCompare}{' '}
                    <a href={item.actionUrl} target="_blank" rel="noreferrer">
                      Open reward check
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </section>
    </main>
  );
}

function ItineraryGenerator() {
  const [pace, setPace] = useState<'calm' | 'balanced' | 'max'>('balanced');
  const [budget, setBudget] = useState<'value' | 'target' | 'stretch'>('target');
  const [safari, setSafari] = useState<'light' | 'classic'>('light');
  const [style, setStyle] = useState<'culture' | 'nature' | 'iconic'>('nature');

  const recommendation = useMemo(() => {
    const ranked = concepts
      .map((concept) => {
        let score = 0;

        if (budget === 'value') score += 13000 - concept.costMax;
        if (budget === 'target') score += concept.costMax <= 12000 ? 2800 : 1200;
        if (budget === 'stretch') score += concept.scores.Romance * 700;

        if (pace === 'calm') score += concept.transit === 'Low' ? 3600 : concept.transit === 'Moderate' ? 1600 : -900;
        if (pace === 'balanced') score += concept.transit === 'Moderate' ? 2600 : 1700;
        if (pace === 'max') score += concept.scores.Culture * 420 + concept.scores.Nature * 420;

        if (safari === 'light') score += concept.safariDays.includes('2-3') ? 2200 : 900;
        if (safari === 'classic') score += concept.safariDays.includes('3-4') ? 2300 : 1200;

        if (style === 'culture') score += concept.scores.Culture * 850;
        if (style === 'nature') score += concept.scores.Nature * 850;
        if (style === 'iconic') score += (concept.scores.Culture + concept.scores.Nature + concept.scores.Romance) * 430;

        return { concept, score };
      })
      .sort((a, b) => b.score - a.score);

    return ranked[0].concept;
  }, [budget, pace, safari, style]);

  const planNotes = [
    pace === 'calm'
      ? 'Keep one real buffer day after the long-haul arrival and before the return flight.'
      : pace === 'balanced'
        ? 'Use one protected transit night, but let the route keep its sense of occasion.'
        : 'Accept one harder flight bridge only if it unlocks a genuinely better wonder sequence.',
    budget === 'value'
      ? 'Use Avios on the ugliest long-haul cash fare, then keep lodges comfortable rather than ultra-luxury.'
      : budget === 'target'
        ? 'Spend on one signature hotel or experience, not a premium choice every night.'
        : 'Put the stretch spend into flightseeing, private guiding, or one standout lodge.',
    safari === 'light'
      ? 'Treat safari as a highlight layer, not the whole identity of the honeymoon.'
      : 'Use three nights as the cap: long enough for dawn drives, short enough to preserve culture and wonder.',
  ];

  return (
    <main className="content-grid top-content">
      <section className="generator-panel">
        <div className="generator-controls">
          <div className="section-heading">
            <p className="eyebrow">Step 1</p>
            <h2>Shape the route around the honeymoon you actually want.</h2>
          </div>
          <label>
            Pace
            <select value={pace} onChange={(event) => setPace(event.target.value as typeof pace)}>
              <option value="calm">Calm and polished</option>
              <option value="balanced">Balanced</option>
              <option value="max">Maximum wonder</option>
            </select>
          </label>
          <label>
            Budget posture
            <select value={budget} onChange={(event) => setBudget(event.target.value as typeof budget)}>
              <option value="value">Protect budget</option>
              <option value="target">Hit NZ$10k-12k pp</option>
              <option value="stretch">Allow one splurge</option>
            </select>
          </label>
          <label>
            Safari appetite
            <select value={safari} onChange={(event) => setSafari(event.target.value as typeof safari)}>
              <option value="light">Light safari layer</option>
              <option value="classic">Classic 3-4 day safari</option>
            </select>
          </label>
          <label>
            Main pull
            <select value={style} onChange={(event) => setStyle(event.target.value as typeof style)}>
              <option value="nature">Natural wonders</option>
              <option value="culture">Culture and history</option>
              <option value="iconic">Iconic greatest-hits</option>
            </select>
          </label>
        </div>
        <article className="generated-route">
          <img src={recommendation.image} alt="" />
          <div>
            <div className="match-meta">
              <span>Best Match</span>
              <span>{recommendation.safariDays} safari</span>
              <span>{recommendation.transit} transit</span>
            </div>
            <h2>{recommendation.title}</h2>
            <strong>{recommendation.pairing} / {recommendation.costLabel}</strong>
            <RouteLine route={recommendation.route} />
            <ul className="plain-list">
              {planNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}

function ToursView() {
  return (
    <main className="content-grid">
      <section className="section-split top-section">
        <div className="section-heading">
          <p className="eyebrow">Booking Layer</p>
          <h2>Turn the selected concept into bookable pieces.</h2>
        </div>
        <p>
          These are modular experiences rather than one giant package: Egyptologist days, food walks,
          dune and Falls specialists, and one compact safari layer. Review signals were refreshed from
          public Tripadvisor/search-result data on 7 May 2026, with stronger operators surfaced first.
        </p>
      </section>
      {concepts.map((concept) => (
        <section className="tour-section" key={concept.id}>
          <div className="tour-section-head">
            <span>{concept.label}</span>
            <div>
              <h2>{concept.title}</h2>
              <p>{concept.pairing}</p>
            </div>
          </div>
          <div className="tour-grid">
            {concept.tours.map((tour) => (
              <TourCard key={`${concept.id}-${tour.name}`} tour={tour} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

function ScoreBar({ label, value }: { label: ScoreKey; value: number }) {
  return (
    <div className="score-row">
      <span>{label}</span>
      <div className="score-track" aria-label={`${label} score ${value} out of 5`}>
        <span style={{ width: `${(value / 5) * 100}%` }} />
      </div>
      <strong>{value}/5</strong>
    </div>
  );
}

function CompareView() {
  const maxBudget = Math.max(...concepts.map((concept) => concept.costMax));

  return (
    <main className="content-grid top-content">
      <section className="section-split research-intro">
        <div className="section-heading">
          <p className="eyebrow">Longlist</p>
          <h2>What was considered, shortlisted, or ruled out.</h2>
        </div>
        <p>
          The original brief asked for East Africa, West Africa, Namibia, Serengeti, Masai Mara,
          Zambia, safety screening, and South Africa as a likely separate trip. This layer makes
          those choices visible instead of hiding them behind three polished concepts.
        </p>
      </section>

      <section className="compare-table-wrap">
        <div className="table-scroll">
          <table className="planning-table longlist-table">
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Status</th>
                <th>Safari</th>
                <th>Companion wonder</th>
                <th>October / safety / budget read</th>
                <th>Verdict</th>
              </tr>
            </thead>
            <tbody>
              {routeCandidates.map((route) => (
                <tr key={route.name}>
                  <td>{route.name}</td>
                  <td>
                    <span className={`status-pill status-${route.status.toLowerCase()}`}>{route.status}</span>
                  </td>
                  <td>{route.safari}</td>
                  <td>{route.companion}</td>
                  <td>
                    <strong>{route.octoberFit}</strong>
                    <span>{route.safetyFit}</span>
                    <span>{route.budgetFit}</span>
                  </td>
                  <td>{route.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="compare-table-wrap">
        <div className="section-heading">
          <p className="eyebrow">Route Choice</p>
          <h2>Compare the three contenders side by side.</h2>
        </div>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Concept</th>
              <th>Cost pp</th>
              <th>Transit</th>
              <th>Culture</th>
              <th>Nature</th>
              <th>Independent tour anchor</th>
            </tr>
          </thead>
          <tbody>
            {concepts.map((concept) => (
              <tr key={concept.id}>
                <td>
                  <strong>{concept.title}</strong>
                  <span>{concept.pairing}</span>
                </td>
                <td>{concept.costLabel}</td>
                <td>{concept.transit}</td>
                <td>{concept.culturalWonder}</td>
                <td>{concept.naturalWonder}</td>
                <td>{concept.tours[0].name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="rank-grid">
        {concepts.map((concept) => (
          <article className="rank-card" key={concept.id}>
            <img src={concept.image} alt="" />
            <div>
              <p className="eyebrow">{concept.pairing}</p>
              <h3>{concept.title}</h3>
              <div className="cost-range" aria-label={`${concept.title} cost range`}>
                <span style={{ width: `${(concept.costMax / maxBudget) * 100}%` }} />
              </div>
              <small>{concept.costLabel}</small>
              <div className="score-list">
                {scoreKeys.map((key) => (
                  <ScoreBar key={`${concept.id}-${key}`} label={key} value={concept.scores[key]} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="section-split">
        <div className="section-heading">
          <p className="eyebrow">Why Not</p>
          <h2>The exclusions are part of the recommendation.</h2>
        </div>
        <div className="exclusion-grid">
          {routeCandidates
            .filter((route) => route.status === 'Exclude' || route.status === 'Watchlist')
            .map((route) => (
              <article className="exclusion-card" key={`exclude-${route.name}`}>
                <span className={`status-pill status-${route.status.toLowerCase()}`}>{route.status}</span>
                <h3>{route.name}</h3>
                <p>{route.verdict}</p>
                <small>{route.safetyFit}</small>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

function LogisticsView() {
  return (
    <main className="content-grid top-content">
      <section className="section-split research-intro">
        <div className="section-heading">
          <p className="eyebrow">Risk Screen</p>
          <h2>Safety is a route-selection criterion, not a footnote.</h2>
        </div>
        <p>
          These notes are planning filters, not legal or medical advice. Before deposits, recheck
          official travel advice, entry rules, yellow-fever routing triggers, and malaria guidance.
        </p>
      </section>

      <section className="safety-grid">
        {safetyChecks.map((item) => (
          <article className="safety-card" key={item.route}>
            <h2>{item.route}</h2>
            <dl>
              <div>
                <dt>Main risks</dt>
                <dd>{item.risks}</dd>
              </div>
              <div>
                <dt>Mitigations</dt>
                <dd>{item.mitigations}</dd>
              </div>
              <div>
                <dt>Decision</dt>
                <dd>{item.decision}</dd>
              </div>
            </dl>
          </article>
        ))}
      </section>

      <section className="logistics-grid">
        {logistics.map((group) => (
          <article className="logistics-card" key={group.title}>
            <h2>{group.title}</h2>
            <ul className="plain-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="source-panel">
        <div>
          <p className="eyebrow">Source</p>
          <h2>{sourceReport.label}</h2>
          <p>{sourceReport.completed}</p>
        </div>
        <code>{sourceReport.path}</code>
      </section>

      <section className="compare-table-wrap">
        <div className="section-heading">
          <p className="eyebrow">Confidence</p>
          <h2>What still needs live verification.</h2>
        </div>
        <div className="table-scroll">
          <table className="planning-table source-table">
            <thead>
              <tr>
                <th>Area</th>
                <th>Confidence</th>
                <th>Evidence</th>
                <th>Next check</th>
              </tr>
            </thead>
            <tbody>
              {sourceNotes.map((note) => (
                <tr key={note.area}>
                  <td>{note.area}</td>
                  <td>
                    <span className={`status-pill confidence-${note.confidence.toLowerCase()}`}>{note.confidence}</span>
                  </td>
                  <td>{note.evidence}</td>
                  <td>{note.nextCheck}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

function App() {
  const [activeView, setActiveView] = useState<ViewId>('concepts');
  const [activeId, setActiveId] = useState<ConceptId>('namibia-victoria');
  const activeConcept = useMemo(
    () => concepts.find((concept) => concept.id === activeId) ?? concepts[0],
    [activeId],
  );

  return (
    <div className="app-shell">
      <Hero activeConcept={activeConcept} activeView={activeView} setActiveView={setActiveView} />
      {activeView === 'concepts' && <DecisionPath activeConcept={activeConcept} setActiveView={setActiveView} />}
      {activeView === 'concepts' && <ConceptPicker activeId={activeId} setActiveId={setActiveId} />}
      {activeView === 'concepts' && <DecisionSummary />}
      {activeView === 'concepts' && <ConceptDetail concept={activeConcept} />}
      {activeView === 'generator' && <ItineraryGenerator />}
      {activeView === 'costing' && <CostingView />}
      {activeView === 'tours' && <ToursView />}
      {activeView === 'compare' && <CompareView />}
      {activeView === 'logistics' && <LogisticsView />}
    </div>
  );
}

export default App;
