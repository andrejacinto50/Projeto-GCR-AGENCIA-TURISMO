import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import Gallery from '../components/Gallery'
import CTA from '../components/CTA'

import fotobaia from '../assets/fotobaia.jpeg'
import ilha from '../assets/ilha.jpeg'
import parada from '../assets/Parada.jpeg'
import parapente from '../assets/Parapente.jpeg'
import parapente2 from '../assets/Parapente2.jpeg'
import trilha1 from '../assets/trilha1.jpeg'
import trilha2 from '../assets/trilha2.jpeg'
import trilha3 from '../assets/trilha3.jpeg'
import visitfort from '../assets/visitfort.jpeg'
import bug from '../assets/bug.jpeg'
import bug2 from '../assets/bug2.jpeg'
import escuna from '../assets/escuna.jpeg'

const items = [
  { legenda: 'Ilha de Anhatomirim', categoria: 'lancha', tipo: 'Passeio de Lancha', imagem: ilha },
  { legenda: 'Parada para banho', categoria: 'lancha', tipo: 'Passeio de Lancha', imagem: parada },
  { legenda: 'Vista da Fortaleza', categoria: 'escuna', tipo: 'Passeio de Escuna', imagem: visitfort },
  { legenda: 'Pôr do sol na baía', categoria: 'escuna', tipo: 'Passeio de Escuna', imagem: escuna },
  { legenda: 'Voo sobre GCR', categoria: 'parapente', tipo: 'Parapente', imagem: parapente },
  { legenda: 'Decolagem com vista para o mar', categoria: 'parapente', tipo: 'Parapente', imagem: parapente2 },
  { legenda: 'Roteiros de aventura', categoria: 'buggy', tipo: 'Passeio de Buggy', imagem: bug },
  { legenda: 'Caminhos pela região', categoria: 'buggy', tipo: 'Passeio de Buggy', imagem: bug2 },
  { legenda: 'Trilha da Costeira', categoria: 'natureza', tipo: 'Trilhas Guiadas', imagem: trilha1 },
  { legenda: 'Trilha do Mirante', categoria: 'natureza', tipo: 'Trilhas Guiadas', imagem: trilha2 },
  { legenda: 'Mata Atlântica preservada', categoria: 'natureza', tipo: 'Trilhas Guiadas', imagem: trilha3 },
  { legenda: 'Vista da Baía dos Ganchos', categoria: 'natureza', tipo: 'Natureza', imagem: fotobaia },
]

export default function Galeria() {
  return (
    <>
      <Hero
        size="small"
        eyebrow="Galeria"
        title="Momentos reais em Governador Celso Ramos"
        subtitle="Veja registros de passeios, paisagens e experiências vividas com a GCR Guia Turístico."
      />

      <section className="gallery-page-section px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-ocean-mid">
                EXPERIÊNCIAS REAIS
              </span>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ocean-deep">
                Paisagens, aventuras e momentos que mostram a força da região.
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-ink/70">
                A galeria reúne alguns registros dos passeios realizados em Governador Celso Ramos:
                mar, trilhas, aventura, natureza e cenários que ajudam cada visitante a escolher
                a experiência ideal.
              </p>
            </div>
          </Reveal>

          <div className="mt-14">
            <Reveal>
              <Gallery items={items} />
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}