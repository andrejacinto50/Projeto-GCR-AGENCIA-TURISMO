export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
  center = false,
}) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <span
          className={`font-mono text-xs uppercase tracking-[0.25em] ${
            light ? 'text-gold-light' : 'text-ocean-mid'
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`mt-4 font-display text-4xl font-semibold leading-tight ${
          light ? 'text-foam' : 'text-ocean-deep'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-3xl text-base leading-relaxed ${
            light ? 'text-foam/75' : 'text-ink/70'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}