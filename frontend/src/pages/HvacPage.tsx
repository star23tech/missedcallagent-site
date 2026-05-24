import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEOHead from '../components/SEOHead'
import PilotModal from '../PilotModal'

const SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HVAC Missed Call Recovery',
    description: 'AI-powered missed call text back service for HVAC businesses. Recover lost leads with instant SMS response, emergency call flagging, and qualified lead summaries.',
    provider: {
      '@type': 'Organization',
      name: 'Missed Call Agent',
      url: 'https://missedcallagent.com',
    },
    serviceType: 'HVAC Lead Recovery',
    areaServed: 'US',
    offers: { '@type': 'Offer', price: '199', priceCurrency: 'USD' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://missedcallagent.com' },
      { '@type': 'ListItem', position: 2, name: 'HVAC Missed Call Solution', item: 'https://missedcallagent.com/hvac-missed-call-solution' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does it handle emergency HVAC calls?',
        acceptedAnswer: { '@type': 'Answer', text: "Yes. The intake identifies urgency — things like 'AC not working' in summer or 'no heat' in winter — and flags emergency leads in the summary so you know which callbacks are time-critical." },
      },
      {
        '@type': 'Question',
        name: 'Can I customize it for HVAC?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can customize the first response message, follow-up questions, and AI tone. You can even set different scripts for cooling season versus heating season.' },
      },
      {
        '@type': 'Question',
        name: 'What if a customer calls after 5pm?',
        acceptedAnswer: { '@type': 'Answer', text: 'All calls are handled the same way regardless of time. The system responds immediately after-hours and you get an instant lead notification — critical for evening emergency HVAC calls.' },
      },
      {
        '@type': 'Question',
        name: 'Does this replace my receptionist?',
        acceptedAnswer: { '@type': 'Answer', text: "No. It fills the gap when you can't answer — on service calls, in attics, driving between jobs, or after hours. It's a safety net for when you're unavailable, not a full staff replacement." },
      },
      {
        '@type': 'Question',
        name: 'How does it connect to my business phone?',
        acceptedAnswer: { '@type': 'Answer', text: 'Through call forwarding. When a call goes unanswered after your specified number of rings, your carrier forwards it to the Missed Call Agent system, which handles the intake and sends you the lead.' },
      },
      {
        '@type': 'Question',
        name: 'Is there a long-term contract?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. Start with a free 14-day pilot. Continue only if the pilot proves value for your HVAC business. No contracts, no lock-in.' },
      },
    ],
  },
]

export default function HvacPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = (e: React.MouseEvent) => { e.preventDefault(); setModalOpen(true) }

  return (
    <>
      <SEOHead
        title="HVAC Missed Call Solution — Recover Every HVAC Lead | Missed Call Agent"
        description="Stop losing HVAC customers to missed calls. Missed Call Agent instantly texts back HVAC missed calls 24/7, capturing emergency AC and heating leads when you're on the job."
        canonical="https://missedcallagent.com/hvac-missed-call-solution"
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
            <span>HVAC Missed Call Solution</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="hero hero-vert">
        <div className="container">
          <div className="hero-vert-content">
            <span className="section-label">HVAC missed call solution</span>
            <h1>Never Lose an Emergency HVAC Lead to a Missed Call</h1>
            <p className="lead">HVAC customers with a broken AC in summer or dead furnace in winter aren't patient — they call the next contractor. Missed Call Agent texts back the moment you miss a call, captures the service details, and sends you a qualified HVAC lead before your competition picks up.</p>
            <div className="hero-cta">
              <button className="btn btn-primary btn-lg" onClick={openModal}>Request free 14-day pilot</button>
              <a href="#how-it-works" className="btn btn-outline btn-lg">See how it works</a>
            </div>
            <p className="hero-trust">HVAC-first pilot program · Guided onboarding · Works with your existing phone setup</p>
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <div className="proof-bar">
        <div className="container">
          <div className="proof-item">Emergency call flagging</div>
          <div className="proof-divider" />
          <div className="proof-item">Heating vs. cooling intake</div>
          <div className="proof-divider" />
          <div className="proof-item">24/7 after-hours coverage</div>
          <div className="proof-divider" />
          <div className="proof-item">Instant SMS response</div>
        </div>
      </div>

      {/* Problem */}
      <section className="problem">
        <div className="container">
          <div>
            <span className="section-label">The problem</span>
            <h2>Every unanswered HVAC call is potential revenue walking out the door.</h2>
            <p className="lead" style={{ marginTop: 16 }}>When you're on a service call, in an attic, driving between jobs, or past 5pm, HVAC calls go to voicemail. High-urgency calls — emergency AC repair, no-heat calls — represent your highest-ticket work. The customer who can't reach you doesn't wait. They dial the next HVAC contractor on Google.</p>
          </div>
          <div className="stat-grid">
            <div className="stat-card"><div className="stat-num">Urgent</div><div className="stat-desc">Emergency AC and no-heat calls are your highest-value jobs — and your most impatient callers.</div></div>
            <div className="stat-card"><div className="stat-num">Seasonal</div><div className="stat-desc">Summer and winter peak call volume spikes beyond what any solo operator can answer alone.</div></div>
            <div className="stat-card"><div className="stat-num">24/7</div><div className="stat-desc">After-hours HVAC emergencies come with premium rates — don't lose them to voicemail.</div></div>
            <div className="stat-card"><div className="stat-num">Speed</div><div className="stat-desc">HVAC customers in discomfort call multiple contractors — first to respond wins the job.</div></div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto' }}>
            <span className="section-label">How it works</span>
            <h2>From missed HVAC call to qualified lead</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-connector" />
              <div className="step-num">1</div>
              <h3>A customer calls about their HVAC</h3>
              <p>You're on a service call, in an attic, driving between jobs, or unavailable after hours.</p>
            </div>
            <div className="step">
              <div className="step-connector" />
              <div className="step-num">2</div>
              <h3>An instant SMS starts the intake</h3>
              <p>The customer gets a text immediately. The conversation captures their heating or cooling issue, urgency level, and service address.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>You get the qualified lead</h3>
              <p>Name, address, service type, and urgency — flagged if it's an emergency — sent to you the moment the intake completes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features-bg">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <span className="section-label">HVAC-specific features</span>
            <h2>Built for how HVAC technicians actually work</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Emergency call flagging</h3>
              <p>AC emergencies and no-heat calls are identified as urgent so you know which leads need same-day callback before others.</p>
            </div>
            <div className="feature-card">
              <h3>Heating vs. cooling triage</h3>
              <p>The intake captures whether it's an AC issue, heating problem, or routine maintenance — so you arrive at the callback fully prepared.</p>
            </div>
            <div className="feature-card">
              <h3>After-hours coverage</h3>
              <p>HVAC emergencies don't respect business hours. Evening and weekend calls get the same immediate SMS response as weekday calls.</p>
            </div>
            <div className="feature-card">
              <h3>Peak season handling</h3>
              <p>Summer AC demand and winter heating calls spike beyond what any solo operator can handle. Every call gets a response, every time.</p>
            </div>
            <div className="feature-card">
              <h3>Works with your phone setup</h3>
              <p>Uses your existing business number through call forwarding. No new phone number, no hardware, no system change required.</p>
            </div>
            <div className="feature-card">
              <h3>Instant lead notifications</h3>
              <p>Get alerted the moment an HVAC lead is captured so you can prioritize callbacks and never let a hot lead go cold.</p>
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
            <p style={{ color: 'var(--muted)', marginTop: 12 }}>Validate that it works for your HVAC business before paying a cent.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">14-Day Pilot</div>
              <div className="plan-price">Free</div>
              <div className="plan-desc">Hands-on onboarding and live testing for your HVAC business.</div>
              <ul className="plan-features">
                <li>Guided HVAC call forwarding setup</li>
                <li>Phone setup compatibility review</li>
                <li>Live missed call test</li>
                <li>Direct founder support</li>
              </ul>
              <button className="btn btn-outline btn-full" onClick={openModal}>Request free pilot</button>
            </div>
            <div className="pricing-card featured">
              <div className="plan-name">After Pilot</div>
              <div className="plan-price"><sup>$</sup>199<sub>/mo</sub></div>
              <div className="plan-desc">Keep it active if the pilot proves value for your HVAC business.</div>
              <ul className="plan-features">
                <li>Missed HVAC call recovery</li>
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
            <h2>HVAC-specific questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Does it handle emergency HVAC calls?</h3>
              <p>Yes. The intake identifies urgency — things like "AC not working" in summer or "no heat" in winter — and flags emergency leads in the summary so you know which callbacks are time-critical.</p>
            </div>
            <div className="faq-item">
              <h3>Can I customize it for HVAC?</h3>
              <p>Yes. You can customize the first response message, follow-up questions, and AI tone. You can even set different scripts for cooling season versus heating season.</p>
            </div>
            <div className="faq-item">
              <h3>What if a customer calls after 5pm?</h3>
              <p>All calls are handled the same way regardless of time. The system responds immediately after-hours and you get an instant lead notification — critical for evening emergency HVAC calls.</p>
            </div>
            <div className="faq-item">
              <h3>Does this replace my receptionist?</h3>
              <p>No. It fills the gap when you can't answer — on service calls, in attics, driving between jobs, or after hours. It's a safety net for when you're unavailable, not a full staff replacement.</p>
            </div>
            <div className="faq-item">
              <h3>How does it connect to my business phone?</h3>
              <p>Through call forwarding. When a call goes unanswered after your specified number of rings, your carrier forwards it to the Missed Call Agent system, which handles the intake and sends you the lead.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a long-term contract?</h3>
              <p>No. Start with a free 14-day pilot. Continue only if the pilot proves value for your HVAC business. No contracts, no lock-in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-final">
        <div className="container">
          <span className="section-label" style={{ color: '#f97316' }}>Get started</span>
          <h2>Stop losing HVAC jobs to missed calls.</h2>
          <p>If you run an HVAC business, missed calls are costing you revenue. Test it with a free 14-day pilot.</p>
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
            <a href="/plumbing-missed-call-solution" className="audience-card solution-link-card">
              <div className="audience-emoji">🔧</div>
              <h3>Plumbing</h3>
              <p>Recover emergency plumbing leads</p>
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
