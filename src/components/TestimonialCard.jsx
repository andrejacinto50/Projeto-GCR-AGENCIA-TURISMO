// src/components/TestimonialCard.jsx

export default function TestimonialCard({ testimonial }) {
  const nome = testimonial?.nome || 'Cliente GCR'
  const origem = testimonial?.origem || 'Avaliação'
  const fonte = testimonial?.fonte || 'Google'
  const texto = testimonial?.texto || ''
  const nota = Number(testimonial?.nota || 5)

  return (
    <article className="testimonial-google-card">
      <div className="testimonial-google-top">
        <div className="testimonial-avatar">
          {nome.charAt(0)}
        </div>

        <div>
          <h3>{nome}</h3>
          <p>{origem}</p>
        </div>

        <span>{fonte}</span>
      </div>

      <div className="testimonial-stars">
        {'★'.repeat(nota)}
      </div>

      <p className="testimonial-text">
        “{texto}”
      </p>
    </article>
  )
}