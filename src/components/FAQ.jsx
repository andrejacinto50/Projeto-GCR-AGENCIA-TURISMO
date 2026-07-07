import { useState } from 'react'

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-ocean-deep/10 rounded-2xl border border-ocean-deep/10 bg-foam">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.pergunta}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="font-body text-base font-semibold text-ocean-deep">
                {item.pergunta}
              </span>
              <span
                className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-ocean-deep/20 font-mono text-sm text-ocean-deep transition-transform ${
                  isOpen ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid overflow-hidden px-6 transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
              style={{ display: 'grid' }}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="text-sm leading-relaxed text-ink/70">{item.resposta}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
