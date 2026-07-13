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
 { value: '∞', label: 'Experiências',className: 'credibility-stat-infinity' },
]

const porqueEscolher = [
  {
    icon: MapPin,
    title: 'Profissionais Nativos ',
    description: 'Atendimento feito por quem nasceu e cresceu aqui e conhece cada detalhe que não aparece em roteiros comuns e fogem do óbvio. ',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança em primeiro lugar',
    description: 'Passeios conduzidos por profissionais habilitados. Orientados com cuidado, responsabilidade e informações claras antes de cada experiência.',
  },
  {
    icon: Sparkles,
    title: 'Mais de 16 anos de história',
    description: `A GCR Guia Turístico atua há mais de ${site.anosDeAtuacao} anos divulgando os atrativos turísticos da cidade, sendo a pioneira em promover o turismo de Governador Celso Ramos nas redes sociais `,
  },
  {
    icon: ShieldCheck,
    title: 'Somos Credenciados (CADASTUR)',
    description: 'Possuímos o Cadastur, certificado dado pelo ministério do turismo e que garante a legalidade de atuação .Mais confiança para quem busca uma empresa regularizada e preparada para receber visitantes.',
  },
  {
    icon: Sparkles,
    title: 'Guia de Turismo legalizado',
    description: 'Nós possuímos o único guia de turismo da cidade com formação técnica na área e com certificado CADASTUR, que possui autorização para atuar legalmente na cidade. Não coloque a sua vida ou a de quem você ama em risco com outros “profissionais” ilegais, exija que mostrem o Cadastur de Guia.',
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
    title: 'Fale com a GCR Guia Turístico',
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
      title={
    <>
      {site.slogan}
      <br/>
    <span className="hero-title-gold">
        Viva essa experiência!
      </span>
    </>
  }
        subtitle="Criada por nativos de Governador Celso Ramos e atuando há mais de 16 anos na divulgação dos principais atrativos turísticos da região. A GCR Guia Turístico nasceu com o propósito de proporcionar experiências personalizadas e inesquecíveis, para que você conheça cada destino com segurança, autenticidade e o acolhimento de quem realmente nasceu e vive aqui."
        floating={[
          { value: `${site.anosDeAtuacao}+`, label: 'Mais de 16 anos divulgando a cidade' },
          { value: 'Cadastur', label: 'Empresa Credenciada no Ministério do Turismo ' },
          { value: 'Profissionais ', label: 'Possuímos o único guia da cidade credenciado ' },
          { value: 'Viva GCR', label: 'Diversas opções de passeios para você aproveitar' },
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
                title="Os passeios mais desejados de Governador Celso Ramos estão na GCR Guia Turístico "
                description="Transforme sua viagem em uma experiência única. Explore as belezas de Governador Celso Ramos com segurança, conforto e acompanhamento de profissionais legalizados que conhecem cada detalhe para tornar seu passeio inesquecível."
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
              title="Governador Celso Ramos, uma das mais belas regiões de Santa Catarina!"
              description="Aqui, você encontra ilhas paradisíacas, fortalezas e Igrejas históricas, praias premiadas internacionalmente, além de inúmeros mirantes e trilhas cercadas pela Mata Atlântica. 
          Um destino completo para quem busca natureza, aventura, cultura e momentos inesquecíveis."
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
        <span>Por que escolher a GCR Guia Turístico</span>

        <h2>Conhecimento local, que transforma sua viagem.
A segurança e legalidade que você busca estão aqui! </h2>

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
          recomendações e suporte diretamente com a equipe da GCR Guia Turístico.
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
          title="O que dizem sobre a GCR Guia Turístico no Google"
          description="Relatos de visitantes que escolheram a GCR Guia Turístico para viver passeios, trilhas, experiências de mar e aventura em Governador Celso Ramos."
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