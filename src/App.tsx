import { useMemo, useState } from 'react';
import './App.css';
import { concepts, logistics, sourceReport, tripBrief, type ConceptId, type ItineraryConcept, type ScoreKey } from './data';

const scoreKeys: ScoreKey[] = ['Budget', 'Ease', 'Culture', 'Nature', 'Romance'];

function formatCurrency(value: number) {
  return `NZ$${value.toLocaleString('en-NZ')}`;
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

function Hero({
  activeConcept,
  activeView,
  setActiveView,
}: {
  activeConcept: ItineraryConcept;
  activeView: string;
  setActiveView: (view: 'concepts' | 'compare' | 'logistics') => void;
}) {
  return (
    <header className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(20, 24, 18, 0.9), rgba(20, 24, 18, 0.44)), url(${activeConcept.image})` }}>
      <nav className="topbar" aria-label="Trip views">
        <span className="brand">OC Travel Desk</span>
        <div className="view-tabs">
          {[
            ['concepts', 'Concepts'],
            ['compare', 'Compare'],
            ['logistics', 'Logistics'],
          ].map(([id, label]) => (
            <button
              key={id}
              className={activeView === id ? 'is-active' : ''}
              onClick={() => setActiveView(id as 'concepts' | 'compare' | 'logistics')}
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
        <div className="hero-metrics" aria-label="Trip constraints">
          <span>{tripBrief.budget}</span>
          <span>{tripBrief.avios}</span>
          <span>Safari capped at 3-4 days</span>
          <span>No South Africa or beach towns</span>
        </div>
      </div>
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
            <small>{concept.label}</small>
            <strong>{concept.title}</strong>
            <em>{concept.pairing}</em>
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

function BudgetBreakdown({ concept }: { concept: ItineraryConcept }) {
  const total = concept.budget.reduce((sum, item) => sum + item.amount, 0);

  return (
    <section className="budget-panel">
      <div className="section-heading">
        <p className="eyebrow">Budget model</p>
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
    <section>
      <div className="section-heading">
        <p className="eyebrow">Flow</p>
        <h2>{concept.duration}</h2>
      </div>
      <ol className="timeline">
        {concept.timeline.map((item) => (
          <li key={`${concept.id}-${item.days}`}>
            <span>{item.days}</span>
            <div>
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

function ConceptDetail({ concept }: { concept: ItineraryConcept }) {
  return (
    <main className="content-grid">
      <section className="feature-panel">
        <div className="feature-copy">
          <p className="eyebrow">{concept.pairing}</p>
          <h2>{concept.title}</h2>
          <p>{concept.summary}</p>
          <RouteLine route={concept.route} />
        </div>
        <img src={concept.image} alt={`${concept.pairing} itinerary landscape`} />
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
          <span>Best for</span>
          <strong>{concept.idealFor}</strong>
        </article>
      </section>

      <section className="two-column">
        <Timeline concept={concept} />
        <BudgetBreakdown concept={concept} />
      </section>

      <section className="two-column">
        <div className="decision-panel">
          <div className="section-heading">
            <p className="eyebrow">Decision signal</p>
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
            <p className="eyebrow">Planning checks</p>
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
          <p className="eyebrow">Asset use</p>
          <h2>Points and memberships</h2>
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

function CompareView() {
  const maxBudget = Math.max(...concepts.map((concept) => concept.costMax));

  return (
    <main className="content-grid">
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
              <th>Safari base</th>
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
                <td>{concept.safariBase}</td>
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
    <main className="content-grid">
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
  const [activeView, setActiveView] = useState<'concepts' | 'compare' | 'logistics'>('concepts');
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
      {activeView === 'compare' && <CompareView />}
      {activeView === 'logistics' && <LogisticsView />}
    </div>
  );
}

export default App;
