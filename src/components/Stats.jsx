export default function Stats({ items }) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="text-center sm:text-left">
          <p className="font-display text-3xl font-semibold text-ocean-deep sm:text-4xl">
            <span className={item.className || ''}>
              {item.value}
            </span>
          </p>

          <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/60">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  )
}