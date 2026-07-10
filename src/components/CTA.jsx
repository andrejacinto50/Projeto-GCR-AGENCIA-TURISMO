import Reveal from './Reveal'
import WhatsAppButton from './WhatsAppButton'
import { mensagemGenerica } from '../utils/whatsapp'

export default function CTA({
  title = 'Pronto para viver o melhor de Governador Celso Ramos?',
  subtitle = 'Fale agora com a nossa equipe e monte o roteiro perfeito para você e seu grupo.',
  mensagem,
}) {
  return (
    <section className="bg-ocean-deep px-5 py-20 sm:px-8">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl font-semibold text-foam sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-base leading-relaxed text-foam/75">{subtitle}</p>
        <WhatsAppButton mensagem={mensagem || mensagemGenerica()}>
          Reservar pelo WhatsApp
        </WhatsAppButton>
      </Reveal>
    </section>
  )
}
