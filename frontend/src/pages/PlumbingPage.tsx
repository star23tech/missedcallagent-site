import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'
import PilotModal from '../PilotModal'

const SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Plumbing Missed Call Recovery',
    description: 'AI-powered missed call text back service for plumbing businesses. Recover lost leads with instant SMS response, emergency call flagging, and qualified lead summaries.',
    provider: {
      '@type': 'Organization',
      name: 'Missed Call Agent',
      url: 'https://missedcallagent.com',
    },
    serviceType: 'Plumbing Lead Recovery',
    areaServed: 'US',
    offers: { '@type': 'Offer', price: '199', priceCurrency: 'USD' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://missedcallagent.com' },
      { '@type': 'ListItem', position: 2, name: 'Plumbing Missed Call Solution', item: 'https://missedcallagent.com/plumbing-missed-call-solution' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does it work for emergency plumbing calls?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. The intake identifies urgency — active leaks, flooding, no hot water — and flags emergency leads in the summary so you know which callbacks are most time-sensitive.' },
      },
      {
        '@type': 'Question',
        name: 'Will it capture the service address?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. The intake conversation asks for the service address and captures it as part of the lead summary — so you have everything you need to dispatch immediately on emergency jobs.' },
      },
      {
        '@type': 'Question',
        name: "What if it's a burst pipe at 2am?",
        acceptedAnswer: { '@type': 'Answer', text: 'All calls are handled the same way around the clock. The system responds immediately and you get an instant lead notification — critical for capturing high-value overnight emergency calls.' },
      },
      {
        '@type': 'Question',
        name: 'Do I need to change my phone number?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. You use your existing business number through call forwarding configuration. No changes to your phone setup, no new number for customers to learn.' },
      },
      {
        '@type': 'Question',
        name: 'Can I customize what it asks plumbing customers?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. The intake questions, first response message, and AI tone are all customizable to match how your plumbing business operates.' },
      },
      {
        '@type': 'Question',
        name: 'Is there a long-term contract?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. Start with a free 14-day pilot. Continue only if the pilot proves value for your plumbing business. No contracts, no lock-in.' },
      },
    ],
  },
]

export default function PlumbingPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = (e: React.MouseEvent) => { e.preventDefault(); setModalOpen(true) }

  return (
    <>
      <SEOHead
        title="Plumbing Missed Call Solution — Capture Every Plumbing Lead | Missed Call Agent"
        description="Stop losing plumbing customers when you're on a job or under a sink. Missed Call Agent texts back missed calls instantly, capturing emergency plumbing leads 24/7."
        canonical="https://missedcallagent.com/plumbing-missed-call-solution"
        schema={SCHEMA}
        ogImage="https://missedcallagent.com/og-image.png"
      />

      <Nav onOpenModal={openModal} />

      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Missed Call Agent</a>
            <span aria-hidden="true">›</span>
            <span>Plumbing Missed Call Solution</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="hero hero-vert">
        <div className="container">
          <div className="hero-vert-content">
            <span className="section-label">Plumbing missed call solution</span>
            <h1>Never Lose an Emergency Plumbing Lead to a Missed Call</h1>
            <p className="lead">When a customer has a burst pipe, flooding basement, or backed-up sewer, they're calling multiple plumbers. Whoever responds first gets the job. Missed Call Agent texts back the instant you miss a call — capturing the emergency details and the lead before another plumber answers.</p>
            <div className="hero-cta">
              <button className="btn btn-primary btn-lg" onClick={openModal}>Request free 14-day pilot</button>
              <a href="#how-it-works" className="btn btn-outline btn-lg">See how it works</a>
            </div>
            <p className="hero-trust">Free 14-day pilot · Guided onboarding · Works with your existing phone setup</p>
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <div className="proof-bar">
        <div className="container">
          <div className="proof-item">Emergency call flagging</div>
          <div className="proof-divider" />
          <div className="proof-item">Issue type intake</div>
          <div className="proof-divider" />
          <div className="proof-item">Address capture</div>
          <div className="proof-divider" />
          <div className="proof-item">24/7 after-hours coverage</div>
        </div>
      </div>

      {/* Problem */}
      <section className="problem">
        <div className="container">
          <div>
            <span className="section-label">The problem</span>
            <h2>Plumbing emergencies go to whoever answers first.</h2>
            <p className="lead" style={{ marginTop: 16 }}>You're under a sink, in a crawlspace, on a supply run, or finishing a job when emergency calls come in. Burst pipes, flooding, water heater failures — your highest-ticket work — go to your competition if you don't respond within minutes. Voicemail is not fast enough.</p>
          </div>
          <div className="stat-grid">
            <div className="stat-card"><div className="stat-num">Urgent</div><div className="stat-desc">Burst pipes and active flooding are your highest-value jobs — and your most time-sensitive callers.</div></div>
            <div className="stat-card"><div className="stat-num">Compete</div><div className="stat-desc">Customers with water running call 2–3 plumbers. First to respond wins the job.</div></div>
            <div className="stat-card"><div className="stat-num">24/7</div><div className="stat-desc">Weekend and overnight plumbing emergencies carry premium rates — don't lose them to voicemail.</div></div>
            <div className="stat-card"><div className="stat-num">Simple</div><div className="stat-desc">No customer app downloads required. Customers respond by standard SMS.</div></div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto' }}>
            <span className="section-label">How it works</span>
            <h2>From missed plumbing call to qualified lead</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-connector" />
              <div className="step-num">1</div>
              <h3>A customer calls about a plumbing issue</h3>
              <p>You're in a crawlspace, finishing a job, on a supply run, or unavailable.</p>
            </div>
            <div className="step">
              <div className="step-connector" />
              <div className="step-num">2</div>
              <h3>An instant SMS engages the customer</h3>
              <p>The intake conversation captures what's happening, urgency level, and service address — before they call your competitor.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>You get the lead instantly</h3>
              <p>Name, address, issue type, and urgency flagged — enough context to call back fast and win the job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features-bg">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <span className="section-label">Plumbing-specific features</span>
            <h2>Built for how plumbers actually work</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Emergency call flagging</h3>
              <p>Burst pipes, active flooding, and water heater failures are flagged as urgent so you can prioritize callbacks on your highest-value jobs.</p>
            </div>
            <div className="feature-card">
              <h3>Issue type intake</h3>
              <p>Captures whether it's a leak, drain, water heater, pipe repair, or other issue — so you know exactly what you're walking into before you call back.</p>
            </div>
            <div className="feature-card">
              <h3>Address capture</h3>
              <p>Gets the service address automatically during the intake — critical for dispatching quickly on emergency calls where every minute counts.</p>
            </div>
            <div className="feature-card">
              <h3>After-hours emergency coverage</h3>
              <p>Weekend floods and midnight pipe bursts get an immediate response, not voicemail. Capture the after-hours emergency rates you'd otherwise lose.</p>
            </div>
            <div className="feature-card">
              <h3>Works with your existing number</h3>
              <p>Uses your current business number through call forwarding. No new phone number, no hardware, no changes to your workflow.</p>
            </div>
            <div className="feature-card">
              <h3>Instant lead notifications</h3>
              <p>Get alerted the moment a plumbing lead is captured so you can call back immediately and secure the job before a competitor does.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot */}
      <section id="pilot" className="pricing">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <span className="section-label">Pilot program</span>
            <h2>Try it free for 14 days</h2>
            <p style={{ color: 'var(--muted)', marginTop: 12 }}>Validate that it works for your plumbing business before paying a cent.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">14-Day Pilot</div>
              <div className="plan-price">Free</div>
              <div className="plan-desc">Hands-on onboarding and live testing for your plumbing business.</div>
              <ul className="plan-features">
                <li>Guided call forwarding setup</li>
                <li>Phone setup compatibility review</li>
                <li>Live missed call test</li>
                <li>Direct founder support</li>
              </ul>
              <button className="btn btn-outline btn-full" onClick={openModal}>Request free pilot</button>
            </div>
            <div className="pricing-card featured">
              <div className="plan-name">After Pilot</div>
              <div className="plan-price"><sup>$</sup>199<sub>/mo</sub></div>
              <div className="plan-desc">Keep it active if the pilot proves value for your plumbing business.</div>
              <ul className="plan-features">
                <li>Missed plumbing call recovery</li>
                <li>Emergency call flagging</li>
                <li>Lead summary and urgency routing</li>
                <li>Early pilot pricing may be available</li>
              </ul>
              <button className="btn btn-primary btn-full" onClick={openModal}>Request free pilot</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <span className="section-label">FAQ</span>
            <h2>Plumbing-specific questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Does it work for emergency plumbing calls?</h3>
              <p>Yes. The intake identifies urgency — active leaks, flooding, no hot water — and flags emergency leads in the summary so you know which callbacks are most time-sensitive.</p>
            </div>
            <div className="faq-item">
              <h3>Will it capture the service address?</h3>
              <p>Yes. The intake conversation asks for the service address and captures it as part of the lead summary — so you have everything you need to dispatch immediately on emergency jobs.</p>
            </div>
            <div className="faq-item">
              <h3>What if it's a burst pipe at 2am?</h3>
              <p>All calls are handled the same way around the clock. The system responds immediately and you get an instant lead notification — critical for capturing high-value overnight emergency calls.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need to change my phone number?</h3>
              <p>No. You use your existing business number through call forwarding configuration. No changes to your phone setup, no new number for customers to learn.</p>
            </div>
            <div className="faq-item">
              <h3>Can I customize what it asks plumbing customers?</h3>
              <p>Yes. The intake questions, first response message, and AI tone are all customizable to match how your plumbing business operates.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a long-term contract?</h3>
              <p>No. Start with a free 14-day pilot. Continue only if the pilot proves value for your plumbing business. No contracts, no lock-in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-final">
        <div className="container">
          <span className="section-label" style={{ color: '#f97316' }}>Get started</span>
          <h2>Stop losing plumbing jobs to missed calls.</h2>
          <p>If you run a plumbing business, missed calls are costing you revenue. Test it with a free 14-day pilot.</p>
          <button className="btn btn-primary" onClick={openModal}>Request free pilot</button>
        </div>
      </section>

      {/* Other solutions */}
      <section className="other-solutions">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <span className="section-label">Also available for</span>
            <h2>Missed call solutions for other trades</h2>
          </div>
          <div className="other-solutions-grid">
            <a href="/hvac-missed-call-solution" className="audience-card solution-link-card">
              <div className="audience-emoji">❄️</div>
              <h3>HVAC</h3>
              <p>Recover emergency HVAC leads</p>
            </a>
            <a href="/electrical-missed-call-solution" className="audience-card solution-link-card">
              <div className="audience-emoji">⚡</div>
              <h3>Electrical</h3>
              <p>Capture electrical job leads</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <PilotModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
