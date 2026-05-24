import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SEOHead from './components/SEOHead'
import PilotModal from './PilotModal'

const SCHEMA = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Missed Call Agent',
    url: 'https://missedcallagent.com',
    description: 'AI-powered missed call text back service for home service businesses',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Missed Call Agent',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    description: 'Missed Call Agent instantly texts back missed calls for HVAC, plumbing, and electrical businesses. Capture qualified leads 24/7 with AI-powered SMS intake.',
    url: 'https://missedcallagent.com',
    offers: {
      '@type': 'Offer',
      price: '199',
      priceCurrency: 'USD',
    },
  },
]

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault()
    setModalOpen(true)
  }

  return (
    <>
      <SEOHead
        title="Missed Call Agent — AI Missed Call Text Back for Home Service Businesses"
        description="Missed Call Agent instantly texts back missed calls for HVAC, plumbing, and electrical businesses. Capture qualified leads 24/7 with AI-powered SMS intake."
        canonical="https://missedcallagent.com/"
        schema={SCHEMA}
      />

      <Nav onOpenModal={openModal} />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Stop Losing Home Service Leads to Missed Calls</h1>
            <p className="lead">Built for home service businesses where the owner is on jobs, with customers, or unavailable when the phone rings. When you miss a call, Missed Call Agent texts back immediately, gathers the job details, and sends you a qualified lead summary.</p>
            <div className="hero-cta">
              <button className="btn btn-primary btn-lg" onClick={openModal}>Request free 14-day pilot</button>
              <a href="#how-it-works" className="btn btn-outline btn-lg">See how it works</a>
            </div>
            <p className="hero-trust">HVAC-first pilot program · Guided onboarding · Existing phone setup compatibility review</p>
          </div>
          <div className="sms-mockup">
            <div className="mockup-header">
              <div className="mockup-avatar">❄️</div>
              <div>
                <div className="mockup-name">Rapid Air Heating &amp; Cooling</div>
                <div className="mockup-sub">● Responded instantly</div>
              </div>
            </div>
            <div className="bubbles">
              <div className="bubble bubble-out">Sorry we missed your call. Is this for heating, cooling, or another service issue?</div>
              <div className="bubble-time">Sent automatically · just now</div>
              <div className="bubble bubble-in">AC stopped working and it's getting hot.</div>
              <div className="bubble bubble-out">Understood. Is this urgent, and what address would service be needed at?</div>
              <div className="bubble bubble-in">Yes. 412 Maplewood Dr.</div>
              <div className="bubble bubble-out">Thanks. What's your name and best callback number? We'll alert the owner immediately.</div>
            </div>
            <div className="badge-urgent">High-priority HVAC lead captured</div>
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <div className="proof-bar">
        <div className="container">
          <div className="proof-item">Immediate SMS response</div>
          <div className="proof-divider" />
          <div className="proof-item">Structured lead capture</div>
          <div className="proof-divider" />
          <div className="proof-item">Urgency flagging</div>
          <div className="proof-divider" />
          <div className="proof-item">After-hours coverage</div>
        </div>
      </div>

      {/* Problem */}
      <section className="problem">
        <div className="container">
          <div>
            <span className="section-label">The problem</span>
            <h2>Voicemail loses revenue.</h2>
            <p className="lead" style={{ marginTop: 16 }}>Home service customers often call the next provider when nobody answers. If you're in an attic, on a roof, in a crawlspace, driving, or with another customer, that lead can disappear unless someone responds fast.</p>
          </div>
          <div className="stat-grid">
            <div className="stat-card"><div className="stat-num">Missed</div><div className="stat-desc">Calls during jobs become lost opportunities.</div></div>
            <div className="stat-card"><div className="stat-num">Fast</div><div className="stat-desc">Speed-to-response matters for high-intent service calls.</div></div>
            <div className="stat-card"><div className="stat-num">24/7</div><div className="stat-desc">Capture after-hours inquiries while you sleep.</div></div>
            <div className="stat-card"><div className="stat-num">Simple</div><div className="stat-desc">No customer app downloads required.</div></div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto' }}>
            <span className="section-label">How it works</span>
            <h2>From missed call to qualified lead</h2>
          </div>
          <div className="steps">
            <div className="step"><div className="step-connector" /><div className="step-num">1</div><h3>You miss the call</h3><p>You're working, driving, after-hours, or unavailable.</p></div>
            <div className="step"><div className="step-connector" /><div className="step-num">2</div><h3>The customer gets a text</h3><p>The system starts a simple intake conversation tailored to your business.</p></div>
            <div className="step"><div className="step-num">3</div><h3>You get the lead details</h3><p>Name, issue, address, urgency, and callback context are sent to you fast.</p></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features-bg">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <span className="section-label">Features</span>
            <h2>Everything you need to recover missed leads</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card"><h3>Instant auto-response</h3><p>A professional SMS goes out within seconds of a missed call — before the customer calls the next provider.</p></div>
            <div className="feature-card"><h3>AI intake conversation</h3><p>The system asks simple follow-up questions to capture the job details your team needs.</p></div>
            <div className="feature-card"><h3>Urgency scoring</h3><p>Emergency calls are flagged so you know which leads need immediate attention.</p></div>
            <div className="feature-card"><h3>Lead summaries</h3><p>Get structured details including customer name, issue, address, and callback context.</p></div>
            <div className="feature-card"><h3>Works with your phone setup</h3><p>Uses your existing business number through call forwarding configuration.</p></div>
            <div className="feature-card"><h3>Owner alerts</h3><p>Get notified when a new lead is captured so you can respond quickly.</p></div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="audience">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <span className="section-label">Best fit</span>
            <h2>For small shops where the owner still answers the phone</h2>
          </div>
          <div className="audience-grid">
            <div className="audience-card"><div className="audience-emoji">❄️</div><h3>HVAC</h3></div>
            <div className="audience-card"><div className="audience-emoji">🔧</div><h3>Plumbing</h3></div>
            <div className="audience-card"><div className="audience-emoji">⚡</div><h3>Electrical</h3></div>
            <div className="audience-card"><div className="audience-emoji">🏠</div><h3>Garage Door</h3></div>
            <div className="audience-card"><div className="audience-emoji">🔐</div><h3>Locksmith</h3></div>
            <div className="audience-card"><div className="audience-emoji">🧰</div><h3>Appliance Repair</h3></div>
            <div className="audience-card"><div className="audience-emoji">🐜</div><h3>Pest Control</h3></div>
            <div className="audience-card"><div className="audience-emoji">🎨</div><h3>Painting</h3></div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="industry-solutions">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <span className="section-label">Industry solutions</span>
            <h2>Purpose-built for your trade</h2>
            <p className="lead" style={{ marginTop: 16 }}>See how Missed Call Agent works specifically for your business type.</p>
          </div>
          <div className="features-grid" style={{ marginTop: 48 }}>
            <a href="/hvac-missed-call-solution" className="feature-card solution-card">
              <div className="solution-emoji">❄️</div>
              <h3>HVAC Missed Call Solution</h3>
              <p>Emergency AC and heating calls can't wait. Capture every high-urgency HVAC lead, even when you're on a job or in an attic.</p>
              <span className="solution-link">Learn more →</span>
            </a>
            <a href="/plumbing-missed-call-solution" className="feature-card solution-card">
              <div className="solution-emoji">🔧</div>
              <h3>Plumbing Missed Call Solution</h3>
              <p>Burst pipes and flooding emergencies need fast response. Never lose a high-ticket plumbing job to voicemail again.</p>
              <span className="solution-link">Learn more →</span>
            </a>
            <a href="/electrical-missed-call-solution" className="feature-card solution-card">
              <div className="solution-emoji">⚡</div>
              <h3>Electrical Missed Call Solution</h3>
              <p>Panel upgrades, new construction, and electrical emergencies. Capture every lead while you're on the job site.</p>
              <span className="solution-link">Learn more →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing / Pilot */}
      <section id="pilot" className="pricing">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <span className="section-label">Pilot program</span>
            <h2>Simple founder-led pilot</h2>
            <p style={{ color: 'var(--muted)', marginTop: 12 }}>No bloated SaaS tiers. Validate value first.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-name">14-Day Pilot</div>
              <div className="plan-price">Free</div>
              <div className="plan-desc">Hands-on onboarding and live testing.</div>
              <ul className="plan-features">
                <li>Guided setup</li>
                <li>Phone setup compatibility review</li>
                <li>Live missed call test</li>
                <li>Direct founder support</li>
              </ul>
              <button className="btn btn-outline btn-full" onClick={openModal}>Request free pilot</button>
            </div>
            <div className="pricing-card featured">
              <div className="plan-name">After Pilot</div>
              <div className="plan-price"><sup>$</sup>199<sub>/mo</sub></div>
              <div className="plan-desc">Keep it active if the pilot proves value.</div>
              <ul className="plan-features">
                <li>Missed call recovery</li>
                <li>SMS intake conversation</li>
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
            <h2>Common questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item"><h3>How does it connect to my phone number?</h3><p>Missed Call Agent works with your existing business phone number through call forwarding. When a call goes unanswered, the system intercepts it and sends the SMS text.</p></div>
            <div className="faq-item"><h3>Can I customize what the bot says?</h3><p>Yes. You control the first message, the AI's tone (professional, friendly, casual), and the types of questions it asks. You can even write a fully custom AI prompt to match your business perfectly.</p></div>
            <div className="faq-item"><h3>Will customers know they're texting a bot?</h3><p>The first message is clearly from your business, not posed as a human. Most customers don't mind — they care that someone responded quickly. You can customize the tone and wording to match your brand.</p></div>
            <div className="faq-item"><h3>Do customers need an app?</h3><p>No. The customer receives and replies by normal SMS.</p></div>
            <div className="faq-item"><h3>What information does it collect?</h3><p>Name, callback number, address, service issue, urgency, and any notes needed for a useful callback.</p></div>
            <div className="faq-item"><h3>Is there a long-term contract?</h3><p>No. Start with a free 14-day pilot. Continue only if it proves useful.</p></div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-final">
        <div className="container">
          <span className="section-label" style={{ color: '#f97316' }}>Get started</span>
          <h2>Your next missed call could be your next booked job.</h2>
          <p>If you run a home service business, missed calls are costing you revenue. Test it out with a free pilot!</p>
          <button className="btn btn-primary" onClick={openModal}>Request free pilot</button>
        </div>
      </section>

      <Footer />

      <PilotModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default App
