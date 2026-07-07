import { buildWhatsAppLink, mensagemGenerica } from '../utils/whatsapp'

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.46-.15-.65.14-.19.29-.75.93-.92 1.12-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.56-.89-2.14-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.55-.01-.19 0-.51.07-.77.36-.26.29-1.01.99-1.01 2.41 0 1.42 1.04 2.79 1.18 2.98.15.19 2.04 3.11 4.94 4.36.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" />
    <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.86.5 3.6 1.38 5.1L2 22l5.05-1.32A9.94 9.94 0 0 0 12.02 22C17.54 22 22 17.52 22 12S17.54 2 12.02 2zm0 18.1c-1.67 0-3.23-.46-4.56-1.26l-.33-.19-3 .79.8-2.93-.21-.3A8.09 8.09 0 0 1 3.93 12c0-4.47 3.63-8.1 8.09-8.1s8.09 3.63 8.09 8.1-3.62 8.1-8.09 8.1z" />
  </svg>
)

export function WhatsAppFloating() {
  return (
    <a
      href={buildWhatsAppLink(mensagemGenerica())}
      target="_blank"
      rel="noopener noreferrer"
className="whatsapp-floating fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-3.5 py-3 text-foam shadow-card transition-transform hover:scale-105 md:bottom-6 md:right-6 md:px-4 md:py-3"      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm font-semibold md:inline">Reservar pelo WhatsApp</span>
    </a>
  )
}

export default function WhatsAppButton({ mensagem, children, variant = 'gold', className = '' }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-transform hover:scale-[1.03]'
  const styles = {
    gold: 'bg-gold text-ocean-deep shadow-gold hover:bg-gold-light',
    outline: 'border border-foam/40 text-foam hover:bg-foam/10',
    dark: 'bg-ocean-deep text-foam hover:bg-ocean-mid',
  }

  return (
    <a
      href={buildWhatsAppLink(mensagem || mensagemGenerica())}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children || 'Reservar pelo WhatsApp'}
    </a>
  )
}
