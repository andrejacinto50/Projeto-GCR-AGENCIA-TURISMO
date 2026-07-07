import { useState } from 'react'

const paletteByCategory = {
  lancha: 'from-ocean-mid to-ocean-light',
  escuna: 'from-ocean-deep to-ocean-mid',
  parapente: 'from-gold to-coral',
  buggy: 'from-coral to-gold',
  natureza: 'from-ocean-light to-sand',
}

export default function Gallery({ items }) {
  const categorias = ['todos', ...new Set(items.map((i) => i.categoria))]
  const [filtro, setFiltro] = useState('todos')
  const [ativo, setAtivo] = useState(null)

  const filtrados =
    filtro === 'todos' ? items : items.filter((i) => i.categoria === filtro)

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categorias.map((cat) => (
          <button
            type="button"
            key={cat}
            onClick={() => setFiltro(cat)}
            className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
              filtro === cat
                ? 'border-gold bg-gold text-ocean-deep'
                : 'border-ocean-deep/20 text-ocean-deep/70 hover:border-gold/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {filtrados.map((item, index) => (
          <button
            type="button"
            key={`${item.legenda}-${index}`}
            onClick={() => setAtivo(item)}
            className={`group relative aspect-square overflow-hidden rounded-xl ${
              !item.imagem
                ? `bg-gradient-to-br ${
                    paletteByCategory[item.categoria] || 'from-ocean-mid to-ocean-light'
                  }`
                : 'bg-ocean-deep'
            } transition-transform hover:scale-[1.03]`}
            aria-label={`Ampliar imagem: ${item.legenda}`}
          >
            {item.imagem && (
              <img
                src={item.imagem}
                alt={item.legenda}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}

            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
              {item.tipo && (
                <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-gold-light">
                  {item.tipo}
                </span>
              )}

              <p className="text-left font-display text-sm font-semibold text-white drop-shadow-lg">
                {item.legenda}
              </p>
            </div>
          </button>
        ))}
      </div>

      {ativo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ocean-deep/90 p-6"
          onClick={() => setAtivo(null)}
        >
          <div
            className={`relative flex w-full max-w-4xl overflow-hidden rounded-2xl ${
              !ativo.imagem
                ? `aspect-video items-end bg-gradient-to-br p-8 ${
                    paletteByCategory[ativo.categoria] || 'from-ocean-mid to-ocean-light'
                  }`
                : 'bg-ocean-deep'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {ativo.imagem ? (
              <img
                src={ativo.imagem}
                alt={ativo.legenda}
                className="max-h-[80vh] w-full object-contain"
              />
            ) : (
              <span className="font-display text-xl text-foam">
                {ativo.legenda}
              </span>
            )}

            {ativo.imagem && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-deep/80 to-transparent p-6">
                {ativo.tipo && (
                  <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-gold-light">
                    {ativo.tipo}
                  </span>
                )}

                <span className="font-display text-xl text-foam">
                  {ativo.legenda}
                </span>
              </div>
            )}

            <button
              type="button"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-foam/20 text-foam backdrop-blur"
              onClick={() => setAtivo(null)}
              aria-label="Fechar"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}