import { useState } from 'react'
import { Link } from 'react-router-dom'

const iconPaths = {
  boat: 'M3 17l1.5-5h15L21 17M5 12l1-6h12l1 6M12 3v3M9 6h6',
  ship: 'M4 15l1 4h14l1-4M6 15V8h12v7M9 8V5h6v3M4 19h16',
  trail: 'M4 20l5-9 3 4 3-6 5 11M4 20h16',
  buggy: 'M5 17a2 2 0 104 0 2 2 0 00-4 0zM15 17a2 2 0 104 0 2 2 0 00-4 0zM7 17H5l1-6h11l2 6h-2M8 11l2-4h4l2 4',
  paraglider: 'M3 9c3-4 15-4 18 0M6 9l6 3 6-3M12 12v8M9 20h6',
  fish: 'M3 12c4-5 12-5 16 0-4 5-12 5-16 0zM16 12l4-3v6l-4-3zM7 11l-1-1M7 13l-1 1',
  map: 'M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14',
  wave: 'M3 15c2-3 4-3 6 0s4 3 6 0 4-3 6 0M3 10c2-3 4-3 6 0s4 3 6 0 4-3 6 0',
}

function Icon({ name }) {
  const d = iconPaths[name] || iconPaths.boat

  return (
    <svg
      viewBox="0 0 24 24"
      className="experience-card-svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.5s-7.5-4.6-10-9.2C0.3 7.8 2 4.5 5.4 4c2-.3 3.9.7 5 2.3.9-1.6 2.9-2.6 4.9-2.3 3.4.5 5.1 3.8 3.4 7.3-2.5 4.6-10 9.2-10 9.2z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.6L12 17.4l-5.8 3.2 1.1-6.6-4.8-4.6 6.6-.9L12 2.5z" />
    </svg>
  )
}

export default function ExperienceCard({ passeio, size = 'default' }) {
  const isLarge = size === 'large'
  const [favorito, setFavorito] = useState(false)

  const handleFavorito = (event) => {
    // Impede que o clique no coração dispare a navegação do Link.
    event.preventDefault()
    event.stopPropagation()
    setFavorito((atual) => !atual)
  }

  const nota = passeio.avaliacao ?? null
  const numAvaliacoes = passeio.numAvaliacoes ?? null

  return (
    <Link
      to={`/passeios/${passeio.slug}`}
      className={`experience-card ${isLarge ? 'experience-card-large' : ''}`}
    >
      <div className="experience-card-image">
        <img
          src={passeio.imagem}
          alt={passeio.nome}
        />

        <div className="experience-card-image-overlay" />

        <span className="experience-card-tag">
          {passeio.categoriaLabel}
        </span>

        <button
          type="button"
          onClick={handleFavorito}
          className={`experience-card-favorite ${favorito ? 'experience-card-favorite-active' : ''}`}
          aria-label={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          aria-pressed={favorito}
        >
          <HeartIcon />
        </button>
      </div>

      <div className="experience-card-body">

        <div className="experience-card-top">
          <div className="experience-card-icon">
            <Icon name={passeio.icon} />
          </div>

          <span className="experience-card-duration">
            {passeio.duracao}
          </span>
        </div>

        <div className="experience-card-content">
          <h3>{passeio.nome}</h3>

          {nota && (
            <div className="experience-card-rating">
              <StarIcon />
              <strong>{nota.toFixed(1)}</strong>
              {numAvaliacoes && <span>({numAvaliacoes})</span>}
            </div>
          )}

          <p>{passeio.resumo}</p>
        </div>

        <div className="experience-card-footer">
          <strong>Explorar passeio →</strong>
        </div>

      </div>

      <div className="experience-card-orb" />
      <div className="experience-card-shine" />
    </Link>
  )
}