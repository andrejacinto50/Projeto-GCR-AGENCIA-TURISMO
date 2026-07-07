import fotobaia from '../assets/fotobaia.jpeg'
import escuna from '../assets/escuna.jpeg'
import trilha1 from '../assets/trilha1.jpeg'
import bug2 from '../assets/bug2.jpeg'
import Parapente2 from '../assets/Parapente2.jpeg'
import Parada from '../assets/Parada.jpeg'
import historico from '../assets/historico.jpeg'

// Tabela "passeios".
// Cada passeio é uma categoria de experiência. Os itinerários específicos
// de cada passeio vivem em roteiros.js e se conectam por "passeioSlug",
// já preparando o formato para um CRUD relacional no painel admin (V2).
//
// destaque: true -> aparece nos "4 cards grandes" da Home.
export const passeios = [
  {
    id: 1,
    slug: 'lancha',
    nome: 'Passeio de Lancha',
    categoria: 'mar',
    categoriaLabel: 'Mar',
    resumo: 'Ilhas, mar cristalino e paradas para banho com quem conhece cada canto da baía.',
    descricao:
      'Navegue pelas ilhas e enseadas de Governador Celso Ramos em uma lancha equipada, com paradas para banho em águas calmas e roteiros ajustados à maré e ao vento do dia.',
    duracao: '3 a 4 horas',
    idealPara: 'Famílias, casais e grupos que querem conforto e paradas para banho.',
    incluso: ['Equipamentos de segurança', 'Guia local', 'Paradas para banho', 'Água a bordo'],
    destaque: true,
    icon: 'boat',
    imagem: fotobaia,
  },
  {
    id: 2,
    slug: 'escuna',
    nome: 'Passeio de Escuna',
    categoria: 'mar',
    categoriaLabel: 'Mar',
    resumo: 'Passeio em grupo, som ambiente e vista panorâmica da fortaleza e das ilhas.',
    descricao:
      'A bordo da escuna, o roteiro passa pelos principais cartões-postais marítimos de GCR, com espaço para socializar, música ambiente e vista privilegiada da Fortaleza de Anhatomirim.',
    duracao: '2 a 3 horas',
    idealPara: 'Grupos grandes, aniversários e quem busca um passeio mais social.',
    incluso: ['Guia a bordo', 'Área coberta e descoberta', 'Parada para fotos na Fortaleza'],
    destaque: true,
    icon: 'ship',
    imagem:  escuna,
  },
  {
    id: 3,
    slug: 'trilhas',
    nome: 'Trilhas',
    categoria: 'natureza',
    categoriaLabel: 'Natureza',
    resumo: 'Mata atlântica preservada, mirantes e trilhas guiadas para todos os níveis.',
    descricao:
      'Trilhas por mata atlântica nativa com guias que conhecem a fauna, a flora e a história de cada caminho, terminando em mirantes com vista para o mar.',
    duracao: '1h30 a 3 horas',
    idealPara: 'Quem gosta de caminhada, natureza e fotografia.',
    incluso: ['Guia especializado', 'Kit de segurança', 'Paradas em mirantes'],
    destaque: true,
    icon: 'trail',
    imagem: trilha1,
  },
  {
    id: 4,
    slug: 'buggy',
    nome: 'Passeio de Buggy',
    categoria: 'aventura',
    categoriaLabel: 'Aventura',
    resumo: 'Dunas, praias desertas e estradas de chão em ritmo de aventura.',
    descricao:
      'Roteiro off-road pelas praias e estradas de chão de GCR, passando por mirantes e pontos que só quem conhece a região sabe encontrar.',
    duracao: '2 a 3 horas',
    idealPara: 'Grupos que curtem adrenalina e paisagens fora do roteiro comum.',
    incluso: ['Buggy com condutor', 'Equipamento de segurança', 'Paradas fotográficas'],
    destaque: false,
    icon: 'buggy',
    imagem: bug2,
  },
  {
    id: 5,
    slug: 'parapente',
    nome: 'Voo de Parapente',
    categoria: 'aventura',
    categoriaLabel: 'Aventura',
    resumo: 'Vista aérea da baía inteira em um voo duplo com instrutor certificado.',
    descricao:
      'Decole com um instrutor certificado e veja Governador Celso Ramos, a Ilha de Anhatomirim e toda a Baía Norte de cima, em um voo duplo de aproximadamente 15 a 20 minutos no ar.',
    duracao: '15 a 20 minutos de voo',
    idealPara: 'Quem busca adrenalina e uma vista inesquecível da região.',
    incluso: ['Instrutor certificado', 'Equipamento completo', 'Vídeo do voo sob consulta'],
    destaque: true,
    icon: 'paraglider',
    imagem:   Parapente2,
  },
  {
    id: 6,
    slug: 'pesca',
    nome: 'Pesca Embarcada',
    categoria: 'pesca',
    categoriaLabel: 'Pesca',
    resumo: 'Pontos de pesca escolhidos pelo guia, conforme a maré e a época do ano.',
    descricao:
      'Saída de barco para pontos de pesca conhecidos pelos moradores locais, com equipamento disponível e orientação sobre técnicas e espécies da região.',
    duracao: '3 a 5 horas',
    idealPara: 'Pescadores iniciantes ou experientes.',
    incluso: ['Equipamento de pesca', 'Guia local', 'Coletes salva-vidas'],
    destaque: false,
    icon: 'fish',
    imagem:  Parada,
  },
  {
    id: 7,
    slug: 'city-tour',
    nome: 'City Tour',
    categoria: 'familia',
    categoriaLabel: 'Família',
    resumo: 'Um giro completo pelos pontos históricos e culturais do município.',
    descricao:
      'Passeio terrestre pelos principais pontos históricos, culturais e mirantes de Governador Celso Ramos, com paradas para fotos e explicações sobre a origem da cidade.',
    duracao: '2 a 3 horas',
    idealPara: 'Famílias, grupos de terceira idade e quem tem pouco tempo disponível.',
    incluso: ['Transporte', 'Guia local', 'Paradas em pontos históricos'],
    destaque: false,
    icon: 'map',
    imagem: historico,
  },
  {
    id: 8,
    slug: 'banana-boat',
    nome: 'Banana Boat',
    categoria: 'familia',
    categoriaLabel: 'Família',
    resumo: 'Diversão em família na boia puxada por lancha, em área protegida da baía.',
    descricao:
      'Descida rápida e cheia de risadas em uma boia puxada por lancha, em uma área calma e protegida da baía, ideal para crianças e grupos de amigos.',
    duracao: '15 a 30 minutos',
    idealPara: 'Crianças, adolescentes e grupos de amigos.',
    incluso: ['Coletes salva-vidas', 'Equipamento revisado', 'Condutor experiente'],
    destaque: false,
    icon: 'wave',
    imagem: fotobaia,
  },
]

export const getPasseioBySlug = (slug) => passeios.find((p) => p.slug === slug)

export const getPasseiosDestaque = () => passeios.filter((p) => p.destaque)