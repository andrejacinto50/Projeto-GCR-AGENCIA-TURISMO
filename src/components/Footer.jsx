import { Link } from 'react-router-dom'
import { navLinks, site } from '../data/site'
import { passeios } from '../data/passeios'
import logo from '../assets/logo.png'
import logoV from '../assets/logoV.png'
import cadasturLogo from '../assets/cadastur.png'
import { buildWhatsAppLink } from '../utils/whatsapp'
import cadasturFundo from '../assets/CadasturFundo.jpg'


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
              Guia Nativo de Governador Celso Ramos-SC com mais de 16 anos de experiência. Passeios, experiências e roteiros com orientação personalizada. 
            </p>

            <div className="cadastur-wrap">
  <div className="cadastur-info">
    <span className="cadastur-badge">Guia Vinícius</span>
    <span className="cadastur-badge">CADASTUR {site.cadastur}</span>
  </div>

  <img
    src={cadasturFundo}
    alt="Cadastur"
    className="cadastur-logo"
  />
</div>
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
  <a
    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      site.email
    )}&su=${encodeURIComponent(
      'Contato pelo site GCR Guia Turístico'
    )}&body=${encodeURIComponent(
      `Olá, equipe GCR Guia Turístico!

Vim pelo site e gostaria de saber mais informações sobre os passeios em Governador Celso Ramos.

Meu nome:
Meu WhatsApp:
Passeio de interesse:
Data desejada:
Quantidade de pessoas:

Aguardo o retorno.`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="footer-email-link"
  >
    E-mail: {site.email}
  </a>
</li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram: gcrguiaturistico
                </a>
              </li>
<li>
  <a
    href={buildWhatsAppLink('Olá! Vim pelo site da GCR Guia Turístico e gostaria de falar pelo WhatsApp.')}
    target="_blank"
    rel="noopener noreferrer"
    className="footer-whatsapp-link"
  >
    WhatsApp: (48) 99201-3033
  </a>
</li>
            </ul>
          </div>
        </div>
<div className="footer-brand-signature">
  <img
    src={logoV}
    alt="GCR Guia Turístico"
    className="footer-brand-signature-logo"
  />

  <span>Governador Celso Ramos, SC</span>
</div>

        <div className="footer-premium-bottom">
          <p>
            © {ano} {site.nome}. Todos os direitos reservados.
          </p>

          <span>
            Turismo local, natureza e experiências em Governador Celso Ramos.
          </span>

          <span>
            Desenvolvido por AJ Digital
          </span>
        </div>
      </div>
    </footer>
  )
}