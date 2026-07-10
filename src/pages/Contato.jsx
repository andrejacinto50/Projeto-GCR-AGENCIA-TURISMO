import { useState } from 'react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import ContactCard from '../components/ContactCard'
import { buildWhatsAppLink, mensagemContato } from '../utils/whatsapp'
import { site } from '../data/site'

const etapas = [
  'Conte o passeio desejado',
  'Informe data e quantidade de pessoas',
  'Receba orientação da equipe',
]

export default function Contato() {
  const [form, setForm] = useState({ nome: '', mensagem: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const podeEnviar = form.nome.trim() && form.mensagem.trim()
  const link = buildWhatsAppLink(mensagemContato(form))

  return (
    <>
      <Hero
        size="small"
        eyebrow="Contato"
        title="Fale diretamente com a GCR Guia Turístico"
        subtitle="Tire dúvidas, consulte disponibilidade e receba orientação para escolher o passeio ideal em Governador Celso Ramos."
      />

      <section className="contact-page-section px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="contact-title-wrap">
              <SectionTitle
                eyebrow="Atendimento pelo WhatsApp"
                title="Envie sua mensagem com as informações do passeio"
                description="Preencha seus dados e o WhatsApp abrirá com a mensagem pronta para enviar. Isso facilita o atendimento e ajuda a GCR entender melhor o que você procura."
              />
            </div>

            <div className="contact-steps-row">
              {etapas.map((item, index) => (
                <div key={item} className="contact-step-pill">
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="contact-form-premium mt-7 rounded-[1.7rem] border border-ocean-deep/10 bg-foam p-6 shadow-card">
              <div className="contact-form-shine" />

              <div className="relative z-10 flex flex-col gap-4">
                <div>
                  <label htmlFor="nome" className="font-mono text-xs uppercase tracking-wide text-ink/50">
                    Seu nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Como podemos te chamar?"
                    className="mt-2 w-full rounded-xl border border-ocean-deep/20 bg-white/60 px-4 py-3 text-sm text-ocean-deep outline-none placeholder:text-ink/40 focus:border-gold"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="font-mono text-xs uppercase tracking-wide text-ink/50">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Ex: Quero saber valores para passeio de lancha, 4 pessoas, no próximo sábado..."
                    className="mt-2 w-full rounded-xl border border-ocean-deep/20 bg-white/60 px-4 py-3 text-sm text-ocean-deep outline-none placeholder:text-ink/40 focus:border-gold"
                  />
                </div>

                <a
                  href={podeEnviar ? link : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!podeEnviar}
                  onClick={(e) => !podeEnviar && e.preventDefault()}
                  className={`contact-whatsapp-button mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform ${
                    podeEnviar
                      ? 'is-active bg-gold text-ocean-deep shadow-gold hover:scale-[1.02]'
                      : 'is-disabled cursor-not-allowed bg-ocean-deep/10 text-ocean-deep/40'
                  }`}
                >
                  Enviar pelo WhatsApp
                </a>

                <p className="text-xs leading-relaxed text-ink/50">
                  Ao clicar, o WhatsApp será aberto com sua mensagem já preenchida. Depois é só confirmar o envio.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-6">
            <div className="contact-info-normal">
              <ContactCard />
            </div>

            <div className="contact-map-wrap overflow-hidden rounded-[1.7rem] border border-ocean-deep/10 shadow-card">
              <iframe
                title="Mapa de Governador Celso Ramos"
                src="https://www.google.com/maps?q=GCR%20Guia%20Tur%C3%ADstico%2C%20Rod.%20Mun.%20Francisco%20Wollinger%2C%20Gov.%20Celso%20Ramos%20-%20SC%2C%2088190-000&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}