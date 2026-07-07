import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import { navLinks, site } from '../data/site'
import { buildWhatsAppLink, mensagemGenerica } from '../utils/whatsapp'
import logo from '../assets/logo.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const whatsappLink = buildWhatsAppLink(mensagemGenerica())

  return (
    <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
      <div className="site-header-container">
        <Link to="/" className="site-logo" onClick={() => setOpen(false)}>
          <div className="site-logo-mark">
            <img src={logo} alt={site.nome} className="site-logo-image" />
          </div>

          <div className="site-logo-text">
            <strong>{site.nome}</strong>
          </div>
        </Link>

        <nav className="site-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `site-nav-link ${isActive ? 'site-nav-link-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="site-header-cta"
        >
          <MessageCircle size={17} />
          Reservar
        </a>

        <button
          className="site-menu-button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`}>
        <nav className="mobile-menu-panel">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `mobile-menu-link ${isActive ? 'mobile-menu-link-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu-cta"
            onClick={() => setOpen(false)}
          >
            <MessageCircle size={18} />
            Reservar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}