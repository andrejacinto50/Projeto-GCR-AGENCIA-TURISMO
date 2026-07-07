import { useState } from 'react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import ExperienceCard from '../components/ExperienceCard'
import CTA from '../components/CTA'
import { passeios } from '../data/passeios'
import { useNavigate } from 'react-router-dom'

const categorias = [
  { slug: 'todos', label: 'Todos' },
  { slug: 'mar', label: 'Mar' },
  { slug: 'natureza', label: 'Natureza' },
  { slug: 'aventura', label: 'Aventura' },
  { slug: 'familia', label: 'Família' },
  { slug: 'pesca', label: 'Pesca' },
]

export default function Passeios() {
  const navigate = useNavigate()
  const [categoria, setCategoria] = useState('todos')

  const irParaAtendimento = () => {
    navigate('/', {
      state: { scrollTo: 'atendimento-inteligente' },
    })
  }

  const filtrados =
    categoria === 'todos'
      ? passeios
      : passeios.filter((p) => p.categoria === categoria)

  return (
    <>
      <Hero
        size="small"
        eyebrow="Passeios GCR"
        title="Escolha sua próxima experiência em Governador Celso Ramos"
        subtitle="Passeios de lancha, escuna, trilhas, parapente, buggy, pesca e city tour para quem quer conhecer a região com segurança, orientação local e atendimento direto."
      />

      <section className="passeios-page-section">
<div className="passeios-page-container">
            <Reveal>
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-ocean-mid">
                  Escolha por categoria
                </span>

                <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ocean-deep sm:text-5xl">
                  Encontre o passeio ideal para o seu momento.
                </h2>

                <p className="mt-4 text-base leading-relaxed text-ink/70">
                  Cada experiência pode contar com diferentes roteiros, horários e orientações.
                  Selecione uma categoria e veja as opções disponíveis para conhecer GCR do seu jeito.
                </p>
              </div>

<div className="passeios-count-card">
                  <p className="font-display text-3xl font-semibold text-ocean-deep">
                  {filtrados.length}
                </p>
                <p className="text-sm text-ink/60">
                  experiências disponíveis
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
         <div className="passeios-filter-bar">
              {categorias.map((cat) => (
                <button
                  type="button"
                  key={cat.slug}
                  onClick={() => setCategoria(cat.slug)}
                  className={`passeios-filter-btn ${
  categoria === cat.slug ? 'passeios-filter-btn-active' : ''
}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>

<div className="passeios-grid">
              {filtrados.map((passeio, index) => (
              <Reveal key={passeio.slug} delay={index * 60}>
                <ExperienceCard passeio={passeio} size={index === 0 ? 'large' : 'default'} />
              </Reveal>
            ))}
          </div>

          <Reveal>
<div className="passeios-help-card">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold-light">
                    Não sabe qual escolher?
                  </p>

                  <h3 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                    A GCR ajuda você a montar o roteiro ideal.
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foam/72">
                    Informe o perfil do grupo, a data pretendida e o tipo de experiência.
                    O atendimento pelo WhatsApp já começa com as informações organizadas.
                  </p>
                </div>

             <button
  type="button"
  onClick={irParaAtendimento}
  className="passeios-help-btn"
>
  Montar minha experiência
</button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  )
}