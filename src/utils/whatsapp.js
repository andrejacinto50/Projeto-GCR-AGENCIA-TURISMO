import { site } from '../data/site'

/**
 * Monta um link wa.me com mensagem pré-preenchida.
 * Cada ponto de contato do site (botão geral, botão por passeio,
 * formulário de contato, quiz "monte sua experiência") usa esta
 * função para gerar uma mensagem diferente e contextual — é a
 * automação central da V1 descrita no briefing.
 */
export function buildWhatsAppLink(mensagem) {
  const texto = encodeURIComponent(mensagem)
  return `https://wa.me/${site.whatsappNumero}?text=${texto}`
}

export function mensagemGenerica() {
  return `Olá! Vim pelo site da ${site.nome} e gostaria de saber mais sobre os passeios em ${site.cidade}.`
}

export function mensagemPasseio(passeioNome) {
  return `Olá! Tenho interesse no passeio de ${passeioNome} em ${site.cidade}. Podem me passar mais informações?`
}

export function mensagemRoteiro(passeioNome, roteiroNome) {
  return `Olá! Tenho interesse no ${roteiroNome} (dentro do passeio de ${passeioNome}). Podem me passar mais informações?`
}

export function mensagemContato({ nome, mensagem }) {
  return `Olá, meu nome é ${nome}. ${mensagem}`
}

export function mensagemRecomendacao({ interesse, quantidade, data }) {
  return `Olá! Usei o "Monte sua experiência" no site e busco um passeio do tipo "${interesse}", para ${quantidade} pessoa(s), na data ${data || 'a combinar'}. Podem me recomendar uma opção?`
}
