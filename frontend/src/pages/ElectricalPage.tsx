import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'
import PilotModal from '../PilotModal'

const SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Electrician Missed Call Recovery',
    description: 'AI-powered missed call text back service for electricians. Recover lost leads with instant SMS response, emergency call flagging, and qualified lead summaries.',
    provider: {
      '@type': 'Organization',
      name: 'Missed Call Agent',
      url: 'https://missedcallagent.com',
    },
    serviceType: 'Electrical Lead Recovery',
    areaServed: 'US',
    offers: { '@type': 'Offer', price: '199', priceCurrency: 'USD' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://missedcallagent.com' },
      { '@type': 'ListItem', position: 2, name: 'Electrical Missed Call Solution', item: 'https://missedcallagent.com/electrical-missed-call-solution' },
    ],
  },
]

export default function ElectricalPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = (e: React.MouseEvent) => { e.preventDefault(); setModalOpen(true) }

  return (
    <>
      <SEOHead
        title="Electrician Missed Call Solution — Recover Electrical Leads | Missed Call Agent"
        description="Stop losing electrical jobs to missed calls. Missed Call Agent texts back instantly when electricians miss calls, capturing residential and commercial electrical leads 24/7."
        canonical="https://missedcallagent.com/electrical-missed-call-solution"
        schema={SCHEMA}
      />

      <Nav onOpenModal={openModal} />

      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Missed Call Agent</a>
            <span aria-hidden="true">›</span>
            <span>Electrical Missed Call Solution</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="hero hero-vert">
        <div className="container">
          <div className="hero-vert-content">
            <span className="section-label">Electrical missed call solution</span>
            <h1>Never Miss an Electrical Job Lead Because You Were Busy</h1>
            <p className="lead">Electrical customers — whether they need a panel upgrade, EV charger install, or emergency repair — won't leave a detailed voicemail. If you don't respond fast, they find another electrician on Google. Missed Call Agent responds the instant you miss a call, captures the job details, and sends you a qualified lead.</p>
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
          <div className="proof-item">Electrical emergency flagging</div>
          <div className="proof-divider" />
          <div className="proof-item">Job type intake</div>
          <div className="proof-divider" />
          <div className="proof-item">Lead qualification</div>
          <div className="proof-divider" />
          <div className="proof-item">24/7 after-hours coverage</div>
        </div>
      </div>

      {/* Problem */}
      <section className="problem">
        <div className="container">
          <div>
            <span className="section-label">The problem</span>
            <h2>Electrical leads slip away while you're in the panel or on a job site.</h2>
            <p className="lead" style={{ marginTop: 16 }}>You're in a breaker panel, on a ladder, at a supply house, or finishing a commercial job when new work calls come in. Whether it's a high-value panel upgrade or an urgent electrical issue, a missed call that goes to voicemail often means the job goes to another electrician.</p>
          </div>
          <div className="stat-grid">
            <div className="stat-card"><div className="stat-num">High-value</div><div className="stat-desc">Panel upgrades, new construction wiring, and EV charger installs are jobs you can't afford to lose to voicemail.</div></div>
            <div className="stat-card"><div className="stat-num">Compete</div><div className="stat-desc">Residential and commercial customers use Google to find someone who answers — fast response wins the job.</div></div>
            <div className="stat-card"><div className="stat-num">24/7</div><div className="stat-desc">Electrical emergencies happen at any hour. After-hours calls you don't answer go to your competition.</div></div>
            <div className="stat-card"><div className="stat-num">Simple</div><div className="stat-desc">No customer app downloads. Customers respond by standard SMS — no friction, no learning curve.</div></div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto' }}>
            <span className="section-label">How it works</span>
            <h2>From missed electrical call to qualified lead</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-connector" />
              <div className="step-num">1</div>
              <h3>A customer calls about an electrical job</h3>
              <p>You're in a panel, on a ladder, on a job site, or unavailable to answer.</p>
            </div>
            <div className="step">
              <div className="step-connector" />
              <div className="step-num">2</div>
              <h3>Missed Call Agent texts back immediately</h3>
              <p>The intake captures the job type, urgency, address, and contact details — so you have context before calling back.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>You get a qualified lead summary</h3>
              <p>Know what they need — residential, commercial, emergency, or project work — before you even dial back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features-bg">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <span className="section-label">Electrical-specific features</span>
            <h2>Built for how electricians actually work</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Electrical emergency flagging</h3>
              <p>Urgent situations — no power, burning smell, sparking outlet — are flagged for immediate callback so you can prioritize the most critical leads.</p>
            </div>
            <div className="feature-card">
              <h3>Job type intake</h3>
              <p>Captures whether it's residential, commercial, new construction, or emergency work — so you can respond with the right context and give a better first impression.</p>
            </div>
            <div className="feature-card">
              <h3>Scope qualification</h3>
              <p>Collects project details during the intake so you arrive at the callback informed, helping you quote more accurately and close more work.</p>
            </div>
            <div className="feature-card">
              <h3>After-hours coverage</h3>
              <p>Electrical emergencies don't wait for business hours. Evening and weekend calls get an immediate SMS response, not voicemail.</p>
            </div>
            <div className="feature-card">
              <h3>Works with your existing number</h3>
              <p>Uses your current business number through call forwarding. No new phone number, no hardware changes, no disruption to your workflow.</p>
            </div>
            <div className="feature-card">
              <h3>Instant lead notifications</h3>
              <p>Get alerted the moment a new electrical job lead is captured — whether it's a panel upgrade inquiry or an emergency — so you can call back fast.</p>
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
            <p style={{ color: 'var(--muted)', marginTop: 12 }}>Validate that it works for your electrical business before paying a cent.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">14-Day Pilot</div>
              <div className="plan-price">Free</div>
              <div className="plan-desc">Hands-on onboarding and live testing for your electrical business.</div>
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
              <div className="plan-desc">Keep it active if the pilot proves value for your electrical business.</div>
              <ul className="plan-features">
                <li>Missed electrical call recovery</li>
                <li>Emergency call flagging</li>
                <li>Lead summary and job type routing</li>
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
            <h2>Electrical-specific questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Does it handle electrical emergencies?</h3>
              <p>Yes. Urgent situations are flagged in the lead summary — burning smells, power outages, sparking outlets — so you can prioritize callbacks on safety-critical calls.</p>
            </div>
            <div className="faq-item">
              <h3>Can it help qualify commercial vs. residential jobs?</h3>
              <p>Yes. The intake can ask about job type and scope so you have full context before calling back — helping you quote more accurately and close more work on the first call.</p>
            </div>
            <div className="faq-item">
              <h3>What if I miss a call while I'm in a panel or attic?</h3>
              <p>That's exactly what this is built for. You get a full lead summary delivered to you — name, job type, urgency, and address — so you can call back with confidence.</p>
            </div>
            <div className="faq-item">
              <h3>Do my customers need to download anything?</h3>
              <p>No. Customers reply by standard SMS. No app download, no account creation, no friction on their end.</p>
            </div>
            <div className="faq-item">
              <h3>Can I customize what it asks electrical customers?</h3>
              <p>Yes. The intake questions, first response message, and AI tone are all customizable to match your electrical business and the types of work you take on.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a long-term contract?</h3>
              <p>No. Start with a free 14-day pilot. Continue only if the pilot proves value for your electrical business. No contracts, no lock-in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-final">
        <div className="container">
          <span className="section-label" style={{ color: '#f97316' }}>Get started</span>
          <h2>Stop losing electrical jobs to missed calls.</h2>
          <p>If you run an electrical business, missed calls are costing you revenue. Test it with a free 14-day pilot.</p>
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
            <a href="/plumbing-missed-call-solution" className="audience-card solution-link-card">
              <div className="audience-emoji">🔧</div>
              <h3>Plumbing</h3>
              <p>Capture emergency plumbing leads</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <PilotModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
