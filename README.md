# GCR Turismo — Portal V1

Portal de turismo de Governador Celso Ramos, construído em React + Vite +
Tailwind CSS, seguindo a arquitetura definida no briefing (components /
pages / data / assets) e já preparado para o painel administrativo da V2.

## Como rodar

Pré-requisitos: Node.js 18+ instalado.

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Antes de publicar

1. **WhatsApp**: abra `src/data/site.js` e troque `whatsappNumero` pelo
   número real, no formato `55DDDNÚMERO` (sem espaços, sem `+`).
2. **Cadastur**: troque o valor de `cadastur` em `src/data/site.js`.
3. **Instagram / e-mail**: ajuste em `src/data/site.js`.
4. **Fotos**: adicione as imagens reais em `src/assets/` (veja o README
   daquela pasta) e troque os placeholders em `Hero.jsx` e `Gallery.jsx`.

## Estrutura do projeto

```
src/
  components/   -> peças de UI reutilizáveis (Header, Hero, CTA, cards...)
  pages/        -> uma página por rota (Home, Passeios, Sobre, Galeria, Contato)
  pages/passeio/PasseioDetalhe.jsx -> template único para os 8 passeios
  data/         -> "banco de dados" do site em arquivos JS
  utils/        -> geração de links e mensagens do WhatsApp
```

## Passeios x Roteiros (pensando na V2)

O ponto central da arquitetura é a separação entre **passeios** (categorias
de experiência: Lancha, Escuna, Trilhas...) e **roteiros** (itinerários
específicos dentro de cada passeio: Roteiro Ilha de Anhatomirim, Roteiro
Ganchos...).

- `src/data/passeios.js` — cada passeio tem um `slug` único.
- `src/data/roteiros.js` — cada roteiro tem um `passeioSlug`, funcionando
  como chave estrangeira para o passeio ao qual pertence.

Essa separação já imita o formato de duas tabelas relacionadas em um banco
de dados. Quando o painel administrativo (V2) for construído, essas duas
listas podem virar duas tabelas reais (ex.: Postgres/Supabase, ou um CMS
headless), e a troca é direta:

- hoje: `import { passeios } from '../data/passeios'`
- depois: `const passeios = await api.get('/passeios')`

O restante do site (componentes, páginas, template de passeio) não precisa
mudar — ele já consome os dados por meio de funções (`getPasseioBySlug`,
`getRoteirosByPasseio`), que são o ponto exato onde a chamada de API vai
entrar no lugar do array local.

## Automações da V1

Todos os pontos de contato do site geram uma mensagem de WhatsApp
diferente e contextual, usando `src/utils/whatsapp.js`:

- Botão geral do menu / botão flutuante → mensagem genérica.
- Botão de cada passeio → menciona o nome do passeio.
- Botão de cada roteiro → menciona o passeio **e** o roteiro específico.
- "Monte sua experiência" (Home) → envia interesse, quantidade de pessoas
  e data escolhidos no formulário.
- Formulário de Contato → envia nome e mensagem digitados pelo usuário.

## Preparado para V2, V3 e V4

- **V2 — Painel admin**: os arquivos em `src/data/` já têm o formato de
  tabelas (`passeios`, `roteiros`, `faq`, `depoimentos`) prontas para
  virar CRUD.
- **V3 — Reservas**: o componente `ExperienceBuilder.jsx` já captura
  quantidade de pessoas e data; é o ponto natural para evoluir para um
  calendário com disponibilidade real.
- **V4 — IA**: os pontos de contato via WhatsApp (`utils/whatsapp.js`)
  são os locais onde uma automação de atendimento/recomendação por IA
  entraria no lugar do link direto.
