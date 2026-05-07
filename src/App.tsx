import { useMemo, useState } from 'react';
import './App.css';
import {
  concepts,
  costResearch,
  logistics,
  sourceReport,
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
    { label: 'Flights', value: 'NZ$1.1k-1.6k', note: 'Avios for outer legs; pay Cairo-Nairobi bridge', tone: 'flight' },
    { label: 'Accommodation', value: 'NZ$2.4k-3.2k', note: 'Cairo, Luxor, Nairobi, 3-night Mara lodge share', tone: 'stay' },
    { label: 'Safari', value: 'NZ$3.7k-4.8k', note: '3-4 days Mara, fees, meals, drives, transfer', tone: 'safari' },
    { label: 'Private guides', value: 'NZ$1.0k-1.5k', note: 'Giza, Saqqara, Luxor West Bank, Karnak', tone: 'tour' },
    { label: 'Visas + health', value: 'NZ$250-450', note: 'Egypt, Kenya eTA, malaria clinic buffer', tone: 'admin' },
    { label: 'Honeymoon buffer', value: 'NZ$800-1.1k', note: 'Spa, rooftops, tips, delay cushion', tone: 'buffer' },
  ],
  'namibia-victoria': [
    { label: 'Flights', value: 'NZ$1.3k-1.9k', note: 'UK-Windhoek/Falls routing; Avios if Qatar space works', tone: 'flight' },
    { label: 'Accommodation', value: 'NZ$3.0k-4.0k', note: 'Windhoek, desert lodge, coast, Victoria Falls base', tone: 'stay' },
    { label: 'Safari', value: 'NZ$350-900', note: 'Chobe day trip or light Zambezi wildlife layer', tone: 'safari' },
    { label: 'Experiences', value: 'NZ$1.5k-2.4k', note: 'Sossusvlei, Sandwich Harbour, helicopter/balloon choice', tone: 'tour' },
    { label: 'Transfers', value: 'NZ$1.2k-2.0k', note: 'Guided desert/coast movement to avoid tired self-drive', tone: 'admin' },
    { label: 'Honeymoon buffer', value: 'NZ$900-1.3k', note: 'Tips, visas, better dinners, FX movement', tone: 'buffer' },
  ],
  'egypt-victoria': [
    { label: 'Flights', value: 'NZ$2.2k-3.0k', note: 'Hardest bridge: Egypt to Falls needs protection', tone: 'flight' },
    { label: 'Accommodation', value: 'NZ$3.1k-4.1k', note: 'Egypt city stays plus romantic Falls base', tone: 'stay' },
    { label: 'Safari', value: 'NZ$350-900', note: 'Chobe day only; no lodge-heavy safari block', tone: 'safari' },
    { label: 'Private guides', value: 'NZ$1.2k-1.8k', note: 'Egyptologist days plus Falls guiding', tone: 'tour' },
    { label: 'Falls add-ons', value: 'NZ$1.2k-1.9k', note: 'Devil’s Pool, helicopter, cruise, park fees', tone: 'tour' },
    { label: 'Admin + buffer', value: 'NZ$1.0k-1.5k', note: 'Visas, health, tips, missed-connection cushion', tone: 'buffer' },
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
        backgroundImage: 'linear-gradient(105deg, rgba(5, 8, 11, 0.8), rgba(5, 8, 11, 0.4) 46%, rgba(5, 8, 11, 0.04)), url(./generated/africa-honeymoon-hero.png)',
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
          Start with the three realistic Africa routes, pick the one that fits your honeymoon
          style, then use the same page to cost it, book the key pieces, and sanity-check logistics.
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
        <p>Current frontrunner</p>
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
      body: 'Compare the three contenders by emotion, cost, transit risk, and honeymoon payoff.',
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
          The goal is to end with one route you both trust. Right now the working frontrunner is
          <strong> {activeConcept.pairing}</strong>, because it best balances wonder, budget, and
          the safari cap.
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
          Selecting a route updates the day-by-day plan, cost model, watchouts, membership strategy,
          and bookable tour shortlist below.
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
        if (budget === 'target') score += concept.costMax <= 10800 ? 2800 : 1200;
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
            <p className="eyebrow">Best Match</p>
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
    </main>
  );
}

function LogisticsView() {
  return (
    <main className="content-grid top-content">
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
