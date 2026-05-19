import { useState, useCallback } from 'react'

interface Lead {
  id: number
  name: string
  business_name: string
  phone: string
  email: string | null
  trade: string
  city: string | null
  message: string | null
  created_at: string
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString(undefined, {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit',
  })
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)
  function copy() {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <button className="copy-btn" onClick={copy} title="Copy">
      {copied ? '✓' : '⎘'}
    </button>
  )
}

function LoginForm({ onLogin }: { onLogin: (pw: string) => void }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/leads', {
        headers: { Authorization: 'Basic ' + btoa('admin:' + password) },
      })
      if (res.status === 401) { setError('Incorrect password.'); return }
      if (!res.ok) { setError('Server error. Try again.'); return }
      onLogin(password)
    } catch {
      setError('Could not reach the server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-login-wrap">
      <div className="admin-login-box">
        <div className="admin-login-logo">
          <div className="logo-icon" style={{ margin: '0 auto 16px' }}>
            <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
          </div>
          <h2 style={{ marginBottom: 4 }}>Admin</h2>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>Missed Call Agent</p>
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
          <div className="form-field">
            <label htmlFor="admin-pw">Password</label>
            <input
              id="admin-pw"
              type="password"
              autoFocus
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter admin password"
            />
          </div>
          {error && <span className="form-error">{error}</span>}
          <button className="btn btn-primary btn-full" type="submit" style={{ padding: 14 }} disabled={loading}>
            {loading ? 'Checking…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function AdminPage() {
  const [password, setPassword] = useState<string | null>(null)
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchLeads = useCallback(async (pw: string) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/leads', {
        headers: { Authorization: 'Basic ' + btoa('admin:' + pw) },
      })
      if (!res.ok) throw new Error('Failed to load leads.')
      setLeads(await res.json())
      setPassword(pw)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }, [])

  function handleLogin(pw: string) {
    fetchLeads(pw)
  }

  function handleSignOut() {
    setPassword(null)
    setLeads([])
  }

  if (!password) return <LoginForm onLogin={handleLogin} />

  return (
    <div className="admin-wrap">
      <div className="admin-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="logo-icon">
            <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
          </div>
          <span style={{ fontWeight: 700 }}>Missed Call Agent</span>
          <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>/ Admin</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: '.85rem', color: 'var(--muted)' }}>{leads.length} lead{leads.length !== 1 ? 's' : ''}</span>
          <button className="btn btn-outline" style={{ padding: '7px 14px', fontSize: '.85rem' }} onClick={() => fetchLeads(password)} disabled={loading}>
            {loading ? 'Refreshing…' : 'Refresh'}
          </button>
          <button className="btn btn-outline" style={{ padding: '7px 14px', fontSize: '.85rem' }} onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      </div>

      <div className="admin-body">
        {error && <p className="form-error" style={{ marginBottom: 16 }}>{error}</p>}

        {leads.length === 0 && !loading ? (
          <div className="admin-empty">No leads yet.</div>
        ) : (
          <div className="leads-table-wrap">
            <table className="leads-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Business</th>
                  <th>Trade</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead.id}>
                    <td style={{ whiteSpace: 'nowrap', color: 'var(--muted)', fontSize: '.82rem' }}>{formatDate(lead.created_at)}</td>
                    <td style={{ fontWeight: 600 }}>{lead.name}</td>
                    <td>{lead.business_name}</td>
                    <td><span className="trade-badge">{lead.trade}</span></td>
                    <td style={{ whiteSpace: 'nowrap' }}>
                      {lead.phone} <CopyButton value={lead.phone} />
                    </td>
                    <td style={{ whiteSpace: 'nowrap' }}>
                      {lead.email ? <>{lead.email} <CopyButton value={lead.email} /></> : <span style={{ color: 'var(--muted)' }}>—</span>}
                    </td>
                    <td>{lead.city ?? <span style={{ color: 'var(--muted)' }}>—</span>}</td>
                    <td style={{ maxWidth: 260, fontSize: '.85rem', color: 'var(--muted)' }}>{lead.message ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
