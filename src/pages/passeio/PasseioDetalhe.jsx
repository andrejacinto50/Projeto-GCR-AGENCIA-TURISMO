import { Link, Navigate, useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Reveal from '../../components/Reveal'
import SectionTitle from '../../components/SectionTitle'
import ExperienceCard from '../../components/ExperienceCard'
import FAQ from '../../components/FAQ'
import CTA from '../../components/CTA'
import WhatsAppButton from '../../components/WhatsAppButton'
import { getPasseioBySlug, passeios } from '../../data/passeios'
import { getRoteirosByPasseio } from '../../data/roteiros'
import { faqGeral, faqPorPasseio } from '../../data/faq'
import { mensagemPasseio, mensagemRoteiro } from '../../utils/whatsapp'

export default function PasseioDetalhe() {
  const { slug } = useParams()
  const passeio = getPasseioBySlug(slug)

  if (!passeio) {
    return <Navigate to="/passeios" replace />
  }

  const roteiros = getRoteirosByPasseio(passeio.slug)
  const faqEspecifico = faqPorPasseio[passeio.slug] || []
  const relacionados = passeios.filter((p) => p.slug !== passeio.slug).slice(0, 3)

  return (
    <>
      <Hero
        size="small"
        eyebrow="Experiência GCR"
        title={passeio.nome}
        subtitle={passeio.descricao}
        floating={[
          { value: passeio.duracao, label: 'Duração' },
          { value: roteiros.length || '1', label: 'Roteiros' },
          { value: 'WhatsApp', label: 'Reserva' },
        ]}
      >
        <WhatsAppButton mensagem={mensagemPasseio(passeio.nome)}>
          Reservar {passeio.nome}
        </WhatsAppButton>

        <Link to="/passeios" className="detail-secondary-btn">
          Ver outros passeios
        </Link>
      </Hero>

      <section className="detail-section">
        <div className="detail-container detail-about-grid">
          <Reveal className="detail-about-main">
            <SectionTitle
              eyebrow="Sobre o passeio"
              title="Uma experiência pensada para aproveitar GCR com segurança"
              description="Cada detalhe do passeio é orientado para que o visitante saiba o que esperar, como se preparar e qual roteiro combina melhor com seu grupo."
              light
            />

            <p className="detail-description">{passeio.descricao}</p>

            <div className="detail-highlight-card">
              <span>Ideal para</span>
              <p>{passeio.idealPara}</p>
            </div>
          </Reveal>

          <Reveal className="detail-included-card">
            <h3>O que está incluso</h3>

            <p>
              Informações que ajudam o cliente a entender melhor a experiência antes de solicitar a reserva.
            </p>

            <ul>
              {passeio.incluso.map((item) => (
                <li key={item}>
                  <span />
                  {item}
                </li>
              ))}
            </ul>

            <div className="detail-card-action">
              <WhatsAppButton
                mensagem={mensagemPasseio(passeio.nome)}
                variant="dark"
                className="w-full justify-center"
              >
                Solicitar informações
              </WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </section>

      {roteiros.length > 0 && (
        <section className="detail-routes-section">
          <div className="detail-container">
            <Reveal>
              <SectionTitle
                eyebrow="Roteiros disponíveis"
                title={`Escolha o roteiro dentro de ${passeio.nome}`}
                description="Cada roteiro funciona como uma opção específica dentro deste passeio. A GCR ajuda a escolher a melhor alternativa de acordo com o perfil do grupo, clima, data e disponibilidade."
                light
              />
            </Reveal>

            <div className="detail-routes-list">
              {roteiros.map((roteiro, index) => (
                <Reveal key={roteiro.slug} delay={index * 60}>
                  <article className="detail-route-card">
                    <div className="detail-route-number">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="detail-route-content">
                      <h3>{roteiro.nome}</h3>
                      <p>{roteiro.descricao}</p>

                      <div className="detail-route-tags">
                        {roteiro.destaques.map((d) => (
                          <span key={d}>{d}</span>
                        ))}
                      </div>
                    </div>

                    <WhatsAppButton
                      mensagem={mensagemRoteiro(passeio.nome, roteiro.nome)}
                      variant="dark"
                      className="whitespace-nowrap"
                    >
                      Reservar este roteiro
                    </WhatsAppButton>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="detail-faq-section">
        <div className="detail-container">
          <Reveal>
            <SectionTitle
              eyebrow="Perguntas frequentes"
              title="Antes de reservar"
              description="Algumas dúvidas comuns que ajudam o visitante a entender melhor como funciona a experiência."
              light
            />
          </Reveal>

          <div className="detail-faq-wrap">
            <FAQ items={[...faqEspecifico, ...faqGeral]} />
          </div>
        </div>
      </section>

      <section className="detail-related-section">
        <div className="detail-container">
          <Reveal>
            <SectionTitle
              eyebrow="Passeios relacionados"
              title="Você também pode gostar de"
              description="Outras experiências para conhecer Governador Celso Ramos por diferentes perspectivas."
              light
            />
          </Reveal>

          <div className="detail-related-grid">
            {relacionados.map((p, index) => (
              <Reveal key={p.slug} delay={index * 60}>
                <ExperienceCard passeio={p} />
              </Reveal>
            ))}
          </div>

          <div className="detail-back-link-wrap">
            <Link to="/passeios" className="detail-back-link">
              ← Ver todos os passeios
            </Link>
          </div>
        </div>
      </section>

      <CTA mensagem={mensagemPasseio(passeio.nome)} />
    </>
  )
}