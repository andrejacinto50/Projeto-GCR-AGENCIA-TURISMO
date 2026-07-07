import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import CTA from '../components/CTA'
import { site } from '../data/site'

const valores = [
  {
    title: 'Origem local',
    description:
      'Empresa criada por nativos que conhecem Governador Celso Ramos de verdade, dos roteiros famosos aos lugares menos óbvios.',
  },
  {
    title: 'Segurança em primeiro lugar',
    description:
      'Cada passeio é conduzido com responsabilidade, orientação clara e cuidado antes, durante e depois da experiência.',
  },
  {
    title: 'Respeito ao ambiente',
    description:
      'Valorizamos as praias, ilhas, trilhas e comunidades locais que tornam a cidade tão especial.',
  },
  {
    title: 'Atendimento próximo',
    description:
      'O visitante fala direto com a equipe, tira dúvidas e recebe orientação personalizada pelo WhatsApp.',
  },
]

const equipe = [
  { nome: 'Guias de mar', papel: 'Lancha, escuna, pesca e banana boat' },
  { nome: 'Guias de trilha', papel: 'Trilhas guiadas e city tour' },
  { nome: 'Equipe de aventura', papel: 'Parapente, buggy e experiências radicais' },
  { nome: 'Atendimento', papel: 'Reservas, dúvidas e suporte pelo WhatsApp' },
]

const timeline = [
  'Atendimento direto pelo WhatsApp',
  'Escolha do roteiro ideal',
  'Orientação antes do passeio',
  'Experiência conduzida por quem conhece a região',
]

export default function Sobre() {
  return (
    <>
      <Hero
        size="small"
        eyebrow="Sobre a GCR"
        title="Turismo feito por quem nasceu e vive Governador Celso Ramos"
        subtitle={`Há mais de ${site.anosDeAtuacao} anos, a GCR apresenta os atrativos turísticos da cidade com olhar local, atendimento próximo e experiências pensadas para cada visitante.`}
      />

      <main className="about-premium-page">
        <section className="about-story-section px-5 py-20 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div className="about-premium-heading">
                <span>Nossa história</span>

                <h2>Uma empresa criada por nativos.</h2>

                <p>
                  A GCR nasceu para mostrar Governador Celso Ramos além do óbvio:
                  praias, trilhas, ilhas, mirantes, roteiros de mar e experiências
                  que ganham mais valor quando são conduzidas por quem conhece a região.
                </p>
              </div>

              <div className="about-story-text">
                <p>
                  Ao longo dos anos, a empresa passou a reunir diferentes formas de viver
                  a cidade: passeios de lancha, escuna, trilhas guiadas, parapente, buggy,
                  pesca embarcada, city tour e outras experiências para visitantes que buscam
                  contato real com a natureza.
                </p>

                <p>
                  O objetivo é que cada visitante se sinta bem orientado desde o primeiro
                  contato, com informações claras, segurança e a sensação de estar conhecendo
                  GCR com alguém da própria cidade.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <aside className="about-feature-card">
                <span>O que nos move</span>

                <h3>Transformar passeios em experiências memoráveis.</h3>

                <p>
                  Mais do que vender roteiros, a GCR conecta visitantes com lugares,
                  histórias, paisagens e momentos que fazem Governador Celso Ramos ser
                  lembrada depois da viagem.
                </p>

                <div className="about-metrics-grid">
                  <div>
                    <strong>{site.anosDeAtuacao}+</strong>
                    <small>anos de atuação</small>
                  </div>

                  <div>
                    <strong>GCR</strong>
                    <small>guias nativos</small>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>

        <section className="about-timeline-section px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="about-premium-heading about-center">
                <span>Como cuidamos da experiência</span>
                <h2>Do primeiro contato ao passeio, tudo precisa ser claro.</h2>
              </div>
            </Reveal>

            <div className="about-timeline-grid">
              {timeline.map((item, index) => (
                <Reveal key={item} delay={index * 70}>
                  <article className="about-timeline-card">
                    <strong>{String(index + 1).padStart(2, '0')}</strong>
                    <p>{item}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="about-values-section px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="about-premium-heading about-center">
                <span>Valores</span>
                <h2>O que guia cada experiência.</h2>
                <p>
                  A forma como a GCR trabalha combina conhecimento local, responsabilidade
                  e atendimento próximo.
                </p>
              </div>
            </Reveal>

            <div className="about-values-grid">
              {valores.map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  <article className="about-value-card">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="about-team-section px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="about-premium-heading about-center">
                <span>Equipe</span>
                <h2>Quem está por trás dos passeios.</h2>
                <p>
                  Cada tipo de experiência conta com orientação específica, seja no mar,
                  nas trilhas, nos passeios urbanos ou nas atividades de aventura.
                </p>
              </div>
            </Reveal>

            <div className="about-team-grid">
              {equipe.map((pessoa, index) => (
                <Reveal key={pessoa.nome} delay={index * 70}>
                  <article className="about-team-card">
                    <div className="about-team-avatar">
                      {pessoa.nome.charAt(0)}
                    </div>

                    <h3>{pessoa.nome}</h3>
                    <p>{pessoa.papel}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cadastur-section px-5 py-20 sm:px-8">
          <Reveal>
            <div className="about-cadastur-card">
              <span>Cadastur</span>

              <h2>Turismo com regularização, segurança e responsabilidade.</h2>

              <p>
                A GCR atua com guia credenciado e estrutura preparada para receber visitantes
                em experiências turísticas em Governador Celso Ramos.
              </p>
            </div>
          </Reveal>
        </section>
      </main>

      <CTA />
    </>
  )
}