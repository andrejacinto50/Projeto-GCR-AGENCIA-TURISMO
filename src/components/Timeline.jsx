export default function Timeline({ steps }) {
  return (
    <div className="route-line pl-12">
      <div className="flex flex-col gap-10">
        {steps.map((step, index) => (
          <div key={step.title} className="relative">
            <span className="route-dot absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gold font-mono text-sm font-semibold text-ocean-deep">
              {index + 1}
            </span>
            <h3 className="font-display text-lg font-semibold text-ocean-deep">{step.title}</h3>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-ink/70">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
