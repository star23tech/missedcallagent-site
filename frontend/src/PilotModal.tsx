import { useEffect, useRef, useState } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  business_name: string
  phone: string
  email: string
  trade: string
  city: string
  message: string
  website: string // honeypot
}

const EMPTY: FormData = {
  name: '', business_name: '', phone: '', email: '',
  trade: '', city: '', message: '', website: '',
}

export default function PilotModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState<FormData>(EMPTY)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const firstFieldRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => firstFieldRef.current?.focus(), 230)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.website) return // honeypot
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch('https://formspree.io/f/mbdeoqlq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          business_name: form.business_name,
          phone: form.phone,
          email: form.email || undefined,
          trade: form.trade,
          city: form.city || undefined,
          message: form.message || undefined,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Submission failed. Please try again.')
      }
      setSuccess(true)
      setForm(EMPTY)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSubmitting(false)
    }
  }

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose()
  }

  function handleCloseAndReset() {
    onClose()
    setTimeout(() => { setSuccess(false); setError('') }, 300)
  }

  return (
    <div
      className={`modal-overlay${isOpen ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleOverlayClick}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={handleCloseAndReset} aria-label="Close">&times;</button>

        {success ? (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h3>Request received!</h3>
            <p>Thanks for reaching out! We'll be in touch shortly.</p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <span className="section-label">Request access</span>
              <h2 id="modal-title">Start your free 14-day pilot</h2>
              <p>Share a few details and we'll follow up about setup fit, phone forwarding, and whether the pilot is a good fit for your business.</p>
            </div>
            <form className="modal-form" onSubmit={handleSubmit} noValidate>
              <div className="modal-form-row">
                <div className="form-field">
                  <label htmlFor="m-name">Your name <span style={{ color: 'var(--accent)' }}>*</span></label>
                  <input ref={firstFieldRef} id="m-name" name="name" autoComplete="name" required placeholder="Jane Smith" value={form.name} onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label htmlFor="m-business">Business name <span style={{ color: 'var(--accent)' }}>*</span></label>
                  <input id="m-business" name="business_name" autoComplete="organization" required placeholder="Rapid Air HVAC" value={form.business_name} onChange={handleChange} />
                </div>
              </div>
              <div className="modal-form-row">
                <div className="form-field">
                  <label htmlFor="m-phone">Phone <span style={{ color: 'var(--accent)' }}>*</span></label>
                  <input id="m-phone" name="phone" type="tel" autoComplete="tel" required placeholder="(555) 000-0000" value={form.phone} onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label htmlFor="m-email">Email</label>
                  <input id="m-email" name="email" type="email" autoComplete="email" placeholder="jane@example.com" value={form.email} onChange={handleChange} />
                </div>
              </div>
              <div className="modal-form-row">
                <div className="form-field">
                  <label htmlFor="m-trade">Business type <span style={{ color: 'var(--accent)' }}>*</span></label>
                  <select id="m-trade" name="trade" required value={form.trade} onChange={handleChange}>
                    <option value="">Select one</option>
                    <option>HVAC</option>
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>Garage Door</option>
                    <option>Locksmith</option>
                    <option>Appliance Repair</option>
                    <option>Pest Control</option>
                    <option>Painting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="m-city">City / service area</label>
                  <input id="m-city" name="city" autoComplete="address-level2" placeholder="Austin, TX" value={form.city} onChange={handleChange} />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="m-message">What should I know? <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(optional)</span></label>
                <textarea id="m-message" name="message" placeholder="Current phone setup, call volume, biggest pain point, or anything else useful." value={form.message} onChange={handleChange} />
              </div>
              <div className="hp-field" aria-hidden="true">
                <label htmlFor="m-website">Website</label>
                <input id="m-website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
              </div>
              {error && <span className="form-error">{error}</span>}
              <button className="btn btn-primary btn-full" type="submit" disabled={submitting} style={{ padding: '14px' }}>
                {submitting ? 'Sending…' : 'Send pilot request'}
              </button>
              <p className="form-note">No payment needed &middot; No long-term contract</p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
