// Configuração central do site.
// Em V2, este objeto pode virar uma tabela "configuracoes" no painel admin.
export const site = {
  nome: 'GCR Guia Turistico',
  slogan: 'Descubra Governador Celso Ramos com quem realmente conhece cada lugar.',
  whatsappNumero: '5548996630582', // TODO: substituir pelo número real (formato E.164 sem "+")
  instagram: 'https://www.instagram.com/gcrguiaturistico/',
  email: 'contato@gcrturismo.com.br',
  cidade: 'Governador Celso Ramos, SC',
  cadastur: '5548996630582', // TODO: substituir pelo número real do Cadastur
  anosDeAtuacao: 15,
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Passeios', to: '/passeios' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Galeria', to: '/galeria' },
  { label: 'Contato', to: '/contato' },
]

export const credibilidade = [
  { label: `+${site.anosDeAtuacao} anos de estrada` },
  { label: 'Cadastur regularizado' },
  { label: 'Empresa criada por nativos' },
  { label: 'Guias locais especializados' },
]
