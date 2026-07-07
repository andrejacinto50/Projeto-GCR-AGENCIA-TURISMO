// Tabela "roteiros" — filha de "passeios" via passeioSlug (foreign key).
//
// Essa separação é o que permite, no painel admin (V2), cadastrar um
// roteiro novo dentro de um passeio já existente sem precisar criar
// um tipo de passeio novo. Ex.: dentro de "lancha", podem nascer
// quantos roteiros a operação quiser, cada um com seu próprio conteúdo.
export const roteiros = [
  {
    id: 101,
    slug: 'ilha-de-anhatomirim',
    passeioSlug: 'lancha',
    nome: 'Roteiro Ilha de Anhatomirim',
    descricao:
      'Passagem pela Fortaleza de Santa Cruz de Anhatomirim, com parada para banho em enseada protegida.',
    destaques: ['Fortaleza histórica', 'Água calma para banho', 'Vista para a Baía Norte'],
  },
  {
    id: 102,
    slug: 'praia-do-tingua',
    passeioSlug: 'lancha',
    nome: 'Roteiro Praia do Tinguá',
    descricao: 'Parada em uma das praias mais preservadas da região, de acesso quase só marítimo.',
    destaques: ['Praia pouco visitada', 'Areia branca', 'Ótima para famílias'],
  },
  {
    id: 103,
    slug: 'ganchos',
    passeioSlug: 'lancha',
    nome: 'Roteiro Ganchos',
    descricao: 'Passeio costeiro passando pela vila de pescadores de Ganchos de Fora e Ganchos de Dentro.',
    destaques: ['Cultura açoriana', 'Vila de pescadores', 'Parada para fotos'],
  },
  {
    id: 104,
    slug: 'privativo',
    passeioSlug: 'lancha',
    nome: 'Roteiro Privativo',
    descricao: 'Roteiro sob medida, com paradas e duração definidas junto ao guia antes da saída.',
    destaques: ['Totalmente personalizável', 'Ideal para grupos fechados', 'Sob consulta'],
  },
  {
    id: 105,
    slug: 'fortaleza-e-ilhas',
    passeioSlug: 'escuna',
    nome: 'Roteiro Fortaleza e Ilhas',
    descricao: 'O clássico passeio de escuna, passando pela Fortaleza e pelas principais ilhas da baía.',
    destaques: ['Fortaleza de Anhatomirim', 'Ilha do Francês', 'Música ambiente a bordo'],
  },
  {
    id: 106,
    slug: 'por-do-sol',
    passeioSlug: 'escuna',
    nome: 'Roteiro Pôr do Sol',
    descricao: 'Saída no fim de tarde para acompanhar o pôr do sol da Baía Norte a bordo da escuna.',
    destaques: ['Melhor luz do dia', 'Clima descontraído', 'Ótimo para casais'],
  },
  {
    id: 107,
    slug: 'trilha-da-costeira',
    passeioSlug: 'trilhas',
    nome: 'Trilha da Costeira',
    descricao: 'Caminho junto à costa, alternando mata fechada e trechos com vista para o mar.',
    destaques: ['Nível fácil a moderado', 'Vista para o mar', '~5 km'],
  },
  {
    id: 108,
    slug: 'trilha-da-praia-grande',
    passeioSlug: 'trilhas',
    nome: 'Trilha da Praia Das Conchas',
    descricao: 'Trilha que termina em uma das praias mais preservadas do município.',
    destaques: ['Chegada em praia isolada', 'Boa para banho', 'Nível moderado'],
  },
  {
    id: 109,
    slug: 'trilha-do-mirante',
    passeioSlug: 'trilhas',
    nome: 'Trilha da Praia de Fora',
    descricao: 'Subida mais curta com recompensa garantida: vista panorâmica de toda a baía.',
    destaques: ['Curta duração', 'Melhor mirante da região', 'Ótima para o fim da tarde'],
  },
  {
    id: 110,
    slug: 'dunas-e-praias-desertas',
    passeioSlug: 'buggy',
    nome: 'Roteiro Dunas e Praias Desertas',
    descricao: 'Passagem por dunas e praias de acesso restrito, só alcançáveis de buggy.',
    destaques: ['Praias desertas', 'Estradas de chão', 'Paradas fotográficas'],
  },
  {
    id: 111,
    slug: 'voo-duplo-classico',
    passeioSlug: 'parapente',
    nome: 'Voo Duplo Clássico',
    descricao: 'Decolagem, voo panorâmico e pouso acompanhados por instrutor certificado.',
    destaques: ['Sem experiência necessária', 'Equipamento completo', 'Certificado incluso'],
  },
  {
    id: 112,
    slug: 'pesca-de-fundo',
    passeioSlug: 'pesca',
    nome: 'Pesca de Fundo',
    descricao: 'Saída para pontos de pesca de fundo, indicada conforme a maré do dia.',
    destaques: ['Equipamento incluso', 'Indicado para iniciantes', 'Guia local'],
  },
  {
    id: 113,
    slug: 'giro-historico',
    passeioSlug: 'city-tour',
    nome: 'Giro Histórico',
    descricao: 'Visita aos principais pontos históricos e igrejas do centro de GCR.',
    destaques: ['Pontos históricos', 'Boa opção para grupos maiores', 'Ritmo tranquilo'],
  },
  {
    id: 114,
    slug: 'diversao-em-familia',
    passeioSlug: 'banana-boat',
    nome: 'Diversão em Família',
    descricao: 'Sessões rápidas em área protegida, ideais para revezar entre adultos e crianças.',
    destaques: ['Área protegida', 'Sessões rápidas', 'Ideal para crianças'],
  },
]

export const getRoteirosByPasseio = (passeioSlug) =>
  roteiros.filter((r) => r.passeioSlug === passeioSlug)

export const getRoteiroBySlug = (slug) => roteiros.find((r) => r.slug === slug)
