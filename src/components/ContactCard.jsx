import { MapPin, Mail, ShieldCheck, Globe, MessageCircle } from 'lucide-react'
import { site } from '../data/site'
import { buildWhatsAppLink } from '../utils/whatsapp'

export default function ContactCard() {
  const rows = [
    { icon: MapPin, label: 'Cidade', value: site.cidade },
    { icon: Mail, label: 'E-mail', value: site.email },
    { icon: Globe, label: 'Instagram', value: '@gcrguiaturistico', href: site.instagram },
    { icon: ShieldCheck, label: 'Cadastur', value: '51.891.899/0001-10' },
  ]

  const whatsappLink = buildWhatsAppLink(
    'Olá! Vim pelo site da GCR Guia Turístico e gostaria de falar com um guia local.'
  )

  return (
    <div className="overflow-hidden rounded-[2rem] border border-ocean-deep/10 bg-foam shadow-card">
      <div className="relative overflow-hidden bg-ocean-deep p-8 text-white">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-20 left-6 h-44 w-44 rounded-full bg-ocean-mid/30 blur-3xl" />

        <div className="relative z-10">
          <span className="inline-flex rounded-full border border-gold/30 bg-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold-light">
            Atendimento direto
          </span>

          <h3 className="mt-4 font-display text-3xl font-semibold leading-tight">
            Fale com a GCR Guia Turístico
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Tire dúvidas, consulte disponibilidade e receba orientação para escolher o passeio ideal.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ocean-deep shadow-gold transition-transform hover:scale-[1.02]"
          >
            <MessageCircle size={18} />
            Chamar no WhatsApp
          </a>
        </div>
      </div>

      <div className="space-y-3 p-6">
        {rows.map((row) => {
          const Icon = row.icon

          return (
            <div
              key={row.label}
              className="flex items-center gap-4 rounded-2xl border border-ocean-deep/10 bg-white/65 p-4 transition-all hover:border-gold/40 hover:bg-white"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean-deep text-gold-light">
                <Icon size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">
                  {row.label}
                </p>

                {row.href ? (
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block truncate font-medium text-ocean-deep hover:text-gold"
                  >
                    {row.value}
                  </a>
                ) : (
                  <p className="mt-1 truncate font-medium text-ocean-deep">
                    {row.value}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}