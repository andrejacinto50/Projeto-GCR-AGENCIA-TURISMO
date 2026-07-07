import { Link } from 'react-router-dom'
import { navLinks, site } from '../data/site'
import { passeios } from '../data/passeios'
import logo from '../assets/logo.png'

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="footer-premium px-5 pt-16 pb-8 text-foam sm:px-8">
      <div className="footer-premium-glow" />

      <div className="footer-premium-inner mx-auto max-w-6xl">
        <div className="footer-premium-top">
          <div className="footer-brand-block">
            <div className="footer-brand">
              <span className="footer-brand-logo">
                <img src={logo} alt={site.nome} />
              </span>

              <div>
                <strong>{site.nome}</strong>
                <small>{site.slogan}</small>
              </div>
            </div>

            <p>
              Guia local em Governador Celso Ramos para passeios, experiências
              e roteiros com orientação próxima.
            </p>

            <span className="footer-cadastur">
              Cadastur {site.cadastur}
            </span>
          </div>

          <div className="footer-premium-cta">
            <span>Atendimento direto</span>
            <strong>Fale com a GCR e escolha o passeio ideal.</strong>

            {site.whatsappNumero && (
              <a
                href={`https://wa.me/${site.whatsappNumero}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar pelo WhatsApp
              </a>
            )}
          </div>
        </div>

        <div className="footer-premium-grid">
          <div>
            <h3>Navegação</h3>

            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Passeios</h3>

            <ul>
              {passeios.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link to={`/passeios/${p.slug}`}>{p.nome}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contato</h3>

            <ul>
              <li>{site.cidade}</li>
              <li>
                <a href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-premium-bottom">
          <p>
            © {ano} {site.nome}. Todos os direitos reservados.
          </p>

          <span>
            Turismo local, natureza e experiências em Governador Celso Ramos.
          </span>
        </div>
      </div>
    </footer>
  )
}