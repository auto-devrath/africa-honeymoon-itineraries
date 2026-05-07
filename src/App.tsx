import { useMemo, useState } from 'react';
import './App.css';
import {
  concepts,
  logistics,
  sourceReport,
  tripBrief,
  type ConceptId,
  type ItineraryConcept,
  type ScoreKey,
  type Tour,
} from './data';

const scoreKeys: ScoreKey[] = ['Budget', 'Ease', 'Culture', 'Nature', 'Romance'];

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
  setActiveView: (view: 'concepts' | 'tours' | 'compare' | 'logistics') => void;
}) {
  return (
    <header
      className="hero"
      style={{
        backgroundImage: `linear-gradient(105deg, rgba(5, 8, 11, 0.78), rgba(5, 8, 11, 0.42) 42%, rgba(5, 8, 11, 0.06)), url(${activeConcept.image})`,
      }}
    >
      <nav className="topbar" aria-label="Trip views">
        <button className="brand" type="button" onClick={() => setActiveView('concepts')}>
          <span>OC</span>
          <strong>Travel Studio</strong>
        </button>
        <div className="view-tabs">
          {[
            ['concepts', 'Plan'],
            ['tours', 'Tours'],
            ['compare', 'Compare'],
            ['logistics', 'Logistics'],
          ].map(([id, label]) => (
            <button
              key={id}
              className={activeView === id ? 'is-active' : ''}
              onClick={() => setActiveView(id as 'concepts' | 'tours' | 'compare' | 'logistics')}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      <div className="hero-content">
        <p className="eyebrow">{tripBrief.timing} from {tripBrief.origin}</p>
        <h1>{tripBrief.title}</h1>
        <p className="hero-copy">{tripBrief.subtitle}</p>
        <div className="hero-actions">
          <button type="button" onClick={() => setActiveView('tours')}>
            Browse independent tours
          </button>
          <button type="button" className="ghost" onClick={() => setActiveView('compare')}>
            Compare routes
          </button>
        </div>
      </div>

      <aside className="hero-card" aria-label="Active itinerary">
        <p>{activeConcept.label}</p>
        <h2>{activeConcept.title}</h2>
        <span>{activeConcept.pairing}</span>
        <small>{activeConcept.mood}</small>
      </aside>
    </header>
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
    <section className="concept-strip" aria-label="Itinerary concepts">
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

function Timeline({ concept }: { concept: ItineraryConcept }) {
  return (
    <section className="timeline-panel">
      <div className="section-heading">
        <p className="eyebrow">Day By Day</p>
        <h2>{concept.duration}</h2>
      </div>
      <ol className="timeline">
        {concept.timeline.map((item) => (
          <li key={`${concept.id}-${item.days}`}>
            <span>{item.days}</span>
            <div>
              <small>{item.focus}</small>
              <h3>{item.title}</h3>
              <strong>{item.base}</strong>
              <p>{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="tour-card">
      <div>
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
        Open {tour.source}
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
          <p>{concept.summary}</p>
          <p>{concept.headlineDetail}</p>
          <RouteLine route={concept.route} />
        </div>
        <Gallery concept={concept} />
      </section>

      <section className="fact-grid" aria-label="Selected concept facts">
        <article>
          <span>Cost</span>
          <strong>{concept.costLabel}</strong>
        </article>
        <article>
          <span>Transit</span>
          <strong>{concept.transit}</strong>
        </article>
        <article>
          <span>Safari</span>
          <strong>{concept.safariDays}</strong>
        </article>
        <article>
          <span>Best For</span>
          <strong>{concept.idealFor}</strong>
        </article>
      </section>

      <section className="two-column">
        <Timeline concept={concept} />
        <BudgetBreakdown concept={concept} />
      </section>

      <section className="section-split">
        <div className="section-heading">
          <p className="eyebrow">Independent Booking Layer</p>
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
          <p className="eyebrow">Points And Memberships</p>
          <h2>Use the assets where they are actually useful.</h2>
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

function ToursView() {
  return (
    <main className="content-grid">
      <section className="section-split top-section">
        <div className="section-heading">
          <p className="eyebrow">Vetted Tour Shortlist</p>
          <h2>Independent pieces to book around the itinerary.</h2>
        </div>
        <p>
          These are not big package tours. They are modular experiences you can use to build the honeymoon yourselves:
          Egyptologist days, food walks, desert guides, Falls experiences, and one compact safari layer.
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
          <p className="eyebrow">Shortlist</p>
          <h2>Itinerary Matrix</h2>
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
  const [activeView, setActiveView] = useState<'concepts' | 'tours' | 'compare' | 'logistics'>('concepts');
  const [activeId, setActiveId] = useState<ConceptId>('namibia-victoria');
  const activeConcept = useMemo(
    () => concepts.find((concept) => concept.id === activeId) ?? concepts[0],
    [activeId],
  );

  return (
    <div className="app-shell">
      <Hero activeConcept={activeConcept} activeView={activeView} setActiveView={setActiveView} />
      {activeView === 'concepts' && <ConceptPicker activeId={activeId} setActiveId={setActiveId} />}
      {activeView === 'concepts' && <ConceptDetail concept={activeConcept} />}
      {activeView === 'tours' && <ToursView />}
      {activeView === 'compare' && <CompareView />}
      {activeView === 'logistics' && <LogisticsView />}
    </div>
  );
}

export default App;
