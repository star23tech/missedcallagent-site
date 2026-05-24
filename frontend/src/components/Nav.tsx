interface Props {
  onOpenModal: (e: React.MouseEvent) => void
}

export default function Nav({ onOpenModal }: Props) {
  return (
    <nav>
      <div className="nav-inner">
        <a href="/" className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
          </div>
          Missed Call Agent
        </a>
        <ul className="nav-links">
          <li><a href="/#how-it-works">How it works</a></li>
          <li><a href="/#features">Features</a></li>
          <li><a href="/#pilot">Pilot</a></li>
          <li><a href="/#faq">FAQ</a></li>
        </ul>
        <button className="btn btn-primary" onClick={onOpenModal}>Request free pilot</button>
      </div>
    </nav>
  )
}
