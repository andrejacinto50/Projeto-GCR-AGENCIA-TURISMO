import { useMemo, useState } from 'react'
import {
  MessageCircle,
  Sparkles,
  Users,
  CalendarDays,
} from 'lucide-react'
import { buildWhatsAppLink } from '../utils/whatsapp'

const interesses = [
  {
    nome: 'Mar',
    recomendado: 'Passeio de Lancha',
    alternativa: 'Passeio de Escuna',
    motivo:
      'ideal para conhecer ilhas, praias e cenários clássicos de Governador Celso Ramos.',
  },
  {
    nome: 'Natureza',
    recomendado: 'Trilhas Guiadas',
    alternativa: 'City Tour',
    motivo:
      'perfeito para mirantes, contato com a Mata Atlântica e paisagens mais tranquilas.',
  },
  {
    nome: 'Família',
    recomendado: 'Passeio de Escuna',
    alternativa: 'Passeio de Lancha',
    motivo:
      'uma opção confortável, visual e fácil de aproveitar em grupo.',
  },
  {
    nome: 'Aventura',
    recomendado: 'Voo de Parapente',
    alternativa: 'Passeio de Buggy',
    motivo:
      'indicado para quem quer uma experiência mais marcante e cheia de emoção.',
  },
  {
    nome: 'Pesca',
    recomendado: 'Pesca Embarcada',
    alternativa: 'Passeio de Lancha',
    motivo:
      'pensado para quem quer viver o mar com mais tempo, calma e orientação local.',
  },
]

function formatarData(data) {
  if (!data) return ''

  const [ano, mes, dia] = data.split('-')

  return `${dia}/${mes}/${ano}`
}

function obterDataAtual() {
  const hoje = new Date()
  const ano = hoje.getFullYear()
  const mes = String(hoje.getMonth() + 1).padStart(2, '0')
  const dia = String(hoje.getDate()).padStart(2, '0')

  return `${ano}-${mes}-${dia}`
}

function perfilGrupo(quantidade) {
  const total = Number(quantidade)

  if (total <= 2) return 'casal ou dupla'
  if (total <= 5) return 'família ou pequeno grupo'
  if (total <= 12) return 'grupo médio'

  return 'grupo grande'
}

export default function ExperienceBuilder() {
  const [interesse, setInteresse] = useState(null)
  const [quantidade, setQuantidade] = useState(2)
  const [data, setData] = useState('')

  const escolha = interesses.find((item) => item.nome === interesse)
  const ehNatureza = interesse === 'Natureza'
  const dataFormatada = formatarData(data)
  const dataMinima = obterDataAtual()
  const perfil = perfilGrupo(quantidade)

  function selecionarInteresse(nome) {
    setInteresse(nome)

    // A data pertence apenas às experiências de Natureza.
    if (nome !== 'Natureza') {
      setData('')
    }
  }

  const mensagem = useMemo(() => {
    if (!escolha) return ''

    const detalhesDisponibilidade = ehNatureza
      ? [`Data pretendida: ${dataFormatada}`]
      : [
          'Disponibilidade: a confirmar no atendimento com a empresa responsável pelo passeio.',
        ]

    return [
      'Olá, GCR Turismo! Vim pelo site e gostaria de uma recomendação personalizada.',
      '',
      `Meu interesse principal: ${escolha.nome}`,
      `Quantidade de pessoas: ${quantidade} (${perfil})`,
      ...detalhesDisponibilidade,
      '',
      `O site me sugeriu: ${escolha.recomendado}`,
      `Motivo: ${escolha.motivo}`,
      `Alternativa possível: ${escolha.alternativa}`,
      '',
      'Pode me passar valores, disponibilidade, horários e qual roteiro combina melhor com esse perfil?',
    ].join('\n')
  }, [
    escolha,
    quantidade,
    perfil,
    dataFormatada,
    ehNatureza,
  ])

  const podeEnviar =
    Boolean(escolha) &&
    (!ehNatureza || Boolean(data))

  const link = buildWhatsAppLink(mensagem)

  return (
    <section className="builder-premium">
      <div className="builder-orb builder-orb-one" />
      <div className="builder-orb builder-orb-two" />

      <div className="builder-content">
        <div className="builder-copy">
          <span className="builder-badge">
            <Sparkles size={14} />
            Atendimento inteligente
          </span>

          <h3>
            Monte sua experiência e receba recomendações personalizadas
          </h3>

          <p>
            Escolha o estilo do passeio e informe a quantidade de pessoas.
            Para experiências de natureza, selecione também a data
            pretendida. A GCR recebe tudo organizado no WhatsApp para
            indicar o melhor roteiro.
          </p>
        </div>

        <div className="builder-preview-card">
          <span>Recomendação gerada</span>

          {escolha ? (
            <>
              <p>
                Para <strong>{perfil}</strong> com interesse em{' '}
                <strong>{escolha.nome}</strong>, a sugestão inicial é{' '}
                <strong>{escolha.recomendado}</strong>.
              </p>

              <small>
                {escolha.motivo} Alternativa: {escolha.alternativa}.
              </small>
            </>
          ) : (
            <p>
              Selecione um estilo de passeio para gerar uma sugestão
              personalizada.
            </p>
          )}
        </div>
      </div>

      <div
        className={`builder-form ${
          ehNatureza
            ? 'builder-form-with-date'
            : 'builder-form-without-date'
        }`}
      >
        <div className="builder-field builder-field-wide">
          <label>Que tipo de passeio procura?</label>

          <div className="builder-options">
            {interesses.map((item) => (
              <button
                type="button"
                key={item.nome}
                onClick={() => selecionarInteresse(item.nome)}
                className={`builder-option ${
                  interesse === item.nome
                    ? 'builder-option-active'
                    : ''
                }`}
              >
                {item.nome}
              </button>
            ))}
          </div>
        </div>

        <div className="builder-field">
          <label htmlFor="quantidade">
            <Users size={15} />
            Quantidade
          </label>

          <input
            id="quantidade"
            type="number"
            min={1}
            max={30}
            value={quantidade}
            onChange={(event) => setQuantidade(event.target.value)}
          />
        </div>

        {ehNatureza && (
          <div className="builder-field">
            <label htmlFor="data">
              <CalendarDays size={15} />
              Data pretendida
            </label>

            {/*
              Quando o painel administrativo for desenvolvido,
              este campo receberá somente as datas liberadas pelo admin.
            */}
            <input
              id="data"
              type="date"
              min={dataMinima}
              value={data}
              onChange={(event) => setData(event.target.value)}
              required
            />
          </div>
        )}
      </div>

      <div className="builder-actions">
        <a
          href={podeEnviar ? link : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!podeEnviar}
          onClick={(event) => {
            if (!podeEnviar) {
              event.preventDefault()
            }
          }}
          className={`builder-submit ${
            podeEnviar
              ? 'builder-submit-active'
              : 'builder-submit-disabled'
          }`}
        >
          <MessageCircle size={18} />
          Receber recomendação pelo WhatsApp
        </a>

        {!podeEnviar && (
          <p>
            {!escolha
              ? 'Selecione um tipo de passeio para liberar o WhatsApp.'
              : 'Selecione uma data para receber a recomendação de Natureza.'}
          </p>
        )}
      </div>
    </section>
  )
}