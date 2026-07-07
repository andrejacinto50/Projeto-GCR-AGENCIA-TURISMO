import heroImage from '../assets/fotobaia.jpeg'

export default function Hero({ eyebrow, title, subtitle, children, floating, size = 'large' }) {
  return (
    <section className={`hero-premium ${size === 'large' ? 'hero-large' : 'hero-small'}`}>
      <img src={heroImage} alt="Governador Celso Ramos" className="hero-image-bg" />

      <div className="hero-overlay" />

      <div className="hero-premium-container">
        <div className="hero-premium-copy">
          {eyebrow && <span className="hero-eyebrow">{eyebrow}</span>}

          <h1>{title}</h1>

          {subtitle && <p>{subtitle}</p>}

          {children && <div className="hero-actions">{children}</div>}

          {floating && (
            <div className="hero-stats">
              {floating.map((item) => (
                <div key={item.label} className="hero-stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}