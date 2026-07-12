import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import CTA from '../components/CTA'
import { site } from '../data/site'
import { Sailboat, Route, Wind, MessageCircle } from 'lucide-react'
import cadasturLogo from '../assets/cadastur.png'
import cadasturFundo from '../assets/CadasturFundo.jpg'

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
      'Cuidamos e valorizamos o meio ambiente, trilhas, praias, cachoeiras, mar e comunidades locais que tornam a cidade e as experiências tão inesquecíveis.',
  },
  {
    title: 'Atendimento próximo',
    description:
      'O visitante fala direto com a equipe, tira dúvidas e recebe orientação personalizada pelo WhatsApp.',
  },
]

const equipe = [
  {
    icon: Sailboat,
    nome: 'Capitão, Piloto e Marinheiros',
    papel: 'Lancha, escuna, pesca e banana boat',
  },
  {
    icon: Route,
    nome: 'Guias de trilha',
    papel: 'Trilhas guiadas e city tour',
  },
  {
    icon: Wind,
    nome: 'Equipe de aventura',
    papel: 'Parapente, buggy e experiências radicais',
  },
  {
    icon: MessageCircle,
    nome: 'Atendimento',
    papel: 'Reservas, dúvidas e suporte pelo WhatsApp',
  },
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
        eyebrow="Sobre a GCR Guia Turístico "
        title="Turismo feito por quem nasceu e vive Governador Celso Ramos na veia."
        subtitle={`Há mais de ${site.anosDeAtuacao} anos conectando visitantes às melhores experiências da região. A confiança de quem conhece cada detalhe da cidade, para que sua viagem seja vivida com segurança, autenticidade e momentos inesquecíveis você encontra aqui!`}
      />

      <main className="about-premium-page">
        <section className="about-story-section px-5 py-20 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div className="about-premium-heading">
                <span>Nossa história</span>

                <h2>Uma empresa criada por nativos.</h2>

                <p>
                  Criada por amigos nativos e apaixonados por Governador Celso Ramos, a GCR Guia
Turístico nasce da carência da valorização do potencial turístico da cidade que não era explorado. Assim resolveram divulgar os atrativos da cidade e ser de fato um Guia para quem deseja conhecer a cidade.
Desta forma além de pioneiros nas redes sociais com milhares de seguidores, se tornamos também referência e autoridade no setor turístico/digital da cidade.
                </p>
              </div>

              <div className="about-story-text">
                <p>
                 A GCR Guia Turístico nasceu para mostrar aquilo que
Governador Celso Ramos tem de melhor; praias, trilhas, cultura, história, gastronomia, mirantes, roteiros e experiências que ganham mais valor quando são conduzidas por quem conhece a região.
                </p>
                <p>
                 O objetivo é que cada visitante se sinta bem orientado desde o primeiro contato, com informações claras, segurança e a sensação de estar conhecendo Governador Celso Ramos com alguém da própria cidade.
               </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <aside className="about-feature-card">
                <span>O que nos move</span>

                <h3>Transformar passeios em experiências memoráveis.</h3>

                <p>
                  Mais do que vender roteiros, a GCR Guia Turístico conecta visitantes com lugares,
                  histórias, paisagens e momentos que fazem Governador Celso Ramos ser
                  lembrada depois da viagem.
                </p>

                <div className="about-metrics-grid">
                  <div>
                    <strong>{site.anosDeAtuacao}+</strong>
                    <small>anos de atuação</small>
                  </div>

                  <div>
                    <strong>Cadastur</strong>
                    <small>Único Guia Nativo credenciado da cidade</small>
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
  {equipe.map((pessoa, index) => {
    const Icon = pessoa.icon

    return (
      <Reveal key={pessoa.nome} delay={index * 70}>
        <article className="about-team-card">
          <div className="about-team-avatar" aria-hidden="true">
            <Icon size={32} strokeWidth={2.4} />
          </div>

          <h3>{pessoa.nome}</h3>
          <p>{pessoa.papel}</p>
        </article>
      </Reveal>
    )
  })}
</div>
          </div>
        </section>

        <section className="about-cadastur-section px-5 py-20 sm:px-8">
  <Reveal>
    <div className="about-cadastur-card">
      <span>Cadastur</span>

      <h2>Turismo com regularização, segurança e responsabilidade.</h2>

      <p>
        A GCR Guia Turístico e parceiros possuem o CADASTUR, certificado emitido e exigido pelo ministério do turismo, que garante que as empresas atuam de forma legal. 
Além de termos também o único guia de turismo formado e credenciado da cidade com autorização para realizar trilhas legalmente.
      </p>

      <div className="about-cadastur-logo-wrap">
       <img
           src={cadasturFundo}
           alt="Cadastur"
           className="cadastur-logo"
         />
      </div>
    </div>
  </Reveal>
</section>
      </main>

      <CTA />
    </>
  )
}