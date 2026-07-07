import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import Stats from '../components/Stats'
import ExperienceCard from '../components/ExperienceCard'
import ExperienceBuilder from '../components/ExperienceBuilder'
import Timeline from '../components/Timeline'
import TestimonialCard from '../components/TestimonialCard'
import CTA from '../components/CTA'
import WhatsAppButton from '../components/WhatsAppButton'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react'
import { getPasseiosDestaque } from '../data/passeios'
import { attractions } from '../data/attractions'
import { site } from '../data/site'
import { mensagemGenerica } from '../utils/whatsapp'
import experienceImage from '../assets/experience.jpeg'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { testimonials, googleReviewsSummary } from '../data/testimonials'


const credibilidadeStats = [
  { value: `${site.anosDeAtuacao}+`, label: 'Anos de experiência' },
  { value: 'Cadastur', label: 'Guia credenciado' },
  { value: '100%', label: 'Nativos de GCR' },
  { value: '8', label: 'Experiências' },
]

const porqueEscolher = [
  {
    icon: MapPin,
    title: 'Guias nativos',
    description: 'Atendimento feito por quem vive a região e conhece detalhes que não aparecem em roteiros comuns.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança em primeiro lugar',
    description: 'Passeios orientados com cuidado, responsabilidade e informações claras antes da experiência.',
  },
  {
    icon: Sparkles,
    title: 'Mais de 15 anos de história',
    description: `A GCR atua há mais de ${site.anosDeAtuacao} anos divulgando os atrativos turísticos da cidade.`,
  },
  {
    icon: ShieldCheck,
    title: 'Credenciamento Cadastur',
    description: 'Mais confiança para quem busca uma empresa regularizada e preparada para receber visitantes.',
  },
  {
    icon: Sparkles,
    title: 'Roteiros personalizados',
    description: 'Opções para famílias, casais, grupos de amigos, aventureiros e visitantes que querem algo especial.',
  },
  {
    icon: MessageCircle,
    title: 'Atendimento direto no WhatsApp',
    description: 'O visitante tira dúvidas, recebe orientações e solicita informações sem burocracia.',
  },
]

const comoFunciona = [
  {
    title: 'Escolha sua experiência',
    description: 'Explore os passeios, veja o estilo de cada roteiro e escolha o que combina melhor com seu grupo.',
  },
  {
    title: 'Fale com a GCR',
    description: 'Confirme datas, valores, horários e detalhes diretamente pelo WhatsApp com atendimento personalizado.',
  },
  {
    title: 'Receba as orientações',
    description: 'Antes do passeio, receba informações sobre ponto de encontro, horário, recomendações e cuidados.',
  },
  {
    title: 'Viva Governador Celso Ramos',
    description: 'Aproveite a experiência com quem realmente conhece cada canto da cidade.',
  },
]

export default function Home() {
  const destaques = getPasseiosDestaque()
  const location = useLocation()

useEffect(() => {
  if (location.state?.scrollTo === 'atendimento-inteligente') {
    requestAnimationFrame(() => {
      document
        .getElementById('atendimento-inteligente')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    })
  }
}, [location])

  return (
    <>
      <Hero
        eyebrow={site.cidade}
        title={site.slogan}
        subtitle="Empresa criada por nativos, com mais de 15 anos divulgando os atrativos turísticos de Governador Celso Ramos. Passeios de lancha, escuna, trilhas, parapente e experiências personalizadas para quem quer conhecer a região com segurança e autenticidade."
        floating={[
          { value: `${site.anosDeAtuacao}+`, label: 'Anos' },
          { value: 'Cadastur', label: 'Credenciado' },
          { value: 'Local', label: 'Guias nativos' },
          { value: '8', label: 'Experiências' },
        ]}
      >
        <Link to="/passeios" className="btn-premium">
          Explorar Passeios
          <ArrowRight size={18} />
        </Link>

        <WhatsAppButton mensagem={mensagemGenerica()} variant="outline">
          Falar no WhatsApp
        </WhatsAppButton>
      </Hero>

      <section className="home-stats-section">
        <Reveal className="home-container">
          <Stats items={credibilidadeStats} />
        </Reveal>
      </section>

      <section className="home-experiences-section">
        <div className="home-container">
          <Reveal>
            <div className="home-section-head">
              <SectionTitle
                eyebrow="Experiências em destaque"
                title="Os passeios mais procurados em GCR"
                description="Experiências pensadas para quem quer explorar Governador Celso Ramos com segurança, beleza natural e atendimento direto com guias locais."
                light
              />

              <Link to="/passeios" className="home-section-link">
                Ver todos →
              </Link>
            </div>
          </Reveal>

          <div className="home-featured-grid">
            {destaques.map((passeio, index) => (
              <Reveal key={passeio.slug} delay={index * 80}>
                <ExperienceCard passeio={passeio} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section  id="atendimento-inteligente" className="home-builder-section">
        <div className="home-container">
          <Reveal>
            <ExperienceBuilder />
          </Reveal>
        </div>
      </section>

      <section className="home-destination-section">
        <div className="home-container">
          <Reveal>
            <SectionTitle
              eyebrow="Descubra GCR"
              title="Praias, fortaleza, ilhas e trilhas a poucos minutos umas das outras"
              description="Governador Celso Ramos reúne natureza, mar cristalino, história e paisagens que tornam cada passeio uma experiência única."
              light
            />
          </Reveal>

          <div className="home-attractions-grid">
            {attractions.map((item, index) => (
              <Reveal key={item.nome} delay={index * 80}>
                <article className="home-attraction-card">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.nome}</h3>
                  <p>{item.descricao}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-why-section">
  <div className="home-container">
    <Reveal>
      <div className="home-why-heading">
        <span>Por que escolher a GCR</span>

        <h2>Experiência local, segurança e atendimento próximo</h2>

        <div className="home-why-line" />
      </div>
    </Reveal>

    <div className="home-why-premium-grid">
      {porqueEscolher.map((item, index) => {
        const Icon = item.icon

        return (
          <Reveal key={item.title} delay={index * 60}>
            <article className="home-why-premium-item">
              <div className="home-why-premium-icon">
                <Icon size={34} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          </Reveal>
        )
      })}
    </div>
  </div>
</section>

      <section
  className="home-process-section"
  style={{
    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(4,31,39,.94) 0%,
        rgba(4,31,39,.88) 35%,
        rgba(4,31,39,.78) 60%,
        rgba(4,31,39,.72) 100%
      ),
      url(${experienceImage})
    `
  }}
>
  <div className="home-container">
    <Reveal>
      <div className="process-premium-heading process-light">
        <span>Como funciona</span>

        <h2>Do primeiro clique até viver essa experiência.</h2>

        <p>
          Tudo acontece de forma simples, rápida e com atendimento direto pelo
          WhatsApp para você aproveitar Governador Celso Ramos sem preocupações.
        </p>
      </div>
    </Reveal>

    <div className="process-premium-grid">
      {comoFunciona.map((step, index) => (
        <Reveal key={step.title} delay={index * 70}>
          <article className="process-premium-card">
            <div className="process-step-number">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="process-step-dot" />

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </article>
        </Reveal>
      ))}
    </div>

    <Reveal delay={250}>
      <div className="process-premium-note">
        <strong>Atendimento personalizado</strong>

        <span>
          Antes do passeio você recebe todas as orientações, localização,
          recomendações e suporte diretamente com a equipe da GCR.
        </span>
      </div>
    </Reveal>
  </div>
</section>

      <section className="home-testimonials-section">
  <div className="home-container">
    <div className="home-testimonials-head">
      <Reveal>
        <SectionTitle
          eyebrow="Avaliações reais"
          title="O que dizem sobre a GCR no Google"
          description="Relatos de visitantes que escolheram a GCR para viver passeios, trilhas, experiências de mar e aventura em Governador Celso Ramos."
          light
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="google-rating-card">
          <span>Google Reviews</span>

          <div>
            <strong>5.0</strong>
            <p>★★★★★</p>
          </div>

          <small>
        Avaliações reais publicadas no perfil da GCR no Google.
          </small>

         <a
  href={googleReviewsSummary.url}
  target="_blank"
  rel="noopener noreferrer"
>
  Ver avaliações no Google
</a>
        </div>
      </Reveal>
    </div>

    <div className="home-testimonials-grid">
      {testimonials.map((t, index) => (
        <Reveal key={t.nome} delay={index * 80}>
          <TestimonialCard testimonial={t} />
        </Reveal>
      ))}
    </div>
  </div>
</section>

      <CTA />
    </>
  )
}