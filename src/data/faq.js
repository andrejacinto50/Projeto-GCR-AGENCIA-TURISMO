export const faqGeral = [
  {
    pergunta: 'Como funciona a reserva?',
    resposta:
      'Você escolhe o passeio e o roteiro, entra em contato pelo WhatsApp e confirmamos data, horário e valores diretamente com você.',
  },
  {
    pergunta: 'Preciso pagar algo adiantado?',
    resposta:
      'Depende do passeio e da época. Todos os detalhes de pagamento são combinados no atendimento pelo WhatsApp.',
  },
  {
    pergunta: 'E se o tempo não colaborar?',
    resposta:
      'A segurança vem sempre em primeiro lugar. Em caso de condições desfavoráveis, remarcamos sem custo adicional.',
  },
  {
    pergunta: 'Vocês são regularizados?',
    resposta:
      'Sim. Somos cadastrados no Cadastur e seguimos os protocolos de segurança exigidos para cada tipo de passeio.',
  },
]

// FAQ específico por passeio (chave = slug do passeio).
// Em V2, isso vira uma tabela "faq_passeios" relacionada por passeio_id.
export const faqPorPasseio = {
  lancha: [
    {
      pergunta: 'Quantas pessoas cabem na lancha?',
      resposta: 'Nossas lanchas comportam grupos de até 8 pessoas, dependendo do modelo disponível na data.',
    },
  ],
  parapente: [
    {
      pergunta: 'Existe restrição de peso ou idade?',
      resposta:
        'Sim, há limites de peso e idade mínima por questão de segurança. Confirme os detalhes com o instrutor pelo WhatsApp antes de reservar.',
    },
  ],
  trilhas: [
    {
      pergunta: 'Preciso ter experiência para fazer as trilhas?',
      resposta:
        'Não. Temos trilhas de diferentes níveis, e o guia indica a mais adequada para o seu grupo.',
    },
  ],
}
