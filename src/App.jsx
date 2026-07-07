import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { WhatsAppFloating } from './components/WhatsAppButton'
import Home from './pages/Home'
import Passeios from './pages/Passeios'
import Sobre from './pages/Sobre'
import Galeria from './pages/Galeria'
import Contato from './pages/Contato'
import PasseioDetalhe from './pages/passeio/PasseioDetalhe'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/passeios" element={<Passeios />} />
          <Route path="/passeios/:slug" element={<PasseioDetalhe />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  )
}
